import React, { useState } from "react";
import hutong from "../../../Assets/Misc/hutong.jpeg";
import apartment from "../../../Assets/Misc/biejing apartment.jpeg";
import "../../Styles/BuildModal.css";

const PropCardAndButton = ({ card, index }) => {
  const [houseCount, setHouseCount] = useState(0);
  const [hotel, setHotel] = useState(false);

  const buyHutong = () => {
    if (houseCount < 4) {
      let newHouse = houseCount + 1;
      setHouseCount(newHouse);
      //   subtract money
      //   adjust actual prop
    }
    if (houseCount === 4) {
      setHouseCount(0);
      setHotel(true);
    } else if (hotel === true) {
      setHouseCount(0);
      setHotel(true);
    }
    return null;
  };
  console.log(houseCount);

  const setHouses = () => {
    if (houseCount === 1) {
      return (
        <div className="house-container">
          <img className="hutong-piece" alt="house-icon" src={hutong} />
        </div>
      );
    } else if (houseCount === 2) {
      return (
        <div className="house-container">
          <img className="hutong-piece" alt="house-icon" src={hutong} />
          <img className="hutong-piece" alt="house-icon" src={hutong} />
        </div>
      );
    } else if (houseCount === 3) {
      return (
        <div className="house-container">
          <img className="hutong-piece" alt="house-icon" src={hutong} />
          <img className="hutong-piece" alt="house-icon" src={hutong} />
          <img className="hutong-piece" alt="house-icon" src={hutong} />
        </div>
      );
    } else if (houseCount === 4) {
      return (
        <div className="house-container">
          <img className="hutong-piece" alt="house-icon" src={hutong} />
          <img className="hutong-piece" alt="house-icon" src={hutong} />
          <img className="hutong-piece" alt="house-icon" src={hutong} />
          <img className="hutong-piece" alt="house-icon" src={hutong} />
        </div>
      );
    } else if (hotel) {
      return (
        <div className="house-container">
          <img
            className="hutong-piece hotel"
            alt="hotel-icon"
            src={apartment}
          />
        </div>
      );
    }
  };

  return (
    <div className="container" id={index} key={index}>
      <div className="main-card propCard houses">
        <div className="outer-banner">
          <div className={`banner ${card.color}`}>
            {setHouses()}
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
      <button className="buy" onClick={() => buyHutong()} key={index}>
        Buy House
      </button>
    </div>
  );
};

export default PropCardAndButton;
