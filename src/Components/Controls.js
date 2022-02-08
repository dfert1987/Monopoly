import React, { useState } from "react";
import dice1 from "../Assets/Dice/dice1.png";
import dice2 from "../Assets/Dice/dice2.png";
import dice3 from "../Assets/Dice/dice3.png";
import dice4 from "../Assets/Dice/dice4.png";
import dice5 from "../Assets/Dice/dice5.png";
import dice6 from "../Assets/Dice/dice6.png";
import "../Components/Styles/Controls.css";

export const Controls = ({
  counterP1,
  setCounterP1,
  counterP2,
  setCounterP2,
  turn,
  setTurn,
}) => {
  const [die1, setDie1] = useState();
  const [die2, setDie2] = useState();
  const [die3, setDie3] = useState();
  const [die4, setDie4] = useState();
  const [die1Img, setDie1Img] = useState();
  const [die2Img, setDie2Img] = useState();
  const [p2Die1Img, setP2Die1Img] = useState(dice1);
  const [p2Die2Img, setP2Die2Img] = useState(dice1);

  const disableRight = () => {
    if (turn === 0 || turn % 2 === 0) {
      return true;
    }
    return false;
  };

  const disableLeft = () => {
    if (turn % 2 !== 0) {
      return true;
    }
    return false;
  };

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
    } else {
      setCounterP1(counterP1 + first + second);
    }
  };

  const rollDice2 = (e) => {
    e.preventDefault();
    setTurn(turn + 1);
    let min = 1;
    let max = 6;
    let first = Math.floor(Math.random() * (max - min + 1)) + min;
    let second = Math.floor(Math.random() * (max - min + 1)) + min;

    if (first === second) {
      setTurn(turn + 2);
    } else setTurn(turn + 1);

    setDie3(first);
    setDie4(second);
    dieImages1(first, "two");
    dieImages2(second, "two");

    if (counterP2 + first + second > 40) {
      let highTotal = counterP2 + first + second;
      setCounterP2(highTotal - 40);
    } else {
      setCounterP2(counterP2 + first + second);
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
    if (pair === "two") {
      if (first === 1) {
        setP2Die1Img(dice1);
      }
      if (first === 2) {
        setP2Die1Img(dice2);
      }
      if (first === 3) {
        setP2Die1Img(dice3);
      }
      if (first === 4) {
        setP2Die1Img(dice4);
      }
      if (first === 5) {
        setP2Die1Img(dice5);
      }
      if (first === 6) {
        setP2Die1Img(dice6);
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
    if (pair === "two") {
      if (second === 1) {
        setP2Die2Img(dice1);
      }
      if (second === 2) {
        setP2Die2Img(dice2);
      }
      if (second === 3) {
        setP2Die2Img(dice3);
      }
      if (second === 4) {
        setP2Die2Img(dice4);
      }
      if (second === 5) {
        setP2Die2Img(dice5);
      }
      if (second === 6) {
        setP2Die2Img(dice6);
      }
    }
  };

  return (
    <div className="controls-container">
      <div className="p1-dice-button">
        <h3 className="player">Player 1</h3>
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
            disabled={disableLeft()}
          >
            ROLL DICE
          </button>
        </div>
      </div>
      <div className="p2-dice-button">
        <h3 className="player">Player 2</h3>
        <div className="roll-section">
          {die3 && die4 ? (
            <>
              {die1Img ? (
                <img className="die" src={p2Die1Img} alt="die" />
              ) : (
                <img className="die" src={dice1} alt="die" />
              )}
              {die2Img ? (
                <img className="die" src={p2Die2Img} alt="die" />
              ) : (
                <img className="die" src={dice1} alt="die" />
              )}
            </>
          ) : null}
        </div>
        <div className="button-container">
          <button
            onClick={rollDice2}
            className="roll-button"
            disabled={disableRight()}
          >
            ROLL DICE
          </button>
        </div>
      </div>
    </div>
  );
};
