import React, { useEffect, useState } from "react";
import PropertyCard from "../Modals/ViewInfoModals/PropertyCard";
import RRCard from "../Modals/ViewInfoModals/RRCard";
import UtilCard from "../Modals/ViewInfoModals/UtilCard";
import BuildModal from "../Modals/ViewInfoModals/BuildModal";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import Click from "../../Assets/Sounds/click.mp3";
import Drum from "../../Assets/Sounds/drum.mp3";
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
  p1Money,
  setP1Money,
  p2Money,
  setProperties,
  setP2Money,
  hotelsP1,
  hotelsP2,
  setHotelsP1,
  setHotelsP2,
  setTotalHousesP1,
  setTotalHousesP2,
  totalHousesP1,
  totalHousesP2,
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
  const [showOutlines1, setShowOutlines1] = useState(false);
  const [showOutlines2, setShowOutlines2] = useState(false);
  const [houseModal, setHouseModal] = useState(false);
  const [houseModal2, setHouseModal2] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState();
  const [selectedGroup2, setSelectedGroup2] = useState();

  const [drum] = useSound(Drum);
  const [click] = useSound(Click);

  const buildModal = (color) => {
    click();
    setHouseModal(true);
    setSelectedGroup(color);
  };

  const buildModal2 = (color) => {
    click();
    setHouseModal2(true);
    setSelectedGroup2(color);
  };

  const showProp = (prop) => {
    click();
    setChosenProp(prop);
    setPropertyCard(true);
  };

  const showRR = (rr) => {
    click();
    setChosenProp(rr);
    setRRCard(true);
  };

  const determineOutlines1 = () => {
    if (showOutlines1 === true) {
      setShowOutlines1(false);
      drum();
    } else if (showOutlines1 === false) {
      setShowOutlines1(true);
      drum();
    }
  };

  const determineOutlines2 = () => {
    if (showOutlines2 === true) {
      setShowOutlines2(false);
      drum();
    } else if (showOutlines2 === false) {
      setShowOutlines2(true);
      drum();
    }
  };

  const showUtil = (util) => {
    click();
    setChosenProp(util);
    setUtilCard(true);
  };

  const handleClose = () => {
    click();
    setViewProperties(false);
    setViewProperties2(false);
    setCanBuildP2(false);
    setCanBuildP1(false);
    setChosenProp();
    setPropertyCard(false);
    setShowOutlines1(false);
    setShowOutlines2(false);
    setHouseModal(false);
    setHouseModal2(false);
    setSelectedGroup();
    setSelectedGroup2();
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
    let mortgagedProp = yellows.find((property) => {
      return property.mortgaged === true;
    });
    if (yellows && yellows.length === 3 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildYellowP1(true);
    } else setBuildYellowP1(false);
  };

  const checkYellowsP2 = (yellows) => {
    let mortgagedProp = yellows.find((property) => {
      return property.mortgaged === true;
    });
    if (yellows && yellows.length === 3 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildYellowP2(true);
    } else setBuildYellowP2(false);
  };

  const checkGreensP1 = (greens) => {
    let mortgagedProp = greens.find((property) => {
      return property.mortgaged === true;
    });
    if (greens && greens.length === 3 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildGreenP1(true);
    } else setBuildGreenP1(false);
  };

  const checkGreensP2 = (greens) => {
    let mortgagedProp = greens.find((property) => {
      return property.mortgaged === true;
    });
    if (greens && greens.length === 3 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildGreenP2(true);
    } else setBuildGreenP2(false);
  };

  const checkBluesP1 = (blues) => {
    let mortgagedProp = blues.find((property) => {
      return property.mortgaged === true;
    });
    if (blues && blues.length === 2 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildBlueP1(true);
    } else setBuildBlueP1(false);
  };

  const checkBluesP2 = (blues) => {
    let mortgagedProp = blues.find((property) => {
      return property.mortgaged === true;
    });
    if (blues && blues.length === 2 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildBlueP2(true);
    } else setBuildBlueP2(false);
  };

  const checkBrownsP1 = (browns) => {
    let mortgagedProp = browns.find((property) => {
      return property.mortgaged === true;
    });
    if (browns && browns.length === 2 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildBrownP1(true);
    } else setBuildBrownP1(false);
  };

  const checkBrownsP2 = (browns) => {
    let mortgagedProp = browns.find((property) => {
      return property.mortgaged === true;
    });
    if (browns && browns.length === 2 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildBrownP2(true);
    } else setBuildBrownP2(false);
  };

  const checkOrangesP1 = (oranges) => {
    let mortgagedProp = oranges.find((property) => {
      return property.mortgaged === true;
    });
    if (oranges && oranges.length === 3 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildOrangeP1(true);
    } else setBuildOrangeP1(false);
  };

  const checkOrangesP2 = (oranges) => {
    let mortgagedProp = oranges.find((property) => {
      return property.mortgaged === true;
    });
    if (oranges && oranges.length === 3 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildOrangeP2(true);
    } else setBuildOrangeP2(false);
  };

  const checkRedsP1 = (reds) => {
    let mortgagedProp = reds.find((property) => {
      return property.mortgaged === true;
    });
    if (reds && reds.length === 3 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildRedP1(true);
    } else setBuildRedP1(false);
  };

  const checkRedsP2 = (reds) => {
    let mortgagedProp = reds.find((property) => {
      return property.mortgaged === true;
    });
    if (reds && reds.length === 3 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildRedP2(true);
    } else setBuildRedP2(false);
  };

  const checkLightBluesP1 = (lbs) => {
    let mortgagedProp = lbs.find((property) => {
      return property.mortgaged === true;
    });
    if (lbs && lbs.length === 3 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildLightBlueP1(true);
    } else setBuildLightBlueP1(false);
  };

  const checkLightBluesP2 = (lbs) => {
    let mortgagedProp = lbs.find((property) => {
      return property.mortgaged === true;
    });
    if (lbs && lbs.length === 3 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildLightBlueP2(true);
    } else setBuildLightBlueP2(false);
  };

  const checkVioletsP1 = (violets) => {
    let mortgagedProp = violets.find((property) => {
      return property.mortgaged === true;
    });
    if (violets && violets.length === 3 && !mortgagedProp) {
      setCanBuildP1(true);
      setBuildVioletP1(true);
    } else setBuildVioletP1(false);
  };

  const checkVioletsP2 = (violets) => {
    let mortgagedProp = violets.find((property) => {
      return property.mortgaged === true;
    });
    if (violets && violets.length === 3 && !mortgagedProp) {
      setCanBuildP2(true);
      setBuildVioletP2(true);
    } else setBuildVioletP2(false);
  };

  useEffect(() => {
    if (viewProperties && !viewProperties2) {
      let allOwned = properties.filter((property) => property.ownedP1 === true);
      let yellows = allOwned.filter((property) => property.color === "yellow");
      let greens = allOwned.filter((property) => property.color === "green");
      let blues = allOwned.filter((property) => property.color === "dark-blue");
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
      let blues = allOwned.filter((property) => property.color === "dark-blue");
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
              <div className="main-part">
                <div className="square-columns">
                  <div className="property-squares">
                    <div className="player-row">
                      <h2 className="player1">PLAYER 1</h2>
                    </div>
                    <h3 className="subheader">Properties</h3>
                    <div className="card-row left five">
                      <div
                        className={`card-group twoGroup ${
                          showOutlines1 && canBuildP1 && buildBrownP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[21].Name}</p>
                          <div className="cardSquare-brown">
                            {properties[21].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildBrownP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildBrownP1
                                    ? () => buildModal("brown")
                                    : () => showProp(properties[21])
                                }
                              >
                                <div className="top-square brown"></div>
                                <div className="white-part">
                                  {properties[21].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[20].Name}</p>
                          <div className="cardSquare-brown">
                            {properties[20].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildBrownP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildBrownP1
                                    ? () => buildModal("brown")
                                    : () => showProp(properties[20])
                                }
                              >
                                <div className="top-square brown"></div>
                                <div className="white-part">
                                  {properties[20].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group threeGroup ${
                          showOutlines1 && canBuildP1 && buildLightBlueP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[19].Name}</p>
                          <div className="cardSquare-light-blue">
                            {properties[19].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 &&
                                  canBuildP1 &&
                                  buildLightBlueP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 &&
                                  canBuildP1 &&
                                  buildLightBlueP1
                                    ? () => buildModal("light-blue")
                                    : () => showProp(properties[19])
                                }
                              >
                                <div className="top-square lightBlue"></div>
                                <div className="white-part">
                                  {properties[19].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">CDLP</p>
                          <div className="cardSquare-light-blue">
                            {properties[18].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 &&
                                  canBuildP1 &&
                                  buildLightBlueP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 &&
                                  canBuildP1 &&
                                  buildLightBlueP1
                                    ? () => buildModal("light-blue")
                                    : () => showProp(properties[18])
                                }
                              >
                                <div className="top-square lightBlue"></div>
                                <div className="white-part">
                                  {properties[18].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[17].Name}</p>
                          <div className="cardSquare-light-blue">
                            {properties[17].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 &&
                                  canBuildP1 &&
                                  buildLightBlueP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 &&
                                  canBuildP1 &&
                                  buildLightBlueP1
                                    ? () => buildModal("light-blue")
                                    : () => showProp(properties[17])
                                }
                              >
                                <div className="top-square lightBlue"></div>
                                <div className="white-part">
                                  {properties[17].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row left six">
                      <div
                        className={`card-group threeGroup ${
                          showOutlines1 && canBuildP1 && buildVioletP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[16].Name}</p>
                          <div className="cardSquare-violet">
                            {properties[16].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildVioletP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildVioletP1
                                    ? () => buildModal("violet")
                                    : () => showProp(properties[16])
                                }
                              >
                                <div className="top-square violet"></div>
                                <div className="white-part">
                                  {properties[16].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[15].Name}</p>
                          <div className="cardSquare-violet">
                            {properties[15].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildVioletP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildVioletP1
                                    ? () => buildModal("violet")
                                    : () => showProp(properties[15])
                                }
                              >
                                <div className="top-square violet"></div>
                                <div className="white-part">
                                  {properties[15].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[14].Name}</p>
                          <div className="cardSquare-violet">
                            {properties[14].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildVioletP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildVioletP1
                                    ? () => buildModal("violet")
                                    : () => showProp(properties[14])
                                }
                              >
                                <div className="top-square violet"></div>
                                <div className="white-part">
                                  {properties[14].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group threeGroup ${
                          showOutlines1 && canBuildP1 && buildOrangeP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[13].Name}</p>
                          <div className="cardSquare-orange">
                            {properties[13].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildOrangeP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildOrangeP1
                                    ? () => buildModal("orange")
                                    : () => showProp(properties[13])
                                }
                              >
                                <div className="top-square orange"></div>
                                <div className="white-part">
                                  {properties[13].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[12].Name}</p>
                          <div className="cardSquare-orange">
                            {properties[12].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildOrangeP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildOrangeP1
                                    ? () => buildModal("orange")
                                    : () => showProp(properties[12])
                                }
                              >
                                <div className="top-square orange"></div>
                                <div className="white-part">
                                  {properties[12].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[11].Name}</p>
                          <div className="cardSquare-orange">
                            {properties[11].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildOrangeP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildOrangeP1
                                    ? () => buildModal("orange")
                                    : () => showProp(properties[11])
                                }
                              >
                                <div className="top-square orange"></div>
                                <div className="white-part">
                                  {properties[11].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row left six">
                      <div
                        className={`card-group threeGroup ${
                          showOutlines1 && canBuildP1 && buildRedP1 ? "out" : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[10].Name}</p>
                          <div className="cardSquare-red">
                            {properties[10].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildRedP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildRedP1
                                    ? () => buildModal("red")
                                    : () => showProp(properties[10])
                                }
                              >
                                <div className="top-square red"></div>
                                <div className="white-part">
                                  {properties[10].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[9].Name}</p>
                          <div className="cardSquare-red">
                            {properties[9].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildRedP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildRedP1
                                    ? () => buildModal("red")
                                    : () => showProp(properties[9])
                                }
                              >
                                <div className="top-square red"></div>
                                <div className="white-part">
                                  {properties[9].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[8].Name}</p>
                          <div className="cardSquare-red">
                            {properties[8].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildRedP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildRedP1
                                    ? () => buildModal("red")
                                    : () => showProp(properties[8])
                                }
                              >
                                <div className="top-square red"></div>
                                <div className="white-part">
                                  {properties[8].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group threeGroup ${
                          showOutlines1 && canBuildP1 && buildYellowP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">JDX</p>
                          <div className="cardSquare-yellow">
                            {properties[7].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildYellowP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildYellowP1
                                    ? () => buildModal("yellow")
                                    : () => showProp(properties[7])
                                }
                              >
                                <div className="top-square yellow"></div>
                                <div className="white-part">
                                  {properties[7].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[6].Name}</p>
                          <div className="cardSquare-yellow">
                            {properties[6].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildYellowP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildYellowP1
                                    ? () => buildModal("yellow")
                                    : () => showProp(properties[6])
                                }
                              >
                                <div className="top-square yellow"></div>
                                <div className="white-part">
                                  {properties[6].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[5].Name}</p>
                          <div className="cardSquare-yellow">
                            {properties[5].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildYellowP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildYellowP1
                                    ? () => buildModal("yellow")
                                    : () => showProp(properties[5])
                                }
                              >
                                <div className="top-square yellow"></div>
                                <div className="white-part">
                                  {properties[5].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row left five">
                      <div
                        className={`card-group threeGroup ${
                          showOutlines1 && canBuildP1 && buildGreenP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[4].Name}</p>
                          <div className="cardSquare-green">
                            {properties[4].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildGreenP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildGreenP1
                                    ? () => buildModal("green")
                                    : () => showProp(properties[4])
                                }
                              >
                                <div className="top-square green"></div>
                                <div className="white-part">
                                  {properties[4].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[3].Name}</p>
                          <div className="cardSquare-green">
                            {properties[3].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildGreenP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildGreenP1
                                    ? () => buildModal("green")
                                    : () => showProp(properties[3])
                                }
                              >
                                <div className="top-square green"></div>
                                <div className="white-part">
                                  {properties[3].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[2].Name}</p>
                          <div className="cardSquare-green">
                            {properties[2].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildGreenP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildGreenP1
                                    ? () => buildModal("green")
                                    : () => showProp(properties[2])
                                }
                              >
                                <div className="top-square green"></div>
                                <div className="white-part">
                                  {properties[2].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group twoGroup ${
                          showOutlines1 && canBuildP1 && buildBlueP1
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[1].Name}</p>
                          <div className="cardSquare-blue">
                            {properties[1].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildBlueP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildBlueP1
                                    ? () => buildModal("dark-blue")
                                    : () => showProp(properties[1])
                                }
                              >
                                <div className="top-square blue"></div>
                                <div className="white-part">
                                  {properties[1].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[0].Name}</p>
                          <div className="cardSquare-blue">
                            {properties[0].ownedP1 ? (
                              <div
                                className={`main-square ${
                                  showOutlines1 && canBuildP1 && buildBlueP1
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines1 && canBuildP1 && buildBlueP1
                                    ? () => buildModal("dark-blue")
                                    : () => showProp(properties[0])
                                }
                              >
                                <div className="top-square blue"></div>
                                <div className="white-part">
                                  {properties[0].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
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
                                  {railRoads[0].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {railRoads[1].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {railRoads[2].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {railRoads[3].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {utilities[0].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="water jug"
                                      src={jug}
                                    />
                                  )}
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
                                  {utilities[1].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="mop"
                                      src={mopAyi}
                                    />
                                  )}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="buy-houses"
                      onClick={determineOutlines1}
                      disabled={!canBuildP1}
                    >
                      {!showOutlines1 ? "Build Houses" : "Cancel Build"}
                    </button>
                  </div>
                  <div className="property-squares">
                    <div className="player-row">
                      <h2 className="player2">PLAYER 2</h2>
                    </div>
                    <h3 className="subheader">Properties</h3>
                    <div className="card-row right five">
                      <div
                        className={`card-group twoGroup ${
                          showOutlines2 && canBuildP2 && buildBrownP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[21].Name}</p>
                          <div className="cardSquare-brown">
                            {properties[21].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildBrownP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildBrownP2
                                    ? () => buildModal2("brown")
                                    : () => showProp(properties[21])
                                }
                              >
                                <div className="top-square brown"></div>
                                <div className="white-part">
                                  {properties[21].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[20].Name}</p>
                          <div className="cardSquare-brown">
                            {properties[20].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildBrownP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildBrownP2
                                    ? () => buildModal2("brown")
                                    : () => showProp(properties[20])
                                }
                              >
                                <div className="top-square brown"></div>
                                <div className="white-part">
                                  {properties[20].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group threeGroup ${
                          showOutlines2 && canBuildP2 && buildLightBlueP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[19].Name}</p>
                          <div className="cardSquare-light-blue">
                            {properties[19].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 &&
                                  canBuildP2 &&
                                  buildLightBlueP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 &&
                                  canBuildP2 &&
                                  buildLightBlueP2
                                    ? () => buildModal2("light-blue")
                                    : () => showProp(properties[19])
                                }
                              >
                                <div className="top-square lightBlue"></div>
                                <div className="white-part">
                                  {properties[19].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">CDLP</p>
                          <div className="cardSquare-light-blue">
                            {properties[18].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 &&
                                  canBuildP2 &&
                                  buildLightBlueP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 &&
                                  canBuildP2 &&
                                  buildLightBlueP2
                                    ? () => buildModal2("light-blue")
                                    : () => showProp(properties[18])
                                }
                              >
                                <div className="top-square lightBlue"></div>
                                <div className="white-part">
                                  {properties[18].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[17].Name}</p>
                          <div className="cardSquare-light-blue">
                            {properties[17].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 &&
                                  canBuildP2 &&
                                  buildLightBlueP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 &&
                                  canBuildP2 &&
                                  buildLightBlueP2
                                    ? () => buildModal2("light-blue")
                                    : () => showProp(properties[17])
                                }
                              >
                                <div className="top-square lightBlue"></div>
                                <div className="white-part">
                                  {properties[17].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row left six">
                      <div
                        className={`card-group threeGroup ${
                          showOutlines2 && canBuildP2 && buildVioletP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[16].Name}</p>
                          <div className="cardSquare-violet">
                            {properties[16].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildVioletP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildVioletP2
                                    ? () => buildModal2("violet")
                                    : () => showProp(properties[16])
                                }
                              >
                                <div className="top-square violet"></div>
                                <div className="white-part">
                                  {properties[16].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[15].Name}</p>
                          <div className="cardSquare-violet">
                            {properties[15].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildVioletP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildVioletP2
                                    ? () => buildModal2("violet")
                                    : () => showProp(properties[15])
                                }
                              >
                                <div className="top-square violet"></div>
                                <div className="white-part">
                                  {properties[15].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[14].Name}</p>
                          <div className="cardSquare-violet">
                            {properties[14].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildVioletP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildVioletP2
                                    ? () => buildModal2("violet")
                                    : () => showProp(properties[14])
                                }
                              >
                                <div className="top-square violet"></div>
                                <div className="white-part">
                                  {properties[14].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group threeGroup ${
                          showOutlines2 && canBuildP2 && buildOrangeP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[13].Name}</p>
                          <div
                            className="cardSquare-orange"
                            onClick={
                              showOutlines2 && canBuildP2 && buildOrangeP2
                                ? () => buildModal2("orange")
                                : () => showProp(properties[13])
                            }
                          >
                            {properties[13].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildOrangeP2
                                    ? "disabled"
                                    : ""
                                }`}
                              >
                                <div className="top-square orange"></div>
                                <div className="white-part">
                                  {properties[13].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[12].Name}</p>
                          <div className="cardSquare-orange">
                            {properties[12].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildOrangeP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildOrangeP2
                                    ? () => buildModal2("orange")
                                    : () => showProp(properties[12])
                                }
                              >
                                <div className="top-square orange"></div>
                                <div className="white-part">
                                  {properties[12].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[11].Name}</p>
                          <div className="cardSquare-orange">
                            {properties[11].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildOrangeP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildOrangeP2
                                    ? () => buildModal2("orange")
                                    : () => showProp(properties[11])
                                }
                              >
                                <div className="top-square orange"></div>
                                <div className="white-part">
                                  {properties[11].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row left six">
                      <div
                        className={`card-group threeGroup ${
                          showOutlines2 && canBuildP2 && buildRedP2 ? "out" : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[10].Name}</p>
                          <div className="cardSquare-red">
                            {properties[10].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildRedP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildRedP2
                                    ? () => buildModal2("red")
                                    : () => showProp(properties[10])
                                }
                              >
                                <div className="top-square red"></div>
                                <div className="white-part">
                                  {properties[10].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[9].Name}</p>
                          <div className="cardSquare-red">
                            {properties[9].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildRedP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildRedP2
                                    ? () => buildModal2("red")
                                    : () => showProp(properties[9])
                                }
                              >
                                <div className="top-square red"></div>
                                <div className="white-part">
                                  {properties[9].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[8].Name}</p>
                          <div className="cardSquare-red">
                            {properties[8].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildRedP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildRedP2
                                    ? () => buildModal2("red")
                                    : () => showProp(properties[8])
                                }
                              >
                                <div className="top-square red"></div>
                                <div className="white-part">
                                  {properties[8].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group threeGroup ${
                          showOutlines2 && canBuildP2 && buildYellowP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">JDX</p>
                          <div className="cardSquare-yellow">
                            {properties[7].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildYellowP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildYellowP2
                                    ? () => buildModal2("yellow")
                                    : () => showProp(properties[7])
                                }
                              >
                                <div className="top-square yellow"></div>
                                <div className="white-part">
                                  {properties[7].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[6].Name}</p>
                          <div className="cardSquare-yellow">
                            {properties[6].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildYellowP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildYellowP2
                                    ? () => buildModal2("yellow")
                                    : () => showProp(properties[6])
                                }
                              >
                                <div className="top-square yellow"></div>
                                <div className="white-part">
                                  {properties[6].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[5].Name}</p>
                          <div className="cardSquare-yellow">
                            {properties[5].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildYellowP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildYellowP2
                                    ? () => buildModal2("yellow")
                                    : () => showProp(properties[5])
                                }
                              >
                                <div className="top-square yellow"></div>
                                <div className="white-part">
                                  {properties[5].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row left five">
                      <div
                        className={`card-group threeGroup ${
                          showOutlines2 && canBuildP2 && buildGreenP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[4].Name}</p>
                          <div className="cardSquare-green">
                            {properties[4].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildGreenP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildGreenP2
                                    ? () => buildModal2("green")
                                    : () => showProp(properties[4])
                                }
                              >
                                <div className="top-square green"></div>
                                <div className="white-part">
                                  {properties[4].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[3].Name}</p>
                          <div className="cardSquare-green">
                            {properties[3].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildGreenP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildGreenP2
                                    ? () => buildModal2("green")
                                    : () => showProp(properties[3])
                                }
                              >
                                <div className="top-square green"></div>
                                <div className="white-part">
                                  {properties[3].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[2].Name}</p>
                          <div className="cardSquare-green">
                            {properties[2].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildGreenP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildGreenP2
                                    ? () => buildModal2("green")
                                    : () => showProp(properties[2])
                                }
                              >
                                <div className="top-square green"></div>
                                <div className="white-part">
                                  {properties[2].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-group twoGroup ${
                          showOutlines2 && canBuildP2 && buildBlueP2
                            ? "out"
                            : ""
                        }`}
                      >
                        <div className="card-plus-name">
                          <p className="name">{properties[1].Name}</p>
                          <div
                            className="cardSquare-blue"
                            onClick={
                              showOutlines2 && canBuildP2 && buildBlueP2
                                ? () => buildModal2("dark-blue")
                                : () => showProp(properties[1])
                            }
                          >
                            {properties[1].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildBlueP2
                                    ? "disabled"
                                    : ""
                                }`}
                              >
                                <div className="top-square blue"></div>
                                <div className="white-part">
                                  {properties[1].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="card-plus-name">
                          <p className="name">{properties[0].Name}</p>
                          <div className="cardSquare-blue">
                            {properties[0].ownedP2 ? (
                              <div
                                className={`main-square ${
                                  showOutlines2 && canBuildP2 && buildBlueP2
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={
                                  showOutlines2 && canBuildP2 && buildBlueP2
                                    ? () => buildModal2("dark-blue")
                                    : () => showProp(properties[0])
                                }
                              >
                                <div className="top-square blue"></div>
                                <div className="white-part">
                                  {properties[0].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : null}
                                </div>
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
                                  {railRoads[0].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {railRoads[1].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {railRoads[2].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {railRoads[3].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="small subway logo"
                                      src={ditielogo}
                                    />
                                  )}
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
                                  {utilities[0].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="water jug"
                                      src={jug}
                                    />
                                  )}
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
                                  {utilities[1].mortgaged ? (
                                    <p className="m">M</p>
                                  ) : (
                                    <img
                                      className="small-ditie"
                                      alt="mop"
                                      src={mopAyi}
                                    />
                                  )}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="buy-houses"
                      onClick={determineOutlines2}
                      disabled={!canBuildP2}
                    >
                      {!showOutlines2 ? "Build Houses" : "Cancel Build"}
                    </button>
                  </div>
                </div>
                <div className="exit-container">
                  <button className="exit" onClick={handleClose}>
                    EXIT
                  </button>
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
      <BuildModal
        className="buildModal"
        houseModal={houseModal}
        houseModal2={houseModal2}
        setHouseModal={setHouseModal}
        setHouseModal2={setHouseModal2}
        selectedGroup={selectedGroup}
        selectedGroup2={selectedGroup2}
        setSelectedGroup={setSelectedGroup}
        setSelectedGroup2={setSelectedGroup2}
        properties={properties}
        setProperties={setProperties}
        p1Money={p1Money}
        p2Money={p2Money}
        setP1Money={setP1Money}
        setP2Money={setP2Money}
        hotelsP1={hotelsP1}
        hotelsP2={hotelsP2}
        setHotelsP1={setHotelsP1}
        setHotelsP2={setHotelsP2}
        setTotalHousesP1={setTotalHousesP1}
        totalHousesP1={totalHousesP1}
        setTotalHousesP2={setTotalHousesP2}
        totalHousesP2={totalHousesP2}
      />
    </>
  );
};
export default OwnedProperties;
