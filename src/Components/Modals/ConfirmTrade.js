import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import TradePic from "../../Assets/Misc/name-card-exchanging.jpeg";
import Click from "../../Assets/Sounds/click.mp3";
import Gong from "../../Assets/Sounds/GONG.mp3";

const ConfirmTrade = ({
  confirmTrade,
  setConfirmTrade,
  setShowTrade,
  setP1MoneyAvailable,
  setP2MoneyAvailable,
  p1Money,
  p2Money,
  setAcceptedP1,
  setAcceptedP2,
  setP1MoneyTrade,
  setP2MoneyTrade,
  setP1RROffers,
  setP2RROffers,
  setP1Offers,
  setP2Offers,
  setP1UtilOffers,
  setP2UtilOffers,
}) => {
  const [click] = useSound(Click);
  const [gong] = useSound(Gong);

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

  const handleClose = () => {
    setConfirmTrade(false);
    setShowTrade();
    setP1MoneyAvailable(p1Money);
    setP2MoneyAvailable(p2Money);
    setAcceptedP1(false);
    setAcceptedP2(false);
    setP1MoneyTrade(0);
    setP2MoneyTrade(0);
    setP1RROffers();
    setP1Offers();
    setP1UtilOffers();
    setP2Offers();
    setP2RROffers();
    setP2UtilOffers();
    click();
  };

  const accept = () => {
    setConfirmTrade(false);
    setShowTrade();
    setP1MoneyAvailable(p1Money);
    setP2MoneyAvailable(p2Money);
    setAcceptedP1(false);
    setAcceptedP2(false);
    setP1MoneyTrade(0);
    setP2MoneyTrade(0);
    setP1RROffers();
    setP1Offers();
    setP1UtilOffers();
    setP2Offers();
    setP2RROffers();
    setP2UtilOffers();
    gong();
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {confirmTrade ? (
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
            <img className="trade-pic" alt="trade-pic" src={TradePic} />
            <h3 className="confirm-text">Trade Completed!</h3>
            <div className="confirm-button-container">
              <button onClick={accept} className="confirm-button ok">
                CONTINUE
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default ConfirmTrade;
