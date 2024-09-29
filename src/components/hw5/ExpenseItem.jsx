import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => handleEdit(expense.id)}>
          <MdEdit className="text-green-500" />
        </button>
        <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
          <MdDelete className=" text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
