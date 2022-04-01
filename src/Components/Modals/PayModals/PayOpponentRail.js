import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  p1Money,
  p2Money,
  payRailTo,
  setPayRailTo,
  setP1Money,
  setP2Money,
  setDoubleRR,
  doubleRR,
}) => {
  const [fare, setFare] = useState();

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
    setPayRail(false);
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
    if (onRR2 && payRailTo) {
      let number = railRoads.filter((rr) => rr.ownedP1 === true);
      if (number.length === 1 && !doubleRR) {
        let p1New = p1Money + onRR2.rent;
        let p2New = p2Money - onRR2.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.rent);
      } else if (number.length === 2 && !doubleRR) {
        let p1New = p1Money + onRR2.twoRRs;
        let p2New = p2Money - onRR2.twoRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.twoRRs);
      } else if (number.length === 3 && !doubleRR) {
        let p1New = p1Money + onRR2.threeRRs;
        let p2New = p2Money - onRR2.threeRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.threeRRs);
      } else if (number.length === 4 && !doubleRR) {
        let p1New = p1Money + onRR2.fourRRs;
        let p2New = p2Money - onRR2.fourRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.fourRRs);
      } else if (number.length === 1 && doubleRR) {
        let doubled = onRR2.rent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      } else if (number.length === 2 && doubleRR) {
        let doubled = onRR2.twoRRs * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.doubled);
      } else if (number.length === 3 && doubleRR) {
        let doubled = onRR2.threeRRs * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      } else if (number.length === 4 && doubleRR) {
        let doubled = onRR2.fourRRs * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      }
    } else if (onRR && payRailTo) {
      let number = railRoads.filter((rr) => rr.ownedP2 === true);
      if (number.length === 1 && !doubleRR) {
        let p1New = p1Money - onRR.rent;
        let p2New = p2Money + onRR.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.rent);
      } else if (number.length === 2 && !doubleRR) {
        let p1New = p1Money - onRR.twoRRs;
        let p2New = p2Money + onRR.twoRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.twoRRs);
      } else if (number.length === 3 && !doubleRR) {
        let p1New = p1Money - onRR.threeRRs;
        let p2New = p2Money + onRR.threeRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.threeRRs);
      } else if (number.length === 4 && !doubleRR) {
        let p1New = p1Money - onRR.fourRRs;
        let p2New = p2Money + onRR.fourRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.fourRRs);
      } else if (number.length === 1 && doubleRR) {
        let doubled = onRR.rent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      } else if (number.length === 2 && doubleRR) {
        let doubled = onRR.twoRRs * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      } else if (number.length === 3 && doubleRR) {
        let doubled = onRR.threeRRs * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      } else if (number.length === 4 && doubleRR) {
        let doubled = onRR.fourRRs * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(doubled);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onRR2, payRailTo, onRR, railRoads, setP1Money, setP2Money]);

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
    <AnimatePresence exitBeforeEnter>
      {payRail === true && (onRR || onRR2) ? (
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
  );
};

export default PayOpponentRail;
