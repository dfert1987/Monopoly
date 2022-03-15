import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import manInMoney from "../../Assets/Misc/manInMoney.jpeg";
import "../Styles/FreeParking.css";

const FreeParking = ({
  freeParking,
  setFreeParking,
  onFreeParking,
  setOnFreeParking,
  setOnFreeParking2,
  onFreeParking2,
  setP1Money,
  setP2Money,
  p1Money,
  p2Money,
}) => {
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

  const handleClose = (e) => {
    e.preventDefault();
    if (setOnFreeParking) {
      let newMoney = p1Money + freeParking;
      setP1Money(newMoney);
      setOnFreeParking(false);
      setOnFreeParking2(false);
      setFreeParking(500);
    } else if (setOnFreeParking2) {
      let newMoney = p2Money + freeParking;
      setP2Money(newMoney);
      setOnFreeParking(false);
      setOnFreeParking2(false);
      setFreeParking(500);
    }
    return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onFreeParking || onFreeParking2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Confetti width={width} height={height} />
            <motion.div
              className="flex flexColumn innerModalPurchase"
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
                <h1 className="main-congrats">Congratulations!</h1>
                <img
                  className="manInMoney"
                  alt="man in pile of money"
                  src={manInMoney}
                />
                <h2 className="prize">{`Collect the pot of ¥${freeParking}!`}</h2>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default FreeParking;
