import React from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = ({ handleDelete, expenses, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {/* Expense Item */}
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button
          className="btn w-30 flex items-center gap-2 p-3 py-2 bg-green-600 rounded-md"
          onClick={clearItems}
        >
          <p className=" text-sm text-white">목록 지우기</p>
          <MdDelete className="btn-icon text-white" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
