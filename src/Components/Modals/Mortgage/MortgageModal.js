import React, { useState, useEffect } from "react";
import MortgageCarousel, { MortgageItem } from "./MortgageCarousel";
import ConfirmModal from "./ConfirmModal";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Click from "../../../Assets/Sounds/click.mp3";
import useSound from "use-sound";
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
  utilities,
  railRoads,
  setUtilities,
  setRailRoads,
  setProperties,
}) => {
  const [mortgageable, setMortgageable] = useState();
  const [mortgageable2, setMortgageable2] = useState();
  const [mortgageableRRs, setMortgageableRRs] = useState();
  const [mortgageableRRs2, setMortgageableRRs2] = useState();
  const [mortgageableUtils, setMortgageableUtils] = useState();
  const [mortgageableUtils2, setMortgageableUtils2] = useState();
  const [mortgageProp, setMortgageProp] = useState(0);
  const [confirmModalView, setConfirmModalView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mortgagedMessage, setMortgagedMessage] = useState(false);
  const [mortgagedPropName, setMortgagedPropName] = useState();
  const [chooseType, setChooseType] = useState(true);
  const [mortProps, setMortProps] = useState(false);
  const [mortRRs, setMortRRs] = useState(false);
  const [mortUtils, setMortUtils] = useState(false);

  const [clickSound] = useSound(Click);

  useEffect(() => {
    if (mortgage && mortProps) {
      let p1Options = properties.filter(
        (property) => property.ownedP1 === true && property.mortgaged === false
      );
      setMortgageable(p1Options);
    } else if (mortgage && mortRRs) {
      let p1RROptions = railRoads.filter(
        (rr) => rr.ownedP1 === true && rr.mortgaged === false
      );
      setMortgageableRRs(p1RROptions);
    } else if (mortgage && mortUtils) {
      let p1UtilOptions = utilities.filter(
        (util) => util.ownedP1 === true && util.mortgaged === false
      );
      setMortgageableUtils(p1UtilOptions);
    } else if (mortgage2 && mortProps) {
      let p2Options = properties.filter(
        (property) => property.ownedP2 === true && property.mortgaged === false
      );
      setMortgageable2(p2Options);
    } else if (mortgage2 && mortRRs) {
      let p2RROptions = railRoads.filter(
        (rr) => rr.ownedP2 === true && rr.mortgaged === false
      );
      setMortgageableRRs2(p2RROptions);
    } else if (mortgage2 && mortUtils) {
      let p2UtilOptions = utilities.filter(
        (util) => util.ownedP2 === true && util.mortgaged === false
      );
      setMortgageableUtils2(p2UtilOptions);
    }
  }, [
    mortgage,
    mortgage2,
    properties,
    railRoads,
    utilities,
    mortProps,
    mortRRs,
    mortUtils,
  ]);

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
    } else if (mortgageableRRs) {
      return mortgageableRRs.map((rr, index) => {
        return (
          <MortgageItem property={rr} className="mortgage-card" key={index}>
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${rr.color}`}>
                <p className="property-name">{rr.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Mortgage Value: </p>
                  <p className="mortgage-amount">{rr.mortgage}RMB</p>
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

  const handleClose = () => {
    setMortgage(false);
    setMortgage2(false);
    setMortgageable();
    setMortgageable2();
    setChooseType(true);
    setMortProps(false);
    setMortUtils(false);
    setMortRRs(false);
    clickSound();
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
              {chooseType ? (
                <div className="main-choice-container">
                  <h3 className="choice-text">
                    Which type of asset would you like to mortgage?
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
              ) : (
                <>
                  <h3 className="mortgage-title">
                    Choose an Asset to Mortgage
                  </h3>
                  {mortgagedMessage ? (
                    <h3 className="mortgaged-message">
                      You Mortgaged {mortgagedPropName}.
                    </h3>
                  ) : null}
                  <div className="main-part">
                    {mortgageableUtils2 &&
                    mortgageableUtils2.length &&
                    mortUtils ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={mortgageableUtils2}
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
                    {mortgageableUtils &&
                    mortgageableUtils.length &&
                    mortUtils ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={mortgageableUtils}
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
                    {mortgageableRRs2 && mortgageableRRs2.length && mortRRs ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={mortgageableRRs2}
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
                    {mortgageableRRs && mortgageableRRs.length && mortRRs ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={mortgageableRRs}
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
                    {mortgageable && mortgageable.length && mortProps ? (
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
                    {mortgageable2 && mortgageable2.length && mortProps ? (
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
                    {(!mortgageable2 || !mortgageable2.length) &&
                    (!mortgageable || !mortgageable.length) &&
                    mortProps ? (
                      <>
                        <h3 className="no-props-text">
                          You don't have any poroperties to mortgage.
                        </h3>
                      </>
                    ) : null}
                    {(!mortgageableRRs || !mortgageableRRs.length) &&
                    (!mortgageableRRs2 || !mortgageableRRs2.length) &&
                    mortRRs ? (
                      <>
                        <h3 className="no-props-text">
                          You don't have any railroads to mortgage.
                        </h3>
                      </>
                    ) : null}
                    {(!mortgageableUtils || !mortgageableUtils.length) &&
                    (!mortgageableUtils2 || !mortgageableUtils2.length) &&
                    mortUtils ? (
                      <>
                        <h3 className="no-props-text">
                          You don't have any Utilities to mortgage.
                        </h3>
                      </>
                    ) : null}
                  </div>
                </>
              )}
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
        railRoads={railRoads}
        setRailRoads={setRailRoads}
        utilities={utilities}
        setUtilities={setUtilities}
        mortgageable={mortgageable}
        mortgageable2={mortgageable2}
        mortgageableRRs={mortgageableRRs}
        mortgageableRRs2={mortgageableRRs2}
        mortgageableUtils={mortgageableUtils}
        mortgageableUtils2={mortgageableUtils2}
        mortgageProp={mortgageProp}
        setMortgageable={setMortgageable}
        setMortgageable2={setMortgageable2}
        setMortgageableRRs={setMortgageableRRs}
        setMortgageableRRs2={setMortgageableRRs2}
        setMortgageableUtils={setMortgageableUtils}
        setMortgageableUtils2={setMortgageableUtils2}
        activeIndex={activeIndex}
        mortgagedPropName={mortgagedPropName}
        setMortgagedPropName={setMortgagedPropName}
        setMortgagedMessage={setMortgagedMessage}
        setChooseType={setChooseType}
        setMortUtils={setMortUtils}
        setMortProps={setMortProps}
        setMortRRs={setMortRRs}
      />
    </>
  );
};

export default MortgageModal;
