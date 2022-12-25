import { ethers } from "ethers";
import { contract_address, contract_abi } from "./constants";

let accounts = [];
async function requestAccount() {
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
}


export const getAllTransaction = async () => {
    if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contract_address, contract_abi, provider);
        const data = await contract.getAllTransaction();
        console.log(data);
    } else {
        alert("Install Metamask!!");
    }
}

export const addToBlockchain = async (data) => {
    console.log(data);
    if (typeof window.ethereum !== "undefined") {

        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // console.log(signer);

        const contract = new ethers.Contract(contract_address, contract_abi, signer);

        const parsedAmount = ethers.utils.parseEther(data.amount);

        const transactionParameters = {
            from: accounts[0],
            to: data.receiver,
            value: parsedAmount._hex,
            gas: '0x2710',
        };

        // txHash is a hex string
        // As with any RPC call, it may throw an error
        await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });

        const transaction = await contract.addToBlockchain(
            data.receiver,
            data.amount,
            data.message,
            data.timestamp,
            data.keyword
        );

        // await transaction.wait();
        console.log(transaction);
    } else {
        console.log("install metamask u fellow")
    }
}



