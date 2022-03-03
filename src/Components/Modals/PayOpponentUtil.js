import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PayOpponentModal.css";

export const PayOpponentUtil = ({
  payUtil,
  setPayUtil,
  p1Money,
  p2Money,
  onUtil,
  onUtil2,
  setPayUtilTo,
  payUtilTo,
  utilities,
  setP1Money,
  setP2Money,
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
    setPayUtil(false);
    setPayUtilTo(null);
    setRent(null);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {payUtil === true && (onUtil || onUtil2) ? (
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
          ></motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PayOpponentUtil;
