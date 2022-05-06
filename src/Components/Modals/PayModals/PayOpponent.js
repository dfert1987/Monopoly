import React, { useState, useEffect } from "react";
import MustModal from "./MustModal";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import smallPay from "../../../Assets/Misc/smallpay.jpeg";
import bigPay from "../../../Assets/Misc/bigPay.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/PayOpponentModal.css";
import { inferTo } from "react-spring";

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
  setProperties,
  setUtilities,
  setRailRoads,
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
  const [mustMortgage2, setMustMortgage2] = useState(false);
  const [mustMortgage, setMustMortgage] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOver2, setGameOver2] = useState(false);
  const [p1MortProps, setP1MortProps] = useState();
  const [p2MortProps, setP2MortProps] = useState();
  const [p1MortUtils, setP1MortUtils] = useState();
  const [p2MortUtils, setP2MortUtils] = useState();
  const [p1MortRailRoads, setP1MortRailRoads] = useState();
  const [p2MortRailRoads, setP2MortRailRoads] = useState();

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
    setP1MortProps(p1PropsToMort);
    let p1RRsToMort = railRoads.filter(
      (rr) => rr.ownedP1 && rr.mortgaged === false
    );
    setP1MortRailRoads(p1RRsToMort);
    let p1UtilsToMort = utilities.filter(
      (util) => util.ownedP1 && util.mortgaged === false
    );
    setP1MortRailRoads(p1UtilsToMort);

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
          property.color === onProp2.color &&
          property.ownedP1 === true &&
          property.mortgaged === false
      );
      if (number.length === 2 && onProp2.hasOneHouse === false) {
        let p1New = p1Money + onProp2.monopolyRent;
        let p2New = p2Money - onProp2.monopolyRent;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length < 2) {
        let p1New = p1Money + onProp2.rent;
        let p2New = p2Money - onProp2.rent;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let p1New = p1Money + onProp2.oneHouse;
        let p2New = p2Money - onProp2.oneHouse;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let p1New = p1Money + onProp2.twoHouses;
        let p2New = p2Money - onProp2.twoHouses;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let p1New = p1Money + onProp2.threeHouses;
        let p2New = p2Money - onProp2.threeHouses;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let p1New = p1Money + onProp2.fourHouses;
        let p2New = p2Money - onProp2.fourHouses;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && onProp2.hasHotel === true) {
        let p1New = p1Money + onProp2.hotel;
        let p2New = p2Money - onProp2.hotel;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
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
          property.color === onProp2.color &&
          property.ownedP1 === true &&
          property.mortgaged === false
      );
      if (number.length === 2 && onProp2.hasOneHouse === false) {
        let doubled = onProp2.monopolyRent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length < 2) {
        let doubled = onProp2.rent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let doubled = onProp2.oneHouse * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let doubled = onProp2.twoHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let doubled = onProp2.threeHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let doubled = onProp2.fourHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && onProp2.hasHotel === true) {
        let doubled = onProp2.hotel * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(onProp2.doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
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
          property.color === onProp.color &&
          property.ownedP2 === true &&
          property.mortgaged === false
      );
      if (number.length === 2 && onProp.hasOneHouse === false) {
        let p1New = p1Money - onProp.monopolyRent;
        let p2New = p2Money + onProp.monopolyRent;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length < 2) {
        let p1New = p1Money - onProp.rent;
        let p2New = p2Money + onProp.rent;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let p1New = p1Money - onProp.oneHouse;
        let p2New = p2Money + onProp.oneHouse;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasTwoHouse === true &&
        onProp.hasThreeHouses === false
      ) {
        let p1New = p1Money - onProp.twoHouses;
        let p2New = p2Money + onProp.twoHouses;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasThreeHouse === true &&
        onProp.hasFourHouses === false
      ) {
        let p1New = p1Money - onProp.threeHouses;
        let p2New = p2Money + onProp.threeHouses;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasFourHouses === true &&
        onProp.hasHotel === false
      ) {
        let p1New = p1Money - onProp.fourHouses;
        let p2New = p2Money + onProp.fourHouses;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && onProp.hasHotel === true) {
        let p1New = p1Money - onProp.hotel;
        let p2New = p2Money + onProp.hotel;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
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
          property.color === onProp.color &&
          property.ownedP2 === true &&
          property.mortgaged === false
      );
      if (number.length === 2 && onProp.hasOneHouse === false) {
        let doubled = onProp.monopolyRent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length < 2) {
        let doubled = onProp.rent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let doubled = onProp.oneHouse * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasTwoHouses === true &&
        onProp.hasThreeHouses === false
      ) {
        let doubled = onProp.twoHouse * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasThreeHouses === true &&
        onProp.hasFourHouses === false
      ) {
        let doubled = onProp.threeHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number.length === 2 &&
        onProp.hasFourHouses === true &&
        onProp.hasHotel === false
      ) {
        let doubled = onProp.fourHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length === 2 && onProp.hasHotel === true) {
        let doubled = onProp.hotel * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(onProp.doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      }
    } else if (onProp2 && payTo && payTo === 1 && !doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color &&
          property.ownedP1 === true &&
          property.mortgaged === false
      );
      if (number && number.length === 3 && onProp2.hasOneHouse === false) {
        let p1New = p1Money + onProp2.monopolyRent;
        let p2New = p2Money - onProp2.monopolyRent;
        setRent(onProp2.monopolyRent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length < 3) {
        let p1New = p1Money + onProp2.rent;
        let p2New = p2Money - onProp2.rent;
        setRent(onProp2.rent);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let p1New = p1Money + onProp2.oneHouse;
        let p2New = p2Money - onProp2.oneHouse;
        setRent(onProp2.hasOneHouse);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let p1New = p1Money + onProp2.twoHouses;
        let p2New = p2Money - onProp2.twoHouses;
        setRent(onProp2.hasTwoHouses);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let p1New = p1Money + onProp2.threeHouses;
        let p2New = p2Money - onProp2.threeHouses;
        setRent(onProp2.hasThreeHouses);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let p1New = p1Money + onProp2.fourHouses;
        let p2New = p2Money - onProp2.fourHouses;
        setRent(onProp2.hasFourHouses);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number && number.length === 3 && onProp2.hasHotel === true) {
        let p1New = p1Money + onProp2.hotel;
        let p2New = p2Money - onProp2.hotel;
        setRent(onProp2.hotel);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -1 * p2New) {
          setP2Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      }
    } else if (onProp && payTo && payTo === 2 && !doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color &&
          property.ownedP2 === true &&
          property.mortgaged === false
      );
      if (number && number.length === 3 && onProp.hasOneHouse === false) {
        let p1New = p1Money - onProp.monopolyRent;
        let p2New = p2Money + onProp.monopolyRent;
        setRent(onProp.monopolyRent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number.length < 3) {
        let p1New = p1Money - onProp.rent;
        let p2New = p2Money + onProp.rent;
        setRent(onProp.rent);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let p1New = p1Money - onProp.oneHouse;
        let p2New = p2Money + onProp.oneHouse;
        setRent(onProp.hasOneHouse);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasTwoHouses === true &&
        onProp.hasThreeHouses === false
      ) {
        let p1New = p1Money - onProp.twoHouses;
        let p2New = p2Money + onProp.twoHouses;
        setRent(onProp.hasTwoHouses);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasThreeHouse === true &&
        onProp.hasFourHouses === false
      ) {
        let p1New = p1Money - onProp.oneThreeHouses;
        let p2New = p2Money + onProp.oneThreeHouses;
        setRent(onProp.hasThreeHouses);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasFourHouses === true &&
        onProp.hashotel === false
      ) {
        let p1New = p1Money + onProp.fourHouses;
        let p2New = p2Money - onProp.fourHouses;
        setRent(onProp.hasFourHouses);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number && number.length === 3 && onProp.hasHotel === true) {
        let p1New = p1Money + onProp.hotel;
        let p2New = p2Money - onProp.hotel;
        setRent(onProp.hotel);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      }
    } else if (onProp && payTo && payTo === 2 && doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp.color &&
          property.ownedP2 === true &&
          property.mortgaged === false
      );
      if (number && number.length === 3 && onProp.hasOneHouse === false) {
        let doubled = onProp.monopolyRent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number && number.length < 3) {
        let doubled = onProp.rent * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasOneHouse === true &&
        onProp.hasTwoHouses === false
      ) {
        let doubled = onProp.oneHouse * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasTwoHouses === true &&
        onProp.hasThreeHouses === false
      ) {
        let doubled = onProp.twoHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasThreeHouses === true &&
        onProp.hasFourHouses === false
      ) {
        let doubled = onProp.threeHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp.hasFourHouses === true &&
        onProp.hasHotel === false
      ) {
        let doubled = onProp.fourHouses * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number && number.length === 3 && onProp.hasHotel === true) {
        let doubled = onProp.hotel * 2;
        let p1New = p1Money - doubled;
        let p2New = p2Money + doubled;
        setRent(doubled);
        if (p1New < 0 && p1MoneyAvailable > -1 * p1New) {
          setMustMortgage(true);
        } else if (p1New < 0 && p1MoneyAvailable < -1 * p1New) {
          setP1Money(0);
          let newP2 = p1Money + p2Money;
          setP2Money(newP2);
          setGameOver(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      }
    } else if (onProp2 && payTo === 1 && doubleProp) {
      let number = properties.filter(
        (property) =>
          property.color === onProp2.color &&
          property.ownedP1 === true &&
          property.mortgaged === false
      );
      if (number && number.length === 3 && onProp2.hasOneHouse === false) {
        let doubled = onProp2.monopolyRent * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number && number.length < 3) {
        let doubled = onProp2.rent;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasOneHouse === true &&
        onProp2.hasTwoHouses === false
      ) {
        let doubled = onProp2.oneHouse * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasTwoHouses === true &&
        onProp2.hasThreeHouses === false
      ) {
        let doubled = onProp2.twoHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasThreeHouses === true &&
        onProp2.hasFourHouses === false
      ) {
        let doubled = onProp2.threeHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (
        number &&
        number.length === 3 &&
        onProp2.hasFourHouses === true &&
        onProp2.hasHotel === false
      ) {
        let doubled = onProp2.fourHouses * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
      } else if (number && number.length === 3 && onProp2.hasHotel === true) {
        let doubled = onProp2.hotel * 2;
        let p1New = p1Money + doubled;
        let p2New = p2Money - doubled;
        setRent(doubled);
        if (p2New < 0 && p2MoneyAvailable > -1 * p2New) {
          setMustMortgage2(true);
        } else if (p2New < 0 && p2MoneyAvailable < -2 * p1New) {
          setP1Money(0);
          let newP1 = p1Money + p2Money;
          setP1Money(newP1);
          setGameOver2(true);
        } else {
          setP1Money(p1New);
          setP2Money(p2New);
        }
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
    <>
      <AnimatePresence exitBeforeEnter>
        {payProp === true &&
        ((onProp && onProp.mortgaged === false) ||
          (onProp2 && onProp2.mortgaged === false)) ? (
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
      />
    </>
  );
};

export default PayOpponent;
