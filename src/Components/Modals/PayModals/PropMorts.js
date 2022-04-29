import React, { useState } from "react";
import useSound from "use-sound";
import Drum from "../../../Assets/Sounds/drum.mp3";
import ditieLogo from "../../../Assets/PropertyImages/ditielogo.png";
import "../../Styles/Must.css";

export const PropMorts = ({
  assets,
  asset,
  money,
  setMoney,
  rent,
  type,
  player,
  setEnoughMoney,
  setNeeded,
  setUpdated,
}) => {
  const [purchased, setPurchased] = useState("normal");
  const [drum] = useSound(Drum);

  const mortgageProp = () => {
    if (purchased === "normal") {
      setPurchased("grey");
      drum();
      let updatedProperties = assets.map((property) => {
        if (property.Name === asset.Name) {
          return { ...property, mortgaged: true };
        }
        return property;
      });
      setUpdated(updatedProperties);
      let updatedMoney = money + asset.mortgage;
      setMoney(updatedMoney);
      setAmountNeeded(updatedMoney);
    }
  };

  const setAmountNeeded = (current) => {
    if (current >= rent) {
      setNeeded(0);
      setEnoughMoney(true);
    } else if (current < rent) {
      let amt = rent - current;
      setNeeded(amt);
    }
  };

  return (
    <>
      {type === "property" ? (
        <div className="container-prop" onClick={mortgageProp}>
          <p className="propname">{asset.Name}</p>
          <div className={`prop-card ${purchased}`}>
            <div className={`top-prop ${asset.color} ${purchased}`}></div>
            <div className={`white-prop ${purchased}`}>
              {purchased === "grey" ? <p className="m big">M</p> : null}
            </div>
          </div>
          <p className="value">{asset.mortgage} RMB</p>
        </div>
      ) : null}
      {type === "rail" ? (
        <div className="container-prop" onClick={mortgageProp}>
          <p className="propname">{asset.Name}</p>
          <div className={`rr-card ${purchased}`}>
            <div className={`top-rr-must ${purchased}`}></div>
            <div className={`white-prop ${purchased}`}>
              {purchased === "grey" ? (
                <p className="m big">M</p>
              ) : (
                <img
                  className="subway-logo"
                  src={ditieLogo}
                  alt="subway-logo"
                />
              )}
            </div>
          </div>
          <p className="value">{asset.mortgage} RMB</p>
        </div>
      ) : null}
      {type === "utility" ? (
        <div className="container-prop" onClick={mortgageProp}>
          <p className="propname">{asset.Name}</p>
          <div className={`rr-card ${purchased}`}>
            <div className={`top-rr-must ${purchased}`}></div>
            <div className={`white-prop ${purchased}`}>
              {purchased === "grey" ? (
                <p className="m big">M</p>
              ) : (
                <img
                  className="subway-logo-left"
                  src={asset.bannerImage}
                  alt="subway-logo"
                />
              )}
            </div>
          </div>
          <p className="value">{asset.mortgage} RMB</p>
        </div>
      ) : null}
    </>
  );
};

export default PropMorts;
