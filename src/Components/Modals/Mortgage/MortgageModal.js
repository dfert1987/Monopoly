import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Mortgage.css";

const MortgageModal = ({
  mortgage,
  setMortgage,
  mortgage2,
  setMortgage2,
  p1Money,
  setP1Money,
  p2Money,
  setP2Money,
  properties,
  setProperties,
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
    setMortgage(false);
    setMortgage2(false);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {mortgage || mortgage2 ? (
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
              <div className="main-mortgage">
                <div className="button-row">
                  <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MortgageModal;
