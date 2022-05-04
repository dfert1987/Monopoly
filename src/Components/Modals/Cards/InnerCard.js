import React, { useState, useEffect } from "react";
import { Guanxi } from "../../../Assets/Cards/Guanxi/Guanxi";
import { Yunqi } from "../../../Assets/Cards/Yunqi/Yunqi";
import useSound from "use-sound";
import Drum from "../../../Assets/Sounds/drum.mp3";
import "../../Styles/Card.css";

const InnerCard = ({
  setCardOption,
  cardOption,
  guanxi,
  yunqi,
  setOnCard,
  setOnCard2,
  setGuanxi,
  setYunqi,
  onCard,
  onCard2,
  counterP1,
  counterP2,
  setCounterP1,
  setCounterP2,
  setInJail,
  setInJail2,
  p1Money,
  setP1Money,
  p2Money,
  setP2Money,
  freeParking,
  setFreeParking,
  setTurn,
  turn,
  railRoads,
  setDoubleRR,
  setDoubleProp,
  properties,
  setSkip1,
  setSkip2,
  setVisa1,
  setVisa2,
  hotelsP1,
  hotelsP2,
  totalHousesP1,
  totalHousesP2,
  utilities,
  setOnUtil,
  setOnUtil2,
  setUtilModal2,
  setUtilModal,
  setPayUtil,
  setPayUtilTo,
  setOnProp,
  setOnProp2,
  setPayProp,
  setPayTo,
  setPropertyModal1,
  setPropertyModal2,
  setOnAgentFee,
  setOnAgentFee2,
  setOnVisa,
  setOnVisa2,
  setOnFreeParking,
  setOnFreeParking2,
  setPayRailTo,
  setPayRail,
  setOnRR,
  setOnRR2,
  setRRModal,
  setRRModal2,
  setPass,
  setPass2,
  setGameOver,
  setGameOver2,
  setMustMortgage,
  setMustMortgage2,
  p1MoneyAvailable,
  p2MoneyAvailable,
  setRent,
}) => {
  const [currentCard, setCurrentCard] = useState();

  const [drum] = useSound(Drum);

  const cardFunctionSorter = () => {
    if (onCard && !onCard2 && currentCard.Type === "pay") {
      let newMoney = p1Money - currentCard.amt;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(currentCard.amt);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setP1Money(0);
        setGameOver(true);
      } else {
        setP1Money(newMoney);
        let newFP = freeParking + currentCard.amt;
        setFreeParking(newFP);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (!onCard && onCard2 && currentCard.Type === "pay") {
      let newMoney = p2Money - currentCard.amt;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage2(true);
        setRent(currentCard.amt);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setP2Money(0);
        setGameOver2(true);
      } else {
        setP2Money(newMoney);
        let newFP = freeParking + currentCard.amt;
        setFreeParking(newFP);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (onCard && !onCard2 && currentCard.Type === "collect") {
      let newMoney = p1Money + currentCard.amt;
      setP1Money(newMoney);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (!onCard && onCard2 && currentCard.Type === "collect") {
      let newMoney = p2Money + currentCard.amt;
      setP2Money(newMoney);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (onCard && !onCard2 && currentCard.Type === "collect-opponent") {
      let newMoney = p1Money + currentCard.amt;
      let newMoney2 = p2Money - currentCard.amt;
      if (newMoney2 < 0 && p2MoneyAvailable > -1 * newMoney2) {
        setP1Money(newMoney);
        setRent(currentCard.amt);
        setMustMortgage2(true);
      } else if (newMoney2 < 0 && p2MoneyAvailable < -1 * newMoney2) {
        setP2Money(0);
        setGameOver2(true);
      } else {
        setP1Money(newMoney);
        setP2Money(newMoney2);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (!onCard && onCard2 && currentCard.Type === "collect-opponent") {
      let newMoney = p2Money + currentCard.amt;
      let newMoney2 = p1Money - currentCard.amt;
      if (newMoney2 < 0 && p1MoneyAvailable > -1 * newMoney2) {
        setP2Money(newMoney);
        setRent(currentCard.amt);
        setMustMortgage(true);
      } else if (newMoney2 < 0 && p1MoneyAvailable < -1 * newMoney2) {
        setP1Money(0);
        setGameOver(true);
      } else {
        setP2Money(newMoney);
        setP1Money(newMoney2);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (onCard && !onCard2 && currentCard.Type === "pay-opponent") {
      let newMoney = p1Money - currentCard.amt;
      let newMoney2 = p2Money + currentCard.amt;
      setP1Money(newMoney);
      setP2Money(newMoney2);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (!onCard && onCard2 && currentCard.Type === "pay-opponent") {
      let newMoney = p2Money - currentCard.amt;
      let newMoney2 = p1Money + currentCard.amt;
      setP1Money(newMoney2);
      setP2Money(newMoney);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (onCard && !onCard2 && currentCard.Type === "forward") {
      let newSpace = counterP1 + currentCard.amt;
      setCounterP1(newSpace);
      setCurrentCard();
      let currentProp = properties.find(
        (property) => property.Number === newSpace
      );
      let currentRR = railRoads.find((rr) => rr.Number === newSpace);
      if (newSpace === 11) {
        setCounterP1(newSpace);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
      if (currentRR) {
        if (!currentRR.ownedP1 && !currentRR.ownedP2) {
          setRRModal(true);
          setOnRR(currentRR);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!currentRR.ownedP1 && currentRR.ownedP2) {
          setOnRR(currentRR);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (currentProp) {
        if (!currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnProp(currentProp);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else {
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (!onCard && onCard2 && currentCard.Type === "forward") {
      let newSpace = counterP2 + currentCard.amt;
      setCounterP2(newSpace);
      setCurrentCard();
      let currentProp = properties.find(
        (property) => property.Number === newSpace
      );
      let currentRR = railRoads.find((rr) => rr.Number === newSpace);
      if (newSpace === 11) {
        setCounterP2(newSpace);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentRR) {
        if (!currentRR.ownedP1 && !currentRR.ownedP2) {
          setRRModal2(true);
          setOnRR2(currentRR);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentRR.ownedP1 && !currentRR.ownedP2) {
          setOnRR2(currentRR);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (currentProp) {
        if (!currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal2(true);
          setOnProp2(currentProp);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      }
    } else if (onCard && !onCard2 && currentCard.Type === "back") {
      let newSpace = counterP1 - currentCard.amt;
      let currentUtil = utilities.find((util) => util.Number === newSpace);
      if (newSpace === -2) {
        setCounterP1(38);
        setCurrentCard();
        let currentProp = properties.find((property) => property.Number === 38);
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnProp(currentProp);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (newSpace === -1) {
        setCounterP1(39);
        setCurrentCard();
        setOnAgentFee(true);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (newSpace === 5) {
        setOnVisa(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (newSpace === 34) {
        setCounterP1(newSpace);
        setOnCard(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      } else if (newSpace === 31) {
        setCounterP1(newSpace);
        setOnFreeParking(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (newSpace > 0) {
        setCounterP1(newSpace);
        setCurrentCard();
        let currentProp = properties.find(
          (property) => property.Number === newSpace
        );
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnProp(currentProp);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (
          currentUtil &&
          !currentUtil.ownedP1 &&
          !currentUtil.ownedP2
        ) {
          setUtilModal(true);
          setOnUtil(currentUtil);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentUtil && !currentUtil.ownedP1 && currentUtil.ownedP2) {
          setOnUtil(currentUtil);
          setPayUtil(true);
          setPayUtilTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      }
    } else if (!onCard && onCard2 && currentCard.Type === "back") {
      let newSpace = counterP2 - currentCard.amt;
      let currentUtil = utilities.find((util) => util.Number === newSpace);
      if (newSpace === -2) {
        setCounterP2(38);
        setCurrentCard();
        let currentProp = properties.find((property) => property.Number === 38);
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal2(true);
          setOnProp2(currentProp);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (newSpace === -1) {
        setCounterP2(39);
        setCurrentCard();
        setOnAgentFee2(true);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (newSpace === 5) {
        setOnVisa2(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (newSpace === 34) {
        setCounterP2(newSpace);
        setOnCard2(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
      } else if (newSpace === 31) {
        setCounterP1(newSpace);
        setOnFreeParking2(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (newSpace > 0) {
        setCounterP2(newSpace);
        setCurrentCard();
        let currentProp = properties.find(
          (property) => property.Number === newSpace
        );
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal2(true);
          setOnProp2(currentProp);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (
          currentUtil &&
          !currentUtil.ownedP1 &&
          !currentUtil.ownedP2
        ) {
          setUtilModal2(true);
          setOnUtil2(currentUtil);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (currentUtil && currentUtil.ownedP1 && !currentUtil.ownedP2) {
          setOnUtil2(currentUtil);
          setPayUtil(true);
          setPayUtilTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else {
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (currentCard.Type === "reroll") {
      let newTurn = turn + 1;
      setTurn(newTurn);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (onCard && !onCard2 && currentCard.Type === "advance") {
      let currentProp = properties.find(
        (property) => property.Number === currentCard.space
      );
      let currentUtil = utilities.find(
        (util) => util.Number === currentCard.space
      );
      let currentRR = railRoads.find((rr) => rr.Number === currentCard.space);
      if (currentCard.space < counterP1) {
        setPass(true);
        let newMoney = p1Money + 200;
        setP1Money(newMoney);
        setCounterP1(currentCard.space);
      }
      setCounterP1(currentCard.space);
      if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
        setPropertyModal1(true);
        setOnProp2(currentProp);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
        setOnProp(currentProp);
        setPayProp(true);
        setPayTo(2);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
        setUtilModal(true);
        setOnUtil(currentUtil);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentUtil && !currentUtil.ownedP1 && currentUtil.ownedP2) {
        setOnUtil(currentUtil);
        setPayUtil(true);
        setPayUtilTo(2);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentRR && !currentRR.ownedP1 && !currentRR.ownedP2) {
        setRRModal(true);
        setOnRR(currentRR);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentRR && !currentRR.ownedP1 && currentRR.ownedP2) {
        setOnRR(currentRR);
        setPayRail(true);
        setPayRailTo(2);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else {
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
      if (currentCard.space === 41) {
        setInJail(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (!onCard && onCard2 && currentCard.Type === "advance") {
      let currentProp = properties.find(
        (property) => property.Number === currentCard.space
      );
      let currentUtil = utilities.find(
        (util) => util.Number === currentCard.space
      );
      let currentRR = railRoads.find((rr) => rr.Number === currentCard.space);
      if (currentCard.space < counterP2) {
        setPass2(true);
        let newMoney = p2Money + 200;
        setP2Money(newMoney);
        setCounterP2(currentCard.space);
      }
      setCounterP2(currentCard.space);

      if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
        setPropertyModal2(true);
        setOnProp2(currentProp);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
        setOnProp2(currentProp);
        setPayProp(true);
        setPayTo(1);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
        setUtilModal2(true);
        setOnUtil2(currentUtil);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentUtil && currentUtil.ownedP1 && !currentUtil.ownedP2) {
        setOnUtil2(currentUtil);
        setPayUtil(true);
        setPayUtilTo(1);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentRR && !currentRR.ownedP1 && !currentRR.ownedP2) {
        setRRModal2(true);
        setOnRR2(currentRR);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else if (currentRR && currentRR.ownedP1 && !currentRR.ownedP2) {
        setOnRR2(currentRR);
        setPayRail(true);
        setPayRailTo(1);
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      } else {
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
      if (currentCard.space === 41) {
        setInJail2(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (
      onCard &&
      !onCard2 &&
      currentCard.Type === "nearest" &&
      currentCard.Number === 16
    ) {
      if (counterP1 === 37) {
        setPass(true);
        let newMoney = p1Money + 200;
        setP1Money(newMoney);
        setCounterP1(6);
        if (railRoads[0].ownedP2) {
          setDoubleRR(true);
          setOnRR(railRoads[0]);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!railRoads[0].ownedP2 && !railRoads[0].ownedP1) {
          setRRModal(true);
          setOnRR(railRoads[0]);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP1 === 8) {
        setCounterP1(16);
        if (railRoads[1].ownedP2) {
          setDoubleRR(true);
          setOnRR(railRoads[1]);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!railRoads[1].owned2 && !railRoads[1].ownedP1) {
          setOnRR(railRoads[1]);
          setRRModal(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP1 === 23) {
        setCounterP1(26);
        if (railRoads[2].ownedP2) {
          setDoubleRR(true);
          setOnRR(railRoads[2]);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!railRoads[2].ownedP2 && !railRoads[2].ownedP1) {
          setRRModal(true);
          setOnRR(railRoads[2]);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      }
    } else if (
      !onCard &&
      onCard2 &&
      currentCard.Type === "nearest" &&
      currentCard.Number === 16
    ) {
      if (counterP2 === 37) {
        setCounterP2(6);
        setPass2(true);
        let newMoney = p2Money + 200;
        setP2Money(newMoney);
        if (railRoads[0].ownedP1) {
          setDoubleRR(true);
          setOnRR2(railRoads[0]);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!railRoads[0].ownedP1 && !railRoads[0].ownedP2) {
          setOnRR2(railRoads[0]);
          setRRModal2(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP2 === 8) {
        setCounterP2(16);
        if (railRoads[1].ownedP1) {
          setDoubleRR(true);
          setOnRR2(railRoads[1]);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!railRoads[1].ownedP2 && !railRoads[1].ownedP1) {
          setOnRR2(railRoads[1]);
          setRRModal2(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP2 === 23) {
        setCounterP2(26);
        if (railRoads[2].ownedP1) {
          setDoubleRR(true);
          setOnRR2(railRoads[2]);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else if (!railRoads[2].ownedP1 && !railRoads[2].ownedP2) {
          setOnRR2(railRoads[2]);
          setRRModal2(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        } else {
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      }
    } else if (
      onCard &&
      !onCard2 &&
      currentCard.Type === "nearest" &&
      currentCard.Number === 18
    ) {
      if (counterP1 === 3) {
        let orderedProps = [
          properties[20],
          properties[19],
          properties[18],
          properties[17],
          properties[16],
          properties[15],
          properties[14],
          properties[13],
          properties[12],
          properties[11],
          properties[10],
          properties[9],
          properties[8],
          properties[7],
          properties[6],
          properties[5],
          properties[4],
          properties[3],
          properties[2],
          properties[1],
          properties[0],
          properties[21],
        ];

        let firstOwned = orderedProps.find(
          (property) => property.ownedP2 === true
        );
        if (firstOwned) {
          let moveTo = firstOwned.Number;
          if (moveTo < counterP1) {
            let newMoney = p1Money + 200;
            setP1Money(newMoney);
            setPass(true);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          } else {
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          }
        } else {
          setCounterP1(counterP1);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP1 === 18) {
        let orderedProps = [
          properties[12],
          properties[11],
          properties[10],
          properties[9],
          properties[8],
          properties[7],
          properties[6],
          properties[5],
          properties[4],
          properties[3],
          properties[2],
          properties[1],
          properties[0],
          properties[21],
          properties[20],
          properties[19],
          properties[18],
          properties[17],
          properties[16],
          properties[15],
          properties[14],
          properties[13],
        ];
        let firstOwned = orderedProps.find(
          (property) => property.ownedP2 === true
        );
        if (firstOwned) {
          let moveTo = firstOwned.Number;
          if (moveTo < firstOwned) {
            let newMoney = p1Money + 200;
            setP1Money(newMoney);
            setPass(true);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setPayProp(true);
            setOnProp(firstOwned);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          } else {
            setDoubleProp(true);
            setCounterP1(moveTo);
            setPayProp(true);
            setOnProp(firstOwned);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          }
        } else {
          setCounterP1(counterP1);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP1 === 34) {
        let orderedProps = [
          properties[2],
          properties[1],
          properties[0],
          properties[21],
          properties[20],
          properties[19],
          properties[18],
          properties[17],
          properties[16],
          properties[15],
          properties[14],
          properties[13],
          properties[12],
          properties[11],
          properties[10],
          properties[9],
          properties[8],
          properties[7],
          properties[6],
          properties[5],
          properties[4],
          properties[3],
        ];
        let firstOwned = orderedProps.find(
          (property) => property.ownedP2 === true
        );
        if (firstOwned) {
          let moveTo = firstOwned.Number;
          if (moveTo < firstOwned) {
            let newMoney = p1Money + 200;
            setP1Money(newMoney);
            setPass(true);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          } else {
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          }
        } else {
          setCounterP1(counterP1);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      }
    } else if (
      !onCard &&
      onCard2 &&
      currentCard.Type === "nearest" &&
      currentCard.Number === 18
    ) {
      if (counterP2 === 3) {
        let orderedProps = [
          properties[20],
          properties[19],
          properties[18],
          properties[17],
          properties[16],
          properties[15],
          properties[14],
          properties[13],
          properties[12],
          properties[11],
          properties[10],
          properties[9],
          properties[8],
          properties[7],
          properties[6],
          properties[5],
          properties[4],
          properties[3],
          properties[2],
          properties[1],
          properties[0],
          properties[21],
        ];

        let firstOwned = orderedProps.find(
          (property) => property.ownedP1 === true
        );
        if (firstOwned) {
          let moveTo = firstOwned.Number;
          if (moveTo < counterP2) {
            let newMoney = p2Money + 200;
            setP2Money(newMoney);
            setPass2(true);
            setDoubleProp(false);
            setCounterP2(moveTo);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          } else {
            setDoubleProp(false);
            setCounterP2(moveTo);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          }
        } else {
          setCounterP2(counterP2);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP2 === 18) {
        let orderedProps = [
          properties[12],
          properties[11],
          properties[10],
          properties[9],
          properties[8],
          properties[7],
          properties[6],
          properties[5],
          properties[4],
          properties[3],
          properties[2],
          properties[1],
          properties[0],
          properties[21],
          properties[20],
          properties[19],
          properties[18],
          properties[17],
          properties[16],
          properties[15],
          properties[14],
          properties[13],
        ];

        let firstOwned = orderedProps.find(
          (property) => property.ownedP1 === true
        );
        if (firstOwned) {
          let moveTo = firstOwned.Number;
          if (moveTo < counterP2) {
            let newMoney = p2Money + 200;
            setP2Money(newMoney);
            setPass(true);
            setDoubleProp(true);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCounterP2(moveTo);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          } else {
            setDoubleProp(true);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCounterP2(moveTo);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          }
        } else {
          setCounterP2(counterP2);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      } else if (counterP2 === 34) {
        let orderedProps = [
          properties[2],
          properties[1],
          properties[0],
          properties[21],
          properties[20],
          properties[19],
          properties[18],
          properties[17],
          properties[16],
          properties[15],
          properties[14],
          properties[13],
          properties[12],
          properties[11],
          properties[10],
          properties[9],
          properties[8],
          properties[7],
          properties[6],
          properties[5],
          properties[4],
          properties[3],
        ];
        let firstOwned = orderedProps.find(
          (property) => property.ownedP1 === true
        );
        if (firstOwned) {
          let moveTo = firstOwned.Number;
          if (moveTo < counterP2) {
            let newMoney = p2Money + 200;
            setP2Money(newMoney);
            setPass(true);
            setDoubleProp(true);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCounterP2(moveTo);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          } else {
            setDoubleProp(true);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCounterP2(moveTo);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
            setOnCard(false);
            setOnCard2(false);
          }
        } else {
          setCounterP2(counterP2);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
          setOnCard(false);
          setOnCard2(false);
        }
      }
    } else if (onCard && !onCard2 && currentCard.Type === "skip") {
      setSkip1(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (!onCard && onCard2 && currentCard.Type === "skip") {
      setSkip2(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (onCard && !onCard2 && currentCard.Type === "visa") {
      setVisa1(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (!onCard && onCard2 && currentCard.Type === "visa") {
      setVisa2(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
      setOnCard(false);
      setOnCard2(false);
    } else if (onCard && !onCard2 && currentCard.Type === "pay-house") {
      let cost = totalHousesP1 * 30 + hotelsP1 * 50;
      let newMoney = p1Money - cost;
      let newParking = freeParking + cost;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(cost);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setP1Money(0);
        setGameOver(true);
      } else {
        setP1Money(newMoney);
        setFreeParking(newParking);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (!onCard && onCard2 && currentCard.Type === "pay-house") {
      let cost = totalHousesP2 * 30 + hotelsP2 * 50;
      let newMoney = p2Money - cost;
      let newParking = freeParking + cost;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage2(true);
        setRent(cost);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setP2Money(0);
        setGameOver2(true);
      } else {
        setP2Money(newMoney);
        setFreeParking(newParking);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (onCard && !onCard2 && currentCard.Type === "pay-space") {
      let newMoney = p1Money - 200;
      setP1Money(newMoney);
      let newParking = freeParking + 200;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(200);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setP1Money(0);
        setGameOver(true);
      } else {
        setFreeParking(newParking);
        setCounterP1(11);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    } else if (!onCard && onCard2 && currentCard.Type === "pay-space") {
      let newMoney = p2Money - 200;
      setP2Money(newMoney);
      let newParking = freeParking + 200;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage2(true);
        setRent(200);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setP2Money(0);
        setGameOver2(true);
      } else {
        setFreeParking(newParking);
        setCounterP2(11);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
        setOnCard2(false);
      }
    }
  };

  const arrayRemovePre = () => {
    if (cardOption === "GUANXI") {
      arrayRemove(guanxi, currentCard);
    }
    if (cardOption === "FU YUAN") {
      arrayRemove(yunqi, currentCard);
    }
  };

  const arrayRemove = (arr, value) => {
    if (arr === guanxi) {
      let newArray = arr.filter(function (ele) {
        return ele !== value;
      });
      setGuanxi(newArray);
    } else if (arr === yunqi) {
      let newArray = arr.filter(function (ele) {
        return ele !== value;
      });
      setYunqi(newArray);
    }
  };

  useEffect(() => {
    if (cardOption === "GUANXI" && guanxi.length) {
      let cardChoice = guanxi[Math.floor(Math.random() * guanxi.length)];
      setCurrentCard(cardChoice);
    } else if (cardOption === "GUANXI" && !guanxi.length) {
      setGuanxi(Guanxi);
      let cardChoice = guanxi[Math.floor(Math.random() * guanxi.length)];
      setCurrentCard(cardChoice);
    } else if (cardOption === "FU YUAN" && yunqi.length) {
      let cardChoice = yunqi[Math.floor(Math.random() * yunqi.length)];
      setCurrentCard(cardChoice);
    } else if (cardOption === "FU YUAN" && !yunqi.length) {
      setYunqi(Yunqi);
      let cardChoice = yunqi[Math.floor(Math.random() * yunqi.length)];
      setYunqi(cardChoice);
    }
    return null;
  }, [cardOption, guanxi, setGuanxi, setYunqi, yunqi]);

  const close = () => {
    drum();
    cardFunctionSorter();
  };

  return (
    <>
      {currentCard ? (
        <div className="card-info">
          <div className="card-horizontal">
            <img
              className="card-image"
              alt="card-pic"
              src={currentCard.image}
            />
            <div className="card-right">
              <h2 className="card-main-text">{currentCard.Text}</h2>
              <h3 className="card-secondary-text">{currentCard.Instruction}</h3>
            </div>
          </div>
          <button className="continue-button" onClick={() => close()}>
            CONTINUE
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InnerCard;
