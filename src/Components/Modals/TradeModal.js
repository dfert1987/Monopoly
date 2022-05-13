import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import InputNumber from "react-input-number";
import Click from "../../Assets/Sounds/click.mp3";
import Choose from "../../Assets/Sounds/choose.mp3";
import DitieLogo from "../../Assets/PropertyImages/ditielogo.png";
import "../Styles/Trade.css";

const TradeModal = ({
  setShowTrade,
  showTrade,
  properties,
  setProperties,
  setUtilities,
  setRailRoads,
  utilities,
  railRoads,
  p1Money,
  setP1Money,
  p2Money,
  setP2Money,
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
  const [p1Offers, setP1Offers] = useState();
  const [p2Offers, setP2Offers] = useState();
  const [p1RROffers, setP1RROffers] = useState();
  const [p2RROffers, setP2RROffers] = useState();
  const [p1UtilOffers, setP1UtilOffers] = useState();
  const [p2UtilOffers, setP2UtilOffers] = useState();
  const [p1MoneyAvailable, setP1MoneyAvailable] = useState(p1Money);
  const [p1MoneyTrade, setP1MoneyTrade] = useState(0);
  const [p2MoneyAvailable, setP2MoneyAvailable] = useState(p2Money);
  const [p2MoneyTrade, setP2MoneyTrade] = useState(false);
  const [click] = useSound(Click);
  const [choose] = useSound(Choose);

  const min = 0;
  const maxP1 = { p1Money };

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
      (property) =>
        property.ownedP1 === true && !property.mortgaged && !property.trade
    );
    let offeredP1Props = properties.filter(
      (property) =>
        property.ownedP1 === true && !property.mortgaged && property.trade
    );
    setP1Props(availableP1Props);
    setP1Offers(offeredP1Props);
  };

  const getFilteredP1Utils = () => {
    let availableP1Utils = utilities.filter(
      (util) => util.ownedP1 === true && !util.mortgaged && !util.trade
    );
    let offeredP1Utils = utilities.filter(
      (util) => util.ownedP1 === true && !util.mortgaged && util.trade
    );
    setP1Utils(availableP1Utils);
    setP1UtilOffers(offeredP1Utils);
  };

  const getFilteredP1RRs = () => {
    let availableP1RRs = railRoads.filter(
      (rr) => rr.ownedP1 === true && !rr.mortgaged && !rr.trade
    );
    let offeredP1RRs = railRoads.filter(
      (rr) => rr.ownedP1 === true && !rr.mortgaged && rr.trade
    );
    setP1RRs(availableP1RRs);
    setP1RROffers(offeredP1RRs);
  };

  const getFilteredP2Props = () => {
    let availableP2Props = properties.filter(
      (property) =>
        property.ownedP2 === true && !property.mortgaged && !property.trade
    );
    let offeredP2Props = properties.filter(
      (property) =>
        property.ownedP2 === true && !property.mortgaged && property.trade
    );
    setP2Props(availableP2Props);
    setP2Offers(offeredP2Props);
  };

  const getFilteredP2Utils = () => {
    let availableP2Utils = utilities.filter(
      (util) => util.ownedP2 === true && !util.mortgaged && !util.trade
    );
    let offeredP2Utils = utilities.filter(
      (util) => util.ownedP2 === true && !util.mortgaged && util.trade
    );
    setP2Utils(availableP2Utils);
    setP2UtilOffers(offeredP2Utils);
  };

  const getFilteredP2RRs = () => {
    let availableP2RRs = railRoads.filter(
      (rr) => rr.ownedP2 === true && !rr.mortgaged && !rr.trade
    );
    let offeredP2RRs = railRoads.filter(
      (rr) => rr.ownedP2 === true && !rr.mortgaged && rr.trade
    );
    setP2RRs(availableP2RRs);
    setP2RROffers(offeredP2RRs);
  };

  const handleClose = () => {
    setShowTrade();
    click();
  };

  const addUtilToOffer = (UtilName) => {
    if (utilities) {
      let updatedUtils = utilities.map((util) => {
        if (util.Name === UtilName) {
          return { ...util, trade: true };
        }
        choose();
        return util;
      });
      setUtilities(updatedUtils);
    }
  };
  const addRRToOffer = (RRName) => {
    if (railRoads) {
      let updatedRRs = railRoads.map((rr) => {
        if (rr.Name === RRName) {
          return { ...rr, trade: true };
        }
        choose();
        return rr;
      });
      setRailRoads(updatedRRs);
    }
  };

  const addToOffer = (PropName) => {
    if (properties) {
      let updatedProperties = properties.map((property) => {
        if (property.Name === PropName) {
          return { ...property, trade: true };
        }
        choose();
        return property;
      });
      setProperties(updatedProperties);
    }
  };

  const showP1Props = () => {
    if (p1Props && p1Props.length > 0) {
      return p1Props.map((property, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => addToOffer(property.Name)}
          >
            <p className="propname">{property.Name}</p>
            <div className="prop-card available">
              <div className={`top-prop ${property.color}`}></div>
              <div className="white-prop"></div>
            </div>
          </div>
        );
      });
    }
  };

  const removeFromOffer = (PropName) => {
    choose();
    if (properties) {
      let updateProperties = properties.map((property) => {
        if (property.Name === PropName) {
          return { ...property, trade: false };
        }
        return property;
      });
      setProperties(updateProperties);
    }
  };

  const removeRRFromOffer = (Rail) => {
    choose();
    if (railRoads) {
      let updatedRRs = railRoads.map((rr) => {
        if (rr.Name === Rail) {
          return { ...rr, trade: false };
        }
        return rr;
      });
      setRailRoads(updatedRRs);
    }
  };

  const removeUtilFromOffer = (Utility) => {
    choose();
    if (utilities) {
      let updatedUtils = utilities.map((util) => {
        if (util.Name === Utility) {
          return { ...util, trade: false };
        }
        return util;
      });
      setUtilities(updatedUtils);
    }
  };

  const showP1Offers = () => {
    if (p1Offers && p1Offers.length > 0) {
      return p1Offers.map((property, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => removeFromOffer(property.Name)}
          >
            <p className="propname">{property.Name}</p>
            <div className="prop-card available">
              <div className={`top-prop ${property.color}`}></div>
              <div className="white-prop"></div>
            </div>
          </div>
        );
      });
    }
  };

  const showP2Offers = () => {
    if (p2Offers && p2Offers.length > 0) {
      return p2Offers.map((property, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => removeFromOffer(property.Name)}
          >
            <p className="propname">{property.Name}</p>
            <div className="prop-card available">
              <div className={`top-prop ${property.color}`}></div>
              <div className="white-prop"></div>
            </div>
          </div>
        );
      });
    }
  };

  const showP2OffersUtils = () => {
    if (p2UtilOffers && p2UtilOffers.length > 0) {
      return p2UtilOffers.map((util, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => removeUtilFromOffer(util.Name)}
          >
            <p className="propname">{util.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={util.bannerImage}
                  alt="utility logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP1OffersRR = () => {
    if (p1RROffers && p1RROffers.length > 0) {
      return p1RROffers.map((rr, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => removeRRFromOffer(rr.Name)}
          >
            <p className="propname">{rr.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo"
                  src={DitieLogo}
                  alt="subway logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP1OffersUtils = () => {
    if (p1UtilOffers && p1UtilOffers.length > 0) {
      return p1UtilOffers.map((util, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => removeUtilFromOffer(util.Name)}
          >
            <p className="propname">{util.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={util.bannerImage}
                  alt="utility logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP1RRs = () => {
    if (p1RRs && p1RRs.length > 0) {
      return p1RRs.map((rr, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => addRRToOffer(rr.Name)}
          >
            <p className="propname">{rr.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo"
                  src={DitieLogo}
                  alt="subway logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP1Utils = () => {
    if (p1Utils && p1Utils.length > 0) {
      return p1Utils.map((util, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => addUtilToOffer(util.Name)}
          >
            <p className="propname">{util.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={util.bannerImage}
                  alt="utility logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP2Props = () => {
    if (p2Props && p2Props.length > 0) {
      return p2Props.map((property, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => addToOffer(property.Name)}
          >
            <p className="propname">{property.Name}</p>
            <div className="prop-card available">
              <div className={`top-prop ${property.color}`}></div>
              <div className="white-prop"></div>
            </div>
          </div>
        );
      });
    }
  };

  const showP2OffersRR = () => {
    if (p2RROffers && p2RROffers.length > 0) {
      return p2RROffers.map((rr, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => removeRRFromOffer(rr.Name)}
          >
            <p className="propname">{rr.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo"
                  src={DitieLogo}
                  alt="subway logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP2RRs = () => {
    if (p2RRs && p2RRs.length > 0) {
      return p2RRs.map((rr, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => addRRToOffer(rr.Name)}
          >
            <p className="propname">{rr.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo"
                  src={DitieLogo}
                  alt="subway logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const showP2Utils = () => {
    if (p2Utils && p2Utils.length > 0) {
      return p2Utils.map((util, index) => {
        return (
          <div
            className="container-prop"
            key={index}
            onClick={() => addUtilToOffer(util.Name)}
          >
            <p className="propname">{util.Name}</p>
            <div className="rr-card">
              <div className="top-rr-must"></div>
              <div className="white-prop">
                <img
                  className="subway-logo-left"
                  src={util.bannerImage}
                  alt="utility logo"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const handleChangeP1 = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setP1MoneyTrade(value);
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
                  <p className="trade-instructions">
                    Click Icon to add/remove items from your offer.
                  </p>
                  <p className="trade-instructions">
                    Add or subtract money from your offer below.
                  </p>
                  <div className="trade-columns">
                    <div className="trade-column first-player">
                      <h3 className="player-title">Player 1</h3>
                      <div className="money-container">
                        <h4 className="available-money">
                          Avaiable Money: {p1MoneyAvailable}RMB
                        </h4>
                        <div className="offerMoney p1MoneyOffer">
                          <label className="mulah" for="money">
                            <b>Add Money to Offer</b>
                          </label>
                          <input
                            min={0}
                            max={p1Money}
                            value={p1MoneyTrade}
                            step={1}
                            onChange={handleChangeP1}
                            className="number-input"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="properties-container">
                        {showP1Props()}
                        {showP1RRs()}
                        {showP1Utils()}
                      </div>
                    </div>
                    <div className="divider-line"></div>
                    <div className="trade-column second-player">
                      <h3 className="player-title">Player 2</h3>
                      <div className="money-container">
                        <h4 className="available-money">
                          Avaiable Money: {p2MoneyAvailable}RMB
                        </h4>
                      </div>
                      <div className="properties-container">
                        {showP2Props()}
                        {showP2RRs()}
                        {showP2Utils()}
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-divider"></div>
                  <div className="offer-section">
                    <h3 className="offer">Offer</h3>
                    <div className="offer-columns">
                      <div className="offer-column p1-offer">
                        <div className="properties-container to-trade">
                          {showP1Offers()}
                          {showP1OffersRR()}
                          {showP1OffersUtils()}
                        </div>
                        <h4 className="money-offered">
                          PLUS: {p1MoneyTrade} RMB
                        </h4>
                      </div>
                      <div className="divider-line"></div>
                      <div className="offer-column p2-offer">
                        <div className="properties-container to-trade">
                          {showP2Offers()}
                          {showP2OffersRR()}
                          {showP2OffersUtils()}
                        </div>
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
