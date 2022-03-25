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
  setP1Money,
  setP2Money,
  p1Money,
  p2Money,
  setInJail,
  setInJail2,
  counterP1,
  counterP2,
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

  const handleClose = (e) => {
    e.preventDefault();
    setOnCard(false);
    setOnCard2(false);
  };

  useEffect(() => {
    if (onCard === true && (counterP1 === 34 || 3 || 18)) {
      setCardOption("GUANXI");
    } else if (onCard === true && (counterP1 === 8 || 23 || 37)) {
      setCardOption("YUNQI");
    } else if (onCard2 === true && (counterP2 === 34 || 3 || 18)) {
      setCardOption("GUANXI");
    } else if (onCard2 === true && (counterP1 === 8 || 23 || 37)) {
      setCardOption("YUNQI");
    }
    return null;
  }, [counterP1, counterP2, onCard, onCard2]);

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
            className="flex flexColumn innerModalPayRail"
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
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Cards;
