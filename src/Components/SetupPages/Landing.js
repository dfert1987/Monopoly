import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Transitions/Index";
import logomon from "../../Assets/Landing/logomon.png";
import monoplaoren from "../../Assets/Landing/monoplaoren.png";
import useSound from "use-sound";
import Gong from "../../Assets/Sounds/GONG.mp3";
import Erhu from "../../Assets/Sounds/Erhu.mp3";
import "../Styles/Landing.css";

export const Landing = () => {
  const [playOk, setPlayOk] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [playErhu, { stop }] = useSound(Erhu);
  const [playGong] = useSound(Gong);

  const mouseOn = () => {
    if (playOk === true && playing === false) {
      playErhu();
      setPlaying(true);
    } else return null;
  };

  const handlePlay = () => {
    setPlayOk(true);
    playErhu();
    setPlaying(true);
  };

  const stopMusic = () => {
    setPlayOk(false);
    setPlaying(false);
    stop();
  };

  return (
    <motion.div
      className="landing"
      initial="out"
      animate="end"
      exit="out"
      variants={pageAnimation}
    >
      <div className="page-container" onMouseOver={mouseOn}>
        <div className="music-button-container">
          {playing ? (
            <button className="play" onClick={stopMusic}>
              STOP Music
            </button>
          ) : (
            <button className="play" onClick={handlePlay}>
              PLAY
            </button>
          )}
        </div>
        <div className="logo-with-man">
          <div className="logo-and-button">
            <div className="logo-container">
              <img className="main-logo" alt="logo" src={logomon} />
            </div>
            <div className="button-container">
              <Link to="/choosepieces">
                <button onClick={playGong} className="play-button">
                  PLAY
                </button>
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
