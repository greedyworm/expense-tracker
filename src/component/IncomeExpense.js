import React, { useContext } from "react";
import "../css/IncomeExpense.css";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0);

  const expense = amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div className="inc-exp-container">
        <div className="inEx income">
          <h4>INCOME</h4>
          <p className="amount plus">Rp {income}</p>
        </div>
        <div className="inEx">
          <h4>EXPENSE</h4>
          <p className="amount minus">Rp {expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
