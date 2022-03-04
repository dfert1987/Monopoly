import React from "react";
import PropertyCard from "./PropertyCard";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ditielogo from "../../Assets/PropertyImages/ditielogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mopAyi from "../../Assets/PropertyImages/mopAyi.png";
import jug from "../../Assets/PropertyImages/jug.png";
import "../Styles/OwnedProperties.css";

const OwnedProperties = ({
  viewProperties,
  viewProperties2,
  setViewProperties,
  setViewProperties2,
  properties,
  railRoads,
  utilities,
}) => {
  const handleClose = (e) => {
    e.preventDefault();
    setViewProperties(false);
    setViewProperties2(false);
  };

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {viewProperties || viewProperties2 ? (
          <motion.div
            className="owned-props-container outerModal flex centerFlex"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="innerModalProps flex flexColumn"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="button-row">
                <button className="close-button-x" onClick={handleClose}>
                  <FontAwesomeIcon className="x-icon" icon={faXmark} />
                </button>
              </div>
              <h1 className="title">ASSETS</h1>
              <div className="square-columns">
                <div className="property-squares">
                  <div className="player-row">
                    <h2 className="player1">PLAYER 1</h2>
                  </div>
                  <h3 className="subheader">Properties</h3>
                  <div className="card-row left five">
                    <div className="card-group twoGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[21].Name}</p>
                        <div className="cardSquare-brown">
                          {properties[21].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square brown"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[20].Name}</p>
                        <div className="cardSquare-brown">
                          {properties[20].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square brown"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[19].Name}</p>
                        <div className="cardSquare-light-blue">
                          {properties[19].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square lightBlue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">CDLP</p>
                        <div className="cardSquare-light-blue">
                          {properties[18].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square lightBlue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[17].Name}</p>
                        <div className="cardSquare-light-blue">
                          {properties[17].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square lightBlue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[16].Name}</p>
                        <div className="cardSquare-violet">
                          {properties[16].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square violet"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[15].Name}</p>
                        <div className="cardSquare-violet">
                          {properties[15].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square violet"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[14].Name}</p>
                        <div className="cardSquare-violet">
                          {properties[14].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square violet"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[13].Name}</p>
                        <div className="cardSquare-orange">
                          {properties[13].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square orange"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[12].Name}</p>
                        <div className="cardSquare-orange">
                          {properties[12].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square orange"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[11].Name}</p>
                        <div className="cardSquare-orange">
                          {properties[11].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square orange"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[10].Name}</p>
                        <div className="cardSquare-red">
                          {properties[10].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square red"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[9].Name}</p>
                        <div className="cardSquare-red">
                          {properties[9].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square red"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[8].Name}</p>
                        <div className="cardSquare-red">
                          {properties[8].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square red"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">JDX</p>
                        <div className="cardSquare-yellow">
                          {properties[7].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square yellow"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[6].Name}</p>
                        <div className="cardSquare-yellow">
                          {properties[6].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square yellow"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[5].Name}</p>
                        <div className="cardSquare-yellow">
                          {properties[5].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square yellow"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-row left five">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[4].Name}</p>
                        <div className="cardSquare-green">
                          {properties[4].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square green"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[3].Name}</p>
                        <div className="cardSquare-green">
                          {properties[3].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square green"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[2].Name}</p>
                        <div className="cardSquare-green">
                          {properties[2].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square green"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[1].Name}</p>
                        <div className="cardSquare-blue">
                          {properties[1].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square blue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[0].Name}</p>
                        <div className="cardSquare-blue">
                          {properties[0].ownedP1 ? (
                            <div className="main-square">
                              <div className="top-square blue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="subheader">Railroads</h3>
                  <div className="card-row left four">
                    <div className="card-group fourGroup">
                      <div className="card-plus-name">
                        <p className="name">{railRoads[0].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[0].ownedP1 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{railRoads[1].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[1].ownedP1 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{railRoads[2].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[2].ownedP1 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{railRoads[3].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[3].ownedP1 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="subheader">Utilities</h3>
                  <div className="card-row left two">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">WATER</p>
                        <div className="cardSquare-grey">
                          {utilities[0].ownedP1 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="water jug"
                                  src={jug}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">AYI</p>
                        <div className="cardSquare-grey">
                          {utilities[1].ownedP1 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="mop"
                                  src={mopAyi}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
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
                      <div className="card-plus-name">
                        <p className="name">{properties[21].Name}</p>
                        <div className="cardSquare-brown">
                          {properties[21].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square brown"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[20].Name}</p>
                        <div className="cardSquare-brown">
                          {properties[20].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square brown"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[19].Name}</p>
                        <div className="cardSquare-light-blue">
                          {properties[19].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square lightBlue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">CDLP</p>
                        <div className="cardSquare-light-blue">
                          {properties[18].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square lightBlue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[17].Name}</p>
                        <div className="cardSquare-light-blue">
                          {properties[17].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square lightBlue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[16].Name}</p>
                        <div className="cardSquare-violet">
                          {properties[16].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square violet"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[15].Name}</p>
                        <div className="cardSquare-violet">
                          {properties[15].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square violet"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[14].Name}</p>
                        <div className="cardSquare-violet">
                          {properties[14].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square violet"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[13].Name}</p>
                        <div className="cardSquare-orange">
                          {properties[13].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square orange"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[12].Name}</p>
                        <div className="cardSquare-orange">
                          {properties[12].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square orange"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[11].Name}</p>
                        <div className="cardSquare-orange">
                          {properties[11].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square orange"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-row left six">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[10].Name}</p>
                        <div className="cardSquare-red">
                          {properties[10].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square red"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[9].Name}</p>
                        <div className="cardSquare-red">
                          {properties[9].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square red"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[8].Name}</p>
                        <div className="cardSquare-red">
                          {properties[8].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square red"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">JDX</p>
                        <div className="cardSquare-yellow">
                          {properties[7].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square yellow"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[6].Name}</p>
                        <div className="cardSquare-yellow">
                          {properties[6].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square yellow"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[5].Name}</p>
                        <div className="cardSquare-yellow">
                          {properties[5].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square yellow"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-row left five">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[4].Name}</p>
                        <div className="cardSquare-green">
                          {properties[4].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square green"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[3].Name}</p>
                        <div className="cardSquare-green">
                          {properties[3].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square green"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[2].Name}</p>
                        <div className="cardSquare-green">
                          {properties[2].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square green"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="card-group twoGroup">
                      <div className="card-plus-name">
                        <p className="name">{properties[1].Name}</p>
                        <div className="cardSquare-blue">
                          {properties[1].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square blue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{properties[0].Name}</p>
                        <div className="cardSquare-blue">
                          {properties[0].ownedP2 ? (
                            <div className="main-square">
                              <div className="top-square blue"></div>
                              <div className="white-part"></div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="subheader">Railroads</h3>
                  <div className="card-row left four">
                    <div className="card-group fourGroup">
                      <div className="card-plus-name">
                        <p className="name">{railRoads[0].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[0].ownedP2 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{railRoads[1].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[1].ownedP2 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{railRoads[2].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[2].ownedP2 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">{railRoads[3].Name}</p>
                        <div className="cardSquare-black">
                          {railRoads[3].ownedP2 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="small subway logo"
                                  src={ditielogo}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="subheader">Utilities</h3>
                  <div className="card-row left two">
                    <div className="card-group threeGroup">
                      <div className="card-plus-name">
                        <p className="name">WATER</p>
                        <div className="cardSquare-grey">
                          {utilities[0].ownedP2 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="water jug"
                                  src={jug}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="card-plus-name">
                        <p className="name">AYI</p>
                        <div className="cardSquare-grey">
                          {utilities[1].ownedP2 ? (
                            <div className="main-square">
                              <div className="white-part-rr">
                                <img
                                  className="small-ditie"
                                  alt="mop"
                                  src={mopAyi}
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <PropertyCard />
    </>
  );
};
export default OwnedProperties;
