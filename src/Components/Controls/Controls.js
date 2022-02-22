import React, { useState, useEffect } from "react";
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
  p1Money,
  setP1Money,
  p2Money,
  setP2Money,
  properties,
  setProperties,
  setPropertyModal1,
  setPropertyModal2,
  setOnProp,
}) => {
  const [disableRight, setDisableRight] = useState(true);
  const [disableLeft, setDisableLeft] = useState(false);

  useEffect(() => {
    if (turn === 0 || turn % 2 === 0) {
      setDisableRight(true);
      setDisableLeft(false);
    } else {
      setDisableRight(false);
      setDisableLeft(true);
    }
  }, [turn]);

  return (
    <div className="controls-container">
      <div className="p1">
        <h3 className="player">Player 1</h3>
        <div className="player-1-stats">
          <Roll
            counterP1={counterP1}
            setCounterP1={setCounterP1}
            turn={turn}
            setTurn={setTurn}
            disableLeft={disableLeft}
            properties={properties}
            setProperties={setProperties}
            setPropertyModal1={setPropertyModal1}
            setOnProp={setOnProp}
          />
          <div className="money player1">
            <h3 className="money-label">Money</h3>
            <p className="money">{p1Money}</p>
          </div>
          <div className="properties player1">
            <h3 className="props-label">Your Properties</h3>
            <button className="properties-view-button" disabled={disableLeft}>
              VIEW
            </button>
          </div>
        </div>
      </div>
      <div className="p2">
        <h3 className="player">Player 2</h3>
        <div className="player-2-stats">
          <RollP2
            counterP2={counterP2}
            setCounterP2={setCounterP2}
            turn={turn}
            setTurn={setTurn}
            disableRight={disableRight}
            properties={properties}
            setProperties={setProperties}
            setPropertyModal2={setPropertyModal2}
            setOnProp={setOnProp}
          />
          <div className="money player2">
            <h3 className="money-label">Money</h3>
            <p className="money">{p2Money}</p>
          </div>
          <div className="properties player2">
            <h3 className="props-label">Your Properties</h3>
            <button className="properties-view-button" disabled={disableRight}>
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
