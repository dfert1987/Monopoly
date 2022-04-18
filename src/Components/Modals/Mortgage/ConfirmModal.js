import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Drum from "../../../Assets/Sounds/drum.mp3";
import "../../Styles/Mortgage.css";

const ConfirmModal = ({
  confirmModalView,
  setConfirmModalView,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  properties,
  setProperties,
  mortgageProp,
  mortgageable,
}) => {
  const [click] = useSound(Click);
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

  const handleClose = () => {
    setConfirmModalView(false);
    click();
  };

  const handleOK = () => {
    if (mortgageable) {
      let changedProperty = mortgageable[mortgageProp];
      console.log(changedProperty);
      console.log(mortgageable, mortgageProp);
      let updatedProperties = properties.map((property) => {
        if (property.Name === changedProperty.Name) {
          console.log(property.Name);
          return { ...property, mortgaged: true };
        }
        return property;
      });
      console.log(updatedProperties);
      setProperties(updatedProperties);
      setConfirmModalView(false);
      drum();
    }
  };

  console.log(properties);

  return (
    <AnimatePresence exitBeforeEnter>
      {confirmModalView ? (
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
            <div className="confirm-button-container">
              <button onClick={handleOK} className="ok-button">
                CONFIRM
              </button>
              <button onClick={handleClose} className="cancel-button">
                CANCEL
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ConfirmModal;
