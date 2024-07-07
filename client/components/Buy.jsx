import React from "react";

const Buy = ({ state }) => {
  const buyChai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    alert("Transaction is successful");
    window.location.reload();
  };
  return <></>;
};

export default Buy;
