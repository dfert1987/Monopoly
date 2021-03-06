import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Drum from "../../../Assets/Sounds/drum.mp3";
import Alert from "../../../Assets/Sounds/alert.mp3";
import visaPlace from "../../../Assets/Misc/visaplace.jpeg";
import "../../Styles/FreeParking.css";

const Visa = ({
  onVisa,
  setOnVisa,
  onVisa2,
  setOnVisa2,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  freeParking,
  setFreeParking,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [notEnough, setNotEnough] = useState(false);
  const [poorMessage, setPoorMessage] = useState(false);
  const [click] = useSound(Click);
  const [alert] = useSound(Alert);
  const [drum] = useSound(Drum);
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
      let newFP = freeParking + 200;
      if (p1Money < 200) {
        setDisabledLeft(true);
        setNotEnough(true);
        alert();
      } else if (p1Money > 200) {
        let newMoney = p1Money - 200;
        setP1Money(newMoney);
        handleClose();
        drum();
        setFreeParking(newFP);
      }
    } else if (onVisa2 && !onVisa) {
      let newFP = freeParking + 200;
      if (p2Money < 200) {
        setDisabledLeft(true);
        setNotEnough(true);
        alert();
      } else if (p2Money > 200) {
        let newMoney = p2Money - 200;
        setP2Money(newMoney);
        handleClose();
        setFreeParking(newFP);
        drum();
      }
    }
    return null;
  };

  const pay10 = () => {
    setNotEnough(false);
    if (onVisa && !onVisa2 && p1Money > 10) {
      let fee = p1Money * 0.1;
      let roundedFee = Math.floor(fee);
      let newMoney = p1Money - Math.floor(fee);
      let newFP = freeParking + roundedFee;
      setFreeParking(newFP);
      setP1Money(newMoney);
      drum();
      handleClose();
    } else if (onVisa && !onVisa2 && p1Money < 10) {
      setPoorMessage(true);
      click();
      setTimeout(() => {
        handleClose();
      }, 2000);
    } else if (onVisa2 && !onVisa && p2Money > 10) {
      let fee = p2Money * 0.1;
      let roundedFee = Math.floor(fee);
      let newMoney = p2Money - Math.floor(fee);
      let newFP = freeParking + roundedFee;
      setFreeParking(newFP);
      setP1Money(newMoney);
      handleClose();
      drum();
    } else if (onVisa2 && !onVisa && p2Money < 10) {
      setPoorMessage(true);
      click();
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
    } else if (onVisa2) {
      setOnVisa2(false);
      setOnVisa(false);
      setDisabled(false);
      setDisabledLeft(false);
      setPoorMessage(false);
      setNotEnough(false);
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
                <h2 className="choice">Pay ??200 or 10% of your money.</h2>
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
                    ??200
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
