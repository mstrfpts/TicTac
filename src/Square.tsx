import React, { useState } from "react";
import "./Game.css";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  console.log("derd square val", value);
  return (
    <button className={"Button"} onClick={onClick}>
      <span className={value}>{value}</span>
    </button>
  );
};

export default Square;
