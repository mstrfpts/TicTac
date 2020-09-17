import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Game from "./Game";

const App = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
