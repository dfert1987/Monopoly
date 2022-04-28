import React, { useState } from "react";
import useSound from "use-sound";
import Click from "../../../Assets/Sounds/click.mp3";
import Drum from "../../../Assets/Sounds/drum.mp3";
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
  const [purchased, setPurchased] = useState("normal");
  const [click] = useSound(Click);
  const [drum] = useSound(Drum);

  const mortgageProp = () => {
    if (player === "p1" && purchased === "normal") {
      setPurchased("grey");
      drum();
      let updatedProperties = assets.map((property) => {
        if (property.Name === asset.Name) {
          return { ...property, mortgaged: true };
        }
        return property;
      });
    }
  };

  return (
    <>
      {type === "property" ? (
        <div className="container-prop" onClick={mortgageProp}>
          <p className="propname">{asset.Name}</p>
          <div className={`prop-card ${purchased}`} id={key}>
            <div className={`top-prop ${asset.color} ${purchased}`}></div>
            <div className={`white-prop ${purchased}`}>
              {purchased === "grey" ? <p className="m big">M</p> : null}
            </div>
          </div>
          <p className="value">{asset.mortgage} RMB</p>
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
          <p className="value">{asset.mortgage} RMB</p>
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
          <p className="value">{asset.mortgage} RMB</p>
        </div>
      ) : null}
    </>
  );
};

export default PropMorts;
