import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import Click from "../../Assets/Sounds/click.mp3";
import "../Styles/Trade.css";

const TradeModal = ({
  setShowTrade,
  showTrade,
  properties,
  utilities,
  railRoads,
}) => {
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
  const [p1Props, setP1Props] = useState();
  const [p2Props, setP2Props] = useState();
  const [p1RRs, setP1RRs] = useState();
  const [p2RRs, setP2RRs] = useState();
  const [p1Utils, setP1Utils] = useState();
  const [p2Utils, setP2Utils] = useState();
  const [click] = useSound(Click);

  useEffect(() => {
    getFilteredP1Props();
    // getFilteredP1Utils();
    // getFilteredP1RRs();
    // getFilteredP2Props();
    // getFilteredP2Utils();
    // getFilteredP2RRs();

    // let availableP1Props = properties.filter(
    //   (property) => property.ownedP1 === true && !property.mortgaged
    // );
    // let availableP1RRs = railRoads.filter(
    //   (rr) => rr.ownedP1 === true && !rr.mortgaged
    // );
    // let availableP1Utils = utilities.filter(
    //   (util) => util.ownedP1 === true && !util.mortgaged
    // );
    // let availableP2Props = properties.filter(
    //   (property) => property.ownedP2 === true && !property.mortgaged
    // );
    // let availableP2RRs = railRoads.filter(
    //   (rr) => rr.ownedP2 === true && !rr.mortgaged
    // );
    // let availableP2Utils = utilities.filter(
    //   (util) => util.ownedP2 === true && !util.mortgaged
    // );
    // setP1Props(availableP1Props);
    // setP1RRs(availableP1RRs);
    // setP1Utils(availableP1Utils);
    // setP2Props(availableP2Props);
    // setP2RRs(availableP2RRs);
    // setP2Utils(availableP2Utils);
  }, [properties, utilities, railRoads]);

  const getFilteredP1Props = () => {
    let availableP1Props = properties.filter(
      (property) => property.ownedP1 === true && !property.mortgaged
    );
    setP1Props(availableP1Props);
  };

  const handleClose = () => {
    setShowTrade();
    click();
  };

  console.log(p1Props);
  const showP1Props = () => {
    if (p1Props && p1Props.length > 0) {
      return p1Props.map((property, index) => {
        return (
          <div className="container-prop" key={index}>
            <p className="propname">{property.Name}</p>
          </div>
        );
      });
    }
  };

  const showP2Props = () => {};

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showTrade ? (
          <motion.div
            className="outerModal flex centerFlex purchased"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPurchase"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-trade">
                <div className="button-row">
                  <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon className="x-icon" icon={faXmark} />
                  </button>
                </div>
                <div className="trade-ui">
                  <h2 className="trade-title">MAKE A DEAL</h2>
                  <div className="trade-columns">
                    <div className="trade-column first-player">
                      {showP1Props()}
                    </div>
                    <div className="divider-line"></div>
                    <div className="trade-column second-player">
                      {showP2Props()}
                    </div>
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

export default TradeModal;
