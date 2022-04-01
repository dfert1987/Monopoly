import React, { useState, useEffect } from "react";
import InnerCard from "./InnerCard";
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
  setVisaP1,
  setVisaP2,
  totalHousesP1,
  totalHousesP2,
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
}) => {
  const [guanxi, setGuanxi] = useState(Guanxi);
  const [yunqi, setYunqi] = useState(Yunqi);
  const [cardOption, setCardOption] = useState();

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
  }, [counterP1, counterP2, onCard, onCard2]);

  const cardStyle = () => {
    if (cardOption && cardOption === "FU YUAN") {
      return "flex flexColumn innerModalPayRail YUNQI";
    } else if (cardOption && cardOption === "GUANXI") {
      return "flex flexColumn innerModalPayRail GUANXI";
    }
  };

  return (
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
                setVisaP1={setVisaP1}
                setVisaP2={setVisaP2}
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
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Cards;
