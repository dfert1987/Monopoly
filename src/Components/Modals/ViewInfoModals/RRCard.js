import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import ditielogo from "../../../Assets/PropertyImages/ditielogo.png";
import "../../Styles/RailRoadModal.css";

const RRCard = ({
  setRRCard,
  rrCard,
  chosenProp,
  setChosenProp,
  railRoads,
}) => {
  const [close, setClose] = useState(false);
  const [click] = useSound(Click);

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
    setClose(true);
    setRRCard(false);
    setChosenProp();
    click();
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
      let number = railRoads.filter((rr) => rr.ownedP1 === true);
      if (number.length === 1) {
        return "1";
      } else if (number.length === 2) {
        return "2";
      } else if (number.length === 3) {
        return "3";
      } else if (number.length === 4) {
        return "4";
      }
      return null;
    } else if (chosenProp.ownedP2) {
      let number = railRoads.filter((rr) => rr.ownedP2 === true);
      if (number.length === 1) {
        return "1";
      } else if (number.length === 2) {
        return "2";
      } else if (number.length === 3) {
        return "3";
      } else if (number.length === 4) {
        return "4";
      }
      return null;
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {rrCard && !close ? (
        <motion.div
          className="outerModal flex centerFlex"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="innerModal prop"
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
            <h1 className="prop-title">{chosenProp.Name}</h1>
            <div className="cardPage">
              <div className="container">
                <div className="main-card propCard">
                  <div className="outer-banner">
                    <div className="banner">
                      <img
                        className="ditie-logo"
                        src={ditielogo}
                        alt="subway logo"
                      />

                      <h2 className="prop-name">
                        {chosenProp.Name.toUpperCase()}
                      </h2>
                    </div>
                  </div>
                  <div className="all-prop-info">
                    <div className="main-prop-info">
                      <h4 className="rent">{`RENT ¥${chosenProp.rent}`}</h4>
                      <div className="house-container one">
                        <p className="left-side">If 2 Subways are owned</p>
                        <p className="right-side">{`¥${chosenProp.twoRRs}`}</p>
                      </div>
                      <div className="house-container two">
                        <p className="left-side">If 3 Subways are owned</p>
                        <p className="right-side">{`¥${chosenProp.threeRRs}`}</p>
                      </div>
                      <div className="house-container three">
                        <p className="left-side">If 4 Subways are owned</p>
                        <p className="right-side">{`¥${chosenProp.fourRRs}`}</p>
                      </div>
                    </div>
                    <div className="secondary-prop-info">
                      <h4 className="mortgage">{`Mortgage Value: ¥${chosenProp.mortgage}`}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <div className="row">
                  <h4 className="info-title">{`NUMBER OWNED: ${numberOwned()}`}</h4>
                  <h4 className="info-title">{`MORTGAGED: ${mortgage()}`}</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default RRCard;
