import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/FreeParking.css";

const Visa = ({
  onVisa,
  setOnVisa,
  onVisa2,
  setOnVisa2,
  p1Money,
  p2Money,
  setP1Money,
  stP2Money,
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
    if (onVisa) {
      setOnVisa(false);
      setOnVisa2(false);
    } else if (onVisa2) {
      setOnVisa2(false);
      setOnVisa(false);
    }
    return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onVisa || onVisa2 ? (
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
                  <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Visa;
