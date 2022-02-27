import React from "react";
import yuanSign from "../../Assets/Misc/yuan.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Purchased.css";

const PurchasedPopUp = ({ viewPurchase, setViewPurchase, onProp, onProp2 }) => {
  const handleClose = (e) => {
    e.preventDefault();
    setViewPurchase(false);
  };
  return (
    <>
      {viewPurchase && onProp ? (
        <div className="outerModal flex centerFlex">
          <div className="flex flexColumn innerModalPurchase">
            <div className="button-row">
              <button className="close-button" onClick={handleClose}>
                <FontAwesomeIcon className="x-icon" icon={faXmark} />
              </button>
            </div>
            <div className="purchased-container">
              <h2 className="title-top">YOU'VE PURCHASED</h2>
              <img
                className="dollar-sign"
                alt="gold yuan sign"
                src={yuanSign}
              />
              <h2 className="title-bottom">{onProp.Name}</h2>
            </div>
          </div>
        </div>
      ) : null}
      {viewPurchase && onProp2 ? (
        <div className="outerModal flex centerFlex">
          <div className="flex flexColumn innerModalPurchase">
            <div className="button-row">
              <button className="close-button" onClick={handleClose}>
                <FontAwesomeIcon className="x-icon" icon={faXmark} />
              </button>
            </div>
            <div className="purchased-container">
              <h2 className="title-top">YOU'VE PURCHASED</h2>
              <img
                className="dollar-sign"
                alt="gold yuan sign"
                src={yuanSign}
              />
              <h2 className="title-bottom">{onProp2.Name}</h2>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default PurchasedPopUp;
