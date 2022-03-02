import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import smallPay from "../../Assets/Misc/smallpay.jpeg";
import bigPay from "../../Assets/Misc/bigPay.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PayOpponentModal.css";

export const PayOpponent = ({
  payProp,
  setPayProp,
  p1Money,
  p2Money,
  onProp,
  setPayTo,
  payTo,
  setPayType,
  payType,
  onProp2,
  properties,
  utilities,
  railRoads,
  setP1Money,
  setP2Money,
}) => {
  const [rent, setRent] = useState("");
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
    setPayProp(false);
    setPayTo(null);
    setPayType(null);
    setRent(null);
  };

  const player = () => {
    if (payTo && payTo === 2) {
      return "Player 2";
    } else if (payTo && payTo === 1) {
      return "Player 1";
    }
    return null;
  };

  useEffect(() => {
    if (
      onProp2 &&
      payTo &&
      (onProp2.color === "blue" || onProp2.color === "brown") &&
      !onProp2.hasOneHouse
    ) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      if (number.length === 2) {
        let p1New = p1Money + onProp2.monopolyRent;
        let p2New = p2Money - onProp2.monopolyRent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.monopolyRent);
      } else if (number.length < 2) {
        let p1New = p1Money + onProp2.rent;
        let p2New = p2Money - onProp2.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.rent);
      }
    } else if (
      onProp &&
      payTo &&
      (onProp.color === "blue" || onProp.color === "brown") &&
      !onProp.hasOneHouse
    ) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number.length === 2) {
        let p1New = p1Money - onProp.monopolyRent;
        let p2New = p2Money + onProp.monopolyRent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.monopolyRent);
      } else if (number.length < 2) {
        let p1New = p1Money - onProp.rent;
        let p2New = p2Money + onProp.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.rent);
      }
    } else if (onProp2 && payTo && payTo === 1 && !onProp2.hasOneHouse) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      if (number && number.length === 3) {
        let p1New = p1Money + onProp2.monopolyRent;
        let p2New = p2Money - onProp2.monopolyRent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.monopolyRent);
      } else if (number.length < 3) {
        let p1New = p1Money + onProp2.rent;
        let p2New = p2Money - onProp2.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.rent);
      }
    } else if (onProp && payTo && payTo === 2 && !onProp.hasOneHouse) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number && number.length === 3) {
        let p1New = p1Money - onProp.rent;
        let p2New = p2Money + onProp.rent;
        setP1Money(p2New);
        setP2Money(p1New);
        setRent(onProp.monopolyRent);
      } else if (number.length < 3) {
        let p1New = p1Money - onProp.rent;
        let p2New = p2Money + onProp.rent;
        setP1Money(p2New);
        setP2Money(p1New);
        setRent(onProp.rent);
      }
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onProp, onProp2, payTo, properties, setP1Money, setP2Money]);

  const propName = () => {
    if (onProp) {
      return onProp.Name;
    } else if (onProp2) {
      return onProp2.Name;
    }
  };

  const cashPic = () => {
    if (rent && rent < 100) {
      return <img className="cash-pic" alt="small bills" src={smallPay} />;
    } else if (rent && rent > 100) {
      return <img clasName="cash-pic" alt="large bills" src={bigPay} />;
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {payProp === true && (onProp || onProp2) ? (
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
              {cashPic()}
              <h2 className="ammount">
                Pay <span className="rent">{`¥${rent}`}</span> in Rent.
              </h2>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PayOpponent;
