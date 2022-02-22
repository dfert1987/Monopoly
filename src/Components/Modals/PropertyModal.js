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
        <>
          <div className={`banner ${onProp.color}`}></div>
          <h2>{onProp.Name}</h2>
        </>
      );
    } else if (
      onProp2 &&
      propertyModal2 &&
      !propertyModal1 &&
      close === false
    ) {
      return (
        <>
          <div className={`banner ${onProp2.color}`}></div>
          <h2>{onProp2.Name}</h2>
        </>
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
          <div className="flip-card-outer">
            <div className="flip-card-inner">
              <div className="card front">
                <div className="card-body d-flex justify-content-center align-items-center">
                  {frontCard()}
                </div>
              </div>
              <div className="card back">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="card-text fs-1 fw-bold">Back</p>
                </div>
              </div>
            </div>
          </div>
          <div className="options-container"></div>
        </div>
      </div>
    </div>
  );
};
export default PropertyModal;
