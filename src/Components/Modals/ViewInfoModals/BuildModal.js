import React, { useState } from "react";
import PropCardAndButton from "./PropCardAndButton";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import "../../Styles/BuildModal.css";

const BuildModal = ({
  houseModal,
  houseModal2,
  setHouseModal,
  setHouseModal2,
  selectedGroup,
  selectedGroup2,
  properties,
  setProperties,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  hotelsP1,
  hotelsP2,
  setHotelsP1,
  setHotelsP2,
  setTotalHousesP1,
  setTotalHousesP2,
  totalHousesP1,
  totalHousesP2,
}) => {
  const [tooMuch, setTooMuch] = useState(false);

  const [click] = useSound(Click);

  const handleClose = () => {
    setHouseModal2(false);
    setHouseModal(false);
    setTooMuch(false);
    click();
  };

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
  const propCards = () => {
    if (houseModal) {
      let propsToBuild = properties.filter(
        (property) => property.color === selectedGroup
      );
      return propsToBuild.map((n, index) => {
        return (
          <PropCardAndButton
            card={n}
            key={index}
            properties={properties}
            houseModal={houseModal}
            houseModal2={houseModal2}
            setProperties={setProperties}
            setP1Money={setP1Money}
            setP2Money={setP2Money}
            p1Money={p1Money}
            p2Money={p2Money}
            setTooMuch={setTooMuch}
            tooMuch={tooMuch}
            hotelsP1={hotelsP1}
            hotelsP2={hotelsP2}
            setHotelsP1={setHotelsP1}
            setHotelsP2={setHotelsP2}
            setTotalHousesP1={setTotalHousesP1}
            totalHousesP1={totalHousesP1}
            setTotalHousesP2={setTotalHousesP2}
            totalHousesP2={totalHousesP2}
          />
        );
      });
    } else if (houseModal2) {
      let propsToBuild = properties.filter(
        (property) => property.color === selectedGroup2
      );
      return propsToBuild.map((n, index) => {
        return (
          <PropCardAndButton
            card={n}
            key={index}
            properties={properties}
            houseModal2={houseModal2}
            setProperties={setProperties}
            p1Money={p1Money}
            p2Money={p2Money}
            setP1Money={setP1Money}
            setP2Money={setP2Money}
            setTooMuch={setTooMuch}
            tooMuch={tooMuch}
            hotelsP1={hotelsP1}
            hotelsP2={hotelsP2}
            setHotelsP1={setHotelsP1}
            setHotelsP2={setHotelsP2}
            setTotalHousesP1={setTotalHousesP1}
            totalHousesP1={totalHousesP1}
            setTotalHousesP2={setTotalHousesP2}
            totalHousesP2={totalHousesP2}
          />
        );
      });
    }
    return null;
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {houseModal || houseModal2 ? (
          <motion.div
            className="owned-props-container outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="innerModalProps flex flexColumn properties"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="button-row">
                <button className="close-button-x" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon" icon={faXmark} />
                </button>
              </div>
              <h1 className="title">Build Hutongs/Apartments</h1>
              {tooMuch ? (
                <div className="insufficient-warning-container">
                  <p className="insufficient-warning">Insufficient Funds</p>
                </div>
              ) : null}
              <div className="property-cards-container">{propCards()}</div>
              <button className="done" onClick={handleClose}>
                DONE
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default BuildModal;
