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
    getFilteredP1Utils();
    getFilteredP1RRs();
    getFilteredP2Props();
    getFilteredP2Utils();
    getFilteredP2RRs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties, utilities, railRoads]);

  const getFilteredP1Props = () => {
    let availableP1Props = properties.filter(
      (property) => property.ownedP1 === true && !property.mortgaged
    );
    setP1Props(availableP1Props);
  };

  const getFilteredP1Utils = () => {
    let availableP1Utils = utilities.filter(
      (util) => util.ownedP1 === true && !util.mortgaged
    );
    setP1Utils(availableP1Utils);
  };

  const getFilteredP1RRs = () => {
    let availableP1RRs = railRoads.filter(
      (rr) => rr.ownedP1 === true && !rr.mortgaged
    );
    setP1RRs(availableP1RRs);
  };

  const getFilteredP2Props = () => {
    let availableP2Props = properties.filter(
      (property) => property.ownedP2 === true && !property.mortgaged
    );
    setP2Props(availableP2Props);
  };

  const getFilteredP2Utils = () => {
    let availableP2Utils = utilities.filter(
      (util) => util.ownedP2 === true && !util.mortgaged
    );
    setP2Utils(availableP2Utils);
  };

  const getFilteredP2RRs = () => {
    let availableP2RRs = railRoads.filter(
      (rr) => rr.ownedP2 === true && !rr.mortgaged
    );
    setP1RRs(availableP2RRs);
  };
  const handleClose = () => {
    setShowTrade();
    click();
  };

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

  const showP1RRs = () => {
    if (p1RRs && p1RRs.length > 0) {
      return p1RRs.map((rr, index) => {
        return (
          <div className="container-prop" key={index}>
            <p className="propname">{rr.Name}</p>
          </div>
        );
      });
    }
  };

  const showP1Utils = () => {
    if (p1Utils && p1Utils.length > 0) {
      return p1Utils.map((util, index) => {
        return (
          <div className="container-prop" key={index}>
            <p className="propname">{util.Name}</p>
          </div>
        );
      });
    }
  };

  const showP2Props = () => {
    if (p2Props && p2Props.length > 0) {
      return p2Props.map((property, index) => {
        return (
          <div className="container-prop" key={index}>
            <p className="propname">{property.Name}</p>
          </div>
        );
      });
    }
  };

  const showP2RRs = () => {
    if (p2RRs && p2RRs.length > 0) {
      return p2RRs.map((rr, index) => {
        return (
          <div className="container-prop" key={index}>
            <p className="propname">{rr.Name}</p>
          </div>
        );
      });
    }
  };

  const showP2Utils = () => {
    if (p2Utils && p2Utils.length > 0) {
      return p2Utils.map((util, index) => {
        return (
          <div className="container-prop" key={index}>
            <p className="propname">{util.Name}</p>
          </div>
        );
      });
    }
  };

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
              className="flex flexColumn innerModalPurchase trade"
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
                      <h3 className="player-title">Player 1</h3>
                      <div className="properties-container">
                        {showP1Props()}
                      </div>
                      <div className="properties-container">{showP1RRs()}</div>
                      <div className="properties-container">
                        {showP1Utils()}
                      </div>
                    </div>
                    <div className="divider-line"></div>
                    <div className="trade-column second-player">
                      <h3 className="player-title">Player 2</h3>
                      <div className="properties-container">
                        {showP2Props()}
                      </div>
                      <div className="properties-container">{showP2RRs()}</div>
                      <div className="properties-container">
                        {showP2Utils()}
                      </div>
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
