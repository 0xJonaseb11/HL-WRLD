const { ethers } from "ethers";
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

asycn function main() {
    const HelloWorldFactory = await ethers.getContractFactory("HelloWorld");
    HelloWorldFactory = await HelloWorldFactory.attach(CONTRACT_ADDRESS);

    // Reading the current message stored
    const message  = await HelloWorldFactory.message();
    console.log("The message is ", message);

    // updating current state
    const tx = await HelloWorldFactory.message();
    await tx.wait();
    
    const newMessage = await HelloWorldFactory.message();
    console.log("The new message is", newMessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });