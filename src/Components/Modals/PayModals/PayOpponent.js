import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import smallPay from "../../../Assets/Misc/smallpay.jpeg";
import bigPay from "../../../Assets/Misc/bigPay.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/PayOpponentModal.css";

export const PayOpponent = ({
  payProp,
  setPayProp,
  p1Money,
  p2Money,
  onProp,
  setPayTo,
  payTo,
  onProp2,
  properties,
  setP1Money,
  setP2Money,
  setOnProp,
  setOnProp2,
}) => {
  const [rent, setRent] = useState();
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
    setPayTo();
    setRent();
    setOnProp();
    setOnProp2();
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
      (onProp2.color === "blue" || onProp2.color === "brown")
    ) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      if (number.length === 2 && onProp2.hasOneHouse === false) {
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
      } else if (
        number.length === 2 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let p1New = p1Money + onProp2.oneHouse;
        let p2New = p2Money - onProp2.oneHouse;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.oneHouse);
      } else if (
        number.length === 2 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let p1New = p1Money + onProp2.twoHouses;
        let p2New = p2Money - onProp2.twoHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.twoHouses);
      } else if (
        number.length === 2 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let p1New = p1Money + onProp2.threeHouses;
        let p2New = p2Money - onProp2.threeHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.threeHouses);
      } else if (
        number.length === 2 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let p1New = p1Money + onProp2.fourHouses;
        let p2New = p2Money - onProp2.fourHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.fourHouses);
      } else if (number.length === 2 && onProp2.hasHotel === true) {
        let p1New = p1Money + onProp2.hotel;
        let p2New = p2Money - onProp2.hotel;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.hotel);
      }
    } else if (
      onProp &&
      payTo &&
      (onProp.color === "blue" || onProp.color === "brown")
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
      } else if (
        number.length === 2 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let p1New = p1Money - onProp.oneHouse;
        let p2New = p2Money + onProp.oneHouse;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.oneHouse);
      } else if (
        number.length === 2 &&
        onProp.hasTwoHouse === true &&
        onProp.hasThreeHouses === false
      ) {
        let p1New = p1Money - onProp.twoHouses;
        let p2New = p2Money + onProp.twoHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.twoHouses);
      } else if (
        number.length === 2 &&
        onProp.hasThreeHouse === true &&
        onProp.hasFourHouses === false
      ) {
        let p1New = p1Money - onProp.threeHouses;
        let p2New = p2Money + onProp.threeHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.threeHouses);
      } else if (
        number.length === 2 &&
        onProp.hasFourHouses === true &&
        onProp.hasHotel === false
      ) {
        let p1New = p1Money - onProp.fourHouses;
        let p2New = p2Money + onProp.fourHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.fourHouses);
      } else if (number.length === 2 && onProp.hasHotel === true) {
        let p1New = p1Money - onProp.hotel;
        let p2New = p2Money + onProp.hotel;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.hotel);
      }
    } else if (onProp2 && payTo && payTo === 1) {
      console.log("pop");
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      console.log(number, number.length, onProp2.hasOneHouse);
      if (number && number.length === 3 && onProp2.hasOneHouse === false) {
        console.log("poooooop");
        let p1New = p1Money + onProp2.monopolyRent;
        let p2New = p2Money - onProp2.monopolyRent;
        setP1Money(p1New);
        setP2Money(p2New);
        console.log(onProp2.monopolyRent);
        setRent(onProp2.monopolyRent);
      } else if (number.length < 3) {
        let p1New = p1Money + onProp2.rent;
        let p2New = p2Money - onProp2.rent;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.rent);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let p1New = p1Money + onProp2.oneHouse;
        let p2New = p2Money - onProp2.oneHOuse;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.oneHouse);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let p1New = p1Money + onProp2.twoHouses;
        let p2New = p2Money - onProp2.twoHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.twoHouse);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let p1New = p1Money + onProp2.threeHouses;
        let p2New = p2Money - onProp2.threeHosuses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.threeHouses);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let p1New = p1Money + onProp2.fourHouses;
        let p2New = p2Money - onProp2.fourHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.fourHouses);
      } else if (number && number.length === 3 && onProp2.hasHotel === true) {
        let p1New = p1Money + onProp2.hotel;
        let p2New = p2Money - onProp2.hotel;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp2.hotel);
      }
    } else if (onProp && payTo && payTo === 2) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number && number.length === 3 && onProp.hasOneHouse === false) {
        let p1New = p1Money - onProp.monopolyRent;
        let p2New = p2Money + onProp.monopolyRent;
        setP1Money(p2New);
        setP2Money(p1New);
        console.log(onProp.monopolyRent);
        setRent(onProp.monopolyRent);
      } else if (number.length < 3) {
        let p1New = p1Money - onProp.rent;
        let p2New = p2Money + onProp.rent;
        setP1Money(p2New);
        setP2Money(p1New);
        setRent(onProp.rent);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let p1New = p1Money + onProp.oneHouse;
        let p2New = p2Money - onProp.oneHouse;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.oneHouse);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasTwoHouses === true &&
        onProp.hasThreeHouses === false
      ) {
        let p1New = p1Money + onProp.twoHouses;
        let p2New = p2Money - onProp.twoHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.twoHouses);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasThreeHouse === true &&
        onProp.hasFourHouses === false
      ) {
        let p1New = p1Money + onProp.oneThreeHouses;
        let p2New = p2Money - onProp.oneThreeHouses;
        setP2Money(p2New);
        setP1Money(p1New);
        setRent(onProp.threeHouses);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasFourHouses === true &&
        onProp.hashotel === false
      ) {
        let p1New = p1Money + onProp.fourHouses;
        let p2New = p2Money - onProp.fourHouses;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.fourHouses);
      } else if (number && number.length === 3 && onProp.hasHotel === true) {
        let p1New = p1Money + onProp.hotel;
        let p2New = p2Money - onProp.hotel;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(onProp.hotel);
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
    return null;
  };

  const cashPic = () => {
    if (rent && rent < 100) {
      return <img className="cash-pic" alt="small bills" src={smallPay} />;
    } else if (rent && rent > 100) {
      return <img clasName="cash-pic" alt="large bills" src={bigPay} />;
    }
  };

  const saying = () => {
    if (onProp) {
      return onProp.paySaying;
    } else if (onProp2) {
      return onProp2.paySaying;
    }
    return null;
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
              <h4 className="pay-saying">{saying()}</h4>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PayOpponent;
