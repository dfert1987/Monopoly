import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ditieLogo from "../../../Assets/PropertyImages/ditielogo.png";
import "../../Styles/Must.css";

export const MustModal = ({
  rent,
  setRent,
  p1MoneyAvailable,
  setP1MoneyAvailable,
  p2MoneyAvailable,
  setP2MoneyAvailable,
  mustMortgage,
  setMustMortgage,
  setMustMortgage2,
  mustMortgage2,
  gameOver,
  setGameOver,
  gameOver2,
  setGameOver2,
  properties,
  setProperties,
  utilities,
  setUtilities,
  railRoads,
  setRailRoads,
  p2Money,
  p1Money,
  setP1Money,
  setP2Money,
  p1MortProps,
  p2MortProps,
  setP1MortProps,
  setP2MortProps,
  p1MortRailRoads,
  setP1MortRailroads,
  p2MortRailRoads,
  setP2MortRailRoads,
  p1MortUtils,
  p2MortUtils,
  setP1MortUtils,
  setP2MortUtils,
}) => {
  const [enoughMoney, setEnoughMoney] = useState(false);
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
    setMustMortgage(false);
    setMustMortgage2(false);
  };

  const needed = () => {
    if (mustMortgage) {
      return rent - p1Money;
    } else if (mustMortgage2) {
      return rent - p2Money;
    }
    return null;
  };

  const getProperties = () => {
    if (mustMortgage && p1MortProps.length > 0) {
      return p1MortProps.map((property, index) => {
        return (
          <div className="container-prop">
            <p className="propname">{property.Name}</p>
            <div className="prop-card" id={index}>
              <div className={`top-prop ${property.color}`}></div>
              <div className="white-prop"></div>
            </div>
          </div>
        );
      });
    } else if (mustMortgage2 && p2MortProps.length > 0) {
      return p2MortProps.map((property, index) => {
        return (
          <div className="container-prop">
            <p className="propname">{property.Name}</p>
            <div className="prop-card" id={index}>
              <div className={`top-prop ${property.color}`}></div>
              <div className="white-prop"></div>
            </div>
          </div>
        );
      });
    }
  };

  const getRRs = () => {
    if (mustMortgage && p1MortRailRoads.length > 0) {
      return p1MortRailRoads.map((rr, index) => {
        return (
          <div className="container-prop">
            <p className="propname">{rr.Name}</p>
            <div className="rr-card" id={index}>
              <div className="top-rr"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={ditieLogo}
                  alt="subway-logo"
                />
              </div>
            </div>
          </div>
        );
      });
    } else if (mustMortgage && p2MortRailRoads.length > 0) {
      return p2MortRailRoads.map((rr, index) => {
        return (
          <div className="container-prop">
            <p className="propname">{rr.Name}</p>
            <div className="rr-card" id={index}>
              <div className="top-rr"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={ditieLogo}
                  alt="subway-logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const getUtils = () => {
    if (mustMortgage && p1MortUtils.length > 0) {
      return p1MortUtils.map((util, index) => {
        return (
          <div className="container-prop">
            <p className="propname">{util.Name}</p>
            <div className="rr-card" id={index}>
              <div className="top-rr"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={util.bannerImage}
                  alt="subway-logo"
                />
              </div>
            </div>
          </div>
        );
      });
    } else if (mustMortgage && p2MortUtils.length > 0) {
      return p2MortUtils.map((util, index) => {
        return (
          <div className="container-prop">
            <p className="propname">{util.Name}</p>
            <div className="rr-card" id={index}>
              <div className="top-rr"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={util.bannerImage}
                  alt="subway-logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {mustMortgage || mustMortgage2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPay"
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
              <div className="main-area">
                <div className="text-container-money">
                  <h2 className="must-instructions">
                    You don't have enough money to pay rent! You need
                    <span className="red-text"> {needed()}rmb more.</span>
                  </h2>
                  <h4 className="must-instructions explain">
                    Click assets to mortgage them if you wish to continue
                    playing, or you can concede.
                  </h4>
                  <div className="asset-section">
                    {getProperties()}
                    {getRRs()}
                    {getUtils()}
                  </div>
                  <div className="button-area">
                    <button className="must-button" disabled={!enoughMoney}>
                      COMPLETE
                    </button>
                    <button className="must-button">CONCEDE</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MustModal;
