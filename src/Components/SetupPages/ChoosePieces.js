import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import baijiu from "../../Assets/Pieces/baijiu.png";
import baoan from "../../Assets/Pieces/baoan.png";
import baozi from "../../Assets/Pieces/baozi.png";
import duck from "../../Assets/Pieces/duck.png";
import fudog from "../../Assets/Pieces/fudog.png";
import jiaozi from "../../Assets/Pieces/jiaozi.png";
import lantern from "../../Assets/Pieces/lantern.png";
import mobike from "../../Assets/Pieces/mobike.png";
import morgan from "../../Assets/Pieces/morgan.png";
import Piece1 from "../../Assets/Pieces/Piece1.png";
import Piece2 from "../../Assets/Pieces/Piece2.png";
import poodle from "../../Assets/Pieces/poodle.png";
import taxi from "../../Assets/Pieces/taxi.png";
import teapot from "../../Assets/Pieces/teapot.png";
import yanjing from "../../Assets/Pieces/yanjing.png";
import "../Styles/ChoosePieces.css";

let slides = [
  <img src={Piece1} alt="trike" />,
  <img src={Piece2} alt="yellow weasel" />,
  <img src={baijiu} alt="baijiu bottle" />,
  <img src={baoan} alt="sleeping baoan" />,
  <img src={baozi} alt="baozi" />,
  <img src={duck} alt="Peking duck" />,
  <img src={fudog} alt="fu dog" />,
  <img src={jiaozi} alt="jiaozi" />,
  <img src={lantern} alt="lantern" />,
  <img src={mobike} alt="Mobike" />,
  <img src={morgan} alt="Morgan Short's head" />,
  <img src={poodle} alt="poodle" />,
  <img src={taxi} alt="taxi" />,
  <img src={teapot} alt="teapopt" />,
  <img src={yanjing} alt="yanjing" />,
];

export const ChoosePieces = () => {
  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="main-title">CHOOSE YOUR PIECE</h1>
      </div>
      <div className="carousel-section">
        <div className="carousel-container p1">
          <h2 className="player-choice one">Player One</h2>
        </div>
        <div className="carousel-container p2">
          <h2 className="player-choice two">Player Two</h2>
        </div>
      </div>
      <div className="button-container">
        <Link to="/App">
          <button className="play-button">PLAY</button>
        </Link>
      </div>
    </div>
  );
};

export default ChoosePieces;
