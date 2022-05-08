import React, { useState, useEffect } from "react";
import InnerCard from "./InnerCard";
import MustModal from "../PayModals/MustModal";
import { motion, AnimatePresence } from "framer-motion";
import { Guanxi } from "../../../Assets/Cards/Guanxi/Guanxi";
import { Yunqi } from "../../../Assets/Cards/Yunqi/Yunqi";
import "../../Styles/Card.css";

export const Cards = ({
  onCard,
  setOnCard,
  onCard2,
  setOnCard2,
  setFreeParking,
  freeParking,
  setP1Money,
  setP2Money,
  p1Money,
  p2Money,
  setInJail,
  setInJail2,
  counterP1,
  counterP2,
  setCounterP1,
  setCounterP2,
  setTurn,
  turn,
  railRoads,
  properties,
  setDoubleRR,
  setDoubleProp,
  setSkip1,
  setSkip2,
  setVisa1,
  setVisa2,
  totalHousesP1,
  totalHousesP2,
  setTotalHousesP1,
  setTotalHousesP2,
  hotelsP1,
  hotelsP2,
  utilities,
  setOnUtil,
  setOnUtil2,
  onUtil,
  onUtil2,
  setUtilModal2,
  setUtilModal,
  utilModal,
  utilModal2,
  payUtil,
  setPayUtil,
  setPayUtilTo,
  payUtilTo,
  setOnProp,
  setOnProp2,
  setPayProp,
  setPayTo,
  setPropertyModal1,
  setPropertyModal2,
  setOnAgentFee,
  setOnAgentFee2,
  onVisa,
  onVisa2,
  setOnVisa,
  setOnVisa2,
  setStayOn,
  setStayOn2,
  setOnFreeParking,
  setOnFreeParking2,
  payRailTo,
  setPayRailTo,
  setPayRail,
  setOnRR,
  setOnRR2,
  setRRModal,
  setRRModal2,
  pass,
  setPass,
  pass2,
  setPass2,
  setUtilities,
  setProperties,
  setRailRoads,
  setEndGame,
}) => {
  const [guanxi, setGuanxi] = useState(Guanxi);
  const [yunqi, setYunqi] = useState(Yunqi);
  const [cardOption, setCardOption] = useState();
  const [rent, setRent] = useState();
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
      onCard === true &&
      (counterP1 === 34 || counterP1 === 3 || counterP1 === 18)
    ) {
      setCardOption("GUANXI");
    } else if (
      onCard === true &&
      (counterP1 === 8 || counterP1 === 23 || counterP1 === 37)
    ) {
      setCardOption("FU YUAN");
    } else if (
      onCard2 === true &&
      (counterP2 === 34 || counterP2 === 3 || counterP2 === 18)
    ) {
      setCardOption("GUANXI");
    } else if (
      onCard2 === true &&
      (counterP2 === 8 || counterP2 === 23 || counterP2 === 37)
    ) {
      setCardOption("FU YUAN");
    }
    return null;
  }, [counterP1, counterP2, onCard, onCard2, properties, railRoads, utilities]);

  const cardStyle = () => {
    if (cardOption && cardOption === "FU YUAN") {
      return "flex flexColumn innerModalPayRail YUNQI";
    } else if (cardOption && cardOption === "GUANXI") {
      return "flex flexColumn innerModalPayRail GUANXI";
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onCard || onCard2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className={cardStyle()}
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-part">
                <h1 className="card-type">{cardOption}</h1>
                <InnerCard
                  className="card-section"
                  guanxi={guanxi}
                  yunqi={yunqi}
                  cardOption={cardOption}
                  setCardOption={setCardOption}
                  setYunqi={setYunqi}
                  setGuanxi={setGuanxi}
                  setOnCard={setOnCard}
                  setOnCard2={setOnCard2}
                  onCard={onCard}
                  onCard2={onCard2}
                  setFreeParking={setFreeParking}
                  freeParking={freeParking}
                  p1Money={p1Money}
                  p2Money={p2Money}
                  setP1Money={setP1Money}
                  setP2Money={setP2Money}
                  setInJail={setInJail}
                  setInJail2={setInJail2}
                  counterP1={counterP1}
                  counterP2={counterP2}
                  setCounterP1={setCounterP1}
                  setCounterP2={setCounterP2}
                  setTurn={setTurn}
                  turn={turn}
                  railRoads={railRoads}
                  properties={properties}
                  setDoubleRR={setDoubleRR}
                  setDoubleProp={setDoubleProp}
                  setSkip1={setSkip1}
                  setSkip2={setSkip2}
                  setVisa1={setVisa1}
                  setVisa2={setVisa2}
                  totalHousesP1={totalHousesP1}
                  totalHousesP2={totalHousesP2}
                  hotelsP1={hotelsP1}
                  hotelsP2={hotelsP2}
                  utilities={utilities}
                  payUtilTo={payUtilTo}
                  setPayUtilTo={setPayUtilTo}
                  onUtil={onUtil}
                  onUtil2={onUtil2}
                  setOnUtil={setOnUtil}
                  setOnUtil2={setOnUtil2}
                  utilModal={utilModal}
                  utilModal2={utilModal2}
                  setUtilModal={setUtilModal}
                  setUtilModal2={setUtilModal2}
                  payUtil={payUtil}
                  setPayUtil={setPayUtil}
                  setOnProp={setOnProp}
                  setOnProp2={setOnProp2}
                  setPayTo={setPayTo}
                  setPayProp={setPayProp}
                  setPropertyModal1={setPropertyModal1}
                  setPropertyModal2={setPropertyModal2}
                  setOnAgentFee={setOnAgentFee}
                  setOnAgentFee2={setOnAgentFee2}
                  onVisa={onVisa}
                  onVisa2={onVisa2}
                  setOnVisa={setOnVisa}
                  setOnVisa2={setOnVisa2}
                  setStayOn={setStayOn}
                  setStayOn2={setStayOn2}
                  setOnFreeParking={setOnFreeParking}
                  setOnFreeParking2={setOnFreeParking2}
                  payRailTo={payRailTo}
                  setPayRailTo={setPayRailTo}
                  setPayRail={setPayRail}
                  setOnRR={setOnRR}
                  setOnRR2={setOnRR2}
                  setRRModal={setRRModal}
                  setRRModal2={setRRModal2}
                  setTotalHousesP1={setTotalHousesP1}
                  setTotalHousesP2={setTotalHousesP2}
                  pass={pass}
                  setPass={setPass}
                  pass2={pass2}
                  setPass2={setPass2}
                  p1MortUtils={p1MortUtils}
                  setP1MortUtils={setP1MortUtils}
                  p2MortUtils={p2MortUtils}
                  setP2MortUtils={setP2MortUtils}
                  p1MortProps={p1MortProps}
                  setP1MortProps={setP1MortProps}
                  p2MortProps={p2MortProps}
                  setP2MortProps={setP2MortProps}
                  p1MortRailRoads={p1MortRailRoads}
                  setP1MortRailRoads={setP1MortRailRoads}
                  p2MortRailRoads={p2MortRailRoads}
                  setP2MortRailRoads={setP1MortRailRoads}
                  mustMortgage={mustMortgage}
                  setMustMortgage={setMustMortgage}
                  setMustMortgage2={setMustMortgage2}
                  mustMortgage2={mustMortgage2}
                  gameOver={gameOver}
                  setGameOver={setGameOver}
                  gameOver2={gameOver2}
                  rent={rent}
                  setRent={setRent}
                  setGameOver2={setGameOver2}
                  p1MoneyAvailable={p1MoneyAvailable}
                  p2MoneyAvailable={p2MoneyAvailable}
                  setP1MoneyAvailable={setP1MoneyAvailable}
                  setP2MoneyAvailable={setP2MoneyAvailable}
                  setEndGame={setEndGame}
                />
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
        setQuit={setEndGame}
        setOtherModal={setOnCard}
        setOtherModal2={setOnCard2}
      />
    </>
  );
};

export default Cards;
