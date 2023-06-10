// Fetch the Storage contract data from the Storage.json file
const FishToken = artifacts.require("FishToken");
const MasterChef = artifacts.require("MasterChef");

// JavaScript export
module.exports = function (deployer) {
  // Deployer is the Truffle wrapper for deploying
  // contracts to the network

  // Deploy the contract to the network
  deployer
    .deploy(FishToken)
    .then(() => FishToken.deployed())
    .then(() => {
      deployer.deploy(
        MasterChef,
        FishToken.address,
        process.env.DEV_ADDRESS,
        process.env.FEE_ADDRESS,
        process.env.VAULT_ADDRESS
      );
    });
};
