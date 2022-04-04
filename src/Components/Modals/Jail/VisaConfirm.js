import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VisaConfirm = ({
  turn,
  setVisa1,
  setVisa2,
  setInJail,
  setInJail2,
  setCounterP1,
  setCounterP2,
  setVisaModal,
  visaModal,
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

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {visaModal ? (
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
                <button
                  className="close-button"
                  onClick={() => setVisaModal(false)}
                >
                  <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                </button>
                <h1 className="confirm-message">
                  Use Visa Card to Return to China?
                </h1>
                <div className="confirm-button-container">
                  <button className="yes-no">YES</button>
                  <button
                    onClick={() => setVisaModal(false)}
                    className="yes-no"
                  >
                    NO
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

export default VisaConfirm;
