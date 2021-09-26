// module.exports = {
//   networks: {
//     development: {
//       protocol: 'http',
//       host: 'localhost',
//       port: 8545,
//       gas: 5000000,
//       gasPrice: 5e9,
//       networkId: '*',
//     },
//   },
// };


const HDWalletProvider = require("@truffle/hdwallet-provider");
const TEST_MNEMONIC = "";
const projectId = "https://ropsten.infura.io/v3/"

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(TEST_MNEMONIC, projectId)
      },
      gas: 7000000,        // Ropsten has a lower block limit than mainnet
      network_id: 3,       // Ropsten's id
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './build/contracts',
  compilers: {
  solc: {
       version: "^0.6.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
