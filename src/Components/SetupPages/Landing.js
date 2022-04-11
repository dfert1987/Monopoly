import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Transitions/Index";
import logomon from "../../Assets/Landing/logomon.png";
import monoplaoren from "../../Assets/Landing/monoplaoren.png";
import "../Styles/Landing.css";

export const Landing = () => {
  return (
    <motion.div
      className="landing"
      initial="out"
      animate="end"
      exit="out"
      variants={pageAnimation}
    >
      <div className="page-container">
        <div className="logo-with-man">
          <div className="logo-and-button">
            <div className="logo-container">
              <img className="main-logo" alt="logo" src={logomon} />
            </div>
            <div className="button-container">
              <Link to="/choosepieces">
                <button className="play-button">PLAY</button>
              </Link>
            </div>
          </div>
          <img className="man" alt="monopoly man" src={monoplaoren} />
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
