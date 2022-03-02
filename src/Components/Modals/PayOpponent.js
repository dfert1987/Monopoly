import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PayOpponent = ({ payProp, setPayProp, p1Money, p2Money }) => {
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
    setPayProp(false, "none", 0);
  };

  return (
    <AnimatePresence exitBeforeEnter>
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
          <div className="button-row">
            <button className="close-button" onClick={handleClose}>
              <FontAwesomeIcon className="x-icon" icon={faXmark} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PayOpponent;
