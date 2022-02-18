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

    // setDie3(first);
    // setDie4(second);
    // dieImages1(first, "two");
    // dieImages2(second, "two");

    if (counterP2 + first + second > 40) {
      let highTotal = counterP2 + first + second;
      setCounterP2(highTotal - 40);
    } else {
      setCounterP2(counterP2 + first + second);
    }
  };

  // const dieImages1 = (first, pair) => {
  //   if (pair === "one") {
  //     if (first === 1) {
  //       setDie1Img(dice1);
  //     }
  //     if (first === 2) {
  //       setDie1Img(dice2);
  //     }
  //     if (first === 3) {
  //       setDie1Img(dice3);
  //     }
  //     if (first === 4) {
  //       setDie1Img(dice4);
  //     }
  //     if (first === 5) {
  //       setDie1Img(dice5);
  //     }
  //     if (first === 6) {
  //       setDie1Img(dice6);
  //     }
  //   }
  //   if (pair === "two") {
  //     if (first === 1) {
  //       setP2Die1Img(dice1);
  //     }
  //     if (first === 2) {
  //       setP2Die1Img(dice2);
  //     }
  //     if (first === 3) {
  //       setP2Die1Img(dice3);
  //     }
  //     if (first === 4) {
  //       setP2Die1Img(dice4);
  //     }
  //     if (first === 5) {
  //       setP2Die1Img(dice5);
  //     }
  //     if (first === 6) {
  //       setP2Die1Img(dice6);
  //     }
  //   }
  // };

  // const dieImages2 = (second, pair) => {
  //   if (pair === "one") {
  //     if (second === 1) {
  //       setDie2Img(dice1);
  //     }
  //     if (second === 2) {
  //       setDie2Img(dice2);
  //     }
  //     if (second === 3) {
  //       setDie2Img(dice3);
  //     }
  //     if (second === 4) {
  //       setDie2Img(dice4);
  //     }
  //     if (second === 5) {
  //       setDie2Img(dice5);
  //     }
  //     if (second === 6) {
  //       setDie2Img(dice6);
  //     }
  //   }
  //   if (pair === "two") {
  //     if (second === 1) {
  //       setP2Die2Img(dice1);
  //     }
  //     if (second === 2) {
  //       setP2Die2Img(dice2);
  //     }
  //     if (second === 3) {
  //       setP2Die2Img(dice3);
  //     }
  //     if (second === 4) {
  //       setP2Die2Img(dice4);
  //     }
  //     if (second === 5) {
  //       setP2Die2Img(dice5);
  //     }
  //     if (second === 6) {
  //       setP2Die2Img(dice6);
  //     }
  //   }
  // };

  return (
    <div className="controls-container">
      <div className="p1-dice-button">
        <h3 className="player">Player 1</h3>
        <Roll
          counterP1={counterP1}
          setCounterP1={setCounterP1}
          turn={turn}
          setTurn={setTurn}
        />
      </div>
      <div className="p2-dice-button">
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
