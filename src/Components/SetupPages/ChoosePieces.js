import React from "react";
import { Link } from "react-router-dom";

export const ChoosePieces = () => {
  return (
    <div className="page-container">
      <h1 className="main-title">Choose Your Piece!</h1>
      <Link to="/App">PLAY</Link>
    </div>
  );
};

export default ChoosePieces;
