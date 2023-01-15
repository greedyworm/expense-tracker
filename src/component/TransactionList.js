import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import "../css/TransactionList.css";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transactionList">
      <h3>History</h3>
      <hr />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
