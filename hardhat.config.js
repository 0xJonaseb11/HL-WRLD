require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/qZFTwEtghVmUO0U2AEEPldBA7w_9d6D0",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
