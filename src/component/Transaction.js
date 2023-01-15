import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "li-minus" : "li-plus"}>
      {transaction.text}{" "}
      <span>
        {sign}Rp {Math.abs(transaction.amount)}
      </span>
      <button className="close-sign" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
