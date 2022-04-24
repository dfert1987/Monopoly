import React, { useState, useEffect } from "react";
import MortgageCarousel, { MortgageItem } from "../Mortgage/MortgageCarousel";
import { ConfirmUnMort } from "./ConfirmUnMort";
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
  p1Money,
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
  const [mortgageProp, setMortgageProp] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allMortgagedUtils2, setAllMortgagedUtils2] = useState();
  const [mortgagedMessage, setMortgagedMessage] = useState(false);
  const [unMortgagedPropName, setUnMortgagePropName] = useState();
  const [confirmModalView, setConfirmModalView] = useState(false);

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

  const setCarouselItems = () => {
    if (allMortgaged) {
      return allMortgaged.map((property, index) => {
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
                  <p className="mortgage-amount">Buyback Cost: </p>
                  <p className="mortgage-amount">
                    {property.mortgage * 0.1 + property.mortgage}RMB
                  </p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    } else if (allMortgaged2) {
      return allMortgaged2.map((property, index) => {
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
                  <p className="mortgage-amount">Buyback Cost: </p>
                  <p className="mortgage-amount">
                    {property.mortgage * 0.1 + property.mortgage}RMB
                  </p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    } else if (allMortgagedRRs) {
      return allMortgagedRRs.map((rr, index) => {
        return (
          <MortgageItem property={rr} className="mortgage-card" key={index}>
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${rr.color}`}>
                <p className="property-name">{rr.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Buyback Cost: </p>
                  <p className="mortgage-amount">
                    {rr.mortgage * 0.1 + rr.mortgage}RMB
                  </p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    } else if (allMortgagedRRs2) {
      return allMortgagedRRs2.map((rr, index) => {
        return (
          <MortgageItem property={rr} className="mortgage-card" key={index}>
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${rr.color}`}>
                <p className="property-name">{rr.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Buyback Cost: </p>
                  <p className="mortgage-amount">
                    {rr.mortgage * 0.1 + rr.mortgage}RMB
                  </p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    } else if (allMortgagedUtils) {
      return allMortgagedUtils.map((util, index) => {
        return (
          <MortgageItem property={util} className="mortgage-card" key={index}>
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${util.color}`}>
                <p className="property-name">{util.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Buyback Cost: </p>
                  <p className="mortgage-amount">
                    {util.mortgage * 0.1 + util.mortgage}RMB
                  </p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    } else if (allMortgagedUtils2) {
      return allMortgagedUtils2.map((util, index) => {
        return (
          <MortgageItem property={util} className="mortgage-card" key={index}>
            <div className="mortgage-container">
              <div className={`top-square mortgage-top ${util.color}`}>
                <p className="property-name">{util.Name}</p>
              </div>
              <div className="white-part-mortgage">
                <div className="mortgage-text-container">
                  <p className="mortgage-amount">Buyback Cost: </p>
                  <p className="mortgage-amount">
                    {util.mortgage * 0.1 + util.mortgage}RMB
                  </p>
                </div>
              </div>
            </div>
          </MortgageItem>
        );
      });
    }
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
              ) : (
                <>
                  <h3 className="mortgage-title">
                    Choose an Asset to Buy Back
                  </h3>
                  {mortgagedMessage ? (
                    <h3 className="mortgaged-message">
                      You Mortgaged {unMortgagedPropName}.
                    </h3>
                  ) : null}
                  <div className="main-part">
                    {allMortgagedUtils2 &&
                    allMortgagedUtils2.length &&
                    mortUtils ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={allMortgagedUtils2}
                            setMortgageProp={setMortgageProp}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                          >
                            {setCarouselItems()}
                          </MortgageCarousel>
                        </div>
                        <button className="select-piece mortgage-select">
                          SELECT
                        </button>
                      </>
                    ) : null}
                    {allMortgagedUtils &&
                    allMortgagedUtils.length &&
                    mortUtils ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={allMortgagedUtils}
                            setMortgageProp={setMortgageProp}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                          >
                            {setCarouselItems()}
                          </MortgageCarousel>
                        </div>
                        <button className="select-piece mortgage-select">
                          SELECT
                        </button>
                      </>
                    ) : null}
                    {allMortgaged && allMortgaged.length && mortProps ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={allMortgaged}
                            setMortgageProp={setMortgageProp}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                          >
                            {setCarouselItems()}
                          </MortgageCarousel>
                        </div>
                        <button className="select-piece mortgage-select">
                          SELECT
                        </button>
                      </>
                    ) : null}
                    {allMortgaged2 && allMortgaged2.length && mortProps ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={allMortgaged2}
                            setMortgageProp={setMortgageProp}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                          >
                            {setCarouselItems()}
                          </MortgageCarousel>
                        </div>
                        <button className="select-piece mortgage-select">
                          SELECT
                        </button>
                      </>
                    ) : null}
                    {allMortgagedRRs2 && allMortgagedRRs2.length && mortRRs ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={allMortgagedRRs2}
                            setMortgageProp={setMortgageProp}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                          >
                            {setCarouselItems()}
                          </MortgageCarousel>
                        </div>
                        <button className="select-piece mortgage-select">
                          SELECT
                        </button>
                      </>
                    ) : null}
                    {allMortgagedRRs && allMortgagedRRs.length && mortRRs ? (
                      <>
                        <div className="mortgage-ui">
                          <MortgageCarousel
                            className="carousel-in-pieces mortgage-car"
                            mortgageable={allMortgagedRRs}
                            setMortgageProp={setMortgageProp}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                          >
                            {setCarouselItems()}
                          </MortgageCarousel>
                        </div>
                        <button className="select-piece mortgage-select">
                          SELECT
                        </button>
                      </>
                    ) : null}
                    {(!allMortgaged2 || !allMortgaged2.length) &&
                    (!allMortgaged || !allMortgaged.length) &&
                    mortProps ? (
                      <>
                        <h3 className="no-props-text">
                          You don't have any mortgaged properties.
                        </h3>
                      </>
                    ) : null}
                    {(!allMortgagedUtils2 || !allMortgagedUtils2.length) &&
                    (!allMortgagedUtils || !allMortgagedUtils.length) &&
                    mortUtils ? (
                      <>
                        <h3 className="no-props-text">
                          You don't have any mortgaged utilities.
                        </h3>
                      </>
                    ) : null}
                    {(!allMortgagedRRs2 || !allMortgagedRRs2.length) &&
                    (!allMortgagedRRs || !allMortgagedRRs.length) &&
                    mortRRs ? (
                      <>
                        <h3 className="no-props-text">
                          You don't have any mortgaged railroads.
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
      <ConfirmUnMort
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
        allMortgaged={allMortgaged}
        setAllMortgaged={setAllMortgaged}
        allMortgaged2={setAllMortgaged2}
        setAllMortgaged2={setAllMortgaged2}
        allMortgagedRRs={allMortgagedRRs}
        allMortgagedRRs2={allMortgagedRRs2}
        allMortgagedUtils={allMortgagedUtils}
        setAllMortgagedUtils2={setAllMortgagedUtils2}
        allMortgagedUtils2={allMortgagedUtils2}
        setAllMortgagedRRs={setAllMortgagedRRs}
        setAllMortgagedRRs2={setAllMortgagedRRs2}
        setAllMortgagedUtils={setAllMortgagedUtils}
        freeParking={freeParking}
        setFreeParking={setFreeParking}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default UnMortgageModal;
