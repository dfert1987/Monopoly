import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="page-container">
      <h1 className="main-title">Welcome to Laowai Monopoly!</h1>
      <Link to="/ChoosePieces">START</Link>
    </div>
  );
};

export default Landing;
