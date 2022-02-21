import React, { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PropertyModal.css";

const PropertyModal = ({ setPropertyModal, propertyModal }) => {
  const [close, setClose] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setClose(true);
  };

  useEffect(() => {
    if (propertyModal && close === true) {
      setPropertyModal(false);
    }
  }, [close, propertyModal, setPropertyModal]);

  return (
    <div className="outerModal flex centerFlex">
      <div className="innerModal flex flexColumn">
        <div className="button-row">
          <button className="close-button" onClick={handleClose}>
            <FontAwesomeIcon className="x-icon" icon={faXmark} />
          </button>
        </div>
        Hello! I'm going to be the modal!
      </div>
    </div>
  );
};
export default PropertyModal;
