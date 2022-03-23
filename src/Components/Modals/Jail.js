import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import deported from "../../Assets/Misc/deported.jpeg";
import "../Styles/Jail.css";

const Jail = ({
  onGoJail,
  setOnGoJail,
  onGoJail2,
  setOnGoJail2,
  setInJail,
  setInJail2,
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
    goToJail();
    setOnGoJail(false);
    setOnGoJail2(false);
  };

  const goToJail = () => {
    if (onGoJail) {
      setInJail(true);
    } else if (onGoJail2) {
      setInJail2(true);
    } else return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onGoJail || onGoJail2 ? (
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
              <div className="main-part">
                <h1 className="main-title">YOU'RE DEPORTED!</h1>
                <h2 className="instructions-jail">
                  Go back to your home country!
                </h2>
                <div className="instructions-jail two">
                  <h3 className="one">Do NOT pass GO! </h3>
                  <h3 className="one">Do NOT say goodbye to your friends!</h3>
                  <h3 className="one">Do NOT tell your job!</h3>
                  <h3 className="one">Do NOT grab a Yanjing for the road!</h3>
                  <h3 className="one">
                    Just throw some shit in a bag and get the fuck out!
                  </h3>
                  <img
                    className="deported-pic"
                    alt="person being deported"
                    src={deported}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Jail;
