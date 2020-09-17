import React from "react";
import Square from "./Square";
import "./Game.css";

const Board = ({ squares, onClick }) => {
  //const squares = [1, 2, 3];
  console.log("derd squares", squares);
  return (
    <div className={"Matrix"}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
