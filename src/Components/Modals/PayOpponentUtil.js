import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import smallPay from "../../Assets/Misc/smallpay.jpeg";
import bigPay from "../../Assets/Misc/bigPay.jpeg";
import dice1 from "../../Assets/Dice/dice1.png";
import dice2 from "../../Assets/Dice/dice2.png";
import dice3 from "../../Assets/Dice/dice3.png";
import dice4 from "../../Assets/Dice/dice4.png";
import dice5 from "../../Assets/Dice/dice5.png";
import dice6 from "../../Assets/Dice/dice6.png";
import "../Styles/PayOpponentModal.css";

export const PayOpponentUtil = ({
  payUtil,
  setPayUtil,
  p1Money,
  p2Money,
  onUtil,
  onUtil2,
  setPayUtilTo,
  payUtilTo,
  utilities,
  setP1Money,
  setP2Money,
}) => {
  const [rent, setRent] = useState();
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [die1Img, setDie1Img] = useState(dice1);
  const [die2Img, setDie2Img] = useState(dice1);
  const [multiplier, setMultiplier] = useState(4);
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const handleClose = (e) => {
    e.preventDefault();
    setPayUtil(false);
    setPayUtilTo(null);
    setRent(null);
  };

  const rollDice = (e) => {
    e.preventDefault();
    let min = 1;
    let max = 6;
    let first = Math.floor(Math.random() * (max - min + 1)) + min;
    let second = Math.floor(Math.random() * (max - min + 1)) + min;
    setDie1(first);
    setDie2(second);
    dieImages1(first, "one");
    dieImages2(second, "one");
    if (multiplier === 4) {
      let totalDue = (first + second) * 4;
      setRent(totalDue);
    } else if (multiplier === 10) {
      let totalDue = (first + second) * 10;
      setRent(totalDue);
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

  const propName = () => {
    if (onUtil) {
      return onUtil.Name;
    } else if (onUtil2) {
      return onUtil2.Name;
    }
    return null;
  };

  const player = () => {
    if (payUtilTo && payUtilTo === 2) {
      return "Player 2";
    } else if (payUtilTo && payUtilTo === 1) {
      return "Player 1";
    }
    return null;
  };

  const saying = () => {
    if (onUtil) {
      return onUtil.paySaying;
    } else if (onUtil2) {
      return onUtil2.paySaying;
    }
    return null;
  };

  const pic = () => {
    if (rent && rent < 100) {
      return <img className="cash-pic" alt="small bills" src={smallPay} />;
    } else if (rent && rent > 100) {
      return <img clasName="cash-pic" alt="large bills" src={bigPay} />;
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {payUtil === true && (onUtil || onUtil2) ? (
        <motion.div
          className="outerModal flex centerFlex"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="flex flexColumn innerModalPay"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="button-row">
              <button className="close-button" onClick={handleClose}>
                <FontAwesomeIcon className="x-icon" icon={faXmark} />
              </button>
            </div>
            <div className="main-content-container">
              <h2 className="line-1">{`${player()} Owns ${propName()}`}</h2>
              {pic()}
              <h3 className="roll-instruction">
                Roll dice to determine what you owe.
              </h3>
              {multiplier === 4 ? (
                <p className="explanation">Pay 4x the amount on the die</p>
              ) : (
                <p className="explanation">Pay 10x the amount on the die</p>
              )}
              <div className="p1-dice-button">
                <div className="roll-section">
                  {die1 && die2 ? (
                    <>
                      {die1Img ? (
                        <img className="die" src={die1Img} alt="die" />
                      ) : null}
                      {die2Img ? (
                        <img className="die" src={die2Img} alt="die" />
                      ) : null}
                    </>
                  ) : null}
                </div>
                <div className="button-container">
                  <button onClick={rollDice} className="roll-button">
                    ROLL DICE
                  </button>
                </div>
              </div>
              <h2 className="ammount">
                Pay <span className="rent">{`¥${rent}`}</span> in Rent.
              </h2>
              <h4 className="pay-saying">{saying()}</h4>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PayOpponentUtil;
