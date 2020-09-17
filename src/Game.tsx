import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIstNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIstNext(!xIsNext);
  };

  return (
    <div className={"RootContainer"}>
      <div className={"MatrixContainer"}>
        <h1>Tic tac Toe</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className={winner ? "Winner" : "Next"}>
          {winner ? "Winner:" + winner : "Next player:" + xO}
        </div>
      </div>
    </div>
  );
};

export default Game;
