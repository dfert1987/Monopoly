import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Visa.css";

const VisaConfirm = ({
  turn,
  setVisa1,
  setVisa2,
  setInJail,
  setInJail2,
  inJail,
  inJail2,
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
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (turn % 2 === 0 && inJail === true) {
      setShowConfirm(true);
    } else if (turn % 2 !== 0 && inJail2 === true) {
      setShowConfirm(true);
    } else {
      setShowConfirm(false);
    }
  }, [turn, inJail, inJail2]);

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
              </div>
              {showConfirm ? (
                <>
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
                </>
              ) : (
                <>
                  <h1 className="confirm-message">
                    You're still in China. Just hold on to this.
                  </h1>
                  <button
                    onClick={() => setVisaModal(false)}
                    className="yes-no close"
                  >
                    CLOSE
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default VisaConfirm;
