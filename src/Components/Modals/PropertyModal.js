import React, { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PropertyModal.css";

const PropertyModal = ({
  setPropertyModal1,
  setPropertyModal2,
  propertyModal1,
  propertyModal2,
  onProp,
  onProp2,
}) => {
  const [close, setClose] = useState(false);
  console.log(onProp2);
  const handleClose = (e) => {
    e.preventDefault();
    setClose(true);
  };
  useEffect(() => {
    if (propertyModal1 && !propertyModal2 && close === true) {
      setPropertyModal1(false);
    } else if (propertyModal2 && !propertyModal1 && close === true) {
      setPropertyModal2(false);
    }
  }, [
    close,
    propertyModal1,
    setPropertyModal1,
    propertyModal2,
    setPropertyModal2,
  ]);

  const frontCard = () => {
    if (onProp && propertyModal1 && !propertyModal2 && close === false) {
      return (
        <div className="main-card">
          <div className={`outer-banner`}>
            <div className={`banner ${onProp.color}`}>
              <h2 className="prop-name">{onProp.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <h4 className="rent">{`RENT ¥${onProp.rent}`}</h4>
              <div className="house-container one">
                <p className="left-side">With 1 House</p>
                <p className="right-side">{`¥${onProp.oneHouse}`}</p>
              </div>
              <div className="house-container two">
                <p className="left-side">With 2 Houses</p>
                <p className="right-side">{`¥${onProp.twoHouses}`}</p>
              </div>
              <div className="house-container three">
                <p className="left-side">With 3 Houses</p>
                <p className="right-side">{`¥${onProp.threeHouses}`}</p>
              </div>
              <div className="house-container four">
                <p className="left-side">With 4 Houses</p>
                <p className="right-side">{`¥${onProp.fourHouses}`}</p>
              </div>
              <div className="house-container hotel">
                <p className="left-side">With Hotel</p>
                <p className="right-side">{`¥${onProp.hotel}`}</p>
              </div>
            </div>
            <div className="secondary-prop-info">
              <h4 className="mortgage">{`Mortgage Value: ¥${onProp.mortgage}`}</h4>
              <p className="houses">{`Houses Cost ¥${onProp.buidlingCost}`}</p>
            </div>
          </div>
        </div>
      );
    } else if (
      onProp2 &&
      propertyModal2 &&
      !propertyModal1 &&
      close === false
    ) {
      return (
        <div className="main-card">
          <div className={`outer-banner`}>
            <div className={`banner ${onProp2.color}`}>
              <h2 className="prop-name">{onProp2.Name.toUpperCase()}</h2>
            </div>
          </div>
          <div className="all-prop-info">
            <div className="main-prop-info">
              <h4 className="rent">{`RENT ¥${onProp2.rent}`}</h4>
              <div className="house-container one">
                <p className="left-side">With 1 House</p>
                <p className="right-side">{`¥${onProp2.oneHouse}`}</p>
              </div>
              <div className="house-container two">
                <p className="left-side">With 2 Houses</p>
                <p className="right-side">{`¥${onProp2.twoHouses}`}</p>
              </div>
              <div className="house-container three">
                <p className="left-side">With 3 Houses</p>
                <p className="right-side">{`¥${onProp2.threeHouses}`}</p>
              </div>
              <div className="house-container four">
                <p className="left-side">With 4 Houses</p>
                <p className="right-side">{`¥${onProp2.fourHouses}`}</p>
              </div>
              <div className="house-container hotel">
                <p className="left-side">With Hotel</p>
                <p className="right-side">{`¥${onProp2.hotel}`}</p>
              </div>
            </div>
            <div className="secondary-prop-info">
              <h4 className="mortgage">{`Mortgage Value: ¥${onProp2.mortgage}`}</h4>
              <p className="houses">{`Houses Cost ¥${onProp2.buidlingCost}`}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="outerModal flex centerFlex">
      <div className="innerModal flex flexColumn">
        <div className="button-row">
          <button className="close-button" onClick={handleClose}>
            <FontAwesomeIcon className="x-icon" icon={faXmark} />
          </button>
        </div>
        <div className="main-row">
          {frontCard()}
          <div className="options-container"></div>
        </div>
      </div>
    </div>
  );
};
export default PropertyModal;
