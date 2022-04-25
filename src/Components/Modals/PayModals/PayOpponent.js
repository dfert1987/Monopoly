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
  railRoads,
  utilities,
  setP1Money,
  setP2Money,
  setOnProp,
  setOnProp2,
  setDoubleProp,
  doubleProp,
}) => {
  const [rent, setRent] = useState();
  const [p1MoneyAvailable, setP1MoneyAvailable] = useState();
  const [p2MoneyAvailable, setP2MoneyAvailable] = useState();
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
    setDoubleProp(false);
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
    let p1PropsToMort = properties.filter(
      (property) => property.ownedP1 && property.mortgaged === false
    );
    let p1RRsToMort = railRoads.filter(
      (rr) => rr.ownedP1 && rr.mortgaged === false
    );
    let p1UtilsToMort = utilities.filter(
      (util) => util.ownedP1 && util.mortgaged === false
    );

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
      if (mortMoneyArrayRRs.length) {
        let totalRRMoney = mortMoneyArrayRRs.reduce((x, y) => x + y);
        return totalRRMoney;
      }
      return 0;
    };
    const utilSum = () => {
      if (mortMoneyArrayUtils.length) {
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
    let p2RRsToMort = railRoads.filter(
      (rr) => rr.ownedP2 && rr.mortgaged === false
    );
    let p2UtilsToMort = utilities.filter(
      (util) => util.ownedP2 && util.mortgaged === false
    );

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
      if (mortMoneyArrayProps2.length) {
        let totalPropMoney = mortMoneyArrayProps.reduce((x, y) => x + y);
        return totalPropMoney;
      }
      return 0;
    };
    const rrSum2 = () => {
      if (mortMoneyArrayRRs2.length) {
        let totalRRMoney = mortMoneyArrayRRs.reduce((x, y) => x + y);
        return totalRRMoney;
      }
      return 0;
    };
    const utilSum2 = () => {
      if (mortMoneyArrayUtils2.length) {
        let totalUtilMoney = mortMoneyArrayUtils.reduce((x, y) => x + y);
        return totalUtilMoney;
      }
      return 0;
    };
    let totalSum2 = utilSum2() + rrSum2() + propSum2();
    setP2MoneyAvailable(totalSum2);

    if (
      onProp2 &&
      payTo &&
      payTo === 1 &&
      !doubleProp &&
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
      onProp2 &&
      payTo &&
      payTo === 1 &&
      doubleProp &&
      (onProp2.color === "blue" || onProp2.color === "brown")
    ) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      if (number.length === 2 && onProp2.hasOneHouse === false) {
        let doubled = onProp2.monopolyRent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number.length < 2) {
        let doubled = onProp2.rent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let doubled = onProp2.oneHouse * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let doubled = onProp2.twoHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let doubled = onProp2.threeHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let doubled = onProp2.fourHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number.length === 2 && onProp2.hasHotel === true) {
        let doubled = onProp2.hotel * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      }
    } else if (
      onProp &&
      payTo &&
      payTo === 2 &&
      !doubleProp &&
      (onProp.color === "blue" || onProp.color === "brown")
    ) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number.length === 2 && onProp.hasOneHouse === false) {
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
    } else if (
      onProp &&
      payTo &&
      payTo === 2 &&
      doubleProp &&
      (onProp.color === "blue" || onProp.color === "brown")
    ) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number.length === 2 && onProp.hasOneHouse === false) {
        let doubled = onProp.monopolyRent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number.length < 2) {
        let doubled = onProp.rent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let doubled = onProp.oneHouse * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp.hasTwoHouses === true &&
        onProp.hasThreeHouses === false
      ) {
        let doubled = onProp.twoHouse * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp.hasThreeHouses === true &&
        onProp.hasFourHouses === false
      ) {
        let doubled = onProp.threeHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number.length === 2 &&
        onProp.hasFourHouses === true &&
        onProp.hasHotel === false
      ) {
        let doubled = onProp.fourHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number.length === 2 && onProp.hasHotel === true) {
        let doubled = onProp.hotel * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      }
    } else if (onProp2 && payTo && payTo === 1 && !doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      if (number && number.length === 3 && onProp2.hasOneHouse === false) {
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
        console.log(p1New);
        let p2New = p2Money - onProp2.threeHouses;
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
    } else if (onProp && payTo && payTo === 2 && !doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number && number.length === 3 && onProp.hasOneHouse === false) {
        let p1New = p1Money - onProp.monopolyRent;
        let p2New = p2Money + onProp.monopolyRent;
        setP1Money(p2New);
        setP2Money(p1New);
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
    } else if (onProp && payTo && payTo === 2 && doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color && property.ownedP2 === true
      );
      if (number && number.length === 3 && onProp.hasOneHouse === false) {
        let doubled = onProp.monopolyRent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number && number.length < 3) {
        let doubled = onProp.rent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let doubled = onProp.oneHouse * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasTwoHouses === true &&
        onProp.hasThreeHouses === false
      ) {
        let doubled = onProp.twoHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasThreeHouses === true &&
        onProp.hasFourHouses === false
      ) {
        let doubled = onProp.threeHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasFourHouses === true &&
        onProp.hasHotel === false
      ) {
        let doubled = onProp.fourHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number && number.length === 3 && onProp.hasHotel === true) {
        let doubled = onProp.hotel * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      }
    } else if (onProp2 && payTo === 1 && doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color && property.ownedP1 === true
      );
      if (number && number.length === 3 && onProp2.hasOneHouse === false) {
        let doubled = onProp2.monopolyRent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number && number.length < 3) {
        let doubled = onProp2.rent;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let doubled = onProp2.oneHouse * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let doubled = onProp2.twoHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let doubled = onProp2.threeHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let doubled = onProp2.fourHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      } else if (number && number.length === 3 && onProp2.hasHotel === true) {
        let doubled = onProp2.hotel * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setP1Money(p1New);
        setP2Money(p2New);
        setRent(doubled);
      }
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    onProp,
    onProp2,
    payTo,
    properties,
    utilities,
    railRoads,
    setP1Money,
    setP2Money,
  ]);

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
      return <img className="cash-pic" alt="large bills" src={bigPay} />;
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
