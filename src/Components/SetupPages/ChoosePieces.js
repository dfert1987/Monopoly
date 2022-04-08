import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import baijiu from "../../Assets/Pieces/baijiu.png";

import "../Styles/ChoosePieces.css";

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
