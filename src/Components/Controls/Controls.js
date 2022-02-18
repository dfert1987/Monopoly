import React, { useState } from "react";
import { Roll } from "./Roll";
import { RollP2 } from "./RollP2";
import "../../Components/Styles/Controls.css";

export const Controls = ({
  counterP1,
  setCounterP1,
  counterP2,
  setCounterP2,
  turn,
  setTurn,
}) => {
  return (
    <div className="controls-container">
      <div className="p1">
        <h3 className="player">Player 1</h3>
        <Roll
          counterP1={counterP1}
          setCounterP1={setCounterP1}
          turn={turn}
          setTurn={setTurn}
        />
      </div>
      <div className="p2">
        <h3 className="player">Player 2</h3>
        <RollP2
          counterP2={counterP2}
          setCounterP2={setCounterP2}
          turn={turn}
          setTurn={setTurn}
        />
      </div>
    </div>
  );
};
