import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const EndGame = () => {
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
            <div>FART</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
