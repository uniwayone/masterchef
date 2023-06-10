require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
// const maticInfuraKey = process.env.MATIC_INFURA_KEY;
const ownerKey = process.env.OWNER_KEY;
const infuraKey = process.env.INFURA_KEY;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    develop: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          ownerKey,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      networkCheckTimeout: 1000000000,
      timeoutBlocks: 200,
      network_id: 4,
      skipDryRun: true,
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(ownerKey, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      networkCheckTimeout: 1000000000,
      timeoutBlocks: 200,
      // skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all
  plugins: ["truffle-plugin-verify"],
  db: {
    enabled: false,
  },
};
