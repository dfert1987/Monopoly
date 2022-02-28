import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ditielogo from "../../Assets/PropertyImages/ditielogo.png";
import "../Styles/RailRoadModal.css";

const RailRoadModal = ({
  setRRModal,
  setRRModal2,
  rrModal,
  rrModal2,
  onRR,
  onRR2,
  setOnRR,
  setOnRR2,
  railRoads,
  setRailRoads,
  p1Money,
  setP1Money,
  p2Money,
  setP2Money,
  setViewPurchaseRR,
  setViewPurchaseRR2,
}) => {
  const [close, setClose] = useState(false);
  const [inSufficientFunds, setInsufficientFunds] = useState(false);

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
    setRRModal(false);
    setRRModal2(false);
    setClose(false);
  };

  useEffect(() => {
    if (rrModal && !rrModal2 && close === true) {
      setRRModal(false);
    } else if (rrModal2 && !rrModal2 && close === true) {
      setRRModal2(false);
    }
  }, [close, rrModal, rrModal2, setRRModal, setRRModal2]);

  const viewInsufficient = () => {
    if (!inSufficientFunds) {
      return "invisible";
    } else if (inSufficientFunds) {
      return "visible";
    }
  };

  const rrImage = () => {
    if (onRR && rrModal && !rrModal2 && close === false) {
      return (
        <div className="image-container">
          <img className="property-image" alt="property" src={onRR.image} />
        </div>
      );
    } else if (onRR2 && rrModal2 && !rrModal && close === false) {
      return (
        <div className="image-container">
          <img className="property-image" alt="property" src={onRR2.image} />
        </div>
      );
    }
    return null;
  };

  const frontCard = () => {
    if (onRR && rrModal && !rrModal2 && close === false) {
      return (
        <div className="main-card">
          <div className="outer-banner rail">
            <div className="banner">
              <img className="ditie-logo" src={ditielogo} alt="subway logo" />
              <h2 className="prop-name rr">{onRR.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <h4 className="rent">{`RENT ¥${onRR.rent}`}</h4>
              <div className="house-container one">
                <p className="left-side">If 2 Subways are owned</p>
                <p className="right-side">{`¥${onRR.twoRRs}`}</p>
              </div>
              <div className="house-container two">
                <p className="left-side">If 3 Subways are owned</p>
                <p className="right-side">{`¥${onRR.threeRRs}`}</p>
              </div>
              <div className="house-container three">
                <p className="left-side">If 4 Subways are owned</p>
                <p className="right-side">{`¥${onRR.fourRRs}`}</p>
              </div>
            </div>
            <div className="secondary-prop-info">
              <h4 className="mortgage">{`Mortgage Value: ¥${onRR.mortgage}`}</h4>
            </div>
          </div>
        </div>
      );
    } else if (onRR2 && rrModal2 && !rrModal && close === false) {
      return (
        <div className="main-card">
          <div className={`outer-banner`}>
            <div className={`banner ${onRR2.color}`}>
              <h2 className="prop-name">{onRR2.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <h4 className="rent">{`RENT ¥${onRR2.rent}`}</h4>
              <div className="house-container one">
                <p className="left-side">If 2 Subways are owned</p>
                <p className="right-side">{`¥${onRR2.twoRRs}`}</p>
              </div>
              <div className="house-container two">
                <p className="left-side">If 3 Subways are owned</p>
                <p className="right-side">{`¥${onRR2.threeRRs}`}</p>
              </div>
              <div className="house-container three">
                <p className="left-side">If 4 Subways are owned</p>
                <p className="right-side">{`¥${onRR2.fourRRs}`}</p>
              </div>
            </div>
            <div className="secondary-prop-info">
              <h4 className="mortgage">{`Mortgage Value: ¥${onRR2.mortgage}`}</h4>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const buyRR = (e) => {
    e.preventDefault();
    if (railRoads && onRR && rrModal && !rrModal2 && close === false) {
      railRoads.map((obj) => {
        if (obj && obj.Name === onRR.Name && obj.Price <= p1Money) {
          obj.ownedP1 = true;
          setP1Money(p1Money - obj.Price);
          handleClose(e);
          setViewPurchaseRR(true);
          return railRoads;
        } else if (obj.Price > p1Money) {
          setInsufficientFunds(true);
        }
        return null;
      });
    } else if (railRoads && onRR2 && rrModal2 && !rrModal && close === false) {
      railRoads.map((obj) => {
        if (obj && obj.Name === onRR2.Name && obj.Price <= p2Money) {
          obj.ownedP2 = true;
          setP2Money(p2Money - obj.Price);
          handleClose(e);
          setViewPurchaseRR2(true);
          return railRoads;
        } else if (obj.Price > p2Money) {
          setInsufficientFunds(true);
        }
        return null;
      });
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {(rrModal === true && !close) || (rrModal2 === true && !close) ? (
        <motion.div
          className="outerModal flex centerFlex"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="innerModal flex flexColumn"
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
            <h2 className="title">FOR SALE</h2>
            <div className="main-row">
              <div>{frontCard()}</div>
              <div>{rrImage()}</div>
            </div>
            <h4 className={viewInsufficient()}>INSUFFICIENT FUNDS</h4>
            <div className="options-container">
              <button className="buy-button" onClick={buyRR}>
                PURCHASE
              </button>
              <button className="pass-button" onClick={handleClose}>
                PASS
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default RailRoadModal;
