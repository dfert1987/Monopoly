import React, { useEffect, useState } from "react";
import MustModal from "./PayModals/MustModal";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homelink from "../../Assets/Misc/homelink.jpeg";
import "../Styles/FreeParking.css";

const AgentFee = ({
  setOnAgentFee,
  onAgentFee,
  setOnAgentFee2,
  onAgentFee2,
  setP1Money,
  setP2Money,
  p1Money,
  p2Money,
  setFreeParking,
  freeParking,
  properties,
  railRoads,
  utilities,
  setProperties,
  setRailRoads,
  setUtilities,
}) => {
  const [owed, setOwed] = useState(75);
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
  }, [properties, utilities, railRoads]);

  const handleClose = (e) => {
    let newFP = freeParking + 75;
    e.preventDefault();
    if (setOnAgentFee && p1Money > 75) {
      let newMoney = p1Money - 75;
      setP1Money(newMoney);
      setOnAgentFee(false);
      setOnAgentFee2(false);
      setFreeParking(newFP);
    } else if (setOnAgentFee2 && p2Money > 75) {
      let newMoney = p2Money - 75;
      setP2Money(newMoney);
      setOnAgentFee(false);
      setOnAgentFee2(false);
      setFreeParking(newFP);
    } else if (setOnAgentFee && p1Money < 75) {
      setMustMortgage(true);
    } else if (setOnAgentFee2 && p2Money < 75) {
      setMustMortgage2(true);
    }
    return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onAgentFee || onAgentFee2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPurchase"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-agent">
                <div className="button-row">
                  <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                  </button>
                </div>
                <h1 className="main-congrats pay">Agent Fee!</h1>
                <img
                  className="agent-pic"
                  alt="real estate office"
                  src={homelink}
                />
                <h2 className="prize pay">Pay ¥75!</h2>
                <button onClick={handleClose} className="continue-button">
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <MustModal
        rent={owed}
        setRent={setOwed}
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

export default AgentFee;
