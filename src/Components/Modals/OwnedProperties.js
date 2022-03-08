import React, { useEffect, useState } from "react";
import PropertyCard from "../Modals/ViewInfoModals/PropertyCard";
import RRCard from "../Modals/ViewInfoModals/RRCard";
import UtilCard from "../Modals/ViewInfoModals/UtilCard";
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
  const [propertyCard, setPropertyCard] = useState(false);
  const [rrCard, setRRCard] = useState(false);
  const [utilCard, setUtilCard] = useState(false);
  const [chosenProp, setChosenProp] = useState();
  const [canBuildP1, setCanBuildP1] = useState(false);
  const [buildYellowP1, setBuildYellowP1] = useState(false);
  const [buildGreenP1, setBuildGreenP1] = useState(false);
  const [buildBlueP1, setBuildBlueP1] = useState(false);
  const [buildBrownP1, setBuildBrownP1] = useState(false);
  const [buildLightBlueP1, setBuildLightBlueP1] = useState(false);
  const [buildVioletP1, setBuildVioletP1] = useState(false);
  const [buildOrangeP1, setBuildOrangeP1] = useState(false);
  const [buildRedP1, setBuildRedP1] = useState(false);
  const [canBuildP2, setCanBuildP2] = useState(false);
  const [buildYellowP2, setBuildYellowP2] = useState(false);
  const [buildGreenP2, setBuildGreenP2] = useState(false);
  const [buildBlueP2, setBuildBlueP2] = useState(false);
  const [buildBrownP2, setBuildBrownP2] = useState(false);
  const [buildLightBlueP2, setBuildLightBlueP2] = useState(false);
  const [buildVioletP2, setBuildVioletP2] = useState(false);
  const [buildOrangeP2, setBuildOrangeP2] = useState(false);
  const [buildRedP2, setBuildRedP2] = useState(false);

  const showProp = (prop) => {
    setChosenProp(prop);
    setPropertyCard(true);
  };

  const showRR = (rr) => {
    setChosenProp(rr);
    setRRCard(true);
  };

  const showUtil = (util) => {
    setChosenProp(util);
    setUtilCard(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setViewProperties(false);
    setViewProperties2(false);
    setChosenProp();
    setPropertyCard(false);
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

  const checkYellowsP1 = (yellows) => {
    if (yellows && yellows.length === 3) {
      setCanBuildP1(true);
      setBuildYellowP1(true);
    } else setBuildYellowP1(false);
  };

  const checkYellowsP2 = (yellows) => {
    if (yellows && yellows.length === 3) {
      setCanBuildP2(true);
      setBuildYellowP2(true);
    } else setBuildYellowP2(false);
  };

  const checkGreensP1 = (greens) => {
    if (greens && greens.length === 3) {
      setCanBuildP1(true);
      setBuildGreenP1(true);
    } else setBuildGreenP1(false);
  };

  const checkGreensP2 = (greens) => {
    if (greens && greens.length === 3) {
      setCanBuildP2(true);
      setBuildGreenP2(true);
    } else setBuildGreenP2(false);
  };

  const checkBluesP1 = (blues) => {
    if (blues && blues.length === 2) {
      setCanBuildP1(true);
      setBuildBlueP1(true);
    } else setBuildBlueP1(false);
  };

  const checkBluesP2 = (blues) => {
    if (blues && blues.length === 2) {
      setCanBuildP2(true);
      setBuildBlueP2(true);
    } else setBuildBlueP2(false);
  };

  const checkBrownsP1 = (browns) => {
    if (browns && browns.length === 2) {
      setCanBuildP1(true);
      setBuildBrownP1(true);
    } else setBuildBrownP1(false);
  };

  const checkBrownsP2 = (browns) => {
    if (browns && browns.length === 2) {
      setCanBuildP2(true);
      setBuildBrownP2(true);
    } else setBuildBrownP2(false);
  };

  const checkOrangesP1 = (oranges) => {
    if (oranges && oranges.length === 3) {
      setCanBuildP1(true);
      setBuildOrangeP1(true);
    } else setBuildOrangeP1(false);
  };

  const checkOrangesP2 = (oranges) => {
    if (oranges && oranges.length === 3) {
      setCanBuildP2(true);
      setBuildOrangeP2(true);
    } else setBuildOrangeP2(false);
  };

  const checkRedsP1 = (reds) => {
    if (reds && reds.length === 3) {
      setCanBuildP1(true);
      setBuildRedP1(true);
    } else setBuildRedP1(false);
  };

  const checkRedsP2 = (reds) => {
    if (reds && reds.length === 3) {
      setCanBuildP2(true);
      setBuildRedP2(true);
    } else setBuildRedP2(false);
  };

  const checkLightBluesP1 = (lbs) => {
    if (lbs && lbs.length === 3) {
      setCanBuildP1(true);
      setBuildLightBlueP1(true);
    } else setBuildLightBlueP1(false);
  };

  const checkLightBluesP2 = (lbs) => {
    if (lbs && lbs.length === 3) {
      setCanBuildP2(true);
      setBuildLightBlueP2(true);
    } else setBuildLightBlueP2(false);
  };

  const checkVioletsP1 = (violets) => {
    if (violets && violets.length === 3) {
      setCanBuildP1(true);
      setBuildVioletP1(true);
    } else setBuildVioletP1(false);
  };

  const checkVioletsP2 = (violets) => {
    if (violets && violets.length === 3) {
      setCanBuildP2(true);
      setBuildVioletP2(true);
    } else setBuildVioletP2(false);
  };

  useEffect(() => {
    if (viewProperties && !viewProperties2) {
      let allOwned = properties.filter((property) => property.ownedP1 === true);
      let yellows = allOwned.filter((property) => property.color === "yellow");
      let greens = allOwned.filter((property) => property.color === "green");
      let blues = allOwned.filter((property) => property.color === "blue");
      let browns = allOwned.filter((property) => property.color === "brown");
      let oranges = allOwned.filter((property) => property.color === "orange");
      let reds = allOwned.filter((property) => property.color === "red");
      let lightBlues = allOwned.filter(
        (property) => property.color === "lightBlue"
      );
      let violets = allOwned.filter((property) => property.color === "violet");
      checkYellowsP1(yellows);
      checkGreensP1(greens);
      checkBluesP1(blues);
      checkBrownsP1(browns);
      checkRedsP1(reds);
      checkOrangesP1(oranges);
      checkLightBluesP1(lightBlues);
      checkVioletsP1(violets);
    } else if (viewProperties2 && !viewProperties) {
      let allOwned = properties.filter((property) => property.ownedP2 === true);
      let yellows = allOwned.filter((property) => property.color === "yellow");
      let greens = allOwned.filter((property) => property.color === "green");
      let blues = allOwned.filter((property) => property.color === "blue");
      let browns = allOwned.filter((property) => property.color === "brown");
      let oranges = allOwned.filter((property) => property.color === "orange");
      let reds = allOwned.filter((property) => property.color === "red");
      let lightBlues = allOwned.filter(
        (property) => property.color === "lightBlue"
      );
      let violets = allOwned.filter((property) => property.color === "violet");
      checkYellowsP2(yellows);
      checkGreensP2(greens);
      checkBluesP2(blues);
      checkBrownsP2(browns);
      checkRedsP2(reds);
      checkOrangesP2(oranges);
      checkLightBluesP2(lightBlues);
      checkVioletsP2(violets);
    }
  }, [properties, viewProperties, viewProperties2]);

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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[21])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[20])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[19])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[18])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[17])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[16])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[15])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[14])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[13])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[12])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[11])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[10])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[9])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[21])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[7])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[6])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[5])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[4])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[3])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[2])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[1])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[1])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[2])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showUtil(utilities[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showUtil(utilities[1])}
                            >
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
                  <button className="buy-houses" disabled={false}>
                    Buy Houses
                  </button>
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[21])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[20])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[19])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[18])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[17])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[16])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[15])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[14])}
                            >
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
                        <div
                          className="cardSquare-orange"
                          onClick={() => showProp(properties[13])}
                        >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[12])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[11])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[10])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[9])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[8])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[7])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[6])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[5])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[4])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[3])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[2])}
                            >
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
                        <div
                          className="cardSquare-blue"
                          onClick={() => showProp(properties[1])}
                        >
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
                            <div
                              className="main-square"
                              onClick={() => showProp(properties[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[1])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[2])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showRR(railRoads[3])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showUtil(utilities[0])}
                            >
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
                            <div
                              className="main-square"
                              onClick={() => showUtil(utilities[1])}
                            >
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
      <PropertyCard
        className="propertyCard"
        propertyCard={propertyCard}
        setPropertyCard={setPropertyCard}
        chosenProp={chosenProp}
        setChosenProp={setChosenProp}
      />
      <RRCard
        className="rrCard"
        rrCard={rrCard}
        setRRCard={setRRCard}
        chosenProp={chosenProp}
        setChosenProp={setChosenProp}
        railRoads={railRoads}
      />
      <UtilCard
        className="utilCard"
        utilCard={utilCard}
        setUtilCard={setUtilCard}
        chosenProp={chosenProp}
        setChosenProp={setChosenProp}
        utilities={utilities}
      />
    </>
  );
};
export default OwnedProperties;
