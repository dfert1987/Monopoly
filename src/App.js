import React, { useState } from "react";
import { Board } from "./Components/Board";
import { Controls } from "./Components/Controls/Controls";
import { Properties } from "./Assets/Holdings/Properties";
import { RailRoads } from "./Assets/Holdings/Railroads";
import { Utilities } from "./Assets/Holdings/Utilities";

function App() {
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
  const [onRR, setOnRR] = useState();
  const [onRR2, setOnRR2] = useState();
  const [rrModal, setRRModal] = useState(false);
  const [rrModal2, setRRModal2] = useState(false);

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
        onRR={onRR}
        onRR2={onRR2}
        setOnRR={setOnRR}
        setOnRR2={setOnRR2}
        rrModal={rrModal}
        rrModal2={rrModal2}
        setRRModal={setRRModal}
        setRRModal2={setRRModal2}
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
      />
    </div>
  );
}

export default App;
