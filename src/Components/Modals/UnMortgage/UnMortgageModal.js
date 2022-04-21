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
  const [chooseType, setChooseType] = useState(true);
  const [mortProps, setMortProps] = useState(false);
  const [mortRRs, setMortRRs] = useState(false);
  const [mortUtils, setMortUtils] = useState(false);
  const [allMortgaged, setAllMortgaged] = useState();
  const [allMortgagedRRs, setAllMortgagedRRs] = useState();
  const [allMortgagedUtils, setAllMortgagedUtils] = useState();
  const [allMortgaged2, setAllMortgaged2] = useState();
  const [allMortgagedRRs2, setAllMortgagedRRs2] = useState();
  const [allMortgagedUtils2, setAllMortgagedUtils2] = useState();

  const [clickSound] = useSound(Click);

  useEffect(() => {
    if (unMortgage && mortProps) {
      let p1Options = properties.filter(
        (property) => property.ownedP1 === true && property.mortgaged === true
      );
      setAllMortgaged(p1Options);
    } else if (unMortgage && mortRRs) {
      let p1RROptions = railRoads.filter(
        (rr) => rr.ownedP1 === true && rr.mortgaged === true
      );
      setAllMortgagedRRs(p1RROptions);
    } else if (unMortgage && mortUtils) {
      let p1UtilOptions = utilities.filter(
        (util) => util.ownedP1 === true && util.mortgaged === true
      );
      setAllMortgagedUtils(p1UtilOptions);
    } else if (unMortgage2 && mortProps) {
      let p2Options = properties.filter(
        (property) => property.ownedP2 === true && property.mortgaged === true
      );
      setAllMortgaged2(p2Options);
    } else if (unMortgage2 && mortRRs) {
      let p2RROptions = railRoads.filter(
        (rr) => rr.ownedP2 === true && rr.mortgaged === true
      );
      setAllMortgagedRRs2(p2RROptions);
    } else if (unMortgage2 && mortUtils) {
      let p2UtilOptions = utilities.filter(
        (util) => util.ownedP2 === true && util.mortgaged === true
      );
      setAllMortgagedUtils2(p2UtilOptions);
    }
  }, [
    unMortgage,
    unMortgage2,
    properties,
    railRoads,
    utilities,
    mortProps,
    mortRRs,
    mortUtils,
  ]);

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
    setUnMortgage(false);
    setUnMortgage2(false);
    clickSound();
  };

  const showProps = () => {
    setChooseType(false);
    setMortProps(true);
    clickSound();
  };

  const showRRs = () => {
    setChooseType(false);
    setMortRRs(true);
    clickSound();
  };

  const showUtils = () => {
    setChooseType(false);
    setMortUtils(true);
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
              {chooseType ? (
                <div className="main-choice-container">
                  <h3 className="unMortgage-title">
                    Which type of asset do you want to buy back from the bank?
                  </h3>
                  <div className="choices-container">
                    <button className="choice-button" onClick={showProps}>
                      PROPERTIES
                    </button>
                    <button className="choice-button" onClick={showRRs}>
                      RAILROADS
                    </button>
                    <button className="choice-button" onClick={showUtils}>
                      UTILITIES
                    </button>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default UnMortgageModal;
