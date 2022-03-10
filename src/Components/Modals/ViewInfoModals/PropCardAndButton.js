import React from "react";
import "../../Styles/BuildModal.css";

const PropCardAndButton = ({ card, index }) => {
  return (
    <div className="container" id={index}>
      <div className="main-card propCard">
        <div className="outer-banner">
          <div className={`banner ${card.color}`}>
            <h2 className="prop-name">{card.Name.toUpperCase()}</h2>
          </div>
        </div>
        <div className="all-prop-info">
          <div className="main-prop-info">
            <h4 className="rent">{`RENT ¥${card.rent}`}</h4>
            <div className="house-container one">
              <p className="left-side">With 1 House</p>
              <p className="right-side">{`¥${card.oneHouse}`}</p>
            </div>
            <div className="house-container two">
              <p className="left-side">With 2 Houses</p>
              <p className="right-side">{`¥${card.twoHouses}`}</p>
            </div>
            <div className="house-container three">
              <p className="left-side">With 3 Houses</p>
              <p className="right-side">{`¥${card.threeHouses}`}</p>
            </div>
            <div className="house-container four">
              <p className="left-side">With 4 Houses</p>
              <p className="right-side">{`¥${card.fourHouses}`}</p>
            </div>
            <div className="house-container hotel">
              <p className="left-side">With Hotel</p>
              <p className="right-side">{`¥${card.hotel}`}</p>
            </div>
          </div>
          <div className="secondary-prop-info">
            <h4 className="mortgage">{`Mortgage Value: ¥${card.mortgage}`}</h4>
            <p className="houses">{`Houses Cost ¥${card.buidlingCost}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropCardAndButton;
