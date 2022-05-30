import React, { useState, useEffect } from "react";
import PropertyModal from "./Modals/AvailableModals/PropertyModal";
import UtilitiesModal from "./Modals/AvailableModals/UtilitiesModal";
import RailRoadModal from "./Modals/AvailableModals/RailRoadModal";
import PurchasedPopUp from "./Modals/Purchased/PurchasedPopUp";
import RRPurchasedPopUp from "./Modals/Purchased/RRPurchasedPopUp";
import PurchasedUtilPopUp from "./Modals/Purchased/PurchasedUtilPopUp";
import Go from "./Modals/Go";
import FreeParking from "./Modals/FreeParking";
import AgentFee from "./Modals/AgentFee";
import Visa from "./Modals/Jail/Visa";
import VisaConfirm from "./Modals/Jail/VisaConfirm";
import Jail from "./Modals/Jail/Jail";
import Cards from "./Modals/Cards/Cards";
import InJail from "./Modals/Jail/InJail";
import TradeModal from "./Modals/TradeModal";
import ConfirmConcede from "./Modals/ConfirmConcede";
import EndGame from "./Modals/EndGame";
import OwnedProperties from "./Modals/OwnedProperties";
import MortgageModal from "./Modals/Mortgage/MortgageModal";
import UnMortgageModal from "./Modals/UnMortgage/UnMortgageModal";
import PayOpponent from "./Modals/PayModals/PayOpponent";
import PayOpponentRail from "../Components/Modals/PayModals/PayOpponentRail";
import PayOpponentUtil from "../Components/Modals/PayModals/PayOpponentUtil";
import Piece1 from "../Assets/Pieces/Piece1.png";
import Piece2 from "../Assets/Pieces/Piece2.png";
import Baijiu from "../Assets/Pieces/baijiu.png";
import Baoan from "../Assets/Pieces/baoan.png";
import Baozi from "../Assets/Pieces/baozi.png";
import Duck from "../Assets/Pieces/duck.png";
import Fudog from "../Assets/Pieces/fudog.png";
import Jiaozi from "../Assets/Pieces/jiaozi.png";
import Lantern from "../Assets/Pieces/lantern.png";
import Mobike from "../Assets/Pieces/mobike.png";
import Morgan from "../Assets/Pieces/morgan.png";
import Poodle from "../Assets/Pieces/poodle.png";
import Taxi from "../Assets/Pieces/taxi.png";
import Teapot from "../Assets/Pieces/teapot.png";
import MoneyCat from "../Assets/Pieces/moneycat.png";
import Paddle from "../Assets/Pieces/paddle.png";
import Yanjing from "../Assets/Pieces/yanjing.png";
import ditielogo from "../Assets/PropertyImages/ditielogo.png";
import jug from "../Assets/PropertyImages/jug.png";
import homeLink from "../Assets/PropertyImages/homeLink.png";
import mopAyi from "../Assets/PropertyImages/mopAyi.png";
import guanxi from "../Assets/PropertyImages/guanxi.png";
import luck from "../Assets/PropertyImages/luck.png";
import longArrow from "../Assets/PropertyImages/longArrow.png";
import hutongbathroom from "../Assets/PropertyImages/hutongbathroom.png";
import police from "../Assets/PropertyImages/gotojailguy.png";
import guanxiCard from "../Assets/Cards/Guanxi/guanxicard.png";
import fuYuanCard from "../Assets/Cards/Yunqi/fuyuancards.png";
import apartment from "../Assets/Misc/apartment.png";
import hutong from "../Assets/Misc/hutong.png";
import "./Styles/Board.css";

export const Board = ({
  counterP1,
  counterP2,
  setCounterP1,
  setCounterP2,
  p1Jail,
  p2Jail,
  setP1Jail,
  setP2Jail,
  propertyModal1,
  propertyModal2,
  setPropertyModal1,
  setPropertyModal2,
  turn,
  setOnProp,
  onProp,
  onProp2,
  p1Money,
  p2Money,
  setP1Money,
  setP2Money,
  p1Props,
  p2Props,
  setP1Props,
  setP2Props,
  properties,
  setProperties,
  viewProperties,
  setViewProperties,
  viewProperties2,
  setViewProperties2,
  onRR,
  onRR2,
  setOnRR,
  setOnRR2,
  rrModal,
  rrModal2,
  setRRModal,
  setRRModal2,
  railRoads,
  setRailRoads,
  utilModal,
  utilModal2,
  setUtilModal,
  setUtilModal2,
  onUtil,
  onUtil2,
  setOnUtil,
  setOnUtil2,
  utilities,
  setUtilities,
  setPayProp,
  payProp,
  payTo,
  setPayTo,
  payRailTo,
  setPayRailTo,
  payRail,
  setPayRail,
  payUtilTo,
  setPayUtilTo,
  payUtil,
  setPayUtil,
  freeParking,
  setFreeParking,
  onFreeParking,
  setOnFreeParking,
  onFreeParking2,
  setOnFreeParking2,
  setOnProp2,
  setOnAgentFee,
  setOnAgentFee2,
  onAgentFee2,
  onAgentFee,
  onVisa,
  onVisa2,
  setOnVisa,
  setOnVisa2,
  onGoJail,
  onGoJail2,
  setOnGoJail2,
  setOnGoJail,
  inJail,
  inJail2,
  setInJail,
  setInJail2,
  setTurn,
  setInJailModal,
  setInJailModal2,
  inJailModal,
  inJailModal2,
  setDisableLeft,
  setDisableRight,
  onCard,
  onCard2,
  setOnCard,
  setOnCard2,
  setSkip1,
  setSkip2,
  setVisa1,
  setVisa2,
  hotelsP1,
  hotelsP2,
  setHotelsP1,
  setHotelsP2,
  setTotalHousesP1,
  setTotalHousesP2,
  totalHousesP1,
  totalHousesP2,
  setStayOn,
  setStayOn2,
  onGoP1,
  onGoP2,
  setOnGoP1,
  setOnGoP2,
  pass,
  setPass,
  pass2,
  setPass2,
  setVisaModal,
  visaModal,
  p1Pic,
  p2Pic,
  mortgage,
  setMortgage,
  mortgage2,
  setMortgage2,
  unMortgage,
  setUnMortgage,
  unMortgage2,
  setUnMortgage2,
  endGame,
  setEndGame,
  setConfirmConcedeView,
  confirmConcedeView,
  playerOneConcede,
  setPlayerOneConcede,
  playerTwoConcede,
  setPlayerTwoConcede,
  setShowTrade,
  showTrade,
}) => {
  const [viewPurchase, setViewPurchase] = useState(false);
  const [viewPurchase2, setViewPurchase2] = useState(false);
  const [viewPurchaseRR, setViewPurchaseRR] = useState(false);
  const [viewPurchaseRR2, setViewPurchaseRR2] = useState(false);
  const [viewPurchaseUtil, setViewPurchaseUtil] = useState(false);
  const [viewPurchaseUtil2, setViewPurchaseUtil2] = useState(false);
  const [doubleRR, setDoubleRR] = useState(false);
  const [doubleProp, setDoubleProp] = useState(false);
  const [p1Image, setP1Image] = useState();
  const [p2Image, setP2Image] = useState();
  const [p1SRC, setP1SRC] = useState();
  const [p2SRC, setP2SRC] = useState();
  const [lushHouses, setLushHouses] = useState(0);
  const [lushHotel, setLushHotel] = useState(false);
  const [propagandaHouses, setPropagandaHouses] = useState(0);
  const [propagandaHotel, setPropagandaHotel] = useState(false);
  const [hotCatHouses, setHotCatHouses] = useState(0);
  const [hotCatHotel, setHotCatHotel] = useState(false);
  const [cdlpHouses, setCdlpHouses] = useState(0);
  const [cdlpHotel, setCdlpHotel] = useState(false);
  const [fourCHouses, setFourCHouses] = useState(0);
  const [fourCHotel, setFourCHotel] = useState(false);
  const [laomanHouses, setLaomanHouses] = useState(0);
  const [laomanHotel, setLaomanHotel] = useState(false);
  const [daliHouses, setDaliHouses] = useState(0);
  const [daliHotel, setDaliHotel] = useState(false);
  const [zhangHouses, setZhangHouses] = useState(0);
  const [zhangHotel, setZhangHotel] = useState(false);
  const [modernistaHouses, setModernistaHouses] = useState(0);
  const [modernistaHotel, setModernistaHotel] = useState(false);
  const [templeHouses, setTempleHouses] = useState(0);
  const [templeHotel, setTempleHotel] = useState(false);
  const [dadaHouses, setDadaHouses] = useState(0);
  const [dadaHotel, setDadaHotel] = useState(false);
  const [anniesHouses, setAnniesHouses] = useState(0);
  const [anniesHotel, setAnniesHotel] = useState(false);
  const [localHouses, setLocalHouses] = useState(0);
  const [localHotel, setLocalHotel] = useState(false);
  const [lanternHouses, setLanternHouses] = useState(0);
  const [lanternHotel, setLanternHotel] = useState(false);
  const [jdxHouses, setJdxHouses] = useState(0);
  const [jdxHotel, setJdxHotel] = useState(false);
  const [haidilaoHouses, setHaidilaoHouses] = useState(0);
  const [haidilaoHotel, setHaidilaoHotel] = useState(false);
  const [dadongHouses, setDadongHouses] = useState(0);
  const [dadongHotel, setDadongHotel] = useState(false);
  const [jingAHouses, setJingAHouses] = useState(0);
  const [jingAHotel, setJingAHotel] = useState(false);
  const [slowBoatHouses, setSlowBoatHouses] = useState(0);
  const [slowBoatHotel, setSlowBoatHotel] = useState(false);
  const [greatLeapHouses, setGreatLeapHouses] = useState(0);
  const [greatLeapHotel, setGreatLeapHotel] = useState(false);
  const [migasHouses, setMigasHouses] = useState(0);
  const [migasHotel, setMigasHotel] = useState(false);
  const [trbHouses, setTrbHouses] = useState(0);
  const [trbHotel, setTrbHotel] = useState(false);
  useEffect(() => {
    if (properties[0].hasFourHouses && properties[0].hasHotel === false) {
      setTrbHouses(4);
    } else if (
      properties[0].hasThreeHouses &&
      properties[0].hasFourHouses === false
    ) {
      setTrbHouses(3);
    } else if (
      properties[0].hasTwoHouses &&
      properties[0].hasThreeHouses === false
    ) {
      setTrbHouses(2);
    } else if (
      properties[0].hasOneHouse &&
      properties[0].hasTwoHouses === false
    ) {
      setTrbHouses(1);
    } else if (properties[0].hasHotel) {
      setTrbHotel(true);
      setTrbHouses(0);
    } else {
      setTrbHouses(0);
    }

    if (properties[1].hasFourHouses && properties[1].hasHotel === false) {
      setMigasHouses(4);
    } else if (
      properties[1].hasThreeHouses &&
      properties[1].hasFourHouses === false
    ) {
      setMigasHouses(3);
    } else if (
      properties[1].hasTwoHouses &&
      properties[1].hasThreeHouses === false
    ) {
      setMigasHouses(2);
    } else if (properties[1].hasOneHouse && properties.hasTwoHouses === false) {
      setMigasHouses(1);
    } else if (properties[1].hasHotel) {
      setMigasHotel(true);
      setMigasHouses(0);
    } else {
      setMigasHouses(0);
    }

    if (properties[2].hasFourHouses && properties[2].hasHotel === false) {
      setGreatLeapHouses(4);
    } else if (
      properties[2].hasThreeHouses &&
      properties[2].hasFourHouses === false
    ) {
      setGreatLeapHouses(3);
    } else if (
      properties[2].hasTwoHouses &&
      properties[2].hasThreeHouses === false
    ) {
      setGreatLeapHouses(2);
    } else if (
      properties[2].hasOneHouse &&
      properties[2].hasTwoHouses === false
    ) {
      setGreatLeapHouses(1);
    } else if (properties[2].hasHotel) {
      setGreatLeapHotel(true);
      setGreatLeapHouses(0);
    } else {
      setGreatLeapHouses(0);
    }

    if (properties[3].hasFourHouses && properties[3].hasHotel === false) {
      setSlowBoatHouses(4);
    } else if (
      properties[3].hasThreeHouses &&
      properties[3].hasFourHouses === false
    ) {
      setSlowBoatHouses(3);
    } else if (
      properties[3].hasTwoHouses &&
      properties[3].hasThreeHouses === false
    ) {
      setSlowBoatHouses(2);
    } else if (
      properties[3].hasOneHouse &&
      properties[3].hasTwoHouses === false
    ) {
      setSlowBoatHouses(1);
    } else if (properties[3].hasHotel) {
      setSlowBoatHotel(true);
      setSlowBoatHouses(0);
    } else {
      setSlowBoatHouses(0);
    }

    if (properties[4].hasFourHouses && properties[4].hasHotel === false) {
      setJingAHouses(4);
    } else if (
      properties[4].hasThreeHouses &&
      properties[4].hasFourHouses === false
    ) {
      setJingAHouses(3);
    } else if (
      properties[4].hasTwoHouses &&
      properties[4].hasThreeHouses === false
    ) {
      setJingAHouses(2);
    } else if (
      properties[4].hasOneHouse &&
      properties[4].hasTwoHouses === false
    ) {
      setJingAHouses(1);
    } else if (properties[4].hasHotel) {
      setJingAHotel(true);
      setJingAHouses(0);
    } else {
      setJingAHouses(0);
    }

    if (properties[5].hasFourHouses && properties[5].hasHotel === false) {
      setDadongHouses(4);
    } else if (
      properties[5].hasThreeHouses &&
      properties[5].hasFourHouses === false
    ) {
      setDadongHouses(3);
    } else if (
      properties[5].hasTwoHouses &&
      properties[5].hasThreeHouses === false
    ) {
      setDadongHouses(2);
    } else if (
      properties[5].hasOneHouse &&
      properties[5].hasTwoHouses === false
    ) {
      setDadongHouses(1);
    } else if (properties[5].hasHotel) {
      setDadongHotel(true);
      setDadongHouses(0);
    } else {
      setDadongHouses(0);
    }

    if (properties[6].hasFourHouses && properties[6].hasHotel === false) {
      setHaidilaoHouses(4);
    } else if (
      properties[6].hasThreeHouses &&
      properties[6].hasFourHouses === false
    ) {
      setHaidilaoHouses(3);
    } else if (
      properties[6].hasTwoHouses &&
      properties[6].hasThreeHouses === false
    ) {
      setHaidilaoHouses(2);
    } else if (
      properties[6].hasOneHouse &&
      properties[6].hasTwoHouses === false
    ) {
      setHaidilaoHouses(1);
    } else if (properties[6].hasHotel) {
      setHaidilaoHotel(true);
      setHaidilaoHouses(0);
    } else {
      setHaidilaoHouses(0);
    }

    if (properties[7].hasFourHouses && properties[7].hasHotel === false) {
      setJdxHouses(4);
    } else if (
      properties[7].hasThreeHouses &&
      properties[7].hasFourHouses === false
    ) {
      setJdxHouses(3);
    } else if (
      properties[7].hasTwoHouses &&
      properties[7].hasThreeHouses === false
    ) {
      setJdxHouses(2);
    } else if (
      properties[7].hasOneHouse &&
      properties[7].hasTwoHouses === false
    ) {
      setJdxHouses(1);
    } else if (properties[7].hasHotel) {
      setJdxHotel(true);
      setJdxHouses(0);
    } else {
      setJdxHouses(0);
    }

    if (properties[8].hasFourHouses && properties[8].hasHotel === false) {
      setLanternHouses(4);
    } else if (
      properties[8].hasThreeHouses &&
      properties[8].hasFourHouses === false
    ) {
      setLanternHouses(3);
    } else if (
      properties[8].hasTwoHouses &&
      properties[8].hasThreeHouses === false
    ) {
      setLanternHouses(2);
    } else if (
      properties[8].hasOneHouse &&
      properties[8].hasTwoHouses === false
    ) {
      setLanternHouses(1);
    } else if (properties[8].hasHotel) {
      setLanternHotel(true);
      setLanternHouses(0);
    } else {
      setLanternHouses(0);
    }

    if (properties[9].hasFourHouses && properties[9].hasHotel === false) {
      setLocalHouses(4);
    } else if (
      properties[9].hasThreeHouses &&
      properties[9].hasFourHouses === false
    ) {
      setLocalHouses(3);
    } else if (
      properties[9].hasTwoHouses &&
      properties[9].hasThreeHouses === false
    ) {
      setLocalHouses(2);
    } else if (
      properties[9].hasOneHouse &&
      properties[9].hasTwoHouses === false
    ) {
      setLocalHouses(1);
    } else if (properties[9].hasHotel) {
      setLocalHotel(true);
      setLocalHouses(0);
    } else {
      setLocalHouses(0);
    }

    if (properties[10].hasFourHouses && properties[10].hasHotel === false) {
      setAnniesHouses(4);
    } else if (
      properties[10].hasThreeHouses &&
      properties[10].hasFourHouses === false
    ) {
      setAnniesHouses(3);
    } else if (
      properties[10].hasTwoHouses &&
      properties[10].hasThreeHouses === false
    ) {
      setAnniesHouses(2);
    } else if (
      properties[10].hasOneHouse &&
      properties[10].hasTwoHouses === false
    ) {
      setAnniesHouses(1);
    } else if (properties[10].hasHotel) {
      setAnniesHotel(true);
      setAnniesHouses(0);
    } else {
      setAnniesHouses(0);
    }

    if (properties[11].hasFourHouses && properties[11].hasHotel === false) {
      setDadaHouses(4);
    } else if (
      properties[11].hasThreeHouses &&
      properties[11].hasFourHouses === false
    ) {
      setDadaHouses(3);
    } else if (
      properties[11].hasTwoHouses &&
      properties[11].hasThreeHouses === false
    ) {
      setDadaHouses(2);
    } else if (
      properties[11].hasOneHouse &&
      properties[11].hasTwoHouses === false
    ) {
      setDadaHouses(1);
    } else if (properties[11].hasHotel) {
      setDadaHotel(true);
      setDadaHouses(0);
    } else {
      setDadaHouses(0);
    }

    if (properties[12].hasFourHouses && properties[12].hasHotel === false) {
      setTempleHouses(4);
    } else if (
      properties[12].hasThreeHouses &&
      properties[12].hasFourHouses === false
    ) {
      setTempleHouses(3);
    } else if (
      properties[12].hasTwoHouses &&
      properties[12].hasThreeHouses === false
    ) {
      setTempleHouses(2);
    } else if (
      properties[12].hasOneHouse &&
      properties[12].hasTwoHouses === false
    ) {
      setTempleHouses(1);
    } else if (properties[12].hasHotel) {
      setTempleHotel(true);
      setTempleHouses(0);
    } else {
      setTempleHouses(0);
    }

    if (properties[13].hasFourHouses && properties[13].hasHotel === false) {
      setModernistaHouses(4);
    } else if (
      properties[13].hasThreeHouses &&
      properties[13].hasFourHouses === false
    ) {
      setModernistaHouses(3);
    } else if (
      properties[13].hasTwoHouses &&
      properties[13].hasThreeHouses === false
    ) {
      setModernistaHouses(2);
    } else if (
      properties[13].hasOneHouse &&
      properties[13].hasTwoHouses === false
    ) {
      setModernistaHouses(1);
    } else if (properties[13].hasHotel) {
      setModernistaHotel(true);
      setModernistaHouses(0);
    } else {
      setModernistaHouses(0);
    }

    if (properties[14].hasFourHouses && properties[14].hasHotel === false) {
      setZhangHouses(4);
    } else if (
      properties[14].hasThreeHouses &&
      properties[14].hasFourHouses === false
    ) {
      setZhangHouses(3);
    } else if (
      properties[14].hasTwoHouses &&
      properties[14].hasThreeHouses === false
    ) {
      setZhangHouses(2);
    } else if (
      properties[14].hasOneHouse &&
      properties[14].hasTwoHouses === false
    ) {
      setZhangHouses(1);
    } else if (properties[14].hasHotel) {
      setZhangHotel(true);
      setZhangHouses(0);
    } else {
      setZhangHouses(0);
    }

    if (properties[15].hasFourHouses && properties[15].hasHotel === false) {
      setDaliHouses(4);
    } else if (
      properties[15].hasThreeHouses &&
      properties[15].hasFourHouses === false
    ) {
      setDaliHouses(3);
    } else if (
      properties[15].hasTwoHouses &&
      properties[15].hasThreeHouses === false
    ) {
      setDaliHouses(2);
    } else if (
      properties[15].hasOneHouse &&
      properties[15].hasTwoHouses === false
    ) {
      setDaliHouses(1);
    } else if (properties[15].hasHotel) {
      setDaliHotel(true);
      setDaliHouses(0);
    } else {
      setDaliHouses(0);
    }

    if (properties[16].hasFourHouses && properties[16].hasHotel === false) {
      setLaomanHouses(4);
    } else if (
      properties[16].hasThreeHouses &&
      properties[16].hasFourHouses === false
    ) {
      setLaomanHouses(3);
    } else if (
      properties[16].hasTwoHouses &&
      properties[16].hasThreeHouses === false
    ) {
      setLaomanHouses(2);
    } else if (
      properties[16].hasOneHouse &&
      properties[16].hasTwoHouses === false
    ) {
      setLaomanHouses(1);
    } else if (properties[16].hasHotel) {
      setLaomanHotel(true);
      setLaomanHouses(0);
    } else {
      setLaomanHouses(0);
    }

    if (properties[17].hasFourHouses && properties[17].hasHotel === false) {
      setFourCHouses(4);
    } else if (
      properties[17].hasThreeHouses &&
      properties[17].hasFourHouses === false
    ) {
      setFourCHouses(3);
    } else if (
      properties[17].hasTwoHouses &&
      properties[17].hasThreeHouses === false
    ) {
      setFourCHouses(2);
    } else if (
      properties[17].hasOneHouse &&
      properties[17].hasTwoHouses === false
    ) {
      setFourCHouses(1);
    } else if (properties[17].hasHotel) {
      setFourCHotel(true);
      setFourCHouses(0);
    } else {
      setFourCHouses(0);
    }

    if (properties[18].hasFourHouses && properties[18].hasHotel === false) {
      setCdlpHouses(4);
    } else if (
      properties[18].hasThreeHouses &&
      properties[18].hasFourHouses === false
    ) {
      setCdlpHouses(3);
    } else if (
      properties[18].hasTwoHouses &&
      properties[18].hasThreeHouses === false
    ) {
      setCdlpHouses(2);
    } else if (
      properties[18].hasOneHouse &&
      properties[18].hasTwoHouses === false
    ) {
      setCdlpHouses(1);
    } else if (properties[18].hasHotel) {
      setCdlpHotel(true);
      setCdlpHouses(0);
    } else {
      setCdlpHouses(0);
    }

    if (properties[19].hasFourHouses && properties[19].hasHotel === false) {
      setHotCatHouses(4);
    } else if (
      properties[19].hasThreeHouses &&
      properties[19].hasFourHouses === false
    ) {
      setHotCatHouses(3);
    } else if (
      properties[19].hasTwoHouses &&
      properties[19].hasThreeHouses === false
    ) {
      setHotCatHouses(2);
    } else if (
      properties[19].hasOneHouse &&
      properties[19].hasTwoHouses === false
    ) {
      setHotCatHouses(1);
    } else if (properties[19].hasHotel) {
      setHotCatHotel(true);
      setHotCatHouses(0);
    } else {
      setHotCatHouses(0);
    }

    if (properties[20].hasFourHouses && properties[20].hasHotel === false) {
      setPropagandaHouses(4);
    } else if (
      properties[20].hasThreeHouses &&
      properties[20].hasFourHouses === false
    ) {
      setPropagandaHouses(3);
    } else if (
      properties[20].hasTwoHouses &&
      properties[20].hasThreeHouses === false
    ) {
      setPropagandaHouses(2);
    } else if (
      properties[20].hasOneHouse &&
      properties[20].hasTwoHouses === false
    ) {
      setPropagandaHouses(1);
    } else if (properties[20].hasHotel) {
      setPropagandaHotel(true);
      setPropagandaHouses(0);
    } else {
      setPropagandaHouses(0);
    }

    if (properties[21].hasFourHouses && properties[21].hasHotel === false) {
      setLushHouses(4);
    } else if (
      properties[21].hasThreeHouses &&
      properties[21].hasFourHouses === false
    ) {
      setLushHouses(3);
    } else if (
      properties[21].hasTwoHouses &&
      properties[21].hasThreeHouses === false
    ) {
      setLushHouses(2);
    } else if (
      properties[21].hasOneHouse &&
      properties[21].hasTwoHouses === false
    ) {
      setLushHouses(1);
    } else if (properties[21].hasHotel) {
      setLushHotel(true);
      setLushHouses(0);
    } else {
      setLushHouses(0);
    }

    if (p1Pic === 0) {
      setP1Image(Piece1);
      setP1SRC("../../Assets/Pieces/Piece1.png");
    }
    if (p1Pic === 1) {
      setP1Image(Piece2);
      setP1SRC("../../Assets/Pieces/Piece2.png");
    }
    if (p1Pic === 2) {
      setP1Image(Baijiu);
      setP1SRC("../../Assets/Pieces/Piece2.png");
    }
    if (p1Pic === 3) {
      setP1Image(Baoan);
      setP1SRC("../../Assets/Pieces/piece1.png");
    }
    if (p1Pic === 4) {
      setP1Image(Baozi);
      setP1SRC("../../Assets/Pieces/baozi.png");
    }
    if (p1Pic === 5) {
      setP1Image(Duck);
      setP1SRC("../../Assets/Pieces/duck.png");
    }
    if (p1Pic === 6) {
      setP1Image(Fudog);
      setP1SRC("../../Assets/Pieces/fudog.png");
    }
    if (p1Pic === 7) {
      setP1Image(Jiaozi);
      setP1SRC("../../Assets/Pieces/jiaozi.png");
    }
    if (p1Pic === 8) {
      setP1Image(Lantern);
      setP1SRC("../../Assets/Pieces/lantern.png");
    }
    if (p1Pic === 9) {
      setP1Image(Mobike);
      setP1SRC("../../Assets/Pieces/mobike.png");
    }
    if (p1Pic === 10) {
      setP1Image(Morgan);
      setP1SRC("../../Assets/Pieces/morgan.png");
    }
    if (p1Pic === 11) {
      setP1Image(Poodle);
      setP1SRC("../../Assets/Pieces/poodle.png");
    }
    if (p1Pic === 12) {
      setP1Image(Taxi);
      setP1SRC("../../Assets/Pieces/taxi.png");
    }
    if (p1Pic === 13) {
      setP1Image(Teapot);
      setP1SRC("../../Assets/Pieces/teapot.png");
    }
    if (p1Pic === 14) {
      setP1Image(Yanjing);
      setP1SRC("../../Assets/Pieces/yanjing.png");
    }
    if (p1Pic === 15) {
      setP1Image(MoneyCat);
      setP1SRC("../../Assets/Pieces/moneycat.png");
    }
    if (p1Pic === 16) {
      setP1Image(Paddle);
      setP1SRC("../../Assets/Pieces/paddle.png");
    }
    if (p2Pic === 0) {
      setP2Image(Piece1);
      setP2SRC("../../Assets/Pieces/Piece1.png");
    }
    if (p2Pic === 1) {
      setP2Image(Piece2);
      setP1SRC("../../Assets/Pieces/Piece2.png");
    }
    if (p2Pic === 2) {
      setP2Image(Baijiu);
      setP1SRC("../../Assets/Pieces/Piece2.png");
    }
    if (p2Pic === 3) {
      setP2Image(Baoan);
      setP1SRC("../../Assets/Pieces/piece1.png");
    }
    if (p2Pic === 4) {
      setP2Image(Baozi);
      setP1SRC("../../Assets/Pieces/baozi.png");
    }
    if (p2Pic === 5) {
      setP2Image(Duck);
      setP1SRC("../../Assets/Pieces/duck.png");
    }
    if (p2Pic === 6) {
      setP2Image(Fudog);
      setP1SRC("../../Assets/Pieces/fudog.png");
    }
    if (p2Pic === 7) {
      setP2Image(Jiaozi);
      setP1SRC("../../Assets/Pieces/jiaozi.png");
    }
    if (p2Pic === 8) {
      setP2Image(Lantern);
      setP1SRC("../../Assets/Pieces/lantern.png");
    }
    if (p2Pic === 9) {
      setP2Image(Mobike);
      setP1SRC("../../Assets/Pieces/mobike.png");
    }
    if (p2Pic === 10) {
      setP2Image(Morgan);
      setP1SRC("../../Assets/Pieces/morgan.png");
    }
    if (p2Pic === 11) {
      setP2Image(Poodle);
      setP1SRC("../../Assets/Pieces/poodle.png");
    }
    if (p2Pic === 12) {
      setP2Image(Taxi);
      setP1SRC("../../Assets/Pieces/taxi.png");
    }
    if (p2Pic === 13) {
      setP2Image(Teapot);
      setP1SRC("../../Assets/Pieces/teapot.png");
    }
    if (p2Pic === 14) {
      setP2Image(Yanjing);
      setP1SRC("../../Assets/Pieces/yanjing.png");
    }
    if (p2Pic === 15) {
      setP2Image(MoneyCat);
      setP2SRC("../../Assets/Pieces/moneycat.png");
    }
    if (p2Pic === 16) {
      setP2Image(Paddle);
      setP2SRC("../../Assets/Pieces/paddle.png");
    }
  }, [p1Pic, p2Pic, properties]);

  const showHouses = (property) => {
    if (property === 0) {
      if (trbHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (trbHouses && trbHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (trbHouses && trbHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (trbHouses && trbHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (trbHouses && trbHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 1) {
      if (migasHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (migasHouses && migasHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (migasHouses && migasHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (migasHouses && migasHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (migasHouses && migasHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 2) {
      if (greatLeapHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (greatLeapHouses && greatLeapHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (greatLeapHouses && greatLeapHouses === 3) {
        return (
          <div className="house-container sides">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (greatLeapHouses && greatLeapHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (greatLeapHouses && greatLeapHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 3) {
      if (slowBoatHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (slowBoatHouses && slowBoatHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (slowBoatHouses && slowBoatHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (slowBoatHouses && slowBoatHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (slowBoatHouses && slowBoatHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 4) {
      if (jingAHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (jingAHouses && jingAHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (jingAHouses && jingAHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (jingAHouses && jingAHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (jingAHouses && jingAHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 5) {
      if (dadongHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (dadongHouses && dadongHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (dadongHouses && dadongHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (dadongHouses && dadongHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (dadongHouses && dadongHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 6) {
      if (haidilaoHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (haidilaoHouses && haidilaoHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (haidilaoHouses && haidilaoHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (haidilaoHouses && haidilaoHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (haidilaoHouses && haidilaoHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 7) {
      if (jdxHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (jdxHouses && jdxHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (jdxHouses && jdxHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (jdxHouses && jdxHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (jdxHouses && jdxHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 8) {
      if (lanternHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (lanternHouses && lanternHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (lanternHouses && lanternHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (lanternHouses && lanternHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (lanternHouses && lanternHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 9) {
      if (localHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (localHouses && localHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (localHouses && localHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (localHouses && localHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (localHouses && localHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 10) {
      if (anniesHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 10) {
      if (anniesHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (anniesHouses && anniesHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 11) {
      if (dadaHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (dadaHouses && dadaHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house " alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (dadaHouses && dadaHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (dadaHouses && dadaHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (dadaHouses && dadaHouses === 1) {
        return (
          <div className="house-container">
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 12) {
      if (templeHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (templeHouses && templeHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (templeHouses && templeHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (templeHouses && templeHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (templeHouses && templeHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 13) {
      if (modernistaHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (modernistaHouses && modernistaHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (modernistaHouses && modernistaHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (modernistaHouses && modernistaHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      } else if (modernistaHouses && modernistaHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house dada-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 14) {
      if (zhangHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (zhangHouses && zhangHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (zhangHouses && zhangHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (zhangHouses && zhangHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (zhangHouses && zhangHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 15) {
      if (daliHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (daliHouses && daliHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (daliHouses && daliHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (daliHouses && daliHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (daliHouses && daliHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 16) {
      if (laomanHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (laomanHouses && laomanHouses === 4) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (laomanHouses && laomanHouses === 3) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (laomanHouses && laomanHouses === 2) {
        return (
          <div className="house-container side">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (laomanHouses && laomanHouses === 1) {
        return (
          <div className="house-container side">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 17) {
      if (fourCHotel === true) {
        return (
          <div className="hotel-container side">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (fourCHouses && fourCHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (fourCHouses && fourCHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (fourCHouses && fourCHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (fourCHouses && fourCHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 18) {
      if (cdlpHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (cdlpHouses && cdlpHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (cdlpHouses && cdlpHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (cdlpHouses && cdlpHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (cdlpHouses && cdlpHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 19) {
      if (hotCatHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (hotCatHouses && hotCatHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (hotCatHouses && hotCatHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (hotCatHouses && hotCatHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (hotCatHouses && hotCatHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 20) {
      if (propagandaHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (propagandaHouses && propagandaHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (propagandaHouses && propagandaHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (propagandaHouses && propagandaHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (propagandaHouses && propagandaHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    } else if (property === 21) {
      if (lushHotel === true) {
        return (
          <div className="hotel-container">
            <img className="hotel" alt="hotel" src={apartment} />
          </div>
        );
      } else if (lushHouses && lushHouses === 4) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (lushHouses && lushHouses === 3) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (lushHouses && lushHouses === 2) {
        return (
          <div className="house-container">
            <img className="house" alt="house" src={hutong} />
            <img className="house" alt="house" src={hutong} />
          </div>
        );
      } else if (lushHouses && lushHouses === 1) {
        return (
          <div className="house-container">
            <img className="house yellow-house" alt="house" src={hutong} />
          </div>
        );
      }
    }
  };

  return (
    <div className="main-board">
      <div className="left-column">
        <div id="1" className="left-corner-top">
          {counterP1 === 1 ? (
            <img className="piece" src={p1Image} alt="p1 game piece" />
          ) : null}
          {counterP2 === 1 ? (
            <img className="piece two" src={p2Image} alt="p2 game piece" />
          ) : null}
          <div className="go-container">
            <img src={longArrow} alt="go-arrow" className="go-arrow" />
            <div className="all-go">
              <h1 className="go">GO</h1>
              <div className="go-text-container">
                <span className="go-instructions">COLLECT</span>
                <span className="go-instructions">¥200 SALARY</span>
                <span className="go-instructions">AS YOU PASS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="left-spaces">
          <div id="40" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 40 ? (
                  <img className="piece" src={p1Image} alt="p1 game piece" />
                ) : null}
                {counterP2 === 40 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-price-left">¥400</div>
                <div className="prop-name-left">TRB</div>
              </div>
              <div className="top-section-left blue">{showHouses(0)}</div>
            </div>
          </div>
          <div id="39" className="left-space">
            {counterP1 === 39 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 39 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="left-rr-container">
              <div>
                <h3 className="left-rr agent">Agent Fee</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-left agent"
                  src={homeLink}
                  alt="subway-logo"
                />
              </div>
              <p className="left-rr-price agent">Pay ¥75</p>
            </div>
          </div>
          <div id="38" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 38 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 38 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-price-left">¥350</div>
                <div className="prop-name-left migas">Migas</div>
              </div>
              <div className="top-section-left blue">{showHouses(1)}</div>
            </div>
          </div>
          <div id="37" className="left-space">
            {counterP1 === 37 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 37 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="left-rr-container luck">
              <div>
                <h3 className="left-rr">Fu Yuan</h3>
                <div className="logo-cont">
                  <img
                    className="subway-logo-left luck"
                    src={luck}
                    alt="luck-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="36" className="left-space">
            {counterP1 === 36 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 36 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="left-rr-container">
              <div>
                <h3 className="left-rr">Line 10</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-left"
                  src={ditielogo}
                  alt="subway-logo"
                />
              </div>
              <p className="left-rr-price">¥200</p>
            </div>
          </div>
          <div id="35" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 35 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 35 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-price-left">¥320</div>
                  <div className="prop-name-left-bigger">
                    <p className="gl">Great Leap</p>
                  </div>
                </div>
              </div>
              <div className="top-section-left green">{showHouses(2)}</div>
            </div>
          </div>
          <div id="34" className="left-space">
            {counterP1 === 34 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 34 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="left-rr-container guanxi">
              <div>
                <h3 className="left-rr">Guanxi</h3>
                <div className="logo-cont">
                  <img
                    className="subway-logo-left guanxi"
                    src={guanxi}
                    alt="guanxi-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="33" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 33 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 33 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-price-left">¥300</div>
                  <div className="prop-name-left-bigger">
                    <p className="gl">Slow Boat</p>
                  </div>
                </div>
              </div>
              <div className="top-section-left green">{showHouses(3)}</div>
            </div>
          </div>
          <div id="32" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 32 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 32 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-price-left">¥300</div>
                  <div className="prop-name-left jing">
                    <p className="gl">Jing-A</p>
                  </div>
                </div>
              </div>
              <div className="top-section-left green">{showHouses(4)}</div>
            </div>
          </div>
        </div>
        <div id="31" className="left-corner-bottom">
          {counterP1 === 31 ? (
            <img src={p1Image} className="piece" alt="p1 game piece" />
          ) : null}
          {counterP2 === 31 ? (
            <img className="piece two" src={p2Image} alt="p2 game piece" />
          ) : null}
          <div className="free-parking-container">
            <img
              className="bathroom-sign"
              src={hutongbathroom}
              alt="bathroom-sign"
            />
          </div>
        </div>
      </div>
      <div className="center-top-bottom">
        <div className="top-row">
          <div id="2" className="top-space">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 2 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 2 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-price-top">¥60</div>
                <div className="prop-name-top">Lush</div>
              </div>
              <div className="top-section-bottom brown">{showHouses(21)}</div>
            </div>
          </div>
          <div id="3" className="top-space">
            {counterP1 === 3 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 3 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="top-rr-container guanxi">
              <div>
                <h3 className="top-rr">Guanxi</h3>
                <div className="logo-cont">
                  <img
                    className="subway-logo-top guanxi"
                    src={guanxi}
                    alt="guanxi-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="4" className="top-space">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 4 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 4 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-price-top">¥80</div>
                <div className="prop-name-top-big">Propaganda</div>
              </div>
              <div className="top-section-bottom brown">{showHouses(20)}</div>
            </div>
          </div>
          <div id="5" className="top-space">
            {counterP1 === 5 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 5 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="top-rr-container tax">
              <div>
                <h3 className="top-rr">RENEW VISA</h3>
                <p className="top-rr instructions">Pay 10% or ¥200</p>
              </div>
            </div>
          </div>
          <div id="6" className="top-space">
            {counterP1 === 6 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 6 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="top-rr-container">
              <div>
                <h3 className="top-rr">Line 13</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-top"
                  src={ditielogo}
                  alt="subway-logo"
                />
              </div>
              <p className="top-rr-price">¥200</p>
            </div>
          </div>
          <div id="7" className="top-space">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 7 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 7 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-price-top">¥100</div>
                <div className="prop-name-top">Hot Cat</div>
                <div className="main-section-top"></div>
              </div>
              <div className="top-section-bottom light-blue">
                {showHouses(19)}
              </div>
            </div>
          </div>
          <div id="8" className="top-space">
            {counterP1 === 8 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 8 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="top-rr-container luck">
              <div>
                <h3 className="top-rr">Fu Yuan</h3>
                <div className="logo-cont">
                  <img
                    className="subway-logo-top luck"
                    src={luck}
                    alt="luck-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="9" className="top-space">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 9 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 9 ? (
                  <img className="piece" src={p2Image} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-top">¥100</div>
                <div className="prop-name-top-big">De La Poste</div>
                <div className="main-section-top"></div>
              </div>
              <div className="top-section-bottom light-blue">
                {showHouses(18)}
              </div>
            </div>
          </div>
          <div id="10" className="right">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 10 ? (
                  <img src={p1Image} className="piece" alt="g1 game piece" />
                ) : null}
                {counterP2 === 10 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-price-top">¥120</div>
                <div className="prop-name-top">4C</div>
              </div>
              <div className="top-section-bottom light-blue">
                {showHouses(17)}
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="title-cont">
            <h2 className="board-title">LAOWAI MONOPOLY</h2>
          </div>
          <h4 className="pot-tracker">FREE PARKING POT: </h4>
          <h4 className="pot-tracker">¥{freeParking}</h4>
          <div className="card-container">
            <img src={guanxiCard} alt="Guanxi Cards" className="card" />
            <div className="card">
              <img src={fuYuanCard} alt="Fu Yuan Cards" className="card" />
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <div id="30" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top yellow">{showHouses(5)}</div>
              <div className="main-section-bottom">
                {counterP1 === 30 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 30 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-bottom">Dadong</div>
                <div className="prop-price-bottom">¥280</div>
              </div>
            </div>
          </div>
          <div id="29" className="bottom-space">
            {counterP1 === 29 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 29 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="bottom-rr-container">
              <div>
                <h3 className="bottom-rr">Ayi</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-bottom"
                  src={mopAyi}
                  alt="subway-logo"
                />
              </div>
              <p className="bottom-rr-price">¥150</p>
            </div>
          </div>
          <div id="28" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top yellow">{showHouses(6)}</div>
              <div className="main-section-bottom">
                {counterP1 === 28 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 28 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-bottom">HaiDiLao</div>
                <div className="prop-price-bottom">¥260</div>
              </div>
            </div>
          </div>
          <div id="27" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top yellow">{showHouses(7)}</div>
              <div className="main-section-bottom">
                {counterP1 === 27 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 27 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-bottom-bigger">JinDingXuan</div>
                <div className="prop-price-bottom">¥260</div>
              </div>
            </div>
          </div>
          <div id="26" className="bottom-space">
            {counterP1 === 26 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 26 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="bottom-rr-container">
              <div>
                <h3 className="bottom-rr">Line 6</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-bottom"
                  src={ditielogo}
                  alt="subway-logo"
                />
              </div>
              <p className="bottom-rr-price">¥200</p>
            </div>
          </div>
          <div id="25" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top red">{showHouses(8)}</div>
              <div className="main-section-bottom">
                {counterP1 === 25 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 25 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-bottom">Lantern</div>
                <div className="prop-price-bottom">¥240</div>
              </div>
            </div>
          </div>
          <div id="24" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top red">{showHouses(9)}</div>
              <div className="main-section-bottom">
                {counterP1 === 24 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 24 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-bottom">The Local</div>
                <div className="prop-price-bottom">¥220</div>
              </div>
            </div>
          </div>
          <div id="23" className="bottom-space">
            {counterP1 === 23 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 23 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="bottom-rr-container luck">
              <div>
                <h3 className="bottom-rr">Fu Yuan</h3>
                <div className="logo-cont">
                  <img
                    className="subway-logo-bottom luck"
                    src={luck}
                    alt="luck-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="22" className="right">
            <div className="bottom-main">
              <div className="bottom-section-top red">{showHouses(10)}</div>
              <div className="main-section-bottom">
                {counterP1 === 22 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 22 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-bottom">Annie's</div>
                <div className="prop-price-bottom">¥220</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="right-corner-top">
          <div id="11" className="just-visiting-top">
            <p className="visiting">Visiting</p>
            {counterP1 === 11 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 11 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
          </div>
          <div className="jail-right-visiting">
            <div className="jail">
              {p1Jail ? (
                <img src={p1Image} className="piece" alt="p1 game piece" />
              ) : null}
              {p2Jail ? (
                <img className="piece two" src={p2Image} alt="p2 game piece" />
              ) : null}
              <p className="jail-text">Back Home</p>
            </div>
            <div className="just-visiting-right">
              <p className="just">Just</p>
            </div>
          </div>
        </div>
        <div className="right-spaces">
          <div id="12" className="right-space">
            <div className="right-main">
              <div className="right-section-left purple">{showHouses(16)}</div>
              <div className="main-section-right">
                {counterP1 === 12 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 12 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="prop-name-right-smaller">LaoMan</div>
                <div className="prop-price-right">¥140</div>
              </div>
            </div>
          </div>
          <div id="13" className="right-space">
            {counterP1 === 13 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 13 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="right-rr-container">
              <div>
                <h3 className="right-rr water">Water Delivery</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-right jug"
                  src={jug}
                  alt="water-jug"
                />
              </div>
              <p className="right-rr-price water">¥150</p>
            </div>
          </div>
          <div id="14" className="right-space">
            <div className="right-main">
              <div className="right-section-left purple">{showHouses(15)}</div>
              <div className="main-section-right">
                {counterP1 === 14 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 14 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-bigger">
                    <p className="dr">Dali Renjia</p>
                  </div>
                  <div className="prop-price-right-dr">¥140</div>
                </div>
              </div>
            </div>
          </div>
          <div id="15" className="right-space">
            <div className="right-main">
              <div className="right-section-left purple">{showHouses(14)}</div>
              <div className="main-section-right">
                {counterP1 === 15 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 15 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-bigger">
                    <p className="dr">Zhang Mama</p>
                  </div>
                  <div className="prop-price-right-dr">¥160</div>
                </div>
              </div>
            </div>
          </div>
          <div id="16" className="right-space">
            {counterP1 === 16 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 16 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="right-rr-container">
              <div>
                <h3 className="right-rr">Line 2</h3>
              </div>
              <div className="logo-cont">
                <img
                  className="subway-logo-right"
                  src={ditielogo}
                  alt="subway-logo"
                />
              </div>
              <p className="right-rr-price">¥200</p>
            </div>
          </div>
          <div id="17" className="right-space">
            <div className="right-main">
              <div className="right-section-left orange">{showHouses(13)}</div>
              <div className="main-section-right">
                {counterP1 === 17 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 17 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right">
                    <p className="dr">Modernista</p>
                  </div>
                  <div className="prop-price-right-mod">¥180</div>
                </div>
              </div>
            </div>
          </div>
          <div id="18" className="right-space">
            {counterP1 === 18 ? (
              <img src={p1Image} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 18 ? (
              <img className="piece two" src={p2Image} alt="p2 game piece" />
            ) : null}
            <div className="right-rr-container guanxi">
              <div>
                <h3 className="right-rr">Guanxi</h3>
                <div className="logo-cont">
                  <img
                    className="subway-logo-right guanxi"
                    src={guanxi}
                    alt="guanxi-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="19" className="right-space">
            <div className="right-main">
              <div className="right-section-left orange">{showHouses(12)}</div>
              <div className="main-section-right">
                {counterP1 === 19 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 19 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-smaller-temple">
                    <p className="dr">Temple</p>
                  </div>
                  <div className="prop-price-right-tem">¥180</div>
                </div>
              </div>
            </div>
          </div>
          <div id="20" className="right-space">
            <div className="right-main">
              <div className="right-section-left orange Dada">
                {showHouses(11)}
              </div>
              <div className="main-section-right">
                {counterP1 === 20 ? (
                  <img src={p1Image} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 20 ? (
                  <img
                    className="piece two"
                    src={p2Image}
                    alt="p2 game piece"
                  />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-smaller-da">
                    <p className="dr">Dada</p>
                  </div>
                  <div className="prop-price-right-da">¥200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="21" className="right-corner-bottom">
          {counterP1 === 21 ? (
            <img src={p1Image} className="piece" alt="p1 game piece" />
          ) : null}
          {counterP2 === 21 ? (
            <img className="piece two" src={p2Image} alt="p2 game piece" />
          ) : null}
          <div className="go-to-jail-container">
            <img src={police} className="police-image" alt="police" />
            <p className="go-to-jail">Deported!</p>
          </div>
        </div>
        <OwnedProperties
          className="owned"
          viewProperties={viewProperties}
          viewProperties2={viewProperties2}
          setViewProperties={setViewProperties}
          setViewProperties2={setViewProperties2}
          properties={properties}
          setProperties={setProperties}
          railRoads={railRoads}
          utilities={utilities}
          onProp={onProp}
          p1Money={p1Money}
          setP1Money={setP1Money}
          p2Money={p2Money}
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
        <PayOpponent
          className="pay-opponent"
          payProp={payProp}
          setPayProp={setPayProp}
          p1Money={p1Money}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          payTo={payTo}
          setPayTo={setPayTo}
          onProp={onProp}
          onProp2={onProp2}
          setOnProp={setOnProp}
          setOnProp2={setOnProp2}
          properties={properties}
          railRoads={railRoads}
          utilities={utilities}
          setProperties={setProperties}
          setRailRoads={setRailRoads}
          setUtilities={setUtilities}
          doubleProp={doubleProp}
          setDoubleProp={setDoubleProp}
          endGame={endGame}
          setEndGame={setEndGame}
        />
        <PayOpponentRail
          className="pay-opponent"
          payRail={payRail}
          setPayRail={setPayRail}
          p1Money={p1Money}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          payRailTo={payRailTo}
          setPayRailTo={setPayRailTo}
          onRR={onRR}
          onRR2={onRR2}
          setOnRR={setOnRR}
          setOnRR2={setOnRR2}
          railRoads={railRoads}
          setDoubleRR={setDoubleRR}
          doubleRR={doubleRR}
          utilities={utilities}
          setUtilities={setUtilities}
          setRailRailRoads={setRailRoads}
          properties={properties}
          setProperties={setProperties}
          endGame={endGame}
          setEndGame={setEndGame}
        />
        <PayOpponentUtil
          className="pay-opponent"
          payUtil={payUtil}
          setPayUtil={setPayUtil}
          p1Money={p1Money}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          payUtilTo={payUtilTo}
          setPayUtilTo={setPayUtilTo}
          onUtil={onUtil}
          onUtil2={onUtil2}
          setOnUtil={setOnUtil}
          setOnUtil2={setOnUtil2}
          utilities={utilities}
          properties={properties}
          railRoads={railRoads}
          setUtilities={setUtilities}
          setProperties={setProperties}
          setRailRoads={setRailRoads}
          endGame={endGame}
          setEndGame={setEndGame}
        />
        <PurchasedPopUp
          className="purchased"
          viewPurchase={viewPurchase}
          setViewPurchase={setViewPurchase}
          onProp={onProp}
          onProp2={onProp2}
          setViewPurchase2={setViewPurchase2}
          viewPurchase2={viewPurchase2}
          setOnProp={setOnProp}
          setOnProp2={setOnProp2}
        />
        <RRPurchasedPopUp
          className="purchasedRR"
          viewPurchaseRR={viewPurchaseRR}
          setViewPurchaseRR={setViewPurchaseRR}
          onRR={onRR}
          onRR2={onRR2}
          setOnRR={setOnRR}
          setOnRR2={setOnRR2}
          setViewPurchaseRR2={setViewPurchaseRR2}
          viewPurchaseRR2={viewPurchaseRR2}
        />
        <PurchasedUtilPopUp
          className="purchaseUtil"
          viewPurchaseUtil={viewPurchaseUtil}
          viewPurchaseUtil2={viewPurchaseUtil2}
          onUtil={onUtil}
          onUtil2={onUtil2}
          setOnUtil={setOnUtil}
          setOnUtil2={setOnUtil2}
          setViewPurchaseUtil={setViewPurchaseUtil}
          setViewPurchaseUtil2={setViewPurchaseUtil2}
        />

        <PropertyModal
          className="modal"
          setPropertyModal1={setPropertyModal1}
          setPropertyModal2={setPropertyModal2}
          counterP1={counterP1}
          counterP2={counterP2}
          propertyModal1={propertyModal1}
          propertyModal2={propertyModal2}
          turn={turn}
          setOnProp={setOnProp}
          setOnProp2={setOnProp2}
          onProp={onProp}
          onProp2={onProp2}
          setP1Money={setP1Money}
          p1Money={p1Money}
          setP2Money={setP2Money}
          p2Money={p2Money}
          p1Props={p1Props}
          p2Props={p2Props}
          setP1Props={setP1Props}
          setP2Props={setP2Props}
          properties={properties}
          setProperties={setProperties}
          setViewPurchase={setViewPurchase}
          setViewPurchase2={setViewPurchase2}
          setViewProperties={setViewProperties}
          setViewProperties2={setViewProperties2}
        />
        <RailRoadModal
          className="RailRoad"
          setRRModal={setRRModal}
          setRRModal2={setRRModal2}
          onRR={onRR}
          onRR2={onRR2}
          setOnRR={setOnRR}
          setOnRR2={setOnRR2}
          rrModal={rrModal}
          rrModal2={rrModal2}
          railRoads={railRoads}
          setRailRoads={setRailRoads}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          p1Money={p1Money}
          p2Money={p2Money}
          viewPurchaseRR={viewPurchaseRR}
          setViewPurchaseRR={setViewPurchaseRR}
          viewPurchaseRR2={setViewPurchaseRR2}
          setViewPurchaseRR2={setViewPurchaseRR2}
          setViewProperties={setViewProperties}
          setViewProperties2={setViewProperties2}
        />
        <UtilitiesModal
          className="Utilities"
          utilModal={utilModal}
          utilModal2={utilModal2}
          setUtilModal={setUtilModal}
          setUtilModal2={setUtilModal2}
          onUtil={onUtil}
          onUtil2={onUtil2}
          setOnUtil={setOnUtil}
          setOnUtil2={setOnUtil2}
          utilities={utilities}
          setUtilities={setUtilities}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          p1Money={p1Money}
          p2Money={p2Money}
          viewPurchaseUtil={viewPurchaseUtil}
          setViewPurchaseUtil={setViewPurchaseUtil}
          viewPurchaseUtil2={viewPurchaseUtil2}
          setViewPurchaseUtil2={setViewPurchaseUtil2}
          setViewProperties={setViewProperties}
          setViewProperties2={setViewProperties2}
        />
        <FreeParking
          freeParking={freeParking}
          onFreeParking={onFreeParking}
          setOnFreeParking={setOnFreeParking}
          onFreeParking2={onFreeParking2}
          setOnFreeParking2={setOnFreeParking2}
          setFreeParking={setFreeParking}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          p1Money={p1Money}
          p2Money={p2Money}
        />
        <EndGame
          endGame={endGame}
          setEndGame={setEndGame}
          p1Image={p1Image}
          p2Image={p2Image}
          p1SRC={p1SRC}
          p2SRC={p2SRC}
        />
        <Go
          onGoP1={onGoP1}
          onGoP2={onGoP2}
          setOnGoP1={setOnGoP1}
          setOnGoP2={setOnGoP2}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          p1Money={p1Money}
          p2Money={p2Money}
        />
        <ConfirmConcede
          endGame={endGame}
          setEndGame={setEndGame}
          confirmConcedeView={confirmConcedeView}
          setConfirmConcedeView={setConfirmConcedeView}
          playerOneConcede={playerOneConcede}
          setPlayerOneConcede={setPlayerOneConcede}
          playerTwoConcede={playerTwoConcede}
          setPlayerTwoConcede={setPlayerTwoConcede}
        />
        <AgentFee
          onAgentFee={onAgentFee}
          onAgentFee2={onAgentFee2}
          setOnAgentFee={setOnAgentFee}
          setOnAgentFee2={setOnAgentFee2}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          p1Money={p1Money}
          p2Money={p2Money}
          setFreeParking={setFreeParking}
          freeParking={freeParking}
          properties={properties}
          railRoads={railRoads}
          utilities={utilities}
          setProperties={setProperties}
          setUtilities={setUtilities}
          setRailRoads={setRailRoads}
          endGame={endGame}
          setEndGame={setEndGame}
        />
        <Visa
          onVisa={onVisa}
          onVisa2={onVisa2}
          setOnVisa={setOnVisa}
          setOnVisa2={setOnVisa2}
          p1Money={p1Money}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          setFreeParking={setFreeParking}
          freeParking={freeParking}
          endGame={endGame}
          setEndGame={setEndGame}
        />
        <Jail
          onGoJail={onGoJail}
          setOnGoJail={setOnGoJail}
          onGoJail2={onGoJail2}
          setOnGoJail2={setOnGoJail2}
          setInJail={setInJail}
          setInJail2={setInJail2}
          setTurn={setTurn}
        />
        <MortgageModal
          mortgage={mortgage}
          mortgage2={mortgage2}
          setMortgage={setMortgage}
          setMortgage2={setMortgage2}
          p1Money={p1Money}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          properties={properties}
          railRoads={railRoads}
          utilities={utilities}
          setRailRoads={setRailRoads}
          setUtilities={setUtilities}
          setProperties={setProperties}
        />
        <UnMortgageModal
          unMortgage={unMortgage}
          setUnMortgage={setUnMortgage}
          unMortgage2={unMortgage2}
          setUnMortgage2={setUnMortgage2}
          p1Money={p1Money}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP1Money}
          freeParking={freeParking}
          setFreeParking={setFreeParking}
          properties={properties}
          railRoads={railRoads}
          utilities={utilities}
          setProperties={setProperties}
          setRailRoads={setRailRoads}
          setUtilities={setUtilities}
        />
        <InJail
          inJail={inJail}
          setInJail={setInJail}
          inJail2={inJail2}
          setInJail2={setInJail2}
          setTurn={setTurn}
          inJailModal={inJailModal}
          inJailModal2={inJailModal2}
          setInJailModal={setInJailModal}
          turn={turn}
          setInJailModal2={setInJailModal2}
          setCounterP1={setCounterP1}
          setCounterP2={setCounterP2}
          setDisableRight={setDisableRight}
          setDisableLeft={setDisableLeft}
          setP1Jail={setP1Jail}
          setP2Jail={setP2Jail}
        />
        <VisaConfirm
          setVisaModal={setVisaModal}
          visaModal={visaModal}
          turn={turn}
          setCounterP1={setCounterP1}
          setCounterP2={setCounterP2}
          setInJail={setInJail}
          setInJail2={setInJail2}
          inJail={inJail}
          inJail2={inJail2}
          setVisa1={setVisa1}
          setVisa2={setVisa2}
          counterP1={counterP1}
          setP1Jail={setP1Jail}
          setP2Jail={setP2Jail}
        />
        <TradeModal
          properties={properties}
          p1Money={p1Money}
          setProperties={setProperties}
          utilities={utilities}
          setUtilities={setUtilities}
          setRailRoads={setRailRoads}
          railRoads={railRoads}
          p2Money={p2Money}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          setShowTrade={setShowTrade}
          showTrade={showTrade}
        />
        <Cards
          onCard={onCard}
          setOnCard={setOnCard}
          onCard2={onCard2}
          setOnCard2={setOnCard2}
          setInJail={setInJail}
          setInJail2={setInJail2}
          setP1Money={setP1Money}
          setP2Money={setP2Money}
          p1Money={p1Money}
          p2Money={p2Money}
          setFreeParking={setFreeParking}
          freeParking={freeParking}
          counterP1={counterP1}
          counterP2={counterP2}
          setCounterP1={setCounterP1}
          setCounterP2={setCounterP2}
          setTurn={setTurn}
          turn={turn}
          railRoads={railRoads}
          properties={properties}
          setDoubleRR={setDoubleRR}
          doubleProp={doubleProp}
          setDoubleProp={setDoubleProp}
          setSkip1={setSkip1}
          setSkip2={setSkip2}
          setVisa1={setVisa1}
          setVisa2={setVisa2}
          hotelsP1={hotelsP1}
          hotelsP2={hotelsP2}
          setHotelsP1={setHotelsP1}
          setHotelsP2={setHotelsP2}
          setTotalHousesP1={setTotalHousesP1}
          totalHousesP1={totalHousesP1}
          setTotalHousesP2={setTotalHousesP2}
          totalHousesP2={totalHousesP2}
          utilities={utilities}
          payUtilTo={payUtilTo}
          setPayUtilTo={setPayUtilTo}
          onUtil={onUtil}
          onUtil2={onUtil2}
          setOnUtil={setOnUtil}
          setOnUtil2={setOnUtil2}
          utilModal={utilModal}
          utilModal2={utilModal2}
          setUtilModal={setUtilModal}
          setUtilModal2={setUtilModal2}
          payUtil={payUtil}
          setPayUtil={setPayUtil}
          payRailTo={payRailTo}
          setPayRailTo={setPayRailTo}
          setPayRail={setPayRail}
          setRRModal={setRRModal}
          setRRModal2={setRRModal2}
          onRR={onRR}
          onRR2={onRR2}
          setOnRR={setOnRR}
          setOnRR2={setOnRR2}
          setOnProp={setOnProp}
          setOnProp2={setOnProp2}
          setPayTo={setPayTo}
          setPayProp={setPayProp}
          setPropertyModal1={setPropertyModal1}
          setPropertyModal2={setPropertyModal2}
          setOnAgentFee={setOnAgentFee}
          setOnAgentFee2={setOnAgentFee2}
          onVisa={onVisa}
          onVisa2={onVisa2}
          setOnVisa={setOnVisa}
          setOnVisa2={setOnVisa2}
          setStayOn={setStayOn}
          setStayOn2={setStayOn2}
          setOnFreeParking={setOnFreeParking}
          setOnFreeParking2={setOnFreeParking2}
          pass={pass}
          pass2={pass2}
          setPass={setPass}
          setPass2={setPass2}
          setRailRoads={setRailRoads}
          setProperties={setProperties}
          setUtilities={setUtilities}
          endGame={endGame}
          setP1Jail={setP1Jail}
          setP2Jail={setP2Jail}
          setEndGame={setEndGame}
        />
      </div>
    </div>
  );
};
