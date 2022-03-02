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
  p2Money,
  properties,
  setPropertyModal1,
  setPropertyModal2,
  setOnProp,
  setOnProp2,
  setProperties,
  viewProperties,
  setViewProperties,
  viewProperties2,
  setViewProperties2,
  onRR,
  onRR2,
  setOnRR,
  setOnRR2,
  railRoads,
  setRailRoads,
  setRRModal,
  setRRModal2,
  onUtil,
  onUtil2,
  setOnUtil,
  setOnUtil2,
  utilities,
  setUtilities,
  setUtilModal,
  setUtilModal2,
  payProp,
  setPayProp,
  setPayTo,
  setPayType,
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
            onRR={onRR}
            setOnRR={setOnRR}
            railRoads={railRoads}
            setRailRoads={setRailRoads}
            setRRModal={setRRModal}
            onUtil={onUtil}
            setOnUtil={setOnUtil}
            utilities={utilities}
            setUtilities={setUtilities}
            setUtilModal={setUtilModal}
            setPayProp={setPayProp}
            setPayType={setPayType}
            setPayTo={setPayTo}
          />
          <div className="money player1">
            <h3 className="money-label">Money</h3>
            <p className="money">¥{p1Money}</p>
          </div>
          <div className="properties player1">
            <h3 className="props-label">Your Properties</h3>
            <button
              className="properties-view-button"
              disabled={disableLeft}
              onClick={() => setViewProperties(true)}
            >
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
            setOnProp2={setOnProp2}
            onRR2={onRR2}
            setOnRR2={setOnRR2}
            railRoads={railRoads}
            setRailRoads={setRailRoads}
            setRRModal2={setRRModal2}
            onUtil2={onUtil2}
            setOnUtil2={setOnUtil2}
            utilities={utilities}
            setUtilities={setUtilities}
            setUtilModal2={setUtilModal2}
            setPayType={setPayType}
            setPayTo={setPayTo}
            setPayProp={setPayProp}
          />
          <div className="money player2">
            <h3 className="money-label">Money</h3>
            <p className="money">¥{p2Money}</p>
          </div>
          <div className="properties player2">
            <h3 className="props-label">Your Properties</h3>
            <button
              className="properties-view-button"
              disabled={disableRight}
              onClick={() => setViewProperties2(true)}
            >
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
