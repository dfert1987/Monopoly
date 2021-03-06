import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Money from "../../../Assets/Sounds/money.mp3";
import Click from "../../../Assets/Sounds/click.mp3";
import Alert from "../../../Assets/Sounds/alert.mp3";
import "../../Styles/RailRoadModal.css";

const UtilitiesModal = ({
  setUtilModal,
  setUtilModal2,
  utilModal,
  utilModal2,
  onUtil,
  onUtil2,
  utilities,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  setViewPurchaseUtil,
  setViewPurchaseUtil2,
  setViewProperties,
  setViewProperties2,
}) => {
  const [close, setClose] = useState(false);
  const [inSufficientFunds, setInsufficientFunds] = useState(false);
  const [click] = useSound(Click);
  const [money] = useSound(Money);
  const [alert] = useSound(Alert);
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

  const justClose = () => {
    handleClose();
    click();
  };

  const viewOwned = () => {
    if (onUtil2) {
      setViewProperties2(true);
    } else if (onUtil) {
      setViewProperties(true);
    } else return null;
  };

  const handleClose = () => {
    setClose(true);
    setUtilModal(false);
    setUtilModal2(false);
    setClose(false);
    setInsufficientFunds(false);
  };

  const activeInactive = () => {
    if (!inSufficientFunds) {
      return "buy-button";
    } else if (inSufficientFunds) {
      return "inactive-buy-button";
    }
  };

  useEffect(() => {
    if (utilModal && !utilModal2 && close === true) {
      setUtilModal(false);
    } else if (utilModal2 && !utilModal2 && close === true) {
      setUtilModal2(false);
    }
  }, [close, setUtilModal, setUtilModal2, utilModal, utilModal2]);

  const viewInsufficient = () => {
    if (!inSufficientFunds) {
      return "invisible";
    } else if (inSufficientFunds) {
      return "visible";
    }
  };

  const utilImage = () => {
    if (onUtil && utilModal && !utilModal2 && close === false) {
      return (
        <div className="image-container">
          <img className="property-image" alt="property" src={onUtil.image} />
        </div>
      );
    } else if (onUtil2 && utilModal2 && !utilModal && close === false) {
      return (
        <div className="image-container">
          <img className="property-image" alt="property" src={onUtil2.image} />
        </div>
      );
    }
    return null;
  };

  const bannerImage = () => {
    if (onUtil && utilModal && !utilModal2 && close === false) {
      return (
        <img className="bannerimage" src={onUtil.bannerImage} alt="util pic" />
      );
    } else if (onUtil2 && utilModal2 && !utilModal && close === false) {
      return (
        <img
          className="bannerimage"
          src={onUtil2.bannerImage}
          alt="banner logo"
        />
      );
    }
    return null;
  };

  const frontCard = () => {
    if (onUtil && utilModal && !utilModal2 && close === false) {
      return (
        <div className="main-card">
          <div className="outer-banner rail">
            <div className="banner">
              {bannerImage()}
              <h2 className="prop-name rr">{onUtil.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <div className="rent1Container">
                <p className="rent1">
                  If one "Utility" is owned rent is 4 times the amount shown on
                  dice.
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
              <h4 className="mortgage">{`Mortgage Value: ??${onUtil.mortgage}`}</h4>
            </div>
          </div>
        </div>
      );
    } else if (onUtil2 && utilModal2 && !utilModal && close === false) {
      return (
        <div className="main-card">
          <div className="outer-banner rail">
            <div className={`banner ${onUtil2.color}`}>
              {bannerImage()}
              <h2 className="prop-name rr">{onUtil2.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <div className="rent1Container">
                <p className="rent1">
                  If one "Utility" is owned rent is 4 times the amount shown on
                  dice.
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
              <h4 className="mortgage">{`Mortgage Value: ??${onUtil2.mortgage}`}</h4>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
  const saying = () => {
    if (onUtil && utilModal && !utilModal2 && !close) {
      return <h3 className="saying-rr">{onUtil.saying}</h3>;
    } else if (onUtil2 && utilModal2 && !utilModal && !close) {
      return <h3 className="saying-rr">{onUtil2.saying}</h3>;
    }
    return null;
  };

  const buyUtil = () => {
    if (utilities && onUtil && utilModal && !utilModal2 && close === false) {
      utilities.map((obj) => {
        if (obj && obj.Name === onUtil.Name && obj.Price <= p1Money) {
          obj.ownedP1 = true;
          setP1Money(p1Money - obj.Price);
          handleClose();
          setViewPurchaseUtil(true);
          money();
          return utilities;
        } else if (obj.Price > p1Money) {
          setInsufficientFunds(true);
          alert();
        }
        return null;
      });
    } else if (
      utilities &&
      onUtil2 &&
      utilModal2 &&
      !utilModal &&
      close === false
    ) {
      utilities.map((obj) => {
        if (obj && obj.Name === onUtil2.Name && obj.Price <= p2Money) {
          obj.ownedP2 = true;
          setP2Money(p2Money - obj.Price);
          handleClose();
          money();
          setViewPurchaseUtil2(true);
          return utilities;
        } else if (obj.Price > p2Money) {
          setInsufficientFunds(true);
          alert();
        }
        return null;
      });
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {(utilModal === true && !close) || (utilModal2 === true && !close) ? (
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
            <h2 className="title sale">FOR SALE</h2>
            <div className="cost">
              <h4 className="prop-price">COST: ??150</h4>
            </div>
            <div className="main-row">
              <div>{frontCard()}</div>
              <div>{utilImage()}</div>
            </div>
            <div>{saying()}</div>
            <h4 className={viewInsufficient()}>INSUFFICIENT FUNDS</h4>
            <div className="options-container">
              <button
                className={activeInactive()}
                disabled={inSufficientFunds}
                onClick={buyUtil}
              >
                PURCHASE
              </button>
              <button className="pass-button" onClick={justClose}>
                PASS
              </button>
              <button className="view-button" onClick={viewOwned}>
                View Assets
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default UtilitiesModal;
