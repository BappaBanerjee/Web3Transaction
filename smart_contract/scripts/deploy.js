
async function main() {
    const [deployer] = await ethers.getSigners();

    const Tranzo = await ethers.getContractFactory("Tranzo");
    const contract = await Tranzo.deploy();
    console.log("Token address:", contract.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });