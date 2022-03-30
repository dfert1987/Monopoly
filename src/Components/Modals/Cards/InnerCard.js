import React, { useState, useEffect } from "react";
import { Guanxi } from "../../../Assets/Cards/Guanxi/Guanxi";
import { Yunqi } from "../../../Assets/Cards/Yunqi/Yunqi";
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
  setVisaP1,
  setVisaP2,
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
}) => {
  const [currentCard, setCurrentCard] = useState();

  const cardFunctionSorter = () => {
    if (onCard && !onCard2 && currentCard.Type === "pay") {
      let newMoney = p1Money - currentCard.amt;
      setP1Money(newMoney);
      let newFP = freeParking + currentCard.amt;
      setFreeParking(newFP);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "pay") {
      let newMoney = p2Money - currentCard.amt;
      setP2Money(newMoney);
      let newFP = freeParking + currentCard.amt;
      setFreeParking(newFP);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "collect") {
      let newMoney = p1Money + currentCard.amt;
      setP1Money(newMoney);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "collect") {
      let newMoney = p2Money + currentCard.amt;
      setP2Money(newMoney);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "collect-opponent") {
      let newMoney = p1Money + currentCard.amt;
      let newMoney2 = p2Money - currentCard.amt;
      setP1Money(newMoney);
      setP2Money(newMoney2);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "collect-opponent") {
      let newMoney = p2Money + currentCard.amt;
      let newMoney2 = p1Money - currentCard.amt;
      setP2Money(newMoney);
      setP1Money(newMoney2);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "pay-opponent") {
      let newMoney = p1Money - currentCard.amt;
      let newMoney2 = p2Money + currentCard.amt;
      setP1Money(newMoney);
      setP2Money(newMoney2);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "pay-opponent") {
      let newMoney = p2Money - currentCard.amt;
      let newMoney2 = p1Money + currentCard.amt;
      setP1Money(newMoney2);
      setP2Money(newMoney);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "forward") {
      let newSpace = counterP1 + currentCard.amt;
      setCounterP1(newSpace);
      // PASS GO
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "forward") {
      let newSpace = counterP2 + currentCard.amt;
      setCounterP2(newSpace);
      // PASS GO
      setCurrentCard();

      // BAAAAAACK
    } else if (onCard && !onCard2 && currentCard.Type === "back") {
      let newSpace = counterP1 - currentCard.amt;
      let currentUtil = utilities.find((util) => util.Number === newSpace);
      // if goes back to migas past go reverse
      if (newSpace === -2) {
        setCounterP1(38);
        setCurrentCard();
        let currentProp = properties.find((property) => property.Number === 38);
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnProp(currentProp);
        } else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
        }
        // if doesnt go past go in reverse
      } else if (newSpace === -1) {
        setCounterP2(39);
        setCurrentCard();
        setOnAgentFee(true);
      } else if (newSpace === 5) {
        setOnVisa2(true);
        setCurrentCard();
      } else if (newSpace > 0) {
        setCounterP1(newSpace);
        setCurrentCard();
        let currentProp = properties.find(
          (property) => property.Number === newSpace
        );

        // if on onowned prop
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal1(true);
          setOnProp(currentProp);
        }

        // if on prop owned by p1
        else if (currentProp && !currentProp.ownedP1 && currentProp.ownedP2) {
          setOnProp(currentProp);
          setPayProp(true);
          setPayTo(2);
        }

        // if on unowned util
        else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
          setUtilModal(true);
          setOnUtil(currentUtil);
          // if on util owned by p2
        } else if (currentUtil && !currentUtil.ownedP1 && currentUtil.ownedP2) {
          setOnUtil(currentUtil);
          setPayUtil(true);
          setPayUtilTo(2);
        }
      }
    } else if (!onCard && onCard2 && currentCard.Type === "back") {
      let newSpace = counterP2 - currentCard.amt;
      let currentUtil = utilities.find((util) => util.Number === newSpace);
      // if going past go in reverse to migas
      if (newSpace === -2) {
        setCounterP2(38);
        setCurrentCard();

        let currentProp = properties.find((property) => property.Number === 38);
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal2(true);
          setOnProp2(currentProp);
        } else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
        }
      } else if (newSpace === -1) {
        setCounterP2(39);
        setCurrentCard();
        setOnAgentFee2(true);
      } else if (newSpace === 5) {
        setOnVisa(true);
        setCurrentCard();
      }
      // for all backs that dont go past go in reverse
      if (newSpace > 0) {
        setCounterP2(newSpace);
        setCurrentCard();
        let currentProp = properties.find(
          (property) => property.Number === newSpace
        );

        // if on onowned prop
        if (currentProp && !currentProp.ownedP1 && !currentProp.ownedP2) {
          setPropertyModal2(true);
          setOnProp2(currentProp);
        }

        // if on prop owned by p1
        else if (currentProp && currentProp.ownedP1 && !currentProp.ownedP2) {
          setOnProp2(currentProp);
          setPayProp(true);
          setPayTo(1);
        }
        // if on unowned util
        else if (currentUtil && !currentUtil.ownedP1 && !currentUtil.ownedP2) {
          setUtilModal2(true);
          setOnUtil2(currentUtil);
        }

        // if on util owned by p1
        else if (currentUtil && currentUtil.ownedP1 && !currentUtil.ownedP2) {
          setOnUtil2(currentUtil);
          setPayUtil(true);
          setPayUtilTo(1);
        }
      }
    } else if (currentCard.Type === "reroll") {
      let newTurn = turn + 1;
      setTurn(newTurn);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "advance") {
      setCounterP1(currentCard.space);
      // PASS GO
      if (currentCard.space === 41) {
        setInJail(true);
        setCurrentCard();
      }
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "advance") {
      setCounterP2(currentCard.space);
      // PASS GO
      if (currentCard.space === 41) {
        setInJail2(true);
        setCurrentCard();
      }
      setCurrentCard();
    } else if (
      onCard &&
      !onCard2 &&
      currentCard.Type === "nearest" &&
      currentCard.Number === 16
    ) {
      if (counterP1 === 37) {
        setCounterP1(6);
        if (railRoads[0].ownedP2) {
          setDoubleRR(true);
        }
        // PASS GO
        setCurrentCard();
      } else if (counterP1 === 8) {
        setCounterP1(16);
        if (railRoads[1].ownedP2) {
          setDoubleRR(true);
        }
        setCurrentCard();
      } else if (counterP1 === 23) {
        setCounterP1(26);
        if (railRoads[2].ownedP2) {
          setDoubleRR(true);
        }
        setCurrentCard();
      }
    } else if (
      !onCard &&
      onCard2 &&
      currentCard.Type === "nearest" &&
      currentCard.Number === 16
    ) {
      if (counterP2 === 37) {
        setCounterP2(6);
        if (railRoads[0].ownedP1) {
          setDoubleRR(true);
        }
        // PASS GO
        setCurrentCard();
      } else if (counterP2 === 8) {
        setCounterP2(16);
        if (railRoads[1].ownedP1) {
          setDoubleRR(true);
        }
        setCurrentCard();
      } else if (counterP2 === 23) {
        setCounterP2(26);
        if (railRoads[2].ownedP1) {
          setDoubleRR(true);
        }
        setCurrentCard();
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
          setDoubleProp(true);
          // PASS GO
          setCounterP1(moveTo);
          setCurrentCard();
        } else {
          setCounterP1(counterP1);
          setCurrentCard();
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
          setDoubleProp(true);
          // PASS GO
          setCounterP1(moveTo);
          setCurrentCard();
        } else {
          setCounterP1(counterP1);
          setCurrentCard();
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
          setDoubleProp(true);
          // PASS GO
          setCounterP1(moveTo);
          setCurrentCard();
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
          setDoubleProp(true);
          // PASS GO
          setCounterP2(moveTo);
          setCurrentCard();
        } else {
          setCounterP2(counterP2);
          setCurrentCard();
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
          setDoubleProp(true);
          // PASS GO
          setCounterP2(moveTo);
          setCurrentCard();
        } else {
          setCounterP2(counterP2);
          setCurrentCard();
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
          setDoubleProp(true);
          setCounterP2(moveTo);
          setCurrentCard();
        } else {
          setCounterP2(counterP2);
          setCurrentCard();
        }
      }
    } else if (onCard && !onCard2 && currentCard.Type === "skip") {
      setSkip1(true);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "skip") {
      setSkip2(true);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "visa") {
      setVisaP1(true);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "visa") {
      setVisaP2(true);
      setCurrentCard();
    } else if (onCard && !onCard2 && currentCard.Type === "pay-house") {
      let cost = totalHousesP1 * 30 + hotelsP1 * 50;
      let newMoney = p1Money - cost;
      let newParking = freeParking + cost;
      setP1Money(newMoney);
      setFreeParking(newParking);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "pay-house") {
      let cost = totalHousesP2 * 30 + hotelsP2 * 50;
      let newMoney = p2Money - cost;
      let newParking = freeParking + cost;
      setP2Money(newMoney);
      setFreeParking(newParking);
      setCurrentCard();
    }
  };

  const arrayRemovePre = () => {
    if (cardOption === "GUANXI") {
      arrayRemove(guanxi, currentCard);
    }
    if (cardOption === "YUNQI") {
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
    } else if (cardOption === "YUNQI" && yunqi.length) {
      let cardChoice = yunqi[Math.floor(Math.random() * yunqi.length)];
      setCurrentCard(cardChoice);
    } else if (cardOption === "YUNQI" && !yunqi.length) {
      setYunqi(Yunqi);
      let cardChoice = yunqi[Math.floor(Math.random() * yunqi.length)];
      setYunqi(cardChoice);
    }
    return null;
  }, [cardOption, guanxi, yunqi]);

  const close = () => {
    cardFunctionSorter();
    arrayRemovePre();
    setCardOption();
    setOnCard(false);
    setOnCard2(false);
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
