import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PayOpponentModal.css";

export const PayOpponentRail = ({
  payRail,
  setPayRail,
  onRR,
  onRR2,
  railRoads,
  p1Money,
  p2Money,
  payRailTo,
  setPayRailTo,
  setP1Money,
  setP2Money,
}) => {
  const [fare, setFare] = useState();

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
    setFare(null);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {payRail === true && (onRR || onRR2) ? (
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
