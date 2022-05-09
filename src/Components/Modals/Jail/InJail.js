import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import depressed from "../../../Assets/Misc/depressed.jpeg";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Triumph from "../../../Assets/Sounds/triumph.mp3";
import Sad from "../../../Assets/Sounds/sad.mp3";
import dice1 from "../../../Assets/Dice/dice1.png";
import dice2 from "../../../Assets/Dice/dice2.png";
import dice3 from "../../../Assets/Dice/dice3.png";
import dice4 from "../../../Assets/Dice/dice4.png";
import dice5 from "../../../Assets/Dice/dice5.png";
import dice6 from "../../../Assets/Dice/dice6.png";
import "../../Styles/InJail.css";

const InJail = ({
  inJail,
  setInJail,
  inJail2,
  setInJail2,
  turn,
  setTurn,
  inJailModal,
  inJailModal2,
  setInJailModal,
  setInJailModal2,
  setCounterP1,
  setCounterP2,
  setP1Jail,
  setP2Jail,
}) => {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [die1Img, setDie1Img] = useState(dice1);
  const [die2Img, setDie2Img] = useState(dice1);
  const [freedom, setFreedom] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [click] = useSound(Click);
  const [sad] = useSound(Sad);
  const [triumph] = useSound(Triumph);

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

  const exitStuck = () => {
    setDisabledButton(false);
    setFreedom(null);
    setDie1(1);
    setDie2(1);
    setDie1Img(dice1);
    setDie2Img(dice1);
    setTurn(turn + 1);
    click();
    if (inJail) {
      setInJail(true);
      setInJailModal(false);
    } else if (inJail2) {
      setInJail2(true);
      setInJailModal2(false);
    }
  };

  const exitFree = () => {
    setDisabledButton(false);
    setFreedom(null);
    setDie1(1);
    setDie2(1);
    setDie1Img(dice1);
    setDie2Img(dice1);
    click();
    if (inJail) {
      setCounterP1(11);
      setInJail(false);
      setInJailModal(false);
      setP1Jail(false);
    } else if (inJail2) {
      setCounterP2(11);
      setInJail2(false);
      setInJailModal2(false);
      setP2Jail(false);
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

  const rollDice = () => {
    let min = 1;
    let max = 6;
    let first = Math.floor(Math.random() * (max - min + 1)) + min;
    let second = Math.floor(Math.random() * (max - min + 1)) + min;
    setDie1(first);
    setDie2(second);
    dieImages1(first, "one");
    dieImages2(second, "one");
    if (first === second) {
      setFreedom("Free");
      setDisabledButton("Free");
      triumph();
    } else if (first + second === 7) {
      setFreedom("Free");
      setDisabledButton(true);
      triumph();
    } else if (first + second === 11) {
      setFreedom("Free");
      setDisabledButton(true);
      triumph();
    } else if (
      first !== second &&
      (first + second === 3 || 4 || 5 || 6 || 8 || 9 || 10)
    ) {
      setFreedom("Stuck");
      setDisabledButton(true);
      sad();
    } else return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {inJailModal || inJailModal2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModal"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-part">
                <h1 className="main-title in-jail">You're Back Home.</h1>
                <img
                  className="depressed"
                  alt="man depressed at home"
                  src={depressed}
                />
                <h3 className="instructions in-jail">
                  Roll 7, 11, or Doubles to Get Back to China
                </h3>
                <h3 className="instructions-bottom">Or play a Visa Card</h3>
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
                    <button
                      onClick={rollDice}
                      className="roll-button"
                      disabled={disabledButton}
                    >
                      ROLL DICE
                    </button>
                  </div>
                  <div className="message-section">
                    {freedom === "Free" ? (
                      <>
                        <h2 className="free-message">
                          You did it! ZhongGuo here you come!
                        </h2>
                      </>
                    ) : null}
                    {freedom === "Stuck" ? (
                      <>
                        <h2 className="stuck-message">
                          It's aight. Your parents house isn't so bad.
                        </h2>
                      </>
                    ) : null}
                  </div>
                  <div className="leave-modal-buttons">
                    {freedom === "Free" ? (
                      <>
                        <button
                          className="leave-button"
                          onClick={() => exitFree()}
                        >
                          EXIT
                        </button>
                      </>
                    ) : null}
                    {freedom === "Stuck" ? (
                      <>
                        <button
                          className="leave-button"
                          onClick={() => exitStuck()}
                        >
                          EXIT
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default InJail;
