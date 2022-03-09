import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/BuildModal.css";

const BuildModal = ({
  houseModal,
  houseModal2,
  setHouseModal,
  setHouseModal2,
  selectedGroup,
  selectedGroup2,
  setSelectedGroup,
  setSelectedGroup2,
  properties,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
}) => {
  const handleClose = (e) => {
    e.preventDefault();
    setHouseModal2(false);
    setHouseModal(false);
  };

  console.log(houseModal, selectedGroup);

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

  const PropCards = () => {
    if (houseModal) {
      let propsToBuild = properties.filter(
        (property) => property.color === selectedGroup
      );
      let card = propsToBuild.map((n) => {
        return (
          <div className="main-card propCard">
            <div className="outer-banner">
              <div className={`banner ${n.color}`}>
                <h2 className="prop-name"> {n.Name.toUpperCase()}</h2>
              </div>
            </div>
          </div>
        );
      });
      return card;
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {houseModal || houseModal2 ? (
          <motion.div
            className="owned-props-container outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="innerModalProps flex flexColumn"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="button-row">
                <button className="close-button-x" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon" icon={faXmark} />
                </button>
              </div>
              <h1 className="title">Build Hutongs/Apartments</h1>
              <div className="property-cards-container">
                <PropCards />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default BuildModal;
