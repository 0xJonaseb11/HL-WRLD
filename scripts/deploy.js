const main = async () => {
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
   
  // await transactions.deployed();

  console.log("HelloWorld deployed to: ", helloWorld.address.target);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exit(1);
  }
}

runMain();

