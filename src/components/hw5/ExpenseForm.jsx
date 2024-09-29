import React from "react";
import { MdSend } from "react-icons/md";
import "./ExpenseForm.css";

const ExpenseForm = ({
  handleCharge,
  charge,
  edit,
  amount,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group ">
          <label htmlFor="charge" className=" text-amber-500">
            지출 항목
          </label>
          <div className=" border-b border-lime-700">
            <input
              type="text"
              className="form-control "
              id="charge"
              name="charge"
              value={charge}
              placeholder="예) 렌트비"
              onChange={handleCharge}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amount" className=" text-amber-500">
            비용
          </label>
          <div className=" border-b border-lime-700">
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={amount}
              placeholder="예) 100"
              onChange={handleAmount}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn w-20 flex items-center gap-2 p-3 py-2 bg-green-600 rounded-md"
      >
        <div className=" text-white text-sm">{edit ? "수정" : "제출"}</div>
        <MdSend className="btn-icon text-white" />
      </button>
    </form>
  );
};

export default ExpenseForm;
