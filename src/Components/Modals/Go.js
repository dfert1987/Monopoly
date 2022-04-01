import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "@react-hook/window-size";
import "../Styles/Go.css";

const Go = ({
  onGoP1,
  onGoP2,
  setOnGoP1,
  setOnGop2,
  p1Money,
  setP1Money,
  p2Money,
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

  const handleClose = (e) => {
    e.preventDefault();
    if (onGoP1) {
      let newMoney = p1Money + 400;
      setP1Money(newMoney);
      setOnGoP1(false);
    } else if (onGoP2) {
      let newMoney = p2Money + 400;
      setP2Money(newMoney);
      setOnGop2(false);
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onGoP1 || onGoP2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModal"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="button-row">
                <button className="close-button" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                </button>
              </div>
              <button className="exit" onClick={handleClose}>
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
