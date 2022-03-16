import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import visaPlace from "../../Assets/Misc/visaplace.jpeg";
import "../Styles/FreeParking.css";

const Visa = ({
  onVisa,
  setOnVisa,
  onVisa2,
  setOnVisa2,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
}) => {
  const [visaFee, setVisaFee] = useState();
  const [disabled, setDisabled] = useState(false);
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [notEnough, setNotEnough] = useState(false);
  const [poorMessage, setPoorMessage] = useState(false);
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

  const pay200 = () => {
    if (onVisa && !onVisa2) {
      if (p1Money < 200) {
        setDisabledLeft(true);
        setNotEnough(true);
      } else if (p1Money > 200) {
        setVisaFee(200);
        let newMoney = p1Money - 200;
        setP1Money(newMoney);
        handleClose();
      }
    } else if (onVisa2 && !onVisa) {
      if (p2Money < 200) {
        setDisabledLeft(true);
        setNotEnough(true);
      } else if (p2Money > 200) {
        setVisaFee(200);
        let newMoney = p2Money - 200;
        setP2Money(newMoney);
        handleClose();
      }
    }
    return null;
  };

  const pay10 = () => {
    setNotEnough(false);
    if (onVisa && !onVisa2 && p1Money > 10) {
      let fee = p1Money * 0.1;
      setVisaFee(fee);
      let newMoney = p1Money - fee;
      setP1Money(newMoney);
      handleClose();
    } else if (onVisa && !onVisa2 && p1Money < 10) {
      setPoorMessage(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } else if (onVisa2 && !onVisa && p2Money > 10) {
      let fee = p2Money * 0.1;
      setVisaFee(fee);
      let newMoney = p2Money - fee;
      setP1Money(newMoney);
      handleClose();
    } else if (onVisa2 && !onVisa && p2Money < 10) {
      setPoorMessage(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    if (onVisa) {
      setOnVisa(false);
      setOnVisa2(false);
      setDisabled(false);
      setDisabledLeft(false);
      setPoorMessage(false);
      setNotEnough(false);
      setVisaFee();
    } else if (onVisa2) {
      setOnVisa2(false);
      setOnVisa(false);
      setDisabled(false);
      setDisabledLeft(false);
      setPoorMessage(false);
      setNotEnough(false);
      setVisaFee();
    }
    return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {onVisa || onVisa2 ? (
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
                  <FontAwesomeIcon className="x-icon renew" icon={faXmark} />
                </button>
              </div>
              <div className="main-part">
                <h1 className="main-title">Renew Your Visa!</h1>
                <img
                  className="building-pic"
                  alt="Beijing Visa Office"
                  src={visaPlace}
                />
                <h2 className="choice">Pay ¥200 or 10% of your money.</h2>
                {notEnough ? (
                  <>
                    <h3 className="money-error">
                      Not Enough Money! Try 10%...
                    </h3>
                  </>
                ) : null}
                <div className="choice-container">
                  <button
                    className="choice-button"
                    disabled={disabledLeft}
                    onClick={() => pay200()}
                  >
                    ¥200
                  </button>
                  <button
                    className="choice-button"
                    disabled={disabled}
                    onClick={() => pay10()}
                  >
                    10%
                  </button>
                </div>
                {poorMessage ? (
                  <>
                    <h4 className="poor-message">
                      Actually, you're so broke, we'll let you slide.
                    </h4>
                  </>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Visa;
