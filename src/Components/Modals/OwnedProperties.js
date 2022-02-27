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
              <h1 className="title">HOLDINGS</h1>
              <div className="square-columns">
                <div className="property-squares">
                  <div className="player-row">
                    <h2 className="player1">PLAYER 1</h2>
                  </div>
                  <h3 className="subheader">Properties</h3>
                  <div className="card-row left five">
                    <div className="card-group twoGroup">
                      <div className="cardSquare-brown"></div>
                      <div className="cardSquare-brown"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-light-blue"></div>
                      <div className="cardSquare-light-blue"></div>
                      <div className="cardSquare-light-blue"></div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-violet"></div>
                      <div className="cardSquare-violet"></div>
                      <div className="cardSquare-violet"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-orange"></div>
                      <div className="cardSquare-orange"></div>
                      <div className="cardSquare-orange"></div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-red"></div>
                      <div className="cardSquare-red"></div>
                      <div className="cardSquare-red"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-yellow"></div>
                      <div className="cardSquare-yellow"></div>
                      <div className="cardSquare-yellow"></div>
                    </div>
                  </div>
                  <div className="card-row left five">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-green"></div>
                      <div className="cardSquare-green"></div>
                      <div className="cardSquare-green"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-blue"></div>
                      <div className="cardSquare-blue"></div>
                    </div>
                  </div>
                  <h3 className="subheader">Railroads</h3>
                  <div className="card-row left four">
                    <div className="card-group fourGroup">
                      <div className="cardSquare-black"></div>
                      <div className="cardSquare-black"></div>
                      <div className="cardSquare-black"></div>
                      <div className="cardSquare-black"></div>
                    </div>
                  </div>
                  <h3 className="subheader">Utilities</h3>
                  <div className="card-row left two">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-grey"></div>
                      <div className="cardSquare-grey"></div>
                    </div>
                  </div>
                </div>
                <div className="property-squares">
                  <div className="player-row">
                    <h2 className="player2">PLAYER 2</h2>
                  </div>
                  <h3 className="subheader">Properties</h3>
                  <div className="card-row right five">
                    <div className="card-group twoGroup">
                      <div className="cardSquare-brown"></div>
                      <div className="cardSquare-brown"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-light-blue"></div>
                      <div className="cardSquare-light-blue"></div>
                      <div className="cardSquare-light-blue"></div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-violet"></div>
                      <div className="cardSquare-violet"></div>
                      <div className="cardSquare-violet"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-orange"></div>
                      <div className="cardSquare-orange"></div>
                      <div className="cardSquare-orange"></div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-red"></div>
                      <div className="cardSquare-red"></div>
                      <div className="cardSquare-red"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-yellow"></div>
                      <div className="cardSquare-yellow"></div>
                      <div className="cardSquare-yellow"></div>
                    </div>
                  </div>
                  <div className="card-row left five">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-green"></div>
                      <div className="cardSquare-green"></div>
                      <div className="cardSquare-green"></div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="cardSquare-blue"></div>
                      <div className="cardSquare-blue"></div>
                    </div>
                  </div>
                  <h3 className="subheader">Railroads</h3>
                  <div className="card-row left four">
                    <div className="card-group fourGroup">
                      <div className="cardSquare-black"></div>
                      <div className="cardSquare-black"></div>
                      <div className="cardSquare-black"></div>
                      <div className="cardSquare-black"></div>
                    </div>
                  </div>
                  <h3 className="subheader">Utilities</h3>
                  <div className="card-row left two">
                    <div className="card-group threeGroup">
                      <div className="cardSquare-grey"></div>
                      <div className="cardSquare-grey"></div>
                    </div>
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
