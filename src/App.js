import React, { useState, useEffect } from "react";
import { Board } from "./Components/Board";
import { Controls } from "./Components/Controls/Controls";
import { Properties } from "./Assets/Holdings/Properties";
import { RailRoads } from "./Assets/Holdings/Railroads";
import { Utilities } from "./Assets/Holdings/Utilities";
import { useLocation } from "react-router-dom";

const App = () => {
  const [counterP1, setCounterP1] = useState(1);
  const [counterP2, setCounterP2] = useState(1);
  const [turn, setTurn] = useState(0);
  const [properties, setProperties] = useState(Properties);
  const [railRoads, setRailRoads] = useState(RailRoads);
  const [utilities, setUtilities] = useState(Utilities);
  const [p1Jail, setP1Jail] = useState(false);
  const [p2Jail, setP2Jail] = useState(false);
  const [p1Money, setP1Money] = useState(1500);
  const [p2Money, setP2Money] = useState(1500);
  const [propertyModal1, setPropertyModal1] = useState(false);
  const [propertyModal2, setPropertyModal2] = useState(false);
  const [onProp, setOnProp] = useState();
  const [onProp2, setOnProp2] = useState();
  const [p1Props, setP1Props] = useState();
  const [p2Props, setP2Props] = useState();
  const [viewProperties, setViewProperties] = useState(false);
  const [viewProperties2, setViewProperties2] = useState(false);
  const [viewRRs, setViewRRs] = useState(false);
  const [viewRRs2, setViewRRs2] = useState(false);
  const [onRR, setOnRR] = useState();
  const [onRR2, setOnRR2] = useState();
  const [rrModal, setRRModal] = useState(false);
  const [rrModal2, setRRModal2] = useState(false);
  const [utilModal, setUtilModal] = useState(false);
  const [utilModal2, setUtilModal2] = useState(false);
  const [onUtil, setOnUtil] = useState(false);
  const [onUtil2, setOnUtil2] = useState(false);
  const [viewUtils, setViewUtils] = useState(false);
  const [viewUtils2, setViewUtils2] = useState(false);
  const [payProp, setPayProp] = useState(false);
  const [payTo, setPayTo] = useState();
  const [payRail, setPayRail] = useState(false);
  const [payRailTo, setPayRailTo] = useState();
  const [payUtilTo, setPayUtilTo] = useState();
  const [payUtil, setPayUtil] = useState(false);
  const [freeParking, setFreeParking] = useState(500);
  const [onFreeParking, setOnFreeParking] = useState(false);
  const [onFreeParking2, setOnFreeParking2] = useState(false);
  const [onAgentFee, setOnAgentFee] = useState(false);
  const [onAgentFee2, setOnAgentFee2] = useState(false);
  const [onVisa, setOnVisa] = useState(false);
  const [onVisa2, setOnVisa2] = useState(false);
  const [onGoJail, setOnGoJail] = useState(false);
  const [onGoJail2, setOnGoJail2] = useState(false);
  const [inJail, setInJail] = useState(false);
  const [inJail2, setInJail2] = useState(false);
  const [inJailModal, setInJailModal] = useState(false);
  const [inJailModal2, setInJailModal2] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  const [disableLeft, setDisableLeft] = useState(false);
  const [onCard, setOnCard] = useState(false);
  const [onCard2, setOnCard2] = useState(false);
  const [skip1, setSkip1] = useState(false);
  const [skip2, setSkip2] = useState(false);
  const [visa1, setVisa1] = useState(true);
  const [visa2, setVisa2] = useState(false);
  const [totalHousesP1, setTotalHousesP1] = useState(0);
  const [totalHousesP2, setTotalHousesP2] = useState(0);
  const [hotelsP1, setHotelsP1] = useState(0);
  const [hotelsP2, setHotelsP2] = useState(0);
  const [onGoP1, setOnGoP1] = useState(false);
  const [onGoP2, setOnGoP2] = useState(false);
  const [pass, setPass] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [visaModal, setVisaModal] = useState(false);
  const [p1Pic, setP1Pic] = useState();
  const [p2Pic, setP2Pic] = useState();
  const [mortgage, setMortgage] = useState(false);
  const [mortgage2, setMortgage2] = useState(false);

  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    setP1Pic(data.p1Piece);
    setP2Pic(data.p2Piece);
  }, [data.p1Piece, data.p2Piece]);

  return (
    <div className="App">
      <Board
        counterP1={counterP1}
        counterP2={counterP2}
        properties={properties}
        setProperties={setProperties}
        onProp={onProp}
        onProp2={onProp2}
        railRoads={railRoads}
        setRailRoads={setRailRoads}
        utilities={utilities}
        setUtilities={setUtilities}
        p1Jail={p1Jail}
        setP1Jail={setP1Jail}
        p2Jail={p2Jail}
        setP2Jail={setP2Jail}
        propertyModal1={propertyModal1}
        setPropertyModal1={setPropertyModal1}
        propertyModal2={propertyModal2}
        setPropertyModal2={setPropertyModal2}
        turn={turn}
        setP1Money={setP1Money}
        p1Money={p1Money}
        setP2Money={setP2Money}
        p2Money={p2Money}
        p1Props={p1Props}
        p2Props={p2Props}
        setP1Props={setP1Props}
        setP2Props={setP2Props}
        viewProperties={viewProperties}
        viewProperties2={viewProperties2}
        setViewProperties={setViewProperties}
        setViewProperties2={setViewProperties2}
        viewRRs={viewRRs}
        setViewRRs={setViewRRs}
        viewRRs2={viewRRs2}
        setViewRRs2={setViewRRs2}
        setOnProp2={setOnProp2}
        setOnProp={setOnProp}
        onRR={onRR}
        onRR2={onRR2}
        setOnRR={setOnRR}
        setOnRR2={setOnRR2}
        rrModal={rrModal}
        rrModal2={rrModal2}
        setRRModal={setRRModal}
        setRRModal2={setRRModal2}
        viewUtils={viewUtils}
        viewUtils2={viewUtils2}
        setViewUtils={setViewUtils}
        setViewUtils2={setViewUtils2}
        utilModal={utilModal}
        utilModal2={utilModal2}
        setUtilModal={setUtilModal}
        setUtilModal2={setUtilModal2}
        onUtil={onUtil}
        onUtil2={onUtil2}
        setOnUtil={setOnUtil}
        setOnUtil2={setOnUtil2}
        payProp={payProp}
        setPayProp={setPayProp}
        payTo={payTo}
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
        onFreeParking2={onFreeParking2}
        setOnFreeParking2={setOnFreeParking2}
        onAgentFee={onAgentFee}
        onAgentFee2={onAgentFee2}
        setOnAgentFee={setOnAgentFee}
        setOnAgentFee2={setOnAgentFee2}
        onVisa={onVisa}
        setOnVisa={setOnVisa}
        onVisa2={onVisa2}
        setOnVisa2={setOnVisa2}
        onGoJail={onGoJail}
        setOnGoJail={setOnGoJail}
        onGoJail2={onGoJail2}
        setOnGoJail2={setOnGoJail2}
        inJail={inJail}
        inJail2={inJail2}
        setInJail={setInJail}
        setInJail2={setInJail2}
        setTurn={setTurn}
        inJailModal={inJailModal}
        inJailModal2={inJailModal2}
        setInJailModal={setInJailModal}
        setInJailModal2={setInJailModal2}
        setCounterP1={setCounterP1}
        setCounterP2={setCounterP2}
        setDisableLeft={setDisableLeft}
        setDisableRight={setDisableRight}
        onCard={onCard}
        onCard2={onCard2}
        setOnCard={setOnCard}
        setOnCard2={setOnCard2}
        setSkip1={setSkip1}
        setSkip2={setSkip2}
        setVisa1={setVisa1}
        setVisa2={setVisa2}
        hotelsP1={hotelsP1}
        hotelsP2={hotelsP2}
        setHotelsP1={setHotelsP1}
        setHotelsP2={setHotelsP2}
        setTotalHousesP1={setTotalHousesP1}
        totalHousesP1={totalHousesP1}
        setTotalHousesP2={setTotalHousesP2}
        totalHousesP2={totalHousesP2}
        onGoP1={onGoP1}
        onGoP2={onGoP2}
        setOnGoP1={setOnGoP1}
        setOnGoP2={setOnGoP2}
        pass={pass}
        setPass={setPass}
        pass2={pass2}
        setPass2={setPass2}
        visaModal={visaModal}
        setVisaModal={setVisaModal}
        p1Pic={p1Pic}
        p2Pic={p2Pic}
        mortgage={mortgage}
        setMortgage={setMortgage}
        morgage2={mortgage2}
        setMortgage2={setMortgage2}
      />
      <Controls
        counterP1={counterP1}
        setCounterP1={setCounterP1}
        counterP2={counterP2}
        setCounterP2={setCounterP2}
        properties={properties}
        setProperties={setProperties}
        turn={turn}
        setOnProp={setOnProp}
        setOnProp2={setOnProp2}
        setTurn={setTurn}
        p1Jail={p1Jail}
        setP1Jail={setP1Jail}
        p2Jail={p2Jail}
        setP2Jail={setP2Jail}
        setP1Money={setP1Money}
        p1Money={p1Money}
        setP2Money={setP2Money}
        p2Money={p2Money}
        setPropertyModal1={setPropertyModal1}
        setPropertyModal2={setPropertyModal2}
        propertyModal1={propertyModal1}
        propertyModal2={propertyModal2}
        viewProperties={viewProperties}
        viewProperties2={viewProperties2}
        setViewProperties={setViewProperties}
        setViewProperties2={setViewProperties2}
        onRR={onRR}
        onRR2={onRR2}
        setOnRR={setOnRR}
        setOnRR2={setOnRR2}
        railRoads={railRoads}
        setRailRoads={setRailRoads}
        setRRModal={setRRModal}
        setRRModal2={setRRModal2}
        viewUtils={viewUtils}
        viewUtils2={viewUtils2}
        setViewUtils={setViewUtils}
        setViewUtils2={setViewUtils2}
        utilModal={utilModal}
        utilModal2={utilModal2}
        setUtilModal={setUtilModal}
        setUtilModal2={setUtilModal2}
        onUtil={onUtil}
        onUtil2={onUtil2}
        setOnUtil={setOnUtil}
        setOnUtil2={setOnUtil2}
        utilities={utilities}
        setUtilities={setUtilities}
        setPayProp={setPayProp}
        payProp={payProp}
        payTo={payTo}
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
        onFreeParking2={onFreeParking2}
        setOnFreeParking2={setOnFreeParking2}
        onAgentFee={onAgentFee}
        onAgentFee2={onAgentFee2}
        setOnAgentFee={setOnAgentFee}
        setOnAgentFee2={setOnAgentFee2}
        onVisa={onVisa}
        setOnVisa={setOnVisa}
        onVisa2={onVisa2}
        setOnVisa2={setOnVisa2}
        onGoJail={onGoJail}
        setOnGoJail={setOnGoJail}
        onGoJail2={onGoJail2}
        setOnGoJail2={setOnGoJail2}
        inJail={inJail}
        inJail2={inJail2}
        setInJail={setInJail}
        setInJail2={setInJail2}
        inJailModal={inJailModal}
        inJailModal2={inJailModal2}
        setInJailModal={setInJailModal}
        setInJailModal2={setInJailModal2}
        setDisableLeft={setDisableLeft}
        setDisableRight={setDisableRight}
        disableLeft={disableLeft}
        disableRight={disableRight}
        onCard={onCard}
        onCard2={onCard2}
        setOnCard={setOnCard}
        setOnCard2={setOnCard2}
        skip1={skip1}
        skip2={skip2}
        setSkip1={setSkip1}
        setSkip2={setSkip2}
        setVisa1={setVisa1}
        setVisa2={setVisa2}
        visa1={visa1}
        visa2={visa2}
        onGoP1={onGoP1}
        onGoP2={onGoP2}
        setOnGoP1={setOnGoP1}
        setOnGoP2={setOnGoP2}
        pass={pass}
        setPass={setPass}
        pass2={pass2}
        setPass2={setPass2}
        visaModal={visaModal}
        setVisaModal={setVisaModal}
        setMortgage={setMortgage}
        setMortgage2={setMortgage2}
      />
    </div>
  );
};

export default App;
