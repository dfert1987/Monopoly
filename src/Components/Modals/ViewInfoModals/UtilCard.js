import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jug from "../../../Assets/PropertyImages/jug.png";
import mop from "../../../Assets/PropertyImages/mopAyi.png";
import "../../Styles/RailRoadModal.css";

const UtilCard = ({
  setUtilCard,
  utilCard,
  chosenProp,
  setChosenProp,
  utilities,
}) => {
  const [close, setClose] = useState(false);
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

  const image = () => {
    if (chosenProp.Name === "Water Delivery Man") {
      return <img className="bannerPic" alt="water jug" src={jug} />;
    } else if (chosenProp.Name === "Ayi Services") {
      return <img className="bannerPic" alt="mop" src={mop} />;
    }
    return null;
  };

  const handleClose = (e) => {
    e.preventDefault();
    setClose(true);
    setUtilCard(false);
    setChosenProp();
    setClose(false);
  };

  const mortgage = () => {
    if (chosenProp.mortgaged) {
      return "Yes";
    }
    return "No";
  };

  const numberOwned = () => {
    if (chosenProp.ownedP1) {
      let number = utilities.filter((util) => util.ownedP1 === true);
      if (number.length === 1) {
        return "1";
      } else if (number.length === 2) {
        return "2";
      }
      return null;
    } else if (chosenProp.ownedP2) {
      let number = utilities.filter((util) => util.ownedP2 === true);
      if (number.length === 1) {
        return "1";
      } else if (number.length === 2) {
        return "2";
      }
      return null;
    }
    return null;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {utilCard && !close ? (
        <motion.div
          className="outerModal flex centerFlex"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="innerModal util"
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
            <div className="main-card util">
              <div className="outer-banner rail">
                <div className="banner">
                  {image()}
                  <h2 className="prop-name rr">
                    {chosenProp.Name.toUpperCase()}
                  </h2>
                </div>
              </div>
              <div className="all-prop-info">
                <div className="main-prop-info">
                  <div className="rent1Container">
                    <p className="rent1">
                      If one "Utility" is owned rent is 4 times the amount shown
                      on dice.
                    </p>
                  </div>
                  <div className="rent2Container">
                    <p className="rent2">
                      If both "Utilities" are owned rent is 10 times the amount
                      shown on dice.
                    </p>
                  </div>
                </div>
                <div className="secondary-prop-info">
                  <h4 className="mortgage">{`Mortgage Value: ¥${chosenProp.mortgage}`}</h4>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <div className="row utils">
                <h4 className="info-title">{`NUMBER OWNED: ${numberOwned()}`}</h4>
                <h4 className="info-title">{`MORTGAGED: ${mortgage()}`}</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default UtilCard;
