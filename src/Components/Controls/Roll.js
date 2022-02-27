import React, { useState } from "react";
import dice1 from "../../Assets/Dice/dice1.png";
import dice2 from "../../Assets/Dice/dice2.png";
import dice3 from "../../Assets/Dice/dice3.png";
import dice4 from "../../Assets/Dice/dice4.png";
import dice5 from "../../Assets/Dice/dice5.png";
import dice6 from "../../Assets/Dice/dice6.png";
import "../../Components/Styles/Controls.css";

export const Roll = ({
  counterP1,
  setCounterP1,
  turn,
  setTurn,
  disableLeft,
  properties,
  setPropertyModal1,
  setOnProp,
  onRR,
  setOnRR,
  railRoads,
  setRailRoads,
  setRRModal,
}) => {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [die1Img, setDie1Img] = useState(dice1);
  const [die2Img, setDie2Img] = useState(dice1);

  const rollDice = (e) => {
    e.preventDefault();
    let min = 1;
    let max = 6;
    let first = Math.floor(Math.random() * (max - min + 1)) + min;
    let second = Math.floor(Math.random() * (max - min + 1)) + min;
    if (first === second) {
      setTurn(turn + 2);
    } else setTurn(turn + 1);
    setDie1(first);
    setDie2(second);
    dieImages1(first, "one");
    dieImages2(second, "one");
    if (counterP1 + first + second > 40) {
      let highTotal = counterP1 + first + second;
      setCounterP1(highTotal - 40);
      showPropertyModal(highTotal - 40);
    } else {
      setCounterP1(counterP1 + first + second);
      setTimeout(() => {
        showPropertyModal(counterP1 + first + second, "p1");
      }, 2000);
    }
  };

  const showPropertyModal = (space) => {
    let currentProp = properties.find((property) => property.Number === space);
    let currentRR = railRoads.find((railRoad) => railRoad.Number === space);
    if (
      currentProp &&
      currentProp.ownedP1 === false &&
      currentProp.ownedP2 === false
    ) {
      setPropertyModal1(true);
      setOnProp(currentProp);
    } else if (
      currentRR &&
      currentRR.ownedP1 === false &&
      currentRR.ownedP2 === false
    ) {
      setRRModal(true);
      setOnRR(currentRR);
    }
  };

  const dieImages1 = (first, pair) => {
    if (pair === "one") {
      if (first === 1) {
        setDie1Img(dice1);
      }
      if (first === 2) {
        setDie1Img(dice2);
      }
      if (first === 3) {
        setDie1Img(dice3);
      }
      if (first === 4) {
        setDie1Img(dice4);
      }
      if (first === 5) {
        setDie1Img(dice5);
      }
      if (first === 6) {
        setDie1Img(dice6);
      }
    }
  };

  const dieImages2 = (second, pair) => {
    if (pair === "one") {
      if (second === 1) {
        setDie2Img(dice1);
      }
      if (second === 2) {
        setDie2Img(dice2);
      }
      if (second === 3) {
        setDie2Img(dice3);
      }
      if (second === 4) {
        setDie2Img(dice4);
      }
      if (second === 5) {
        setDie2Img(dice5);
      }
      if (second === 6) {
        setDie2Img(dice6);
      }
    }
  };

  return (
    <div className="p1-dice-button">
      <div className="roll-section">
        {die1 && die2 ? (
          <>
            {die1Img ? <img className="die" src={die1Img} alt="die" /> : null}
            {die2Img ? <img className="die" src={die2Img} alt="die" /> : null}
          </>
        ) : null}
      </div>
      <div className="button-container">
        <button
          onClick={rollDice}
          className="roll-button"
          disabled={disableLeft}
        >
          ROLL DICE
        </button>
      </div>
    </div>
  );
};
