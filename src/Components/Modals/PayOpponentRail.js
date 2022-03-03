import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PayOpponentModal.css";

export const PayOpponentRail = ({
  payRail,
  setPayRail,
  onRR,
  onRR2,
  railRoads,
  p1Money,
  p2Money,
  payRailTo,
  setPayRailTo,
  setP1Money,
  setP2Money,
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
    setFare(null);
    setPayRail(false);
    setPayRailTo(null);
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
      if (number.length === 1) {
        let p1New = p1Money + onRR2.rent;
        let p2New = p2Money - onRR2.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.rent);
      } else if (number.length === 2) {
        let p1New = p1Money + onRR2.twoRRs;
        let p2New = p2Money - onRR2.twoRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.twoRRs);
      } else if (number.length === 3) {
        let p1New = p1Money + onRR2.threeRRs;
        let p2New = p2Money - onRR2.threeRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.threeRRs);
      } else if (number.length === 4) {
        let p1New = p1Money + onRR2.fourRRs;
        let p2New = p2Money - onRR2.fourRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR2.fourRRs);
      }
    } else if (onRR && payRailTo) {
      let number = railRoads.filter((rr) => rr.ownedP2 === true);
      if (number.length === 1) {
        let p1New = p1Money - onRR.rent;
        let p2New = p2Money + onRR.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.rent);
      } else if (number.length === 2) {
        let p1New = p1Money - onRR.twoRRs;
        let p2New = p2Money + onRR.twoRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.twoRRs);
      } else if (number.length === 3) {
        let p1New = p1Money - onRR.threeRRs;
        let p2New = p2Money + onRR.threeRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.threeRRs);
      } else if (number.length === 4) {
        let p1New = p1Money - onRR.fourRRs;
        let p2New = p2Money + onRR.fourRRs;
        setP1Money(p1New);
        setP2Money(p2New);
        setFare(onRR.fourRRs);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onRR2, payRailTo, onRR, railRoads, setP1Money, setP2Money]);

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
