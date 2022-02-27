import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PropertyModal.css";

const PropertyModal = ({
  setPropertyModal1,
  setPropertyModal2,
  propertyModal1,
  propertyModal2,
  onProp,
  onProp2,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  properties,
  setViewPurchase,
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

  const viewInsufficient = () => {
    if (!inSufficientFunds) {
      return "invisible";
    } else if (inSufficientFunds) {
      return "visible";
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setClose(true);
    setPropertyModal1(false);
    setPropertyModal2(false);
    setClose(false);
  };

  useEffect(() => {
    if (propertyModal1 && !propertyModal2 && close === true) {
      setPropertyModal1(false);
    } else if (propertyModal2 && !propertyModal1 && close === true) {
      setPropertyModal2(false);
    }
  }, [
    close,
    propertyModal1,
    setPropertyModal1,
    propertyModal2,
    setPropertyModal2,
  ]);

  const buyProperty = (e) => {
    e.preventDefault();
    if (
      properties &&
      onProp &&
      propertyModal1 &&
      !propertyModal2 &&
      close === false
    ) {
      properties.map((obj) => {
        if (obj && obj.Name === onProp.Name && obj.Price <= p1Money) {
          obj.ownedP1 = true;
          setP1Money(p1Money - obj.Price);
          handleClose(e);
          setViewPurchase(true);
          return properties;
        } else if (obj.Price > p1Money) {
          setInsufficientFunds(true);
        }
        return null;
      });
    } else if (
      properties &&
      onProp2 &&
      propertyModal2 &&
      !propertyModal1 &&
      close === false
    ) {
      properties.map((obj) => {
        if (obj && obj.Name === onProp2.Name && obj.Price <= p2Money) {
          obj.ownedP2 = true;
          setP2Money(p2Money - obj.Price);
          handleClose(e);
          setViewPurchase(true);

          return properties;
        } else if (obj.Price > p2Money) {
          setInsufficientFunds(true);
        }
        return null;
      });
    }
  };

  const frontCard = () => {
    if (onProp && propertyModal1 && !propertyModal2 && close === false) {
      return (
        <div className="main-card">
          <div className={`outer-banner`}>
            <div className={`banner ${onProp.color}`}>
              <h2 className="prop-name">{onProp.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <h4 className="rent">{`RENT ¥${onProp.rent}`}</h4>
              <div className="house-container one">
                <p className="left-side">With 1 House</p>
                <p className="right-side">{`¥${onProp.oneHouse}`}</p>
              </div>
              <div className="house-container two">
                <p className="left-side">With 2 Houses</p>
                <p className="right-side">{`¥${onProp.twoHouses}`}</p>
              </div>
              <div className="house-container three">
                <p className="left-side">With 3 Houses</p>
                <p className="right-side">{`¥${onProp.threeHouses}`}</p>
              </div>
              <div className="house-container four">
                <p className="left-side">With 4 Houses</p>
                <p className="right-side">{`¥${onProp.fourHouses}`}</p>
              </div>
              <div className="house-container hotel">
                <p className="left-side">With Hotel</p>
                <p className="right-side">{`¥${onProp.hotel}`}</p>
              </div>
            </div>
            <div className="secondary-prop-info">
              <h4 className="mortgage">{`Mortgage Value: ¥${onProp.mortgage}`}</h4>
              <p className="houses">{`Houses Cost ¥${onProp.buidlingCost}`}</p>
            </div>
          </div>
        </div>
      );
    } else if (
      onProp2 &&
      propertyModal2 &&
      !propertyModal1 &&
      close === false
    ) {
      return (
        <div className="main-card">
          <div className={`outer-banner`}>
            <div className={`banner ${onProp2.color}`}>
              <h2 className="prop-name">{onProp2.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <h4 className="rent">{`RENT ¥${onProp2.rent}`}</h4>
              <div className="house-container one">
                <p className="left-side">With 1 House</p>
                <p className="right-side">{`¥${onProp2.oneHouse}`}</p>
              </div>
              <div className="house-container two">
                <p className="left-side">With 2 Houses</p>
                <p className="right-side">{`¥${onProp2.twoHouses}`}</p>
              </div>
              <div className="house-container three">
                <p className="left-side">With 3 Houses</p>
                <p className="right-side">{`¥${onProp2.threeHouses}`}</p>
              </div>
              <div className="house-container four">
                <p className="left-side">With 4 Houses</p>
                <p className="right-side">{`¥${onProp2.fourHouses}`}</p>
              </div>
              <div className="house-container hotel">
                <p className="left-side">With Hotel</p>
                <p className="right-side">{`¥${onProp2.hotel}`}</p>
              </div>
            </div>
            <div className="secondary-prop-info">
              <h4 className="mortgage">{`Mortgage Value: ¥${onProp2.mortgage}`}</h4>
              <p className="houses">{`Houses Cost ¥${onProp2.buidlingCost}`}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const propertyImage = () => {
    if (onProp && propertyModal1 && !propertyModal2 && close === false) {
      return (
        <div className="image-container">
          <img className="property-image" alt="property" src={onProp.image} />
        </div>
      );
    } else if (
      onProp2 &&
      propertyModal2 &&
      !propertyModal1 &&
      close === false
    ) {
      return (
        <div className="image-container">
          <img className="property-image" alt="property" src={onProp2.image} />
        </div>
      );
    }
    return null;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {(propertyModal1 === true && !close) ||
      (propertyModal2 === true && !close) ? (
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
              <div>{propertyImage()}</div>
            </div>
            <h4 className={viewInsufficient()}>INSUFFICIENT FUNDS</h4>
            <div className="options-container">
              <button className="buy-button" onClick={buyProperty}>
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
export default PropertyModal;
