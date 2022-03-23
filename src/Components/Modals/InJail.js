import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const InJail = ({ inJail, setInJail, inJail2, setInJail2, setTurn }) => {
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
            ></motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
