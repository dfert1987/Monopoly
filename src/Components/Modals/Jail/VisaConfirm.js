import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Visa.css";

const VisaConfirm = ({
  turn,
  setVisa1,
  setVisa2,
  setInJail,
  setInJail2,
  inJail,
  inJail2,
  setCounterP1,
  setCounterP2,
  setVisaModal,
  visaModal,
  counterP1,
  setP1Jail,
  setP2Jail,
}) => {
  const [click] = useSound(Click);
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
  const [showConfirm, setShowConfirm] = useState(false);
  const [player, setPlayer] = useState("");

  useEffect(() => {
    if (turn % 2 === 0 && inJail === true) {
      setShowConfirm(true);
      setPlayer("one");
    } else if (turn % 2 !== 0 && inJail2 === true) {
      setShowConfirm(true);
      setPlayer("two");
    } else {
      setShowConfirm(false);
    }
  }, [turn, inJail, inJail2]);

  const useVisa = () => {
    if (player === "one") {
      setCounterP1(11);
      setInJail(false);
      setP1Jail(false);
      setVisa1(false);
      handleClose();
    } else if (player === "two") {
      setCounterP2(11);
      setInJail2(false);
      setP2Jail(false);
      setVisa2(false);
      handleClose();
    }
  };

  const handleClose = () => {
    setPlayer("");
    click();
    setVisaModal(false);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {visaModal ? (
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
              {showConfirm ? (
                <>
                  <h1 className="confirm-message">
                    Use Visa Card to Return to China?
                  </h1>
                  <div className="confirm-button-container">
                    <button className="yes-no" onClick={useVisa}>
                      YES
                    </button>
                    <button onClick={handleClose} className="yes-no">
                      NO
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="confirm-message">
                    You're still in China. Just hold on to this.
                  </h1>
                  <button onClick={handleClose} className="yes-no close">
                    CLOSE
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default VisaConfirm;
