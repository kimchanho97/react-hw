import React from "react";
import "./Alert.css";

const Alert = ({ type, text }) => {
  return (
    <div className=" mb-5">
      {type === "danger" ? (
        <div className={`alert alert-${type} text-white bg-red-500`}>
          {text}
        </div>
      ) : (
        <div className={`alert alert-${type} text-white bg-green-500`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Alert;
