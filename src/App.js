import React, { useState } from "react";
import { Board } from "./Components/Board";
import { Controls } from "./Components/Controls";
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

  return (
    <div className="App">
      <Board
        counterP1={counterP1}
        counterP2={counterP2}
        properties={properties}
        setProperties={setProperties}
        railRoads={railRoads}
        setRailRoads={setRailRoads}
        utilities={utilities}
        setUtilities={setUtilities}
        p1Jail={p1Jail}
        setP1Jail={setP1Jail}
        p2Jail={p2Jail}
        setP2Jail={setP2Jail}
      />
      <Controls
        counterP1={counterP1}
        setCounterP1={setCounterP1}
        counterP2={counterP2}
        setCounterP2={setCounterP2}
        turn={turn}
        setTurn={setTurn}
      />
    </div>
  );
}

export default App;
