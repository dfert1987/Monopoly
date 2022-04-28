import React, { useState } from "react";
import ditieLogo from "../../../Assets/PropertyImages/ditielogo.png";
import "../../Styles/Must.css";

export const PropMorts = ({
  assets,
  asset,
  money,
  setMoney,
  key,
  rent,
  setRent,
  type,
  player,
  enoughMoney,
  setEnoughMoney,
}) => {
  const [purchased, setPurchased] = useState("grey");

  return (
    <>
      {type === "property" ? (
        <div className={`container-prop ${purchased}`}>
          <p className="propname">{asset.Name}</p>
          <div className={`prop-card ${purchased}`} id={key}>
            <div className={`top-prop ${asset.color} ${purchased}`}></div>
            <div className={`white-prop ${purchased}`}></div>
          </div>
          <p className="value">{asset.mortgage}</p>
        </div>
      ) : null}
      {type === "rail" ? (
        <div className="container-prop">
          <p className="propname">{asset.Name}</p>
          <div className="rr-card" id={key}>
            <div className="top-rr-must"></div>
            <div className="white-prop">
              <img className="subway-logo" src={ditieLogo} alt="subway-logo" />
            </div>
          </div>
          <p className="value">{asset.mortgage}RMB</p>
        </div>
      ) : null}
      {type === "utility" ? (
        <div className="container-prop">
          <p className="propname">{asset.Name}</p>
          <div className="rr-card" id={key}>
            <div className="top-rr-must"></div>
            <div className="white-prop">
              <img
                className="subway-logo-left"
                src={asset.bannerImage}
                alt="subway-logo"
              />
            </div>
          </div>
          <p className="value">{asset.mortgage}RMB</p>
        </div>
      ) : null}
    </>
  );
};

export default PropMorts;
