import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homelink from "../../Assets/Misc/homelink.jpeg";
import "../Styles/FreeParking.css";

const AgentFee = ({
  setOnAgentFee,
  onAgentFee,
  setOnAgentFee2,
  onAgentFee2,
  setP1Money,
  setP2Money,
  p1Money,
  p2Money,
  setFreeParking,
  freeParking,
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
    let newFP = freeParking + 75;
    e.preventDefault();
    if (setOnAgentFee) {
      let newMoney = p1Money - 75;
      setP1Money(newMoney);
      setOnAgentFee(false);
      setOnAgentFee2(false);
      setFreeParking(newFP);
    } else if (setOnAgentFee2) {
      let newMoney = p2Money - 75;
      setP2Money(newMoney);
      setOnAgentFee(false);
      setOnAgentFee2(false);
      setFreeParking(newFP);
    }
    return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onAgentFee || onAgentFee2 ? (
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
              <div className="main-agent">
                <div className="button-row">
                  <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                  </button>
                </div>
                <h1 className="main-congrats pay">Agent Fee!</h1>
                <img
                  className="agent-pic"
                  alt="real estate office"
                  src={homelink}
                />
                <h2 className="prize pay">Pay ¥75!</h2>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default AgentFee;
