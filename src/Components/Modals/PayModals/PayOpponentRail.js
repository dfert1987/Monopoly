import React, { useState, useEffect } from "react";
import MustModal from "./MustModal";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Victory from "../../../Assets/Sounds/victory.mp3";
import subwaypic1 from "../../../Assets/Misc/subwaypic1.jpeg";
import subwayPictwo from "../../../Assets/Misc/subwayPictwo.jpeg";
import "../../Styles/PayOpponentModal.css";

export const PayOpponentRail = ({
  payRail,
  setPayRail,
  onRR,
  onRR2,
  setOnRR,
  setOnRR2,
  railRoads,
  utilities,
  properties,
  setProperties,
  setUtilities,
  setRailRoads,
  p1Money,
  p2Money,
  payRailTo,
  setPayRailTo,
  setP1Money,
  setP2Money,
  setDoubleRR,
  doubleRR,
  endGame,
  setEndGame,
}) => {
  const [fare, setFare] = useState();
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

  const handleClose = () => {
    setPayRail(false);
    click();
    setPayRailTo();
    setOnRR2();
    setOnRR();
    setDoubleRR(false);
  };

  const railName = () => {
    if (onRR) {
      return onRR.Name;
    } else if (onRR2) {
      return onRR2.Name;
    }
    return null;
  };

  const player = () => {
    if (payRailTo && payRailTo === 2) {
      return "Player 2";
    } else if (payRailTo && payRailTo === 1) {
      return "Player 1";
    }
    return null;
  };

  const saying = () => {
    if (onRR) {
      return onRR.paySaying;
    } else if (onRR2) {
      return onRR2.paySaying;
    }
    return null;
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
      if (mortMoneyArrayProps.length > 0) {
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
        let totalPropMoney = mortMoneyArrayProps.reduce((x, y) => x + y);
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
        let totalUtilMoney = mortMoneyArrayUtils.reduce((x, y) => x + y);
        return totalUtilMoney;
      }
      return 0;
    };
    let totalSum2 = utilSum2() + rrSum2() + propSum2();
    setP2MoneyAvailable(totalSum2);
    if (onRR2 && payRailTo && onRR2.mortgaged === false) {
      let number = railRoads.filter(
        (rr) => rr.ownedP1 === true && rr.mortgaged === false
      );
      if (number.length === 1 && !doubleRR) {
        let p1New = p1Money + onRR2.rent;
        let p2New = p2Money - onRR2.rent;
        setFare(onRR2.rent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          setOnRR2(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && !doubleRR) {
        let p1New = p1Money + onRR2.twoRRs;
        let p2New = p2Money - onRR2.twoRRs;
        setFare(onRR2.twoRRs);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          victory();
          setOnRR2(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 3 && !doubleRR) {
        let p1New = p1Money + onRR2.threeRRs;
        let p2New = p2Money - onRR2.threeRRs;
        setFare(onRR2.threeRRs);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          victory();
          setOnRR2(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 4 && !doubleRR) {
        let p1New = p1Money + onRR2.fourRRs;
        let p2New = p2Money - onRR2.fourRRs;
        setFare(onRR2.fourRRs);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          victory();
          setOnRR2(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 1 && doubleRR) {
        let doubled = onRR2.rent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setFare(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          victory();
          setOnRR2(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && doubleRR) {
        let doubled = onRR2.twoRRs * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setFare(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          setOnRR2(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
        setFare(onRR2.doubled);
      } else if (number.length === 3 && doubleRR) {
        let doubled = onRR2.threeRRs * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setFare(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          setOnRR2(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 4 && doubleRR) {
        let doubled = onRR2.fourRRs * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setFare(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
          setEndGame("p2");
          setOnRR2(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      }
    } else if (onRR && payRailTo && onRR.mortgaged === false) {
      let number = railRoads.filter(
        (rr) => rr.ownedP2 === true && rr.mortgaged === false
      );
      if (number.length === 1 && !doubleRR) {
        let p1New = p1Money - onRR.rent;
        let p2New = p2Money + onRR.rent;
        setFare(onRR.rent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          setOnRR(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && !doubleRR) {
        let p1New = p1Money - onRR.twoRRs;
        let p2New = p2Money + onRR.twoRRs;
        setFare(onRR.twoRRs);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          victory();
          setOnRR(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 3 && !doubleRR) {
        let p1New = p1Money - onRR.threeRRs;
        let p2New = p2Money + onRR.threeRRs;
        setFare(onRR.threeRRs);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          victory();
          setOnRR(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 4 && !doubleRR) {
        let p1New = p1Money - onRR.fourRRs;
        let p2New = p2Money + onRR.fourRRs;
        setFare(onRR.fourRRs);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          victory();
          setOnRR(false);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 1 && doubleRR) {
        let doubled = onRR.rent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setFare(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          setOnRR(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && doubleRR) {
        let doubled = onRR.twoRRs * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setFare(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          setOnRR(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 3 && doubleRR) {
        let doubled = onRR.threeRRs * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setFare(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          setOnRR(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 4 && doubleRR) {
        let doubled = onRR.fourRRs * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setFare(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
          setEndGame("p1");
          setOnRR(false);
          victory();
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      }
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    onRR2,
    payRailTo,
    onRR,
    railRoads,
    properties,
    utilities,
    setP1Money,
    setP2Money,
  ]);

  const ticketPic = () => {
    if (fare && fare <= 75) {
      return <img className="cash-pic" alt="subway card" src={subwayPictwo} />;
    } else if (fare && fare > 75) {
      return (
        <img
          className="cash-pic"
          alt="person squished on subway"
          src={subwaypic1}
        />
      );
    }
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {payRail === true &&
        ((onRR && onRR.mortgaged === false) ||
          (onRR2 && onRR2.mortgaged === false)) ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPayRail"
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
                <h2 className="line-1">{`${player()} Owns ${railName()}`}</h2>
                {ticketPic()}
                <h2 className="ammount">
                  Pay <span className="rent">{`¥${fare}`}</span> in Subway Fare.
                </h2>
                <h4 className="pay-saying">{saying()}</h4>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <MustModal
        rent={fare}
        setRent={setFare}
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
        setQuit={setEndGame}
        quit={endGame}
        setOtherModal={setOnRR}
        setOtherModal2={setOnRR2}
      />
    </>
  );
};

export default PayOpponentRail;
