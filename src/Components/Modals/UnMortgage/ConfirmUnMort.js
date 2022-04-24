import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Drum from "../../../Assets/Sounds/drum.mp3";
import "../../Styles/UnMortgage.css";

const ConfirmUnMort = ({
  confirmModalView,
  setConfirmModalView,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  properties,
  railRoads,
  utilities,
  setRailRoads,
  setUtilities,
  setProperties,
  allMortgaged,
  setAllMortgaged,
  allMortgaged2,
  setAllMortgaged2,
  allMortgagedRRs,
  setAllMortgagedRRs,
  allMortgagedRRs2,
  setAllMortgagedRRs2,
  allMortgagedUtils,
  setAllMortgagedUtils,
  setAllMortgagedUtils2,
  allMortgagedUtils2,
  setFreeParking,
  freeParking,
  activeIndex,
}) => {
  const [click] = useSound(Click);
  const [drum] = useSound(Drum);

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
    setConfirmModalView(false);
    click();
  };

  const getName = () => {
    if (allMortgaged !== undefined) {
      let changedProperty = allMortgaged[activeIndex];
      return changedProperty.Name;
    } else if (allMortgaged2) {
      let changedProperty = allMortgaged2[activeIndex];
      return changedProperty.Name;
    } else if (allMortgagedRRs) {
      let changedRR = allMortgagedRRs[activeIndex];
      return changedRR.Name;
    } else if (allMortgagedRRs2) {
      let changedRR = allMortgagedRRs2[activeIndex];
      return changedRR.Name;
    } else if (allMortgagedUtils) {
      let changedUtil = allMortgagedUtils[activeIndex];
      return changedUtil.Name;
    } else if (allMortgagedUtils2) {
      let changedUtil = allMortgagedUtils2[activeIndex];
      return changedUtil.Name;
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {confirmModalView ? (
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
            <h3 className="confirm-text">
              Are you sure you want to buy back {getName()}?
            </h3>
            <div className="confirm-button-container">
              <button onClick={handleOK} className="confirm-button ok">
                CONFIRM
              </button>
              <button onClick={handleClose} className="confirm-button cancel">
                CANCEL
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ConfirmUnMort;
