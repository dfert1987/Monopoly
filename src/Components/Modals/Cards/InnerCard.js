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
    } else if (onCard && !onCard2 && currentCard.Type === "back") {
      let newSpace = counterP1 - currentCard.amt;
      setCounterP1(newSpace);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "back") {
      let newSpace = counterP2 - currentCard.amt;
      setCounterP2(newSpace);
      setCurrentCard();
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
        } else setCounterP1(counterP1);
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
        } else setCounterP1(counterP1);
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
        } else setCounterP2(counterP2);
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
        } else setCounterP2(counterP2);
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
        } else setCounterP2(counterP2);
      }
    } else if (onCard && !onCard2 && currentCard.Type === "skip") {
      setSkip1(true);
    } else if (!onCard && onCard2 && currentCard.Type === "skip") {
      setSkip2(true);
    } else if (onCard && !onCard2 && currentCard.Type === "visa") {
      setVisaP1(true);
    } else if (!onCard && onCard2 && currentCard.Type === "visa") {
      setVisaP2(true);
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
