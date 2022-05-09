import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import logo from "../../Assets/Misc/chinesegrandmarich.gif";
import "../Styles/EndGame.css";

export const EndGame = ({ endGame, setEndGame }) => {
  const [width, height] = useWindowSize();
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
      return "Player 1!";
    } else if (endGame && endGame === "p2") {
      return "Player 2!";
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {endGame === "p1" || endGame === "p2" ? (
          <motion.div
            className="outerModal2 flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Confetti width={width} height={height} />
            <motion.div
              className="flex flexColumn innerModalPurchase2"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-container">
                <div className="title-win-section">
                  <h1 className="congrats">{`Congratulations ${getTitle()}`}</h1>
                  <h1 className="congrats2">You Win!</h1>
                </div>
                <div className="win-image-container">
                  <img
                    className="win-gif"
                    alt="grandma with money guns"
                    src={logo}
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

export default EndGame;
