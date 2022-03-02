import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import yuanSign from "../../Assets/Misc/yuan.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Purchased.css";

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

const RRPurchasedPopUp = ({
  viewPurchaseRR,
  viewPurchaseRR2,
  setViewPurchaseRR,
  setViewPurchaseRR2,
  onRR,
  onRR2,
}) => {
  const handleClose = (e) => {
    e.preventDefault();
    setViewPurchaseRR(false);
    setViewPurchaseRR2(false);
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {viewPurchaseRR && onRR ? (
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
              <div className="purchased-container">
                <h2 className="title-top">YOU'VE PURCHASED</h2>
                <img
                  className="dollar-sign"
                  alt="gold yuan sign"
                  src={yuanSign}
                />
                <h2 className="title-bottom">{onRR.Name}</h2>
                <h4 className="message">{onRR.message}</h4>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {viewPurchaseRR2 && onRR2 ? (
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
              <div className="purchased-container">
                <h2 className="title-top">YOU'VE PURCHASED</h2>
                <img
                  className="dollar-sign"
                  alt="gold yuan sign"
                  src={yuanSign}
                />
                <h2 className="title-bottom">{onRR2.Name}</h2>
                <h4 className="message">{onRR2.message}</h4>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default RRPurchasedPopUp;