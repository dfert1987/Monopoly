import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Drum from "../../../Assets/Sounds/drum.mp3";
import "../../Styles/Mortgage.css";

const ConfirmModal = ({
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
  mortgageable,
  mortgageable2,
  setMortgageable2,
  setMortgageable,
  activeIndex,
  setMortgagedPropName,
  setMortgagedMessage,
  setMortgageableUtils,
  setMortgageableRRs,
  setMortgageableRRs2,
  setMortgageableUtils2,
  mortgageableUtils,
  mortgageableUtils2,
  mortgageableRRs,
  mortgageableRRs2,
}) => {
  const [click] = useSound(Click);
  const [drum] = useSound(Drum);

  console.log(railRoads);

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

  const deMessage = () => {
    setMortgagedMessage(false);
    setMortgagedPropName();
  };

  const handleClose = () => {
    setConfirmModalView(false);
    click();
  };

  const handleOK = () => {
    if (mortgageable !== undefined) {
      let changedProperty = mortgageable[activeIndex];
      let updatedProperties = properties.map((property) => {
        if (property.Name === changedProperty.Name) {
          return { ...property, mortgaged: true };
        }
        return property;
      });
      setMortgageable();
      let updatedMoney = p1Money + changedProperty.mortgage;
      setP1Money(updatedMoney);
      setProperties(updatedProperties);
      setConfirmModalView(false);
      drum();
      setMortgagedPropName(changedProperty.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (mortgageable2) {
      let changedProperty = mortgageable2[activeIndex];
      let updatedProperties = properties.map((property) => {
        if (property.Name === changedProperty.Name) {
          return { ...property, mortgaged: true };
        }
        return property;
      });
      setMortgageable2();
      let updatedMoney = p2Money + changedProperty.mortgage;
      setP2Money(updatedMoney);
      setProperties(updatedProperties);
      setConfirmModalView(false);
      drum();
      setMortgagedPropName(changedProperty.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (mortgageableRRs) {
      let changedRR = mortgageableRRs[activeIndex];
      let updatedRRs = railRoads.map((rr) => {
        if (rr.Name === changedRR.Name) {
          return { ...rr, mortgaged: true };
        }
        return rr;
      });
      setMortgageableRRs();
      let updatedMoney = p1Money + changedRR.mortgage;
      setP1Money(updatedMoney);
      setRailRoads(updatedRRs);
      setConfirmModalView(false);
      drum();
      setMortgagedPropName(changedRR.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (mortgageableRRs2) {
      let changedRR = mortgageableRRs2[activeIndex];
      let updatedRRs = railRoads.map((rr) => {
        if (rr.Name === changedRR.Name) {
          return { ...rr, mortgaged: true };
        }
        return rr;
      });
      setMortgageableRRs2();
      let updatedMoney = p2Money + changedRR.mortgage;
      setP2Money(updatedMoney);
      setRailRoads(updatedRRs);
      setConfirmModalView(false);
      drum();
      setMortgagedPropName(changedRR.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (mortgageableUtils) {
      let changedUtil = mortgageableUtils[activeIndex];
      let updatedUtils = utilities.map((util) => {
        if (util.Name === changedUtil.Name) {
          return { ...util, mortgaged: true };
        }
        return util;
      });
      setMortgageableUtils();
      let updatedMoney = p1Money + changedUtil.mortgage;
      setP1Money(updatedMoney);
      setUtilities(updatedUtils);
      setConfirmModalView(false);
      drum();
      setMortgagedPropName(changedUtil.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (mortgageableUtils2) {
      let changedUtils = mortgageableUtils2[activeIndex];
      let updatedUtils = utilities.map((util) => {
        if (util.Name === changedUtils.Name) {
          return { ...util, mortgaged: true };
        }
        return util;
      });
      setMortgageableUtils2();
      let updatedMoney = p1Money + changedUtils.mortgage;
      setP1Money(updatedMoney);
      setUtilities(updatedUtils);
      setConfirmModalView(false);
      drum();
      setMortgagedPropName(changedUtils.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    }
  };

  const getName = () => {
    if (mortgageable !== undefined) {
      let changedProperty = mortgageable[activeIndex];
      return changedProperty.Name;
    } else if (mortgageable2) {
      let changedProperty = mortgageable2[activeIndex];
      return changedProperty.Name;
    } else if (mortgageableRRs) {
      let changedRR = mortgageableRRs[activeIndex];
      return changedRR.Name;
    } else if (mortgageableRRs2) {
      let changedRR = mortgageableRRs2[activeIndex];
      return changedRR.Name;
    } else if (mortgageableUtils) {
      let changedUtil = mortgageableUtils[activeIndex];
      return changedUtil.Name;
    } else if (mortgageableUtils2) {
      let changedUtil = mortgageableUtils2[activeIndex];
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
              Are you sure you want to mortgage {getName()}?
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

export default ConfirmModal;
