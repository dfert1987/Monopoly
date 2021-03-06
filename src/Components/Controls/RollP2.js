import React, { useState } from "react";
import useSound from "use-sound";
import Two from "../../Assets/Sounds/Dice/Two.mp3";
import Three from "../../Assets/Sounds/Dice/Three.mp3";
import Four from "../../Assets/Sounds/Dice/Four.mp3";
import Five from "../../Assets/Sounds/Dice/Five.mp3";
import Six from "../../Assets/Sounds/Dice/SIX.mp3";
import Seven from "../../Assets/Sounds/Dice/seven.mp3";
import Eight from "../../Assets/Sounds/Dice/eight.mp3";
import Nine from "../../Assets/Sounds/Dice/nine.mp3";
import Ten from "../../Assets/Sounds/Dice/ten.mp3";
import Eleven from "../../Assets/Sounds/Dice/eleven.mp3";
import Twelve from "../../Assets/Sounds/Dice/twelve.mp3";
import Treasure from "../../Assets/Sounds/treasure.mp3";
import Triumph from "../../Assets/Sounds/triumph.mp3";
import PayUp from "../../Assets/Sounds/payup.mp3";
import Police from "../../Assets/Sounds/police.mp3";
import Alert from "../../Assets/Sounds/alert.mp3";
import dice1 from "../../Assets/Dice/dice1.png";
import dice2 from "../../Assets/Dice/dice2.png";
import dice3 from "../../Assets/Dice/dice3.png";
import dice4 from "../../Assets/Dice/dice4.png";
import dice5 from "../../Assets/Dice/dice5.png";
import dice6 from "../../Assets/Dice/dice6.png";
import "../../Components/Styles/Controls.css";

export const RollP2 = ({
  counterP2,
  setCounterP2,
  turn,
  setTurn,
  disableRight,
  properties,
  setPropertyModal2,
  setOnProp2,
  railRoads,
  setOnRR2,
  setRRModal2,
  setOnUtil2,
  utilities,
  setUtilModal2,
  setPayProp,
  setPayTo,
  setPayRail,
  setPayRailTo,
  setPayUtil,
  setPayUtilTo,
  setOnFreeParking2,
  setOnAgentFee2,
  setOnVisa2,
  setOnGoJail2,
  setP2Jail,
  inJail2,
  setInJailModal2,
  setOnCard2,
  skip1,
  setSkip1,
  setOnGoP2,
  setPass2,
  setP2Money,
  p2Money,
}) => {
  const [die3, setDie3] = useState(1);
  const [die4, setDie4] = useState(1);
  const [p2Die1Img, setP2Die1Img] = useState();
  const [p2Die2Img, setP2Die2Img] = useState(dice1);
  const [two] = useSound(Two);
  const [three] = useSound(Three);
  const [four] = useSound(Four);
  const [five] = useSound(Five);
  const [six] = useSound(Six);
  const [seven] = useSound(Seven);
  const [eight] = useSound(Eight);
  const [nine] = useSound(Nine);
  const [ten] = useSound(Ten);
  const [eleven] = useSound(Eleven);
  const [twelve] = useSound(Twelve);
  const [treasure] = useSound(Treasure);
  const [payup] = useSound(PayUp);
  const [triumph] = useSound(Triumph);
  const [alert] = useSound(Alert);
  const [police] = useSound(Police);

  const dieImages1 = (first, pair) => {
    if (pair === "two") {
      if (first === 1) {
        setP2Die1Img(dice1);
      }
      if (first === 2) {
        setP2Die1Img(dice2);
      }
      if (first === 3) {
        setP2Die1Img(dice3);
      }
      if (first === 4) {
        setP2Die1Img(dice4);
      }
      if (first === 5) {
        setP2Die1Img(dice5);
      }
      if (first === 6) {
        setP2Die1Img(dice6);
      }
    }
  };

  const dieImages2 = (second, pair) => {
    if (pair === "two") {
      if (second === 1) {
        setP2Die2Img(dice1);
      }
      if (second === 2) {
        setP2Die2Img(dice2);
      }
      if (second === 3) {
        setP2Die2Img(dice3);
      }
      if (second === 4) {
        setP2Die2Img(dice4);
      }
      if (second === 5) {
        setP2Die2Img(dice5);
      }
      if (second === 6) {
        setP2Die2Img(dice6);
      }
    }
  };

  const rollDice2 = () => {
    let min = 1;
    let max = 6;
    let first = Math.floor(Math.random() * (max - min + 1)) + min;
    let second = Math.floor(Math.random() * (max - min + 1)) + min;
    if (first === second) {
      let newTurn = turn + 2;
      setTurn(newTurn);
    }
    if (first + second === 2) {
      two();
    }
    if (first + second === 3) {
      three();
    }
    if (first + second === 4) {
      four();
    }
    if (first + second === 5) {
      five();
    }
    if (first + second === 6) {
      six();
    }
    if (first + second === 7) {
      seven();
    }
    if (first + second === 8) {
      eight();
    }
    if (first + second === 9) {
      nine();
    }
    if (first + second === 10) {
      ten();
    }
    if (first + second === 11) {
      eleven();
    }
    if (first + second === 12) {
      twelve();
    }
    if (first === second) {
      let newTurn = turn + 2;
      setTurn(newTurn);
    } else if (skip1 === true) {
      setTurn(turn + 2);
      setSkip1(false);
    } else setTurn(turn + 1);
    setDie3(first);
    setDie4(second);
    dieImages1(first, "two");
    dieImages2(second, "two");
    if (counterP2 + first + second > 40) {
      let highTotal = counterP2 + first + second;
      setCounterP2(highTotal - 40);
      showPropertyModal(highTotal - 40);
      if (highTotal > 41) {
        let newMoney = p2Money + 200;
        showPropertyModal(highTotal - 40);
        setP2Money(newMoney);
        setPass2(true);
      }
    } else {
      setCounterP2(counterP2 + first + second);
      setTimeout(() => {
        showPropertyModal(counterP2 + first + second);
      }, 1000);
    }
  };

  const jailRoll = () => {
    setInJailModal2(true);
  };

  const showPropertyModal = (space) => {
    let currentProp = properties.find((property) => property.Number === space);
    let currentRR = railRoads.find((railRoad) => railRoad.Number === space);
    let currentUtil = utilities.find((util) => util.Number === space);
    if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
      setPropertyModal2(true);
      setOnProp2(currentProp);
      treasure();
    } else if (currentRR && !currentRR.ownedP1 && !currentRR.ownedP2) {
      setRRModal2(true);
      setOnRR2(currentRR);
      treasure();
    } else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
      setUtilModal2(true);
      setOnUtil2(currentUtil);
      treasure();
    } else if (
      currentProp &&
      !currentProp.ownedP2 &&
      currentProp.ownedP1 &&
      currentProp.mortgaged === false
    ) {
      setOnProp2(currentProp);
      setPayProp(true);
      payup();
      setPayTo(1);
    } else if (
      currentRR &&
      !currentRR.owned2 &&
      currentRR.ownedP1 &&
      currentRR.mortgaged === false
    ) {
      setOnRR2(currentRR);
      setPayRail(true);
      setPayRailTo(1);
      payup();
    } else if (
      currentUtil &&
      !currentUtil.ownedP2 &&
      currentUtil.ownedP1 &&
      currentUtil.mortgaged === false
    ) {
      setOnUtil2(currentUtil);
      setPayUtil(true);
      setPayUtilTo(1);
      payup();
    } else if (space === 31) {
      setOnFreeParking2(true);
      triumph();
    } else if (space === 39) {
      setOnAgentFee2(true);
      alert();
    } else if (space === 5) {
      setOnVisa2(true);
      alert();
    } else if (space === 21) {
      setOnGoJail2(true);
      setCounterP2(41);
      police();
      setP2Jail(true);
    } else if (space === 34) {
      setOnCard2(true);
    } else if (space === 3) {
      setOnCard2(true);
    } else if (space === 18) {
      setOnCard2(true);
    } else if (space === 8) {
      setOnCard2(true);
    } else if (space === 23) {
      setOnCard2(true);
    } else if (space === 37) {
      setOnCard2(true);
    } else if (space === 1) {
      setOnGoP2(true);
      triumph();
    }
  };

  return (
    <div className="p2-dice-button">
      <div className="roll-section">
        {die3 && die4 ? (
          <>
            {p2Die1Img ? (
              <img className="die" src={p2Die1Img} alt="die" />
            ) : (
              <img className="die" src={dice1} alt="die" />
            )}
            {p2Die2Img ? (
              <img className="die" src={p2Die2Img} alt="die" />
            ) : (
              <img className="die" src={dice1} alt="die" />
            )}
          </>
        ) : null}
      </div>
      <div className="button-container 2">
        {!inJail2 ? (
          <button
            onClick={rollDice2}
            className="roll-button controls"
            disabled={disableRight}
          >
            ROLL DICE
          </button>
        ) : (
          <button
            onClick={jailRoll}
            className="roll-button controls"
            disabled={disableRight}
          >
            RETURN TO CHINA
          </button>
        )}
      </div>
    </div>
  );
};
