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
    } else if (onCard && !onCard2 && currentCard.Type === "receive") {
      let newMoney = p1Money + currentCard.amt;
      setP1Money(newMoney);
      setCurrentCard();
    } else if (!onCard && onCard2 && currentCard.Type === "receive") {
      let newMoney = p2Money + currentCard.amt;
      setP2Money(newMoney);
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
    // setCurrentCard();
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
