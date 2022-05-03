import React, { useState, useEffect } from "react";
import hutong from "../../../Assets/Misc/hutong.png";
import apartment from "../../../Assets/Misc/apartment.png";
import "../../Styles/BuildModal.css";

const PropCardAndButton = ({
  card,
  index,
  properties,
  setProperties,
  houseModal,
  houseModal2,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  setTooMuch,
  tooMuch,
  hotelsP1,
  hotelsP2,
  setHotelsP1,
  setHotelsP2,
  setTotalHousesP1,
  setTotalHousesP2,
  totalHousesP1,
  totalHousesP2,
}) => {
  const [houseCount, setHouseCount] = useState(0);
  const [hotel, setHotel] = useState(false);
  const [hotelAlready, setHotelAlready] = useState(false);

  useEffect(() => {
    if (card.hasOneHouse === true && card.hasTwoHouses === false) {
      setHouseCount(1);
    } else if (card.hasTwoHouses === true && card.hasThreeHouses === false) {
      setHouseCount(2);
    } else if (card.hasThreeHouses === true && card.hasFourHouses === false) {
      setHouseCount(3);
    } else if (card.hasFourHouses === true && card.hasHotel === false) {
      setHouseCount(4);
    } else if (card.hasHotel === true) {
      setHouseCount(0);
      setHotel(true);
      setHotelAlready(true);
    }
  }, [
    card.hasOneHouse,
    card.hasTwoHouses,
    card.hasThreeHouses,
    card.hasFourHouses,
    card.hasHotel,
  ]);

  const buyHutong = (event) => {
    event.preventDefault();
    if (houseModal && card.buidlingCost > p1Money) {
      setTooMuch(true);
      return null;
    } else if (houseCount === 0 && houseModal && card.buidlingCost < p1Money) {
      setHouseCount(1);
      let newHouses = totalHousesP1 + 1;
      setTotalHousesP1(newHouses);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasOneHouse: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (houseCount === 1 && houseModal && card.buidlingCost < p1Money) {
      setHouseCount(2);
      let newHouses = totalHousesP1 + 1;
      setTotalHousesP1(newHouses);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (houseCount === 2 && houseModal && card.buidlingCost < p1Money) {
      setHouseCount(3);
      let newHouses = totalHousesP1 + 1;
      setTotalHousesP1(newHouses);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasThreeHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (houseCount === 3 && houseModal && card.buidlingCost < p1Money) {
      setHouseCount(4);
      let newHouses = totalHousesP1 + 1;
      setTotalHousesP1(newHouses);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasFourHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (
      houseCount === 4 &&
      houseModal &&
      !hotel &&
      card.buidlingCost < p1Money
    ) {
      setHotel(true);
      let newHouses = totalHousesP1 - 4;
      let newHotels = hotelsP1 + 1;
      setTotalHousesP1(newHouses);
      setHotelsP1(newHotels);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasHotel: true };
        }
        return property;
      });
      setProperties(updatedProperties);
      setHotelAlready(true);
    } else if (
      houseCount === 0 &&
      hotel &&
      houseModal &&
      card.buidlingCost < p1Money
    ) {
      setHotel(true);
    }
    if (houseModal2 && card.buidlingCost > p2Money) {
      setTooMuch(true);
      return null;
    } else if (houseCount === 0 && houseModal2 && card.buidlingCost < p2Money) {
      setHouseCount(1);
      let newHouses = totalHousesP2 + 1;
      setTotalHousesP2(newHouses);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasOneHouse: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (houseCount === 1 && houseModal2 && card.buidlingCost < p2Money) {
      setHouseCount(2);
      let newHouses = totalHousesP2 + 1;
      setTotalHousesP2(newHouses);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (houseCount === 2 && houseModal2 && card.buidlingCost < p2Money) {
      setHouseCount(3);
      let newHouses = totalHousesP2 + 1;
      setTotalHousesP2(newHouses);
      let newMoney = p2Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasThreeHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (houseCount === 3 && houseModal2 && card.buidlingCost < p2Money) {
      setHouseCount(4);
      let newHouses = totalHousesP2 + 1;
      setTotalHousesP2(newHouses);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasFourHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    } else if (
      houseCount === 4 &&
      houseModal2 &&
      !hotel &&
      card.buidlingCost < p2Money
    ) {
      setHotel(true);
      let newHouses = totalHousesP2 - 4;
      let newHotels = hotelsP2 + 1;
      setTotalHousesP2(newHouses);
      setHotelsP2(newHotels);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasHotel: true };
        }
        return property;
      });
      setProperties(updatedProperties);
      setHotelAlready(true);
    } else if (
      houseCount === 0 &&
      hotel &&
      houseModal2 &&
      card.buidlingCost < p2Money
    ) {
      setHotel(true);
    }
    return null;
  };

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
    } else if (houseCount === 4 && !hotel) {
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
            className="hutong-piece hotel-example"
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
      <button
        className="buy"
        onClick={buyHutong}
        key={index}
        disabled={tooMuch || hotelAlready}
      >
        Buy House
      </button>
    </div>
  );
};

export default PropCardAndButton;
