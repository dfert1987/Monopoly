import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/PropertyModal.css";

const PropertyCard = ({
  setPropertyCard,
  propertyCard,
  chosenProp,
  setChosenProp,
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

  const handleClose = (e) => {
    e.preventDefault();
    setClose(true);
    setPropertyCard(false);
    setChosenProp();
    setClose(false);
  };

  const monop = () => {
    if (chosenProp.isMonopoly) {
      return "Yes";
    } else {
      return "No";
    }
  };

  const houses = () => {
    if (chosenProp.hasOneHouse && !chosenProp.hasTwoHouses) {
      return "1";
    } else if (chosenProp.hasTwoHouses && !chosenProp.hasThreeHouses) {
      return "2";
    } else if (chosenProp.hasThreeHouses && !chosenProp.hasFourHouses) {
      return "3";
    } else if (chosenProp.hasFourHouses && !chosenProp.hasHotel) {
      return "4";
    } else return "None";
  };

  const hotel = () => {
    if (chosenProp.hasHotel) {
      return "Yes";
    }
    return "No";
  };

  const mortgage = () => {
    if (chosenProp.mortgaged) {
      return "Yes";
    }
    return "No";
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {propertyCard && !close ? (
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
              <h1 className="prop-title">{chosenProp.Name}</h1>
              <div className="cardPage">
                <div className="container">
                  <div className="main-card propCard">
                    <div className="outer-banner">
                      <div className={`banner ${chosenProp.color}`}>
                        <h2 className="prop-name">
                          {chosenProp.Name.toUpperCase()}
                        </h2>
                      </div>
                    </div>
                    <div className="all-prop-info">
                      <div className="main-prop-info">
                        <h4 className="rent">{`RENT ¥${chosenProp.rent}`}</h4>
                        <div className="house-container one">
                          <p className="left-side">With 1 House</p>
                          <p className="right-side">{`¥${chosenProp.oneHouse}`}</p>
                        </div>
                        <div className="house-container two">
                          <p className="left-side">With 2 Houses</p>
                          <p className="right-side">{`¥${chosenProp.twoHouses}`}</p>
                        </div>
                        <div className="house-container three">
                          <p className="left-side">With 3 Houses</p>
                          <p className="right-side">{`¥${chosenProp.threeHouses}`}</p>
                        </div>
                        <div className="house-container four">
                          <p className="left-side">With 4 Houses</p>
                          <p className="right-side">{`¥${chosenProp.fourHouses}`}</p>
                        </div>
                        <div className="house-container hotel">
                          <p className="left-side">With Hotel</p>
                          <p className="right-side">{`¥${chosenProp.hotel}`}</p>
                        </div>
                      </div>
                      <div className="secondary-prop-info">
                        <h4 className="mortgage">{`Mortgage Value: ¥${chosenProp.mortgage}`}</h4>
                        <p className="houses">{`Houses Cost ¥${chosenProp.buidlingCost}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-info">
                  <div className="row">
                    <h4 className="info-title">{`MONOPOLY: ${monop()}`}</h4>
                    <h4 className="info-title">{`HOUSE(S): ${houses()}`}</h4>
                  </div>
                  <div className="row">
                    <h4 className="info-title">{`HOTEL: ${hotel()}`}</h4>
                    <h4 className="info-title">{`MORTGAGED: ${mortgage()}`}</h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PropertyCard;
