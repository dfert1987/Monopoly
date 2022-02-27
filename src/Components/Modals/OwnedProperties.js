import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/OwnedProperties.css";

const OwnedProperties = ({
  viewProperties,
  viewProperties2,
  setViewProperties,
  setViewProperties2,
}) => {
  const handleClose = (e) => {
    e.preventDefault();
    setViewProperties(false);
    setViewProperties2(false);
  };

  return (
    <>
      <>
        {viewProperties || viewProperties2 ? (
          <div className="owned-props-container outerModal flex centerFlex">
            <div className="innerModal flex flexColumn">
              <div className="button-row">
                <button className="close-button-x" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon" icon={faXmark} />
                </button>
              </div>
              <h1 className="title">PROPERTIES</h1>
              <div className="player-row">
                <h2 className="player1">PLAYER 1</h2>
                <h2 className="player2">PLAYER 2</h2>
              </div>
              <div className="square-columns">
                <div className="property-squares">
                  <div className="card-row brown">
                    <div className="cardSquare"></div>
                    <div className="cardSquare"></div>
                  </div>
                </div>
                <div className="property-squares">
                  <div className="card-row brown">
                    <div className="cardSquare"></div>
                    <div className="cardSquare"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    </>
  );
};
export default OwnedProperties;
