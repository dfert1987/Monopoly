import React, { useState } from "react";
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
import OwnedProperties from "./Modals/OwnedProperties";
import PayOpponent from "./Modals/PayModals/PayOpponent";
import PayOpponentRail from "../Components/Modals/PayModals/PayOpponentRail";
import PayOpponentUtil from "../Components/Modals/PayModals/PayOpponentUtil";
import Piece1 from "../Assets/Pieces/Piece1.png";
import Piece2 from "../Assets/Pieces/Piece2.png";
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
import "./Styles/Board.css";

export const Board = ({
  counterP1,
  counterP2,
  setCounterP1,
  setCounterP2,
  p1Jail,
  p2Jail,
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
}) => {
  const [viewPurchase, setViewPurchase] = useState(false);
  const [viewPurchase2, setViewPurchase2] = useState(false);
  const [viewPurchaseRR, setViewPurchaseRR] = useState(false);
  const [viewPurchaseRR2, setViewPurchaseRR2] = useState(false);
  const [viewPurchaseUtil, setViewPurchaseUtil] = useState(false);
  const [viewPurchaseUtil2, setViewPurchaseUtil2] = useState(false);
  const [doubleRR, setDoubleRR] = useState(false);
  const [doubleProp, setDoubleProp] = useState(false);

  return (
    <div className="main-board">
      <div className="left-column">
        <div id="1" className="left-corner-top">
          {counterP1 === 1 ? (
            <img className="piece" src={Piece1} alt="p1 game piece" />
          ) : null}
          {counterP2 === 1 ? (
            <img className="piece two" src={Piece2} alt="p2 game piece" />
          ) : null}
          <div className="go-container">
            <img src={longArrow} alt="go-arrow" className="go-arrow" />
            <div className="all-go">
              <h1 className="go">GO</h1>
              <div className="go-text-container">
                <span className="go-instructions">COLLECT</span>
                <span className="go-instructions">$200 SALARY</span>
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
                  <img className="piece" src={Piece1} alt="p1 game piece" />
                ) : null}
                {counterP2 === 40 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-left">400rmb</div>
                <div className="prop-name-left">TRB</div>
              </div>
              <div className="top-section-left blue"></div>
            </div>
          </div>
          <div id="39" className="left-space">
            {counterP1 === 39 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 39 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="left-rr-price agent">Pay 75rmb</p>
            </div>
          </div>
          <div id="38" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 38 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 38 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-left">350rmb</div>
                <div className="prop-name-left migas">Migas</div>
              </div>
              <div className="top-section-left blue"></div>
            </div>
          </div>
          <div id="37" className="left-space">
            {counterP1 === 37 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 37 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 36 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="left-rr-price">200rmb</p>
            </div>
          </div>
          <div id="35" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 35 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 35 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-price-left">320rmb</div>
                  <div className="prop-name-left-bigger">
                    <p className="gl">Great Leap</p>
                  </div>
                </div>
              </div>
              <div className="top-section-left green"></div>
            </div>
          </div>
          <div id="34" className="left-space">
            {counterP1 === 34 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 34 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 33 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-price-left">300rmb</div>
                  <div className="prop-name-left-bigger">
                    <p className="gl">Slow Boat</p>
                  </div>
                </div>
              </div>
              <div className="top-section-left green"></div>
            </div>
          </div>
          <div id="32" className="left-space">
            <div className="left-main">
              <div className="main-section-left">
                {counterP1 === 32 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 32 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-price-left">300rmb</div>
                  <div className="prop-name-left jing">
                    <p className="gl">Jing-A</p>
                  </div>
                </div>
              </div>
              <div className="top-section-left green"></div>
            </div>
          </div>
        </div>
        <div id="31" className="left-corner-bottom">
          {counterP1 === 31 ? (
            <img src={Piece1} className="piece" alt="p1 game piece" />
          ) : null}
          {counterP2 === 31 ? (
            <img className="piece two" src={Piece2} alt="p2 game piece" />
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
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 2 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-top">60rmb</div>
                <div className="prop-name-top">Lush</div>
              </div>
              <div className="top-section-bottom brown"></div>
            </div>
          </div>
          <div id="3" className="top-space">
            {counterP1 === 3 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 3 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 4 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-top">80rmb</div>
                <div className="prop-name-top-big">Propaganda</div>
              </div>
              <div className="top-section-bottom brown"></div>
            </div>
          </div>
          <div id="5" className="top-space">
            {counterP1 === 5 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 5 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
            ) : null}
            <div className="top-rr-container tax">
              <div>
                <h3 className="top-rr">RENEW VISA</h3>
                <p className="top-rr instructions">Pay 10% or $200</p>
              </div>
            </div>
          </div>
          <div id="6" className="top-space">
            {counterP1 === 6 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 6 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="top-rr-price">200rmb</p>
            </div>
          </div>
          <div id="7" className="top-space">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 7 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 7 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-top">100rmb</div>
                <div className="prop-name-top">Hot Cat</div>
                <div className="main-section-top"></div>
              </div>
              <div className="top-section-bottom light-blue"></div>
            </div>
          </div>
          <div id="8" className="top-space">
            {counterP1 === 8 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 8 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 9 ? (
                  <img className="piece" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-top">100rmb</div>
                <div className="prop-name-top-big">De La Poste</div>
                <div className="main-section-top"></div>
              </div>
              <div className="top-section-bottom light-blue"></div>
            </div>
          </div>
          <div id="10" className="right">
            <div className="top-main">
              <div className="main-section-top">
                {counterP1 === 10 ? (
                  <img src={Piece1} className="piece" alt="g1 game piece" />
                ) : null}
                {counterP2 === 10 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-price-top">120rmb</div>
                <div className="prop-name-top">4C</div>
              </div>
              <div className="top-section-bottom light-blue"></div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="title-cont">
            <h2 className="board-title">LAOWAI MONOPOLY</h2>
          </div>
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
              <div className="bottom-section-top yellow"></div>
              <div className="main-section-bottom">
                {counterP1 === 30 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 30 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-bottom">Dadong</div>
                <div className="prop-price-bottom">280rmb</div>
              </div>
            </div>
          </div>
          <div id="29" className="bottom-space">
            {counterP1 === 29 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 29 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="bottom-rr-price">150rmb</p>
            </div>
          </div>
          <div id="28" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top yellow"></div>
              <div className="main-section-bottom">
                {counterP1 === 28 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 28 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-bottom">HaiDiLao</div>
                <div className="prop-price-bottom">260rmb</div>
              </div>
            </div>
          </div>
          <div id="27" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top yellow"></div>
              <div className="main-section-bottom">
                {counterP1 === 27 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 27 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-bottom-bigger">JinDingXuan</div>
                <div className="prop-price-bottom">260rmb</div>
              </div>
            </div>
          </div>
          <div id="26" className="bottom-space">
            {counterP1 === 26 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 26 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="bottom-rr-price">200rmb</p>
            </div>
          </div>
          <div id="25" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top red"></div>
              <div className="main-section-bottom">
                {counterP1 === 25 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 25 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-bottom">Lantern</div>
                <div className="prop-price-bottom">240rmb</div>
              </div>
            </div>
          </div>
          <div id="24" className="bottom-space">
            <div className="bottom-main">
              <div className="bottom-section-top red"></div>
              <div className="main-section-bottom">
                {counterP1 === 24 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 24 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-bottom">The Local</div>
                <div className="prop-price-bottom">220rmb</div>
              </div>
            </div>
          </div>
          <div id="23" className="bottom-space">
            {counterP1 === 23 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 23 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <div className="bottom-section-top red"></div>
              <div className="main-section-bottom">
                {counterP1 === 22 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 22 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-bottom">Annie's</div>
                <div className="prop-price-bottom">220rmb</div>
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
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 11 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
            ) : null}
          </div>
          <div className="jail-right-visiting">
            <div className="jail">
              {p1Jail ? (
                <img src={Piece1} className="piece" alt="p1 game piece" />
              ) : null}
              {p2Jail ? (
                <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <div className="right-section-left purple"></div>
              <div className="main-section-right">
                {counterP1 === 12 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 12 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="prop-name-right-smaller">LaoMan</div>
                <div className="prop-price-right">140rmb</div>
              </div>
            </div>
          </div>
          <div id="13" className="right-space">
            {counterP1 === 13 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 13 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="right-rr-price water">150rmb</p>
            </div>
          </div>
          <div id="14" className="right-space">
            <div className="right-main">
              <div className="right-section-left purple"></div>
              <div className="main-section-right">
                {counterP1 === 14 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 14 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-bigger">
                    <p className="dr">Dali Renjia</p>
                  </div>
                  <div className="prop-price-right-dr">140rmb</div>
                </div>
              </div>
            </div>
          </div>
          <div id="15" className="right-space">
            <div className="right-main">
              <div className="right-section-left purple"></div>
              <div className="main-section-right">
                {counterP1 === 15 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 15 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-bigger">
                    <p className="dr">Zhang Mama</p>
                  </div>
                  <div className="prop-price-right-dr">160rmb</div>
                </div>
              </div>
            </div>
          </div>
          <div id="16" className="right-space">
            {counterP1 === 16 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 16 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <p className="right-rr-price">200rmb</p>
            </div>
          </div>
          <div id="17" className="right-space">
            <div className="right-main">
              <div className="right-section-left orange"></div>
              <div className="main-section-right">
                {counterP1 === 17 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 17 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right">
                    <p className="dr">Modernista</p>
                  </div>
                  <div className="prop-price-right-mod">180rmb</div>
                </div>
              </div>
            </div>
          </div>
          <div id="18" className="right-space">
            {counterP1 === 18 ? (
              <img src={Piece1} className="piece" alt="p1 game piece" />
            ) : null}
            {counterP2 === 18 ? (
              <img className="piece two" src={Piece2} alt="p2 game piece" />
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
              <div className="right-section-left orange"></div>
              <div className="main-section-right">
                {counterP1 === 19 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 19 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-smaller-temple">
                    <p className="dr">Temple</p>
                  </div>
                  <div className="prop-price-right-tem">180rmb</div>
                </div>
              </div>
            </div>
          </div>
          <div id="20" className="right-space">
            <div className="right-main">
              <div className="right-section-left orange"></div>
              <div className="main-section-right">
                {counterP1 === 20 ? (
                  <img src={Piece1} className="piece" alt="p1 game piece" />
                ) : null}
                {counterP2 === 20 ? (
                  <img className="piece two" src={Piece2} alt="p2 game piece" />
                ) : null}
                <div className="text-container">
                  <div className="prop-name-right-smaller-da">
                    <p className="dr">Dada</p>
                  </div>
                  <div className="prop-price-right-da">200rmb</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="21" className="right-corner-bottom">
          {counterP1 === 21 ? (
            <img src={Piece1} className="piece" alt="p1 game piece" />
          ) : null}
          {counterP2 === 21 ? (
            <img className="piece two" src={Piece2} alt="p2 game piece" />
          ) : null}
          <div className="go-to-jail-container">
            <img src={police} className="police-image" alt="police" />
            <p className="go-to-jail">You're Deported!</p>
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
          doubleProp={doubleProp}
          setDoubleProp={setDoubleProp}
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
          setViewPuruchaseUtil2={setViewPurchaseUtil2}
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
        />
      </div>
    </div>
  );
};
