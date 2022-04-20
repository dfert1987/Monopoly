import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Click from "../../../Assets/Sounds/click.mp3";
import useSound from "use-sound";
import "../../Styles/UnMortgage.css";

const UnMortgageModal = ({
  unMortgage,
  setUnMortgage,
  unMortgage2,
  setUnMortgage2,
  p1Mopney,
  p2Money,
  setP1Money,
  setP2Money,
  properties,
  setProperties,
  utilities,
  setUtilities,
  railRoads,
  setRailRoads,
  freeParking,
  setFreeParking,
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

  const [clickSound] = useSound(Click);

  const handleClose = () => {
    setUnMortgage(false);
    setUnMortgage2(false);
    clickSound();
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {unMortgage || unMortgage2 ? (
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
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default UnMortgageModal;
