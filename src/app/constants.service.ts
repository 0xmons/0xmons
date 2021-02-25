import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  
  PRECISION = 1e18;
  DOOM_SCALING = 1e21;
  XMON_PER_DAY = 3.57142857143;

  // Mainnet address
  CLAIMER_ADDRESS = '0xe354AC0bB78a8013617fe0efA6099769749F027C';
  OLD_0XMONS_ADDRESS = '0xAf488234796CA27DBa8ECF17f803Ea1f4Ab33E15'
  S3_URL = 'https://d3h0sbhg72k3qr.cloudfront.net/';

  LOCAL_MON_DATA = "./assets/monData.json";
  IPFS_GATEWAY = "https://ipfs.io/ipfs/";

  // // Rinkeby addresses (note you have to change chainId in web3Enabled)
  // XMON_ADDRESS = '0x8dc2f7D19217245b117aEBa0f1D050c9e85c7767';
  // MON_MINTER_ADDRESS = '0x9683D905cAa55743ac63c464C34053B0b219Cc8D';
  // MON_SPAWNER_ADDRESS = '0x39D327150ff6F7D59F6BB698895CbFAD2c4816C2';
  // MON_STAKER_ADDRESS = '0xFcd2Eafe7d92d11599EE4C01Ec8AE2017bb4d2ef';
  // MULTICALL_ADDRESS = '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821';
  // NFT_AGGREGATOR_ADDRESS = '0x03Cb9a56c5F7Ce6796562730E3D217B1F4Dd428b';

  // Mainnet addresses
  XMON_ADDRESS = '0x3aaDA3e213aBf8529606924d8D1c55CbDc70Bf74'
  MON_MINTER_ADDRESS = '0x0427743DF720801825a5c82e0582B1E915E0F750';
  MON_STAKER_ADDRESS = '0xD06337A401B468657dE2f9d3E390cE5b21C3c1C0';
  MON_SPAWNER_ADDRESS = '0x4fAD5ddC4E0186B932e27baa7d37D97457DFc868';
  MULTICALL_ADDRESS = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441';
  NFT_AGGREGATOR_ADDRESS = '0xF83eEE39E723526605d784917b6e38ebCF0f0207';
  NFT_SENDER_ADDRESS = '0x006DD6C488E90180D7346DB5a026fd747Af3B218';
  LP_POOL_REWARDS_ADDRESS = '0xd4275E04dbe82526e4a17ac0FB8f509B6080A455'
  XMON_ETH_LP_TOKEN_ADDRESS = '0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9';
  MON_REGISTRY_ADDRESS = '0x2d824D66E1b7Ba0f73b5cAf75886abf812a13E67';

  // Non-0xmons addresses
  WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  WETH_DAI_LP_ADDRESS = '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11';
  DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';
}