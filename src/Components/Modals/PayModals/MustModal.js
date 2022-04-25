import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Must.css";

export const MustModal = ({
  rent,
  setRent,
  p1MoneyAvailable,
  setP1MoneyAvailable,
  p2MoneyAvailable,
  setP2MoneyAvailable,
  mustMortgage,
  setMustMortgage,
  setMustMortgage2,
  mustMortgage2,
  gameOver,
  setGameOver,
  gameOver2,
  setGameOver2,
  properties,
  setProperties,
  utilities,
  setUtilities,
  railRoads,
  setRailRoads,
  p2Money,
  p1Money,
  setP1Money,
  setP2Money,
}) => {
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

  const handleClose = () => {
    setMustMortgage(false);
    setMustMortgage2(false);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {mustMortgage || mustMortgage2 ? (
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
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MustModal;
