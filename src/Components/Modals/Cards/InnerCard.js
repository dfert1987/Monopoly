import React, { useState, useEffect } from "react";
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
}) => {
  const [currentCard, setCurrentCard] = useState();

  const arrayRemovePre = () => {
    console.log("hi");
    if (cardOption === "GUANXI") {
      console.log("ok");
      arrayRemove(guanxi, currentCard);
    }
    if (cardOption === "YUNQI") {
      console.log("ok yunqi");
      arrayRemove(yunqi, currentCard);
    }
  };

  const arrayRemove = (arr, value) => {
    if (arr === guanxi) {
      console.log("ok 2");
      let newArray = arr.filter(function (ele) {
        return ele !== value;
      });
      setGuanxi(newArray);
      // console.log(newArray);
    } else if (arr === yunqi) {
      console.log("ok 3");
      let newArray = arr.filter(function (ele) {
        return ele !== value;
      });

      // console.log(newArray);

      setYunqi(newArray);
      console.log(Yunqi);
    }
  };

  console.log(guanxi);
  console.log(yunqi);

  useEffect(() => {
    if (cardOption === "GUANXI" && guanxi.length) {
      let cardChoice = guanxi[Math.floor(Math.random() * guanxi.length)];
      setCurrentCard(cardChoice);
    } else if (cardOption === "YUNQI" && yunqi.length) {
      let cardChoice = yunqi[Math.floor(Math.random() * yunqi.length)];
      setCurrentCard(cardChoice);
    }
    return null;
  }, [cardOption, guanxi, yunqi]);

  const close = () => {
    arrayRemovePre();
    setCurrentCard();
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
