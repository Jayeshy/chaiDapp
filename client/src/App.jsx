import { ethers } from "hardhat";
import React, { useState, useEffect } from "react";
import { abi } from "./contractjson/Chai.json";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xb0fec8686b97E0dCad18995DA6E1d7687e7EaB55";
      const contractABI = abi.abi;

      //Metamask part for transactions on testnet and to get infura api
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.ethereum.on("Accounts Changed", () => {
          window.location.reload();
        });
        setAccount(account);

        const provider = ethers.provider.Web3Provider(ethereum); //read the blockchain
        const signer = provider.getSigner(); //write the blockchain
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);
  return <div>App</div>;
}

export default App;
