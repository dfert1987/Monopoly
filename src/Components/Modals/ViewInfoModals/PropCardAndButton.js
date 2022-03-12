import React, { useState, useEffect } from "react";
import hutong from "../../../Assets/Misc/hutong.jpeg";
import apartment from "../../../Assets/Misc/biejing apartment.jpeg";
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
}) => {
  console.log(setP1Money);
  const [houseCount, setHouseCount] = useState(0);
  const [hotel, setHotel] = useState(false);

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
    if (houseCount === 0 && houseModal) {
      setHouseCount(1);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasOneHouse: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 1 && houseModal) {
      setHouseCount(2);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 2 && houseModal) {
      setHouseCount(3);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasThreeHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 3 && houseModal) {
      setHouseCount(4);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasFourHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 4 && houseModal && !hotel) {
      setHotel(true);
      let newMoney = p1Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasHotel: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 4 && hotel && houseModal) {
      setHotel(true);
    }
    if (houseCount === 0 && houseModal2) {
      setHouseCount(1);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasOneHouse: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 1 && houseModal2) {
      setHouseCount(2);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 2 && houseModal2) {
      setHouseCount(3);
      let newMoney = p2Money - card.buidlingCost;
      setP1Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 3 && houseModal2) {
      setHouseCount(4);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 4 && houseModal2 && !hotel) {
      setHotel(true);
      let newMoney = p2Money - card.buidlingCost;
      setP2Money(newMoney);
      let updatedProperties = properties.map((property) => {
        if (property.Name === card.Name) {
          return { ...property, hasTwoHouses: true };
        }
        return property;
      });
      setProperties(updatedProperties);
    }
    if (houseCount === 4 && hotel && houseModal2) {
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
      <button className="buy" onClick={buyHutong} key={index}>
        Buy House
      </button>
    </div>
  );
};

export default PropCardAndButton;