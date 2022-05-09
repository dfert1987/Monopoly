import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/EndGame.css";

export const EndGame = ({
  endGame,
  setEndGame,
  p1Image,
  p2Image,
  p1SRC,
  p2SRC,
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

  const getTitle = () => {
    if (endGame && endGame === "p1") {
      return <h1 className="win-title">Player 1 Wins</h1>;
    } else if (endGame && endGame === "p2") {
      return <h1 className="win-title">Player 2 Wins</h1>;
    }
  };

  const getSRC = () => {
    if (endGame && endGame === "p1") {
      return p1Image;
    } else if (endGame && endGame === "p2") {
      return p2Image;
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {endGame === "p1" || endGame === "p2" ? (
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
              <div className="main-container">
                <div className="title-win-section">{getTitle()}</div>
                <img
                  className="winner-pic"
                  alt="Winner Pic Piece"
                  src={getSRC()}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default EndGame;
