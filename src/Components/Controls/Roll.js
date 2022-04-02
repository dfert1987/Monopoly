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
  setOnRR,
  railRoads,
  setRRModal,
  setOnUtil,
  utilities,
  setUtilModal,
  setPayProp,
  setPayTo,
  setPayRail,
  setPayRailTo,
  setPayUtil,
  setPayUtilTo,
  setOnFreeParking,
  setOnAgentFee,
  setOnVisa,
  setOnGoJail,
  setP1Jail,
  inJail,
  setInJailModal,
  setOnCard,
  skip2,
  setSkip2,
  setOnGoP1,
  pass,
  setPass,
  p1Money,
  setP1Money,
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
    }
    if (skip2 === true) {
      setTurn(turn + 2);
      setSkip2(false);
    } else setTurn(turn + 1);
    setDie1(first);
    setDie2(second);
    dieImages1(first, "one");
    dieImages2(second, "one");
    if (counterP1 + first + second > 40) {
      let highTotal = counterP1 + first + second;
      setCounterP1(highTotal - 40);
      showPropertyModal(highTotal - 40);
      if (highTotal > 41) {
        let newMoney = p1Money + 200;
        setP1Money(newMoney);
        setPass(true);
      }
    } else {
      setCounterP1(counterP1 + first + second);
      setTimeout(() => {
        showPropertyModal(counterP1 + first + second, "p1");
      }, 1000);
    }
  };

  const jailRoll = (e) => {
    e.preventDefault();
    setInJailModal(true);
  };

  const showPropertyModal = (space) => {
    let currentProp = properties.find((property) => property.Number === space);
    let currentRR = railRoads.find((railRoad) => railRoad.Number === space);
    let currentUtil = utilities.find((util) => util.Number === space);
    if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
      setPropertyModal1(true);
      setOnProp(currentProp);
    } else if (currentRR && !currentRR.ownedP1 && !currentRR.ownedP2) {
      setRRModal(true);
      setOnRR(currentRR);
    } else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
      setUtilModal(true);
      setOnUtil(currentUtil);
    } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
      setOnProp(currentProp);
      setPayProp(true);
      setPayTo(2);
    } else if (currentRR && !currentRR.ownedP1 && currentRR.ownedP2) {
      setOnRR(currentRR);
      setPayRail(true);
      setPayRailTo(2);
    } else if (currentUtil && !currentUtil.ownedP1 && currentUtil.ownedP2) {
      setOnUtil(currentUtil);
      setPayUtil(true);
      setPayUtilTo(2);
    } else if (space === 31) {
      setOnFreeParking(true);
    } else if (space === 39) {
      setOnAgentFee(true);
    } else if (space === 5) {
      setOnVisa(true);
    } else if (space === 21) {
      setOnGoJail(true);
      setCounterP1(41);
      setP1Jail(true);
    } else if (space === 34) {
      setOnCard(true);
    } else if (space === 3) {
      setOnCard(true);
    } else if (space === 18) {
      setOnCard(true);
    } else if (space === 8) {
      setOnCard(true);
    } else if (space === 23) {
      setOnCard(true);
    } else if (space === 37) {
      setOnCard(true);
    } else if (space === 1) {
      setOnGoP1(true);
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
        {!inJail ? (
          <button
            onClick={rollDice}
            className="roll-button"
            disabled={disableLeft}
          >
            ROLL DICE
          </button>
        ) : (
          <button
            onClick={jailRoll}
            className="roll-button"
            disabled={disableLeft}
          >
            RETURN TO CHINA
          </button>
        )}
      </div>
    </div>
  );
};
