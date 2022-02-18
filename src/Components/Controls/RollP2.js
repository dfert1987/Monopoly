import React, { useState } from "react";
import dice1 from "../../Assets/Dice/dice1.png";
import dice2 from "../../Assets/Dice/dice2.png";
import dice3 from "../../Assets/Dice/dice3.png";
import dice4 from "../../Assets/Dice/dice4.png";
import dice5 from "../../Assets/Dice/dice5.png";
import dice6 from "../../Assets/Dice/dice6.png";
import "../../Components/Styles/Controls.css";

export const RollP2 = ({ counterP2, setCounterP2, turn, setTurn }) => {
  const [die3, setDie3] = useState();
  const [die4, setDie4] = useState();
  const [p2Die1Img, setP2Die1Img] = useState();
  const [p2Die2Img, setP2Die2Img] = useState(dice1);

  const dieImages1 = (first, pair) => {
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
  return (
    <>
      <div className="roll-section">
        {die3 && die4 ? (
          <>
            {p2Die1Img ? (
              <img className="die" src={p2Die1Img} alt="die" />
            ) : (
              <img className="die" src={dice1} alt="die" />
            )}
            {p2Die2Img ? (
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
          //   disabled={disableRight()}
        >
          ROLL DICE
        </button>
      </div>
    </>
  );
};
