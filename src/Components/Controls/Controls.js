import React, { useState, useEffect } from "react";
import { Roll } from "./Roll";
import { RollP2 } from "./RollP2";
import "../../Components/Styles/Controls.css";

export const Controls = ({
  counterP1,
  setCounterP1,
  counterP2,
  setCounterP2,
  turn,
  setTurn,
  p1Money,
  p2Money,
  properties,
  setPropertyModal1,
  setPropertyModal2,
  setOnProp,
  setOnProp2,
  setProperties,
  setViewProperties,
  setViewProperties2,
  onRR,
  onRR2,
  setOnRR,
  setOnRR2,
  railRoads,
  setRailRoads,
  setRRModal,
  setRRModal2,
  onUtil,
  onUtil2,
  setOnUtil,
  setOnUtil2,
  utilities,
  setUtilities,
  setUtilModal,
  setUtilModal2,
  payProp,
  setPayProp,
  setPayTo,
  payRail,
  setPayRail,
  payRailTo,
  setPayRailTo,
  payUtil,
  setPayUtil,
  payUtilTo,
  setPayUtilTo,
  freeParking,
  setFreeParking,
  onFreeParking,
  setOnFreeParking,
  onFreeParking2,
  setOnFreeParking2,
  setOnAgentFee,
  setOnAgentFee2,
  onVisa,
  onVisa2,
  setOnVisa,
  setOnVisa2,
  setOnGoJail,
  setOnGoJail2,
  onGoJail,
  onGoJail2,
  setP1Jail,
  setP2Jail,
  inJail,
  inJail2,
  setInJail,
  setInJail2,
  inJailModal,
  setInJailModal,
  setInJailModal2,
  inJailModal2,
  disableLeft,
  disableRight,
  setDisableLeft,
  setDisableRight,
  onCard,
  onCard2,
  setOnCard,
  setOnCard2,
  skip1,
  skip2,
  setSkip1,
  setSkip2,
  visaP1,
  setVisaP1,
  visaP2,
  setVisaP2,
}) => {
  const [disableVisaRight, setDisableVisaRight] = useState(true);
  const [disableVisaLeft, setDisableVisaLeft] = useState(true);

  useEffect(() => {
    if (visaP2 === false || turn % 2 === 0) {
      setDisableVisaRight(true);
    }
    if (visaP2 === true && (turn !== 0 || turn % 2 === 0)) {
      setDisableVisaRight(false);
    }
    if (visaP1 === false || turn !== 0 || turn % 2 !== 0) {
      setDisableVisaLeft(true);
    }
    if (visaP1 === true && turn % 2 === 0) {
      setDisableVisaLeft(false);
    }
    if (turn === 0 || turn % 2 === 0) {
      setDisableRight(true);
      setDisableLeft(false);
      setOnProp();
    } else {
      setDisableRight(false);
      setDisableLeft(true);
      setOnProp2();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn]);

  const useVisa = (number) => {
    if (number === 1) {
      setVisaP1(false);
    } else if (number === 2) {
      setVisaP2(false);
    }
  };

  return (
    <div className="controls-container">
      <div className="p1">
        <h3 className="player">Player 1</h3>
        <div className="player-1-stats">
          <div className="money player1">
            <h3 className="money-label">Money</h3>
            <p className="money">¥{p1Money}</p>
          </div>
          <Roll
            counterP1={counterP1}
            setCounterP1={setCounterP1}
            turn={turn}
            setTurn={setTurn}
            disableLeft={disableLeft}
            properties={properties}
            setProperties={setProperties}
            setPropertyModal1={setPropertyModal1}
            setOnProp={setOnProp}
            onRR={onRR}
            setOnRR={setOnRR}
            railRoads={railRoads}
            setRailRoads={setRailRoads}
            setRRModal={setRRModal}
            onUtil={onUtil}
            setOnUtil={setOnUtil}
            utilities={utilities}
            setUtilities={setUtilities}
            setUtilModal={setUtilModal}
            setPayProp={setPayProp}
            setPayTo={setPayTo}
            payRailTo={payRailTo}
            setPayRailTo={setPayRailTo}
            payRail={payRail}
            setPayRail={setPayRail}
            payUtil={payUtil}
            setPayUtil={setPayUtil}
            payUtilTo={payUtilTo}
            setPayUtilTo={setPayUtilTo}
            freeParking={freeParking}
            setFreeParking={setFreeParking}
            onFreeParking={onFreeParking}
            setOnFreeParking={setOnFreeParking}
            setOnAgentFee={setOnAgentFee}
            onVisa={onVisa}
            setOnVisa={setOnVisa}
            onGoJail={onGoJail}
            setOnGoJail={setOnGoJail}
            setP1Jail={setP1Jail}
            inJail={inJail}
            setInJail={setInJail}
            inJailModal={inJailModal}
            setInJailModal={setInJailModal}
            onCard={onCard}
            setOnCard={setOnCard}
            skip2={skip2}
            setSkip2={setSkip2}
          />
          <div className="properties player1">
            <button
              className="properties-view-button"
              disabled={disableLeft}
              onClick={() => setViewProperties(true)}
            >
              VIEW ASSETS
            </button>
            <button
              className="properties-view-button"
              disabled={disableVisaLeft}
              onClick={useVisa(1)}
            >
              USE VISA
            </button>
          </div>
        </div>
      </div>
      <div className="p2">
        <h3 className="player">Player 2</h3>
        <div className="player-2-stats">
          <div className="money player2">
            <h3 className="money-label">Money</h3>
            <p className="money">¥{p2Money}</p>
          </div>
          <RollP2
            counterP2={counterP2}
            setCounterP2={setCounterP2}
            turn={turn}
            setTurn={setTurn}
            disableRight={disableRight}
            properties={properties}
            setProperties={setProperties}
            setPropertyModal2={setPropertyModal2}
            setOnProp2={setOnProp2}
            onRR2={onRR2}
            setOnRR2={setOnRR2}
            railRoads={railRoads}
            setRailRoads={setRailRoads}
            setRRModal2={setRRModal2}
            onUtil2={onUtil2}
            setOnUtil2={setOnUtil2}
            utilities={utilities}
            setUtilities={setUtilities}
            setUtilModal2={setUtilModal2}
            setPayTo={setPayTo}
            setPayProp={setPayProp}
            payRailTo={payRailTo}
            setPayRailTo={setPayRailTo}
            payRail={payRail}
            setPayRail={setPayRail}
            payUtil={payUtil}
            setPayUtil={setPayUtil}
            payUtilTo={payUtilTo}
            setPayUtilTo={setPayUtilTo}
            freeParking={freeParking}
            setFreeParking={setFreeParking}
            onFreeParking2={onFreeParking2}
            setOnFreeParking2={setOnFreeParking2}
            setOnAgentFee2={setOnAgentFee2}
            onVisa2={onVisa2}
            setOnVisa2={setOnVisa2}
            setOnGoJail2={setOnGoJail2}
            onGoJail2={onGoJail2}
            setP2Jail={setP2Jail}
            setInJail2={setInJail2}
            inJail2={inJail2}
            setInJailModal2={setInJailModal2}
            inJailModal2={inJailModal2}
            onCard2={onCard2}
            setOnCard2={setOnCard2}
            setSkip1={setSkip1}
            skip1={skip1}
          />
          <div className="properties player2">
            <button
              className="properties-view-button"
              disabled={disableRight}
              onClick={() => setViewProperties2(true)}
            >
              VIEW ASSETS
            </button>
            <button
              className="properties-view-button"
              disabled={disableVisaRight}
              onClick={useVisa(2)}
            >
              USE VISA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
