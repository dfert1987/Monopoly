import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ChoosePieces.css";

export const ChoosePieces = () => {
  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="main-title">CHOOSE YOUR PIECE</h1>
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
