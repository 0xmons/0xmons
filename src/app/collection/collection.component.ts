import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  monList: any;
  uriList: any;
  loading: boolean;

  ngOnInit(): void {
    if (this.wallet.connected) {
      this.loadData();
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
    });
    this.wallet.errorEvent.subscribe(() => {
      this.resetData();
    });
  }

  resetData() {
    this.monList = [];
    this.loading = true;
  }

  async loadData() {
    let multicallFns = {
      "monIds": {
        target: this.constants.NFT_AGGREGATOR_ADDRESS,
        callData: this.contract.NFT_AGG.methods.getIds(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI() 
      },
      "monURIs": {
        target: this.constants.NFT_AGGREGATOR_ADDRESS,
        callData: this.contract.NFT_AGG.methods.getURIs(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI()
      }
    };

    let results = await this.utils.makeMulticall(multicallFns);
    let monIdList = await this.utils.decode("uint256[]", results["monIds"]);
    this.uriList = await this.utils.decode("string[]", results["monURIs"]);

    for (let i = 0; i < monIdList.length; i++) {
      let id = monIdList[i];
      let responseObj = await this.getMonData(id, i);
      this.monList.push(responseObj);
    }

    this.loading = false;
  }

  async getMonData(id, i) {
    const response = await fetch(this.constants.LOCAL_MON_DATA);
    const fullResponseObj = await response.json();
    let monData = {};
    try {
      const responseObj = fullResponseObj[parseInt(id)];
      monData["id"] = id;
      monData["name"] = responseObj["Name"];
      monData["image"] = this.constants.IMAGE_PATH + responseObj["Image"].replace("OPT", "STATIC");
      monData["epithets"] = responseObj["Epithets"];
    }
    catch(error) {
      const response = await fetch(this.uriList[i]);
      const responseObj = await response.json();
      monData["name"] = responseObj["name"];
      monData["image"] =  responseObj["static-image"];
    }
    return monData;
  }
}
