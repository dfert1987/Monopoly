import React from "react";
import Piece1 from "../Assets/Pieces/Piece1.png";
import Piece2 from "../Assets/Pieces/Piece2.png";
import ditielogo from "../Assets/PropertyImages/ditielogo.png";
import "./Styles/Board.css";

export const Board = ({ counterP1, counterP2, properties }) => {
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
            <div className="card">
              <h4 className="card-title">Community Chest</h4>
            </div>
            <div className="card">
              <h4 className="card-title">Chance</h4>
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
        <div id="11" className="right-corner-top">
          {counterP1 === 11 ? (
            <img src={Piece1} className="piece" alt="p1 game piece" />
          ) : null}
          {counterP2 === 11 ? (
            <img className="piece two" src={Piece2} alt="p2 game piece" />
          ) : null}
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
        </div>
      </div>
    </div>
  );
};
