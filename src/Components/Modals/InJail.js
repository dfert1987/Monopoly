import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import dice1 from "../../Assets/Dice/dice1.png";
import dice2 from "../../Assets/Dice/dice2.png";
import dice3 from "../../Assets/Dice/dice3.png";
import dice4 from "../../Assets/Dice/dice4.png";
import dice5 from "../../Assets/Dice/dice5.png";
import dice6 from "../../Assets/Dice/dice6.png";
import "../Styles/InJail.css";

const InJail = ({
  inJail,
  setInJail,
  inJail2,
  setInJail2,
  setTurn,
  inJailModal,
  inJailModal2,
  setInJailModal,
  setInJailModal2,
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
        {inJailModal || inJailModal2 ? (
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
              <div className="main-part">
                <h1 className="main-title in-jail">You're Back Home.</h1>
                <h3 className="instructions in-jail">
                  Roll 7, 11, or Doubles to Get Back to China
                </h3>
                <h3 className="instructions in-jail">Or play a Visa Card</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default InJail;
