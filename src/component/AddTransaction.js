import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../css/AddTransaction.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);
  const id = Math.random(Math.floor * 1000000);
  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id,
      text,
      amount: +amount,
    });

    setText("");
    setAmount("");
  };

  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction</label> <br></br>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <p>(negative-expense, positive-income)</p>

          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount...." required />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
