import React, { useState, useEffect } from "react";
import MustModal from "./MustModal";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Victory from "../../../Assets/Sounds/victory.mp3";
import bigPay from "../../../Assets/Misc/bigPay.jpeg";
import dice1 from "../../../Assets/Dice/dice1.png";
import dice2 from "../../../Assets/Dice/dice2.png";
import dice3 from "../../../Assets/Dice/dice3.png";
import dice4 from "../../../Assets/Dice/dice4.png";
import dice5 from "../../../Assets/Dice/dice5.png";
import dice6 from "../../../Assets/Dice/dice6.png";
import "../../Styles/PayOpponentModal.css";

export const PayOpponentUtil = ({
  payUtil,
  setPayUtil,
  p1Money,
  p2Money,
  onUtil,
  onUtil2,
  setOnUtil,
  setOnUtil2,
  setPayUtilTo,
  payUtilTo,
  utilities,
  properties,
  railRoads,
  setUtilities,
  setRailRoads,
  setProperties,
  setP1Money,
  setP2Money,
  endGame,
  setEndGame,
}) => {
  const [rent, setRent] = useState(null);
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [die1Img, setDie1Img] = useState(dice1);
  const [die2Img, setDie2Img] = useState(dice1);
  const [multiplier, setMultiplier] = useState(4);
  const [p1MoneyAvailable, setP1MoneyAvailable] = useState();
  const [p2MoneyAvailable, setP2MoneyAvailable] = useState();
  const [p1MortRailRoads, setP1MortRailRoads] = useState();
  const [p2MortRailRoads, setP2MortRailRoads] = useState();
  const [mustMortgage2, setMustMortgage2] = useState(false);
  const [mustMortgage, setMustMortgage] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOver2, setGameOver2] = useState(false);
  const [p1MortProps, setP1MortProps] = useState();
  const [p2MortProps, setP2MortProps] = useState();
  const [p1MortUtils, setP1MortUtils] = useState();
  const [p2MortUtils, setP2MortUtils] = useState();

  const [click] = useSound(Click);
  const [victory] = useSound(Victory);

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

  useEffect(() => {
    let p1PropsToMort = properties.filter(
      (property) => property.ownedP1 && property.mortgaged === false
    );
    setP1MortProps(p1PropsToMort);
    let p1RRsToMort = railRoads.filter(
      (rr) => rr.ownedP1 && rr.mortgaged === false
    );
    setP1MortRailRoads(p1RRsToMort);
    let p1UtilsToMort = utilities.filter(
      (util) => util.ownedP1 && util.mortgaged === false
    );
    setP1MortUtils(p1UtilsToMort);

    let mortMoneyArrayProps = p1PropsToMort.map((property) => {
      return property.mortgage;
    });
    let mortMoneyArrayRRs = p1RRsToMort.map((rr) => {
      return rr.mortgage;
    });
    let mortMoneyArrayUtils = p1UtilsToMort.map((util) => {
      return util.mortgage;
    });

    const propSum = () => {
      if (mortMoneyArrayProps.length) {
        let totalPropMoney = mortMoneyArrayProps.reduce((x, y) => x + y);
        return totalPropMoney;
      }
      return 0;
    };
    const rrSum = () => {
      if (mortMoneyArrayRRs.length > 0) {
        let totalRRMoney = mortMoneyArrayRRs.reduce((x, y) => x + y);
        return totalRRMoney;
      }
      return 0;
    };
    const utilSum = () => {
      if (mortMoneyArrayUtils.length > 0) {
        let totalUtilMoney = mortMoneyArrayUtils.reduce((x, y) => x + y);
        return totalUtilMoney;
      }
      return 0;
    };
    let totalSum = utilSum() + rrSum() + propSum();
    setP1MoneyAvailable(totalSum);

    let p2PropsToMort = properties.filter(
      (property) => property.ownedP2 && property.mortgaged === false
    );
    setP2MortProps(p2PropsToMort);
    let p2RRsToMort = railRoads.filter(
      (rr) => rr.ownedP2 && rr.mortgaged === false
    );
    setP2MortRailRoads(p2RRsToMort);
    let p2UtilsToMort = utilities.filter(
      (util) => util.ownedP2 && util.mortgaged === false
    );
    setP2MortUtils(p2UtilsToMort);

    let mortMoneyArrayProps2 = p2PropsToMort.map((property) => {
      return property.mortgage;
    });
    let mortMoneyArrayRRs2 = p2RRsToMort.map((rr) => {
      return rr.mortgage;
    });
    let mortMoneyArrayUtils2 = p2UtilsToMort.map((util) => {
      return util.mortgage;
    });

    const propSum2 = () => {
      if (mortMoneyArrayProps2.length > 0) {
        let totalPropMoney = mortMoneyArrayProps2.reduce((x, y) => x + y);
        return totalPropMoney;
      }
      return 0;
    };
    const rrSum2 = () => {
      if (mortMoneyArrayRRs2.length > 0) {
        let totalRRMoney = mortMoneyArrayRRs2.reduce((x, y) => x + y);
        return totalRRMoney;
      }
      return 0;
    };
    const utilSum2 = () => {
      if (mortMoneyArrayUtils2.length > 0) {
        let totalUtilMoney = mortMoneyArrayUtils2.reduce((x, y) => x + y);
        return totalUtilMoney;
      }
      return 0;
    };
    let totalSum2 = utilSum2() + rrSum2() + propSum2();
    setP2MoneyAvailable(totalSum2);
    if (onUtil2 && payUtilTo) {
      let number = utilities.filter(
        (util) => util.ownedP1 === true && util.mortgaged === false
      );
      if (number.length === 1) {
        setMultiplier(4);
      } else if (number.length === 2) {
        setMultiplier(10);
      }
    } else if (onUtil && payUtilTo) {
      let number = utilities.filter(
        (util) => util.ownedP1 === true && util.mortgaged === false
      );
      if (number.length === 1) {
        setMultiplier(4);
      } else if (number.length === 2) {
        setMultiplier(10);
      }
    }
  }, [onUtil2, payUtilTo, onUtil, utilities, properties, railRoads]);

  const handleClose = () => {
    setPayUtil(false);
    setPayUtilTo();
    setMultiplier();
    setOnUtil2();
    setOnUtil();
    setDie1(1);
    setDie2(1);
    setRent(null);
    click();
  };

  const disabled = () => {
    if (rent) {
      return true;
    }
    return false;
  };

  const changeMoney = (amount) => {
    if (onUtil && onUtil.mortgaged === false) {
      let p1New = p1Money - amount;
      let p2New = p2Money + amount;
      setRent(amount);
      if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
        setMustMortgage(true);
      } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
        setP1Money(0);
        let newP2 = p1Money + p2Money;
        setP2Money(newP2);
        setGameOver(true);
        setEndGame("p1");
        setOnUtil(false);
        victory();
      } else {
        setP1Money(p1New);
        setP2Money(p2New);
      }
    } else if (onUtil2 && onUtil2.mortgaged === false) {
      let p1New = p1Money + amount;
      let p2New = p2Money - amount;
      setRent(amount);
      if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
        setMustMortgage2(true);
      } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
        setP2Money(0);
        let newP1 = p1Money + p2Money;
        setP1Money(newP1);
        setGameOver2(true);
        setEndGame("p2");
        setOnUtil2(false);
        victory();
      } else {
        setP1Money(p1New);
        setP2Money(p2New);
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
    if (multiplier === 4) {
      let totalDue = (first + second) * 4;
      setRent(totalDue);
      changeMoney(totalDue);
    } else if (multiplier === 10) {
      let totalDue = (first + second) * 10;
      setRent(totalDue);
      changeMoney(totalDue);
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

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {payUtil === true &&
        ((onUtil && onUtil.mortgaged === false) ||
          (onUtil2 && onUtil2.mortgaged === false)) ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPayUtil"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-content-container">
                <h2 className="line-1">{`${player()} Owns ${propName()}`}</h2>
                <img
                  className="money"
                  alt="large bills"
                  src={bigPay}
                  style={{ height: "4em" }}
                />
                <h3 className="roll-instruction">
                  Roll dice to determine what you owe.
                </h3>
                {multiplier === 4 ? (
                  <p className="explanation">
                    Pay <span className="number">4x</span> the amount on the die
                  </p>
                ) : (
                  <p className="explanation">
                    Pay <span className="number">10x</span> the amount on the
                    die
                  </p>
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
                    <button
                      onClick={rollDice}
                      className="roll-button"
                      disabled={disabled()}
                    >
                      ROLL DICE
                    </button>
                  </div>
                </div>
                <h4 className="pay-saying">{saying()}</h4>
                {rent ? (
                  <>
                    <h2 className="ammount">
                      Pay <span className="rent">{`??${rent}`}</span> in Rent.
                    </h2>
                    <button onClick={handleClose} className="continue-button">
                      Pay and Continue
                    </button>
                  </>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <MustModal
        rent={rent}
        setRent={setRent}
        p1MoneyAvailable={p1MoneyAvailable}
        setP1MoneyAvailable={setP1MoneyAvailable}
        p2MoneyAvailable={p2MoneyAvailable}
        setP2MoneyAvailable={setP2MoneyAvailable}
        mustMortgage={mustMortgage}
        setMustMortgage={setMustMortgage}
        setMustMortgage2={setMustMortgage2}
        mustMortgage2={mustMortgage2}
        gameOver={gameOver}
        setGameOver={setGameOver}
        gameOver2={gameOver2}
        setGameOver2={setGameOver2}
        properties={properties}
        railRoads={railRoads}
        utilities={utilities}
        setProperties={setProperties}
        setUtilities={setUtilities}
        setRailRoads={setRailRoads}
        p1Money={p1Money}
        p2Money={p2Money}
        setP1Money={setP1Money}
        setP2Money={setP2Money}
        p1MortProps={p1MortProps}
        setP1MortProps={setP1MortProps}
        p2MortProps={p2MortProps}
        setP2MortProps={setP2MortProps}
        p1MortRailRoads={p1MortRailRoads}
        setP1MortRailRoads={setP1MortRailRoads}
        p2MortRailRoads={p2MortRailRoads}
        setP2MortRailRoads={setP2MortRailRoads}
        p1MortUtils={p1MortUtils}
        p2MortUtils={p2MortUtils}
        setP1MortUtils={setP1MortUtils}
        setP2MortUtils={setP2MortUtils}
        quit={endGame}
        setQuit={setEndGame}
        setOtherModal={setOnUtil}
        setOtherModal2={setOnUtil2}
      />
    </>
  );
};

export default PayOpponentUtil;
