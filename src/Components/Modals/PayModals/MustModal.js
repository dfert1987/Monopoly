import React, { useState, useEffect } from "react";
import PropMorts from "./PropMorts";
import { motion, AnimatePresence } from "framer-motion";
import "../../Styles/Must.css";

export const MustModal = ({
  rent,
  setRent,
  p1MoneyAvailable,
  setP1MoneyAvailable,
  p2MoneyAvailable,
  setP2MoneyAvailable,
  mustMortgage,
  setMustMortgage,
  setMustMortgage2,
  mustMortgage2,
  gameOver,
  setGameOver,
  gameOver2,
  setGameOver2,
  properties,
  setProperties,
  utilities,
  setUtilities,
  railRoads,
  setRailRoads,
  p2Money,
  p1Money,
  setP1Money,
  setP2Money,
  p1MortProps,
  p2MortProps,
  setP1MortProps,
  setP2MortProps,
  p1MortRailRoads,
  setP1MortRailroads,
  p2MortRailRoads,
  setP2MortRailRoads,
  p1MortUtils,
  p2MortUtils,
  setP1MortUtils,
  setP2MortUtils,
}) => {
  const [enoughMoney, setEnoughMoney] = useState(false);
  const [neededAmt, setNeededAmt] = useState();
  const [neededAmt2, setNeededAmt2] = useState();

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

  useEffect(() => {
    if (mustMortgage) {
      let needed = rent - p1Money;
      if (needed > 0) {
        setNeededAmt(needed);
      }
      setNeededAmt(0);
    } else if (mustMortgage2) {
      let needed = rent - p2Money;
      if (needed > 0) {
        setNeededAmt2(needed);
      }
      setNeededAmt2(0);
    }
  }, [mustMortgage, mustMortgage2, rent, p1Money, p2Money]);

  const needed = () => {
    if (mustMortgage) {
      return neededAmt;
    } else if (mustMortgage2) {
      return neededAmt2;
    }
  };

  const getProperties = () => {
    if (mustMortgage && p1MortProps.length > 0) {
      return p1MortProps.map((property, index) => {
        return (
          <PropMorts
            assets={properties}
            asset={property}
            setAssets={setProperties}
            money={p1Money}
            key={index}
            setMoney={setP1Money}
            rent={rent}
            setRent={setRent}
            type="property"
            player="p1"
            enoughMoney={enoughMoney}
            setEnoughMoney={setEnoughMoney}
            needed={neededAmt}
            setNeeded={setNeededAmt}
          />
        );
      });
    } else if (mustMortgage2 && p2MortProps.length > 0) {
      return p2MortProps.map((property, index) => {
        return (
          <PropMorts
            assets={properties}
            asset={property}
            setAssets={setProperties}
            money={p2Money}
            key={index}
            setMoney={setP2Money}
            rent={rent}
            setRent={setRent}
            type="property"
            player="p2"
            enoughMoney={enoughMoney}
            setEnoughMoney={setEnoughMoney}
            needed={neededAmt2}
            setNeeded={setNeededAmt2}
          />
        );
      });
    }
  };

  const getRRs = () => {
    if (mustMortgage && p1MortRailRoads.length > 0) {
      return p1MortRailRoads.map((rr, index) => {
        return (
          <PropMorts
            assets={railRoads}
            asset={rr}
            setAssets={setRailRoads}
            money={p1Money}
            key={index}
            setMoney={setP1Money}
            rent={rent}
            setRent={setRent}
            type="rail"
            player="p1"
            enoughMoney={enoughMoney}
            setEnoughMoney={setEnoughMoney}
            needed={neededAmt}
            setNeeded={setNeededAmt}
          />
        );
      });
    } else if (mustMortgage && p2MortRailRoads.length > 0) {
      return p2MortRailRoads.map((rr, index) => {
        return (
          <PropMorts
            assets={railRoads}
            asset={rr}
            money={p2Money}
            key={index}
            setMoney={setP2Money}
            setAssets={setRailRoads}
            rent={rent}
            setRent={setRent}
            type="rail"
            player="p2"
            enoughMoney={enoughMoney}
            setEnoughMoney={setEnoughMoney}
            needed={neededAmt2}
            setNeeded={setNeededAmt2}
          />
        );
      });
    }
  };

  const getUtils = () => {
    if (mustMortgage && p1MortUtils.length > 0) {
      return p1MortUtils.map((util, index) => {
        return (
          <PropMorts
            assets={utilities}
            asset={util}
            money={p1Money}
            key={index}
            setMoney={setP1Money}
            setAssets={setUtilities}
            rent={rent}
            setRent={setRent}
            type="utility"
            player="p1"
            enoughMoney={enoughMoney}
            setEnoughMoney={setEnoughMoney}
            needed={neededAmt}
            setNeeded={setNeededAmt}
          />
        );
      });
    } else if (mustMortgage && p2MortUtils.length > 0) {
      return p2MortUtils.map((util, index) => {
        return (
          <PropMorts
            assets={utilities}
            asset={util}
            money={p2Money}
            key={index}
            setMoney={setP2Money}
            setAssets={setUtilities}
            rent={rent}
            setRent={setRent}
            type="utility"
            player="p2"
            enoughMoney={enoughMoney}
            setEnoughMoney={setEnoughMoney}
            needed={neededAmt2}
            setNeeded={setNeededAmt2}
          />
        );
      });
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {mustMortgage || mustMortgage2 ? (
          <motion.div
            className="outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flexColumn innerModalPay mustPay"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="main-area">
                <div className="text-container-money">
                  {!enoughMoney ? (
                    <>
                      <h2 className="must-instructions">
                        You don't have enough money to pay this! You need
                        <span className="red-text"> {needed()}rmb more.</span>
                      </h2>
                      <h4 className="must-instructions explain">
                        Click assets to mortgage them if you wish to continue
                        playing, or you can concede.
                      </h4>
                    </>
                  ) : (
                    <>
                      <h2 className="must-instructions">
                        You've mortgaged enough to pay!
                      </h2>
                      <h4 className="must-instructions explain">
                        You can keep mortgaging if you want some more wiggle
                        room, or click complete to continue playing!
                      </h4>
                    </>
                  )}
                  <div className="asset-section">
                    {(mustMortgage && p1MortProps.length > 0) ||
                    (mustMortgage2 && p2MortProps.length > 0) ? (
                      <h3 className="asset-title">Properties</h3>
                    ) : null}
                    <div className="asset-type">{getProperties()}</div>
                    {(mustMortgage && p1MortRailRoads.length > 0) ||
                    (mustMortgage2 && p2MortRailRoads.length > 0) ? (
                      <h3 className="asset-title">Railroads</h3>
                    ) : null}
                    <div className="asset-type">{getRRs()}</div>

                    {(mustMortgage && p1MortUtils.length > 0) ||
                    (mustMortgage2 && p2MortUtils.length > 0) ? (
                      <h3 className="asset-title">Utilities</h3>
                    ) : null}
                    <div className="asset-type">{getUtils()}</div>
                  </div>
                  <div className="button-area">
                    <button className="must-button" disabled={!enoughMoney}>
                      COMPLETE
                    </button>
                    <button className="must-button">CONCEDE</button>
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

export default MustModal;
