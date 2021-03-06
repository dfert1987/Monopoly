import React, { useState, useEffect } from "react";
import { Guanxi } from "../../../Assets/Cards/Guanxi/Guanxi";
import { Yunqi } from "../../../Assets/Cards/Yunqi/Yunqi";
import useSound from "use-sound";
import Drum from "../../../Assets/Sounds/drum.mp3";
import Airplane from "../../../Assets/Sounds/airplane.mp3";
import Alert from "../../../Assets/Sounds/alert.mp3";
import Bar from "../../../Assets/Sounds/bar.mp3";
import Bell from "../../../Assets/Sounds/bell.mp3";
import Bike from "../../../Assets/Sounds/bike.mp3";
import Bottle from "../../../Assets/Sounds/bottle.mp3";
import Burn from "../../../Assets/Sounds/burn.mp3";
import Check from "../../../Assets/Sounds/check.mp3";
import Cough from "../../../Assets/Sounds/cough.mp3";
import Crash from "../../../Assets/Sounds/crash.mp3";
import Firework from "../../../Assets/Sounds/firework.mp3";
import Gambei from "../../../Assets/Sounds/gambei.mp3";
import Haochi from "../../../Assets/Sounds/haochi.mp3";
import Jiayou from "../../../Assets/Sounds/jiayou.mp3";
import Jude from "../../../Assets/Sounds/jude.mp3";
import Ktv from "../../../Assets/Sounds/ktv.mp3";
import Lantern from "../../../Assets/Sounds/lantern.mp3";
import Laugh from "../../../Assets/Sounds/laugh.mp3";
import Lush from "../../../Assets/Sounds/lush.mp3";
import Marry from "../../../Assets/Sounds/marry.mp3";
import Migas from "../../../Assets/Sounds/migas.mp3";
import Victory from "../../../Assets/Sounds/victory.mp3";
import Money from "../../../Assets/Sounds/money.mp3";
import National from "../../../Assets/Sounds/national.mp3";
import Nglx from "../../../Assets/Sounds/nlgx.mp3";
import Police from "../../../Assets/Sounds/police.mp3";
import Sad from "../../../Assets/Sounds/sad.mp3";
import Snorting from "../../../Assets/Sounds/snort.mp3";
import Subway from "../../../Assets/Sounds/subway.mp3";
import Temple from "../../../Assets/Sounds/temple.mp3";
import Triumph from "../../../Assets/Sounds/triumph.mp3";
import Vomit from "../../../Assets/Sounds/vomit.mp3";
import XinNian from "../../../Assets/Sounds/xinnian.mp3";
import Zhege from "../../../Assets/Sounds/zhege.mp3";
import Splash from "../../../Assets/Sounds/splash.mp3";
import SoftLaugh from "../../../Assets/Sounds/softLaugh.mp3";

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
  setOnGoP1,
  setOnGoP2,
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
  setEndGame,
  setP1Jail,
  setP2Jail,
}) => {
  const [currentCard, setCurrentCard] = useState();
  const [drum] = useSound(Drum);
  const [splash] = useSound(Splash);
  const [airplane] = useSound(Airplane);
  const [alert] = useSound(Alert);
  const [bar] = useSound(Bar);
  const [bell] = useSound(Bell);
  const [bike] = useSound(Bike);
  const [bottle] = useSound(Bottle);
  const [burn] = useSound(Burn);
  const [check] = useSound(Check);
  const [cough] = useSound(Cough);
  const [crash] = useSound(Crash);
  const [firework] = useSound(Firework);
  const [gambei] = useSound(Gambei);
  const [haochi] = useSound(Haochi);
  const [jiayou] = useSound(Jiayou);
  const [jude] = useSound(Jude);
  const [ktv] = useSound(Ktv);
  const [lantern] = useSound(Lantern);
  const [laugh] = useSound(Laugh);
  const [lush] = useSound(Lush);
  const [marry] = useSound(Marry);
  const [migas] = useSound(Migas);
  const [money] = useSound(Money);
  const [national] = useSound(National);
  const [nglx] = useSound(Nglx);
  const [police] = useSound(Police);
  const [sad] = useSound(Sad);
  const [snorting] = useSound(Snorting);
  const [subway] = useSound(Subway);
  const [temple] = useSound(Temple);
  const [triumph] = useSound(Triumph);
  const [vomit] = useSound(Vomit);
  const [xinNian] = useSound(XinNian);
  const [zhege] = useSound(Zhege);
  const [victory] = useSound(Victory);
  const [softLaugh] = useSound(SoftLaugh);

  const cardFunctionSorter = () => {
    if ((onCard || onCard2) && currentCard && currentCard.sound === "plane") {
      airplane();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "splash") {
      splash();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "soft-laugh"
    ) {
      softLaugh();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "xin-nian"
    ) {
      xinNian();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "techno") {
      lantern();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "police") {
      police();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "bar-small"
    ) {
      bar();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "teach") {
      bell();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "money") {
      money();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "snort") {
      snorting();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "crowd") {
      nglx();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "hao-chi") {
      haochi();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "cough") {
      cough();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "sick") {
      vomit();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "sad") {
      sad();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "triumph") {
      triumph();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "jiayou") {
      jiayou();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "burn") {
      burn();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "crash") {
      crash();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "bike-bell"
    ) {
      bike();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "hey-jude"
    ) {
      jude();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "bottle-pop"
    ) {
      bottle();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "disco") {
      migas();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "bill-fight"
    ) {
      check();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "anthem") {
      national();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "rock") {
      temple();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "laughter"
    ) {
      laugh();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "subway") {
      subway();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "alert") {
      alert();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "gambei") {
      gambei();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "marry") {
      marry();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "zhege") {
      zhege();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "firework"
    ) {
      firework();
    }
    if (
      (onCard || onCard2) &&
      currentCard &&
      currentCard.sound === "backstreet"
    ) {
      ktv();
    }
    if ((onCard || onCard2) && currentCard && currentCard.sound === "lush") {
      lush();
    }
    if (onCard && !onCard2 && currentCard.Type === "pay-skip") {
      let newMoney = p1Money - currentCard.amt;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(currentCard.amt);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setP1Money(0);
        setGameOver(true);
        setEndGame(true);
        setOnCard(false);
        setOnCard2(false);
        victory();
      } else {
        setP1Money(newMoney);
        let newFP = freeParking + currentCard.amt;
        setFreeParking(newFP);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    }
    if (!onCard && onCard2 && currentCard.Type === "pay-skip") {
      let newMoney = p2Money - currentCard.amt;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(currentCard.amt);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setP2Money(0);
        setGameOver(true);
        setEndGame(true);
        setOnCard(false);
        setOnCard2(false);
        victory();
      } else {
        setP2Money(newMoney);
        let newFP = freeParking + currentCard.amt;
        setFreeParking(newFP);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    }
    if (onCard && !onCard2 && currentCard.Type === "pay") {
      let newMoney = p1Money - currentCard.amt;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(currentCard.amt);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setP1Money(0);
        setGameOver(true);
        setEndGame(true);
        setOnCard(false);
        setOnCard2(false);
        victory();
      } else {
        setP1Money(newMoney);
        let newFP = freeParking + currentCard.amt;
        setFreeParking(newFP);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    } else if (!onCard && onCard2 && currentCard.Type === "pay") {
      let newMoney = p2Money - currentCard.amt;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage2(true);
        setRent(currentCard.amt);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setP2Money(0);
        setOnCard(false);
        setOnCard2(false);
        setGameOver2(true);
        setEndGame(true);
        victory();
      } else {
        setP2Money(newMoney);
        let newFP = freeParking + currentCard.amt;
        setFreeParking(newFP);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    } else if (onCard && !onCard2 && currentCard.Type === "collect") {
      let newMoney = p1Money + currentCard.amt;
      setP1Money(newMoney);
      setOnCard(false);
      setOnCard2(false);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (!onCard && onCard2 && currentCard.Type === "collect") {
      let newMoney = p2Money + currentCard.amt;
      setP2Money(newMoney);
      setOnCard(false);
      setOnCard2(false);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
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
        setEndGame(true);
        setOnCard(false);
        victory();
        setOnCard2(false);
      } else {
        setP1Money(newMoney);
        setP2Money(newMoney2);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
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
        setEndGame(true);
        victory();
        setOnCard(false);
        setOnCard2(false);
      } else {
        setP2Money(newMoney);
        setP1Money(newMoney2);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    } else if (onCard && !onCard2 && currentCard.Type === "pay-opponent") {
      let newMoney = p1Money - currentCard.amt;
      let newMoney2 = p2Money + currentCard.amt;
      setP1Money(newMoney);
      setP2Money(newMoney2);
      setOnCard(false);
      setOnCard2(false);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (!onCard && onCard2 && currentCard.Type === "pay-opponent") {
      let newMoney = p2Money - currentCard.amt;
      let newMoney2 = p1Money + currentCard.amt;
      setP1Money(newMoney2);
      setP2Money(newMoney);
      setOnCard(false);
      setOnCard2(false);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
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
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
      }
      if (newSpace === 21) {
        setCounterP1(newSpace);
        setOnCard(false);
        setOnCard2(false);
        setInJail(true);
        setP1Jail(true);
        arrayRemovePre();
        setCardOption();
      }
      if (currentRR) {
        if (!currentRR.ownedP1 && !currentRR.ownedP2) {
          setRRModal(true);
          setOnRR(currentRR);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else if (!currentRR.ownedP1 && currentRR.ownedP2) {
          setOnRR(currentRR);
          setPayRail(true);
          setOnCard(false);
          setOnCard2(false);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        }
      } else if (currentProp) {
        if (!currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnProp(currentProp);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else if (!currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        }
      } else {
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
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
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
      }
      if (newSpace === 21) {
        setCounterP2(newSpace);
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
        setInJail2(true);
        setP2Jail(true);
      } else if (currentRR) {
        if (!currentRR.ownedP1 && !currentRR.ownedP2) {
          setRRModal2(true);
          setOnRR2(currentRR);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else if (currentRR.ownedP1 && !currentRR.ownedP2) {
          setOnRR2(currentRR);
          setPayRail(true);
          setPayRailTo(1);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        }
      } else if (currentProp) {
        if (!currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal2(true);
          setOnProp2(currentProp);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else if (currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
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
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        }
      } else if (newSpace === -1) {
        setCounterP1(39);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        setOnAgentFee(true);
        arrayRemovePre();
        setCardOption();
      } else if (newSpace === 5) {
        setOnVisa(true);
        setOnCard(false);
        setOnCard2(false);
        setCounterP1(newSpace);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      } else if (newSpace === 34) {
        setCounterP1(newSpace);
        setOnCard(true);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      } else if (newSpace === 31) {
        setCounterP1(newSpace);
        setOnFreeParking(true);
        setOnCard(false);
        setOnCard2(false);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      } else if (newSpace > 0) {
        setCounterP1(newSpace);
        setCurrentCard();
        let currentProp = properties.find(
          (property) => property.Number === newSpace
        );
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnCard(false);
          setOnCard2(false);
          setOnProp(currentProp);
          arrayRemovePre();
          setCardOption();
        } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setOnCard(false);
          setOnCard2(false);
          setPayProp(true);
          setPayTo(2);
          arrayRemovePre();
          setCardOption();
        } else if (
          currentUtil &&
          !currentUtil.ownedP1 &&
          !currentUtil.ownedP2
        ) {
          setOnCard(false);
          setOnCard2(false);
          setUtilModal(true);
          setOnUtil(currentUtil);
          arrayRemovePre();
          setCardOption();
        } else if (currentUtil && !currentUtil.ownedP1 && currentUtil.ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setOnUtil(currentUtil);
          setPayUtil(true);
          setPayUtilTo(2);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
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
          setOnCard(false);
          setOnCard2(false);
          setPropertyModal2(true);
          setOnProp2(currentProp);
          arrayRemovePre();
          setCardOption();
        } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          arrayRemovePre();
          setCardOption();
        }
      } else if (newSpace === -1) {
        setOnCard(false);
        setOnCard2(false);
        setCounterP2(39);
        setCurrentCard();
        setOnAgentFee2(true);
        arrayRemovePre();
        setCardOption();
      } else if (newSpace === 5) {
        setOnCard(false);
        setOnCard2(false);
        setOnVisa2(true);
        setCounterP2(newSpace);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      } else if (newSpace === 34) {
        setCounterP2(newSpace);
        setOnCard2(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
        setOnCard(false);
      } else if (newSpace === 31) {
        setOnCard(false);
        setOnCard2(false);
        setCounterP1(newSpace);
        setOnFreeParking2(true);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      } else if (newSpace > 0) {
        setCounterP2(newSpace);
        setCurrentCard();
        let currentProp = properties.find(
          (property) => property.Number === newSpace
        );
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setPropertyModal2(true);
          setOnProp2(currentProp);
          arrayRemovePre();
          setCardOption();
        } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
          arrayRemovePre();
          setCardOption();
        } else if (
          currentUtil &&
          !currentUtil.ownedP1 &&
          !currentUtil.ownedP2
        ) {
          setOnCard(false);
          setOnCard2(false);
          setUtilModal2(true);
          setOnUtil2(currentUtil);
          arrayRemovePre();
          setCardOption();
        } else if (currentUtil && currentUtil.ownedP1 && !currentUtil.ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setOnUtil2(currentUtil);
          setPayUtil(true);
          setPayUtilTo(1);
          arrayRemovePre();
          setCardOption();
        }
      } else {
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
      }
    } else if (currentCard.Type === "reroll") {
      let newTurn = turn + 1;
      setOnCard(false);
      setOnCard2(false);
      setTurn(newTurn);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (onCard && !onCard2 && currentCard.Type === "advance") {
      let currentProp = properties.find(
        (property) => property.Number === currentCard.space
      );
      let currentUtil = utilities.find(
        (util) => util.Number === currentCard.space
      );
      let currentRR = railRoads.find((rr) => rr.Number === currentCard.space);
      if (currentCard.space === 1) {
        setOnGoP1(true);
        setCounterP1(currentCard.space);
      } else if (currentCard.space === 41) {
        setOnCard(false);
        setOnCard2(false);
        setInJail(true);
        setP1Jail(true);
        setCounterP1(41);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
      if (currentCard.space !== 41 && currentCard.space < counterP1) {
        setPass(true);
        let newMoney = p1Money + 200;
        setP1Money(newMoney);
        setCounterP1(currentCard.space);
      } else if (currentCard.space !== 41 && currentCard.space !== 1) {
        setCounterP1(currentCard.space);
      }
      if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setPropertyModal1(true);
        setOnProp(currentProp);
        arrayRemovePre();
        setCardOption();
      } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setOnProp(currentProp);
        setPayProp(true);
        setPayTo(2);
        arrayRemovePre();
        setCardOption();
      } else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setUtilModal(true);
        setOnUtil(currentUtil);
        arrayRemovePre();
        setCardOption();
      } else if (currentUtil && !currentUtil.ownedP1 && currentUtil.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setOnUtil(currentUtil);
        setPayUtil(true);
        setPayUtilTo(2);
        arrayRemovePre();
        setCardOption();
      } else if (currentRR && !currentRR.ownedP1 && !currentRR.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setRRModal(true);
        setOnRR(currentRR);
        arrayRemovePre();
        setCardOption();
      } else if (currentRR && !currentRR.ownedP1 && currentRR.ownedP2) {
        setOnRR(currentRR);
        setOnCard(false);
        setOnCard2(false);
        setPayRail(true);
        setPayRailTo(2);
        arrayRemovePre();
        setCardOption();
      } else {
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
      }
      setOnCard(false);
      setOnCard2(false);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (!onCard && onCard2 && currentCard.Type === "advance") {
      let currentProp = properties.find(
        (property) => property.Number === currentCard.space
      );
      let currentUtil = utilities.find(
        (util) => util.Number === currentCard.space
      );
      let currentRR = railRoads.find((rr) => rr.Number === currentCard.space);
      if (currentCard.space === 1) {
        setOnGoP2(true);
        setCounterP2(currentCard.space);
      } else if (currentCard.space === 41) {
        setOnCard(false);
        setOnCard2(false);
        setInJail2(true);
        setCounterP2(41);
        setCurrentCard();
        setP2Jail(true);
        arrayRemovePre();
        setCardOption();
      } else if (currentCard.space !== 41 && currentCard.space < counterP2) {
        setPass2(true);
        let newMoney = p2Money + 200;
        setP2Money(newMoney);
        setCounterP2(currentCard.space);
      } else if (currentCard.space !== 41) {
        setCounterP2(currentCard.space);
      }

      if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
        setPropertyModal2(true);
        setOnCard(false);
        setOnCard2(false);
        setOnProp2(currentProp);
        arrayRemovePre();
        setCardOption();
      } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setOnProp2(currentProp);
        setPayProp(true);
        setPayTo(1);
        arrayRemovePre();
        setCardOption();
      } else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setUtilModal2(true);
        setOnUtil2(currentUtil);
        arrayRemovePre();
        setCardOption();
      } else if (currentUtil && currentUtil.ownedP1 && !currentUtil.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setOnUtil2(currentUtil);
        setPayUtil(true);
        setPayUtilTo(1);
        arrayRemovePre();
        setCardOption();
      } else if (currentRR && !currentRR.ownedP1 && !currentRR.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setRRModal2(true);
        setOnRR2(currentRR);
        arrayRemovePre();
        setCardOption();
      } else if (currentRR && currentRR.ownedP1 && !currentRR.ownedP2) {
        setOnCard(false);
        setOnCard2(false);
        setOnRR2(currentRR);
        setPayRail(true);
        setPayRailTo(1);
        arrayRemovePre();
        setCardOption();
      } else {
        setOnCard(false);
        setOnCard2(false);
        arrayRemovePre();
        setCardOption();
      }
      setOnCard(false);
      setOnCard2(false);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
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
          setOnCard(false);
          setOnCard2(false);
          setDoubleRR(true);
          setOnRR(railRoads[0]);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
        } else if (!railRoads[0].ownedP2 && !railRoads[0].ownedP1) {
          setOnCard(false);
          setOnCard2(false);
          setRRModal(true);
          setOnRR(railRoads[0]);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        }
      } else if (counterP1 === 8) {
        setCounterP1(16);
        if (railRoads[1].ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setDoubleRR(true);
          setOnRR(railRoads[1]);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
        } else if (!railRoads[1].owned2 && !railRoads[1].ownedP1) {
          setOnCard(false);
          setOnCard2(false);
          setOnRR(railRoads[1]);
          setRRModal(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        }
      } else if (counterP1 === 23) {
        setCounterP1(26);
        if (railRoads[2].ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setDoubleRR(true);
          setOnRR(railRoads[2]);
          setPayRail(true);
          setPayRailTo(2);
          arrayRemovePre();
          setCardOption();
        } else if (!railRoads[2].ownedP2 && !railRoads[2].ownedP1) {
          setOnCard(false);
          setOnCard2(false);
          setRRModal(true);
          setOnRR(railRoads[2]);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
          setOnCard(false);
          setOnCard2(false);
          setDoubleRR(true);
          setOnRR2(railRoads[0]);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
        } else if (!railRoads[0].ownedP1 && !railRoads[0].ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setOnRR2(railRoads[0]);
          setRRModal2(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        }
      } else if (counterP2 === 8) {
        setCounterP2(16);
        if (railRoads[1].ownedP1) {
          setOnCard(false);
          setOnCard2(false);
          setDoubleRR(true);
          setOnRR2(railRoads[1]);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
        } else if (!railRoads[1].ownedP2 && !railRoads[1].ownedP1) {
          setOnCard(false);
          setOnCard2(false);
          setOnRR2(railRoads[1]);
          setRRModal2(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        }
      } else if (counterP2 === 23) {
        setCounterP2(26);
        if (railRoads[2].ownedP1) {
          setOnCard(false);
          setOnCard2(false);
          setDoubleRR(true);
          setOnRR2(railRoads[2]);
          setPayRail(true);
          setPayRailTo(1);
          arrayRemovePre();
          setCardOption();
        } else if (!railRoads[2].ownedP1 && !railRoads[2].ownedP2) {
          setOnCard(false);
          setOnCard2(false);
          setOnRR2(railRoads[2]);
          setRRModal2(true);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
            setOnCard(false);
            setOnCard2(false);
            setPass(true);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          } else {
            setOnCard(false);
            setOnCard2(false);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          }
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCounterP1(counterP1);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
            setOnCard(false);
            setOnCard2(false);
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
          } else {
            setOnCard(false);
            setOnCard2(false);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setPayProp(true);
            setOnProp(firstOwned);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          }
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCounterP1(counterP1);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
            setOnCard(false);
            setOnCard2(false);
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
          } else {
            setOnCard(false);
            setOnCard2(false);
            setDoubleProp(true);
            setCounterP1(moveTo);
            setOnProp(firstOwned);
            setPayProp(true);
            setPayTo(2);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          }
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCounterP1(counterP1);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
            setOnCard(false);
            setOnCard2(false);
            setP2Money(newMoney);
            setPass2(true);
            setDoubleProp(true);
            setCounterP2(moveTo);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          } else {
            setOnCard(false);
            setOnCard2(false);
            setDoubleProp(true);
            setCounterP2(moveTo);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          }
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCounterP2(counterP2);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
            setOnCard(false);
            setOnCard2(false);
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
          } else {
            setOnCard(false);
            setOnCard2(false);
            setDoubleProp(true);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCounterP2(moveTo);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          }
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCounterP2(counterP2);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
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
            setOnCard(false);
            setOnCard2(false);
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
          } else {
            setOnCard(false);
            setOnCard2(false);
            setDoubleProp(true);
            setOnProp2(firstOwned);
            setPayProp(true);
            setPayTo(1);
            setCounterP2(moveTo);
            setCurrentCard();
            arrayRemovePre();
            setCardOption();
          }
        } else {
          setOnCard(false);
          setOnCard2(false);
          setCounterP2(counterP2);
          setCurrentCard();
          arrayRemovePre();
          setCardOption();
        }
      }
    } else if (onCard && !onCard2 && currentCard.Type === "skip") {
      setOnCard(false);
      setOnCard2(false);
      setSkip1(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (!onCard && onCard2 && currentCard.Type === "skip") {
      setOnCard(false);
      setOnCard2(false);
      setSkip2(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (onCard && !onCard2 && currentCard.Type === "visa") {
      setOnCard(false);
      setOnCard2(false);
      setVisa1(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (!onCard && onCard2 && currentCard.Type === "visa") {
      setOnCard(false);
      setOnCard2(false);
      setVisa2(true);
      setCurrentCard();
      arrayRemovePre();
      setCardOption();
    } else if (onCard && !onCard2 && currentCard.Type === "pay-house") {
      let cost = totalHousesP1 * 30 + hotelsP1 * 50;
      let newMoney = p1Money - cost;
      let newParking = freeParking + cost;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(cost);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setOnCard(false);
        setOnCard2(false);
        setP1Money(0);
        setGameOver(true);
        setEndGame(true);
        victory();
      } else {
        setOnCard(false);
        setOnCard2(false);
        setP1Money(newMoney);
        setFreeParking(newParking);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    } else if (!onCard && onCard2 && currentCard.Type === "pay-house") {
      let cost = totalHousesP2 * 30 + hotelsP2 * 50;
      let newMoney = p2Money - cost;
      let newParking = freeParking + cost;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage2(true);
        setRent(cost);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setEndGame(true);
        setOnCard(false);
        setOnCard2(false);
        setP2Money(0);
        victory();
        setGameOver2(true);
      } else {
        setEndGame(true);
        setOnCard(false);
        setOnCard2(false);
        setP2Money(newMoney);
        victory();
        setFreeParking(newParking);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    } else if (onCard && !onCard2 && currentCard.Type === "pay-space") {
      let newMoney = p1Money - 200;
      setP1Money(newMoney);
      let newParking = freeParking + 200;
      if (newMoney < 0 && p1MoneyAvailable > -1 * newMoney) {
        setMustMortgage(true);
        setRent(200);
      } else if (newMoney < 0 && p1MoneyAvailable < -1 * newMoney) {
        setEndGame(true);
        setOnCard(false);
        setOnCard2(false);
        setP1Money(0);
        victory();
        setGameOver(true);
        setEndGame(true);
      } else {
        setOnCard(false);
        setOnCard2(false);
        setFreeParking(newParking);
        setCounterP1(11);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
      }
    } else if (!onCard && onCard2 && currentCard.Type === "pay-space") {
      let newMoney = p2Money - 200;
      setP2Money(newMoney);
      let newParking = freeParking + 200;
      if (newMoney < 0 && p2MoneyAvailable > -1 * newMoney) {
        setMustMortgage2(true);
        setRent(200);
      } else if (newMoney < 0 && p2MoneyAvailable < -1 * newMoney) {
        setOnCard(false);
        setOnCard2(false);
        setP2Money(0);
        setGameOver2(true);
        setEndGame(true);
        victory();
      } else {
        setOnCard(false);
        setOnCard2(false);
        setFreeParking(newParking);
        setCounterP2(11);
        setCurrentCard();
        arrayRemovePre();
        setCardOption();
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
  }, [cardOption, onCard, onCard2, setGuanxi, setYunqi, guanxi, yunqi]);

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
