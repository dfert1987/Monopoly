import React, { useState, useEffect } from "react";
import { Roll } from "./Roll";
import { RollP2 } from "./RollP2";
import Click from "../../Assets/Sounds/click.mp3";
import Drum from "../../Assets/Sounds/drum.mp3";
import useSound from "use-sound";
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
  visa1,
  visa2,
  onGoP1,
  onGoP2,
  setOnGoP1,
  setOnGoP2,
  pass,
  setPass,
  pass2,
  setPass2,
  setP1Money,
  setP2Money,
  setVisaModal,
  setMortgage,
  setMortgage2,
  setUnMortgage,
  setUnMortgage2,
  setConfirmConcedeView,
  setPlayerOneConcede,
  setPlayerTwoConcede,
}) => {
  const [disableVisaRight, setDisableVisaRight] = useState(true);
  const [disableVisaLeft, setDisableVisaLeft] = useState(true);

  const [clickSound] = useSound(Click);
  const [drum] = useSound(Drum);

  useEffect(() => {
    if (pass2) {
      setTimeout(() => {
        setPass2(false);
      }, 2000);
    }
    if (pass) {
      setTimeout(() => {
        setPass(false);
      }, 2000);
    }

    if (visa2 === false || turn % 2 === 0) {
      console.log("ooo");
      setDisableVisaRight(true);
    }
    if (visa2 === true && turn % 2 !== 0) {
      setDisableVisaRight(false);
    }
    if (visa1 === false || turn !== 0 || turn % 2 !== 0) {
      setDisableVisaLeft(true);
    }
    if (visa1 === true && turn % 2 === 0) {
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
  }, [turn, visa1, visa2, pass2, setPass2, pass, setPass]);

  const visaClick = () => {
    clickSound();
    setVisaModal(true);
  };

  const mortgageClick = () => {
    clickSound();
    setMortgage(true);
  };

  const mortgageClick2 = () => {
    clickSound();
    setMortgage2(true);
  };

  const unMortgageClick = () => {
    clickSound();
    setUnMortgage(true);
  };

  const unMortgageClick2 = () => {
    clickSound();
    setUnMortgage2(true);
  };

  const visa2Click = () => {
    clickSound();
    setVisaModal(true);
  };

  const propertiesClick = () => {
    clickSound();
    setViewProperties(true);
  };

  const properties2Click = () => {
    clickSound();
    setViewProperties2(true);
  };

  const concedeP1 = () => {
    drum();
    setConfirmConcedeView(true);
    setPlayerOneConcede(true);
  };

  const concedeP2 = () => {
    drum();
    setConfirmConcedeView(true);
    setPlayerTwoConcede(true);
  };

  return (
    <div className="controls-container">
      <div className="p1">
        <h3 className="player">Player 1</h3>
        <div className="player-1-stats">
          <div className="roll-money">
            <div className="money-player1">
              {pass ? <p className="payday">Pay Day: Collect 200rmb</p> : null}
              <p className="money-p1">
                <b>MONEY:</b>¥{p1Money}
              </p>
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
              onGoP1={onGoP1}
              setOnGoP1={setOnGoP1}
              pass={pass}
              setPass={setPass}
              p1Money={p1Money}
              setP1Money={setP1Money}
            />
          </div>
          <div className="properties player1">
            <div className="button-row">
              <button
                className="properties-view-button leftButton"
                disabled={disableLeft}
                onClick={propertiesClick}
              >
                VIEW ASSETS
              </button>
              <button
                className="properties-view-button"
                disabled={disableVisaLeft}
                onClick={visaClick}
              >
                USE VISA
              </button>
            </div>
            <div className="button-row">
              <button
                className="properties-view-button leftButton"
                disabled={disableLeft}
                onClick={mortgageClick}
              >
                MORTGAGE
              </button>
              <button
                className="properties-view-button"
                disabled={disableLeft}
                onClick={unMortgageClick}
              >
                UNMORTGAGE
              </button>
            </div>
            <div className="button-row bottom">
              <button
                className="properties-view-button leftButton"
                disabled={disableLeft}
                onClick={concedeP2}
              >
                TRADE
              </button>
              <button
                className="properties-view-button"
                disabled={disableLeft}
                onClick={concedeP1}
              >
                CONCEDE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p2">
        <h3 className="player">Player 2</h3>
        <div className="player-2-stats">
          <div className="properties player2">
            <div className="button-row">
              <button
                className="properties-view-button leftButton"
                disabled={disableRight}
                onClick={properties2Click}
              >
                VIEW ASSETS
              </button>
              <button
                className="properties-view-button"
                disabled={disableVisaRight}
                onClick={visa2Click}
              >
                USE VISA
              </button>
            </div>
            <div className="button-row">
              <button
                className="properties-view-button leftButton"
                disabled={disableRight}
                onClick={mortgageClick2}
              >
                MORTGAGE
              </button>
              <button
                className="properties-view-button"
                disabled={disableRight}
                onClick={unMortgageClick2}
              >
                UNMORTGAGE
              </button>
            </div>
            <div className="button-row bottom">
              <button
                className="properties-view-button leftButton"
                disabled={disableRight}
                onClick={concedeP2}
              >
                TRADE
              </button>
              <button
                className="properties-view-button"
                disabled={disableRight}
                onClick={concedeP2}
              >
                CONCEDE
              </button>
            </div>
          </div>
          <div className="roll-money">
            <div className="money-player2">
              {pass2 ? <p className="payday">Pay Day: Collect 200rmb</p> : null}
              <p className="money-p2">
                <b>MONEY:</b>¥{p2Money}
              </p>
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
              setOnGoP2={setOnGoP2}
              onGoP2={onGoP2}
              pass2={pass2}
              setPass2={setPass2}
              p2Money={p2Money}
              setP2Money={setP2Money}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
