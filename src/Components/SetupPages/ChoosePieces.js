import React from "react";
import Carousel, { CarouselItem } from "../Carousel";
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
import { Link } from "react-router-dom";
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

export const ChoosePieces = () => {
  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="main-title">CHOOSE YOUR PIECE</h1>
      </div>
      <div className="carousel-section">
        <div className="carousel-container player1">
          <h2 className="player-choice one">Player One</h2>
          <Carousel className="carousel-in-pieces">
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
        </div>
        <div className="carousel-container player2">
          <h2 className="player-choice two">Player Two</h2>
          <Carousel className="carousel-in-pieces">
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
