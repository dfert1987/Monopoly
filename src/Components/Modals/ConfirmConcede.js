import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../Assets/Sounds/click.mp3";
import Victory from "../../Assets/Sounds/victory.mp3";
import Gong from "../../Assets/Sounds/GONG.mp3";
import "../Styles/Mortgage.css";

const ConfirmConcede = ({
  confirmConcedeView,
  setConfirmConcedeView,
  setEndGame,
  playerOneConcede,
  playerTwoConcede,
}) => {
  const [click] = useSound(Click);
  const [victory] = useSound(Victory);
  const [gong] = useSound(Gong);

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
    click();
    setConfirmConcedeView(false);
  };

  const handleOK = () => {
    gong();
    victory();
    if (playerOneConcede) {
      setEndGame("p1");
    } else if (playerTwoConcede) {
      setEndGame("p2");
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {confirmConcedeView ? (
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
            <h3 className="confirm-text">Are you sure you want to concede?</h3>
            <div className="confirm-button-container">
              <button onClick={handleOK} className="confirm-button ok">
                CONFIRM
              </button>
              <button onClick={handleClose} className="confirm-button cancel">
                CANCEL
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ConfirmConcede;
