import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../css/Balance.css";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="balance">
      <h4>YOUR BALANCE</h4>
      <h2>Rp {total}</h2>
    </div>
  );
};

export default Balance;
