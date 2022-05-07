import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import yuanSign from "../../../Assets/Misc/yuan.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import "../../Styles/Purchased.css";

const PurchasedPopUp = ({
  viewPurchase,
  viewPurchase2,
  setViewPurchase,
  setViewPurchase2,
  onProp,
  onProp2,
  setOnProp,
  setOnProp2,
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
  const [click] = useSound(Click);

  const handleClose = (e) => {
    e.preventDefault();
    setViewPurchase(false);
    setViewPurchase2(false);
    setOnProp();
    click();
    setOnProp2();
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {viewPurchase && onProp ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPurchase clear"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="button-row">
                <button className="close-button" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon" icon={faXmark} />
                </button>
              </div>
              <div className="purchased-container clear">
                <h2 className="title-top">YOU'VE PURCHASED</h2>
                <img
                  className="dollar-sign"
                  alt="gold yuan sign"
                  src={yuanSign}
                />
                <h2 className="title-bottom">{onProp.Name}</h2>
                <h4 className="message">{onProp.purchased}</h4>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {viewPurchase2 && onProp2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPurchase clear"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="button-row">
                <button className="close-button" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon" icon={faXmark} />
                </button>
              </div>
              <div className="purchased-container clear">
                <h2 className="title-top">YOU'VE PURCHASED</h2>
                <img
                  className="dollar-sign"
                  alt="gold yuan sign"
                  src={yuanSign}
                />
                <h2 className="title-bottom">{onProp2.Name}</h2>
                <h4 className="message">{onProp2.purchased}</h4>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default PurchasedPopUp;
