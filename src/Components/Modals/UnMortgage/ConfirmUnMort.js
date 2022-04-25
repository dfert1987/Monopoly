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
  setUnMortgagedPropName,
  setMortgagedMessage,
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

  const deMessage = () => {
    setMortgagedMessage(false);
    setUnMortgagedPropName();
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

  const handleOK = () => {
    if (allMortgaged !== undefined) {
      let changedProperty = allMortgaged[activeIndex];
      let updatedProperties = properties.map((property) => {
        if (property.Name === changedProperty.Name) {
          return { ...property, mortgaged: false };
        }
        return property;
      });
      setAllMortgaged();
      let updatedMoney = p1Money - changedProperty.mortgage * 1.1;
      setP1Money(updatedMoney);
      let newFreeParking = freeParking + changedProperty.mortgage * 1.1;
      setFreeParking(newFreeParking);
      setProperties(updatedProperties);
      setConfirmModalView(false);
      drum();
      setUnMortgagedPropName(changedProperty.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (allMortgaged2) {
      let changedProperty = allMortgaged2[activeIndex];
      let updatedProperties = properties.map((property) => {
        if (property.Name === changedProperty.Name) {
          return { ...property, mortgaged: false };
        }
        return property;
      });
      setAllMortgaged2();
      let updatedMoney = p2Money - changedProperty.mortgage * 1.1;
      setP2Money(updatedMoney);
      let newFreeParking = freeParking + changedProperty.mortgage * 1.1;
      setFreeParking(newFreeParking);
      setProperties(updatedProperties);
      setConfirmModalView(false);
      drum();
      setUnMortgagedPropName(changedProperty.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (allMortgagedRRs) {
      let changedRR = allMortgagedRRs[activeIndex];
      let updatedRRs = railRoads.map((rr) => {
        if (rr.Name === changedRR.Name) {
          return { ...rr, mortgaged: false };
        }
        return rr;
      });
      setAllMortgagedRRs();
      let updatedMoney = p1Money - changedRR.mortgage * 1.1;
      setP1Money(updatedMoney);
      let newFreeParking = freeParking + changedRR.mortgage * 1.1;
      setFreeParking(newFreeParking);
      setRailRoads(updatedRRs);
      setConfirmModalView(false);
      drum();
      setUnMortgagedPropName(changedRR.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (allMortgagedRRs2) {
      let changedRR = allMortgagedRRs2[activeIndex];
      let updatedRRs = railRoads.map((rr) => {
        if (rr.Name === changedRR.Name) {
          return { ...rr, mortgaged: false };
        }
        return rr;
      });
      setAllMortgagedRRs2();
      let updatedMoney = p2Money - changedRR.mortgage * 1.1;
      setP2Money(updatedMoney);
      let newFreeParking = freeParking + changedRR.mortgage * 1.1;
      setFreeParking(newFreeParking);
      setRailRoads(updatedRRs);
      setConfirmModalView(false);
      drum();
      setUnMortgagedPropName(changedRR.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (allMortgagedUtils) {
      let changedUtil = allMortgagedUtils[activeIndex];
      let updatedUtils = utilities.map((util) => {
        if (util.Name === changedUtil.Name) {
          return { ...util, mortgaged: false };
        }
        return util;
      });
      setAllMortgagedUtils();
      let updatedMoney = p1Money - changedUtil.mortgage * 1.1;
      setP1Money(updatedMoney);
      let newFreeParking = freeParking + changedUtil.mortgage * 1.1;
      setFreeParking(newFreeParking);
      setUtilities(updatedUtils);
      setConfirmModalView(false);
      drum();
      setUnMortgagedPropName(changedUtil.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
    } else if (allMortgagedUtils2) {
      let changedUtil = allMortgagedUtils2[activeIndex];
      let updatedUtils = utilities.map((util) => {
        if (util.Name === changedUtil.Name) {
          return { ...util, mortgaged: false };
        }
        return util;
      });
      setAllMortgagedUtils2();
      let updatedMoney = p2Money - changedUtil.mortgage * 1.1;
      setP2Money(updatedMoney);
      let newFreeParking = freeParking + changedUtil.mortgage * 1.1;
      setFreeParking(newFreeParking);
      setUtilities(updatedUtils);
      setConfirmModalView(false);
      drum();
      setUnMortgagedPropName(changedUtil.Name);
      setMortgagedMessage(true);
      setTimeout(() => {
        deMessage();
      }, 2000);
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
