import React, { useState, useEffect } from "react";
import MortgageCarousel, { MortgageItem } from "./MortgageCarousel";
import ConfirmModal from "./ConfirmModal";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Mortgage.css";

const MortgageModal = ({
  mortgage,
  setMortgage,
  mortgage2,
  setMortgage2,
  p1Money,
  setP1Money,
  p2Money,
  setP2Money,
  properties,
  setProperties,
}) => {
  const [mortgageable, setMortgageable] = useState();
  const [mortgageable2, setMortgageable2] = useState();
  const [mortgageProp, setMortgageProp] = useState(0);
  const [confirmModalView, setConfirmModalView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mortgagedMessage, setMortgagedMessage] = useState(false);
  const [mortgagedPropName, setMortgagedPropName] = useState();

  useEffect(() => {
    if (mortgage) {
      let p1Options = properties.filter(
        (property) => property.ownedP1 === true && property.mortgaged === false
      );
      setMortgageable(p1Options);
    } else if (mortgage2) {
      let p2Options = properties.filter(
        (property) => property.ownedP2 === true && property.mortgaged === false
      );
      setMortgageable2(p2Options);
    }
  }, [mortgage, mortgage2, properties]);

  const setCarouselItems = () => {
    if (mortgageable) {
      return mortgageable.map((property, index) => {
        return (
          <MortgageItem
            property={property}
            className="mortgage-card"
            key={index}
          >
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${property.color}`}>
                <p className="property-name">{property.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Mortgage Value: </p>
                  <p className="mortgage-amount">{property.mortgage}RMB</p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    } else if (mortgageable2) {
      return mortgageable2.map((property, index) => {
        return (
          <MortgageItem
            property={property}
            className="mortgage-card"
            key={index}
          >
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${property.color}`}>
                <p className="property-name">{property.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Mortgage Value: </p>
                  <p className="mortgage-amount">{property.mortgage}RMB</p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    }
  };

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
    setMortgage(false);
    setMortgage2(false);
    setMortgageable();
    setMortgageable2();
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {mortgage || mortgage2 ? (
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
              <h3 className="mortgage-title">Choose A Property to Mortgage</h3>
              {mortgagedMessage ? (
                <h3 className="mortgaged-message">
                  You Mortgaged {mortgagedPropName}
                </h3>
              ) : null}
              <div className="main-part">
                {mortgageable ? (
                  <>
                    <div className="mortgage-ui">
                      <MortgageCarousel
                        className="carousel-in-pieces mortgage-car"
                        mortgageable={mortgageable}
                        mortgageProp={mortgageProp}
                        setMortgageProp={setMortgageProp}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                      >
                        {setCarouselItems()}
                      </MortgageCarousel>
                    </div>
                    <button
                      className="select-piece mortgage-select"
                      onClick={() => setConfirmModalView(true)}
                    >
                      SELECT
                    </button>
                  </>
                ) : null}
                {mortgageable2 ? (
                  <>
                    <div className="mortgage-ui">
                      <MortgageCarousel
                        className="carousel-in-pieces mortgage-car"
                        mortgageable2={mortgageable2}
                        mortgageProp={mortgageProp}
                        setMortgageProp={setMortgageProp}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                      >
                        {setCarouselItems()}
                      </MortgageCarousel>
                    </div>
                    <button
                      className="select-piece mortgage-select"
                      onClick={() => setConfirmModalView(true)}
                    >
                      SELECT
                    </button>
                  </>
                ) : null}
                {!mortgageable2 && !mortgageable ? (
                  <>
                    <h3 className="no-props-text">
                      You don't have any poroperties to mortgage.
                    </h3>
                  </>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <ConfirmModal
        confirmModalView={confirmModalView}
        setConfirmModalView={setConfirmModalView}
        p1Money={p1Money}
        p2Money={p2Money}
        setP1Money={setP1Money}
        setP2Money={setP2Money}
        properties={properties}
        setProperties={setProperties}
        mortgageable={mortgageable}
        mortgageable2={mortgageable2}
        mortgageProp={mortgageProp}
        setMortgageable={setMortgageable}
        setMortgageable2={setMortgageable2}
        activeIndex={activeIndex}
        mortgagedPropName={mortgagedPropName}
        setMortgagedPropName={setMortgagedPropName}
        setMortgagedMessage={setMortgagedMessage}
      />
    </>
  );
};

export default MortgageModal;
