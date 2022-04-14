import React, { useState, useEffect } from "react";
import Carousel, { CarouselItem } from "../Carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Transitions/Index";
import useSound from "use-sound";
import Drum from "../../Assets/Sounds/drum.mp3";
import Gong from "../../Assets/Sounds/GONG.mp3";
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
  <img src={Piece1} alt="trike" className="carousel-pic" />,
  <img src={Piece2} alt="yellow weasel" className="carousel-pic" />,
  <img src={baijiu} alt="baijiu bottle" className="carousel-pic" />,
  <img src={baoan} alt="sleeping baoan" className="carousel-pic" />,
  <img src={baozi} alt="baozi" className="carousel-pic" />,
  <img src={duck} alt="Peking duck" className="carousel-pic" />,
  <img src={fudog} alt="fu dog" className="carousel-pic" />,
  <img src={jiaozi} alt="jiaozi" className="carousel-pic" />,
  <img src={lantern} alt="lantern" className="carousel-pic" />,
  <img src={mobike} alt="Mobike" className="carousel-pic" />,
  <img src={morgan} alt="Morgan Short's head" className="carousel-pic" />,
  <img src={poodle} alt="poodle" className="carousel-pic" />,
  <img src={taxi} alt="taxi" className="carousel-pic" />,
  <img src={teapot} alt="teapopt" className="carousel-pic" />,
  <img src={yanjing} alt="yanjing" className="carousel-pic" />,
];

const ChoosePieces = () => {
  const [piecePlayer1, setPiecePlayer1] = useState(0);
  const [piecePlayer2, setPiecePlayer2] = useState(0);
  const [chosenLeft, setChosenLeft] = useState(false);
  const [chosenRight, setChosenRight] = useState(false);
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [disabledRight, setDisabledRight] = useState(false);
  const [piece1, setPiece1] = useState(0);
  const [piece2, setPiece2] = useState(0);

  const [drum] = useSound(Drum);
  const [gong] = useSound(Gong);

  const myData = {
    p1Piece: piecePlayer1,
    p2Piece: piecePlayer2,
  };

  const setStuff = () => {
    setChosenLeft(true);
    setPiecePlayer1(piece1);
    setDisabledLeft(true);
    drum();
  };

  const setStuffRight = () => {
    setChosenRight(true);
    setPiecePlayer2(piece2);
    setDisabledRight(true);
    drum();
  };

  const getText = () => {
    if (piecePlayer1 === 0) {
      return "Selected: TRIKE";
    } else if (piecePlayer1 === 1) {
      return "Selected: YELLOW WEASEL";
    } else if (piecePlayer1 === 2) {
      return "Selected: BAIJIU";
    } else if (piecePlayer1 === 3) {
      return "Selected: SLEEPY BAOAN";
    } else if (piecePlayer1 === 4) {
      return "Selected: BAOZI";
    } else if (piecePlayer1 === 5) {
      return "Selected: ROAST DUCK";
    } else if (piecePlayer1 === 6) {
      return "Selected: FU DOG";
    } else if (piecePlayer1 === 7) {
      return "Selected: JIAOZI";
    } else if (piecePlayer1 === 8) {
      return "Selected: LANTERN";
    } else if (piecePlayer1 === 9) {
      return "Selected: MOBIKE";
    } else if (piecePlayer1 === 10) {
      return "Selected: MORGAN";
    } else if (piecePlayer1 === 11) {
      return "Selected: POODLE";
    } else if (piecePlayer1 === 12) {
      return "Selected: TAXI";
    } else if (piecePlayer1 === 13) {
      return "Selected: TEAPOT";
    } else if (piecePlayer1 === 14) {
      return "Selected: YANJING";
    } else return null;
  };

  const getTextRight = () => {
    if (piecePlayer2 === 0) {
      return "Selected: TRIKE";
    } else if (piecePlayer2 === 1) {
      return "Selected: YELLOW WEASEL";
    } else if (piecePlayer2 === 2) {
      return "Selected: BAIJIU";
    } else if (piecePlayer2 === 3) {
      return "Selected: SLEEPY BAOAN";
    } else if (piecePlayer2 === 4) {
      return "Selected: BAOZI";
    } else if (piecePlayer2 === 5) {
      return "Selected: ROAST DUCK";
    } else if (piecePlayer2 === 6) {
      return "Selected: FU DOG";
    } else if (piecePlayer2 === 7) {
      return "Selected: JIAOZI";
    } else if (piecePlayer2 === 8) {
      return "Selected: LANTERN";
    } else if (piecePlayer2 === 9) {
      return "Selected: MOBIKE";
    } else if (piecePlayer2 === 10) {
      return "Selected: MORGAN";
    } else if (piecePlayer2 === 11) {
      return "Selected: POODLE";
    } else if (piecePlayer2 === 12) {
      return "Selected: TAXI";
    } else if (piecePlayer2 === 13) {
      return "Selected: TEAPOT";
    } else if (piecePlayer2 === 14) {
      return "Selected: YANJING";
    } else return null;
  };

  return (
    <motion.div
      className="page-container"
      initial="out"
      animate="end"
      exit="out"
      variants={pageAnimation}
    >
      <h1 className="main-title">CHOOSE YOUR PIECE</h1>
      <div className="carousel-section">
        <div className="carousel-container player1">
          <h2 className="player-choice one">Player One</h2>
          <Carousel
            className="carousel-in-pieces"
            piece1={piece1}
            setPiece1={setPiece1}
            chosenLeft={chosenLeft}
          >
            <CarouselItem>{slides[0]}</CarouselItem>
            <CarouselItem>{slides[1]}</CarouselItem>
            <CarouselItem>{slides[2]}</CarouselItem>
            <CarouselItem>{slides[3]}</CarouselItem>
            <CarouselItem>{slides[4]}</CarouselItem>
            <CarouselItem>{slides[5]}</CarouselItem>
            <CarouselItem>{slides[6]}</CarouselItem>
            <CarouselItem>{slides[7]}</CarouselItem>
            <CarouselItem>{slides[8]}</CarouselItem>
            <CarouselItem>{slides[9]}</CarouselItem>
            <CarouselItem>{slides[10]}</CarouselItem>
            <CarouselItem>{slides[11]}</CarouselItem>
            <CarouselItem>{slides[12]}</CarouselItem>
            <CarouselItem>{slides[13]}</CarouselItem>
            <CarouselItem>{slides[14]}</CarouselItem>
          </Carousel>
          <div className="select-container">
            {disabledLeft ? <h3 className="chosen-text">{getText()}</h3> : null}
            <button
              className="select-piece"
              onClick={setStuff}
              disabled={disabledLeft}
            >
              SELECT
            </button>
          </div>
        </div>
        <div className="carousel-container player2">
          <h2 className="player-choice two">Player Two</h2>
          <Carousel
            className="carousel-in-pieces"
            piece2={piece2}
            setPiece2={setPiece2}
            chosenRight={chosenRight}
          >
            <CarouselItem>{slides[0]}</CarouselItem>
            <CarouselItem>{slides[1]}</CarouselItem>
            <CarouselItem>{slides[2]}</CarouselItem>
            <CarouselItem>{slides[3]}</CarouselItem>
            <CarouselItem>{slides[4]}</CarouselItem>
            <CarouselItem>{slides[5]}</CarouselItem>
            <CarouselItem>{slides[6]}</CarouselItem>
            <CarouselItem>{slides[7]}</CarouselItem>
            <CarouselItem>{slides[8]}</CarouselItem>
            <CarouselItem>{slides[9]}</CarouselItem>
            <CarouselItem>{slides[10]}</CarouselItem>
            <CarouselItem>{slides[11]}</CarouselItem>
            <CarouselItem>{slides[12]}</CarouselItem>
            <CarouselItem>{slides[13]}</CarouselItem>
            <CarouselItem>{slides[14]}</CarouselItem>
          </Carousel>
          <div className="select-container">
            {chosenRight ? (
              <h3 className="chosen-text">{getTextRight()}</h3>
            ) : null}
            <button
              className="select-piece"
              onClick={setStuffRight}
              disabled={disabledRight}
            >
              SELECT
            </button>
          </div>
        </div>
      </div>
      {chosenRight && chosenLeft ? (
        <div className="button-container">
          <Link to="/app" state={myData}>
            <button className="play-button" onClick={gong}>
              PLAY
            </button>
          </Link>
        </div>
      ) : null}
    </motion.div>
  );
};

export default ChoosePieces;
