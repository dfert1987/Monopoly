import React, { useState } from "react";
import "./Styles/Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, piece1, setPiece1, piece2, setPiece2 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const setText = () => {
    if (activeIndex === 0) {
      return "TRIKE";
    } else if (activeIndex === 1) {
      return "YELLOW WEASEL";
    } else if (activeIndex === 2) {
      return "BAIJIU";
    } else if (activeIndex === 3) {
      return "SLEEPY BAOAN";
    } else if (activeIndex === 4) {
      return "BAOZI";
    } else if (activeIndex === 5) {
      return "ROAST DUCK";
    } else if (activeIndex === 6) {
      return "FU DOG";
    } else if (activeIndex === 7) {
      return "JIAOZI";
    } else if (activeIndex === 8) {
      return "LANTERN";
    } else if (activeIndex === 9) {
      return "MOBIKE";
    } else if (activeIndex === 10) {
      return "MORGAN";
    } else if (activeIndex === 11) {
      return "POODLE";
    } else if (activeIndex === 12) {
      return "TAXI";
    } else if (activeIndex === 13) {
      return "TEAPOT";
    } else if (activeIndex === 14) {
      return "YANJING";
    }
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  const disable = (buttonType) => {
    if (buttonType === "back" && activeIndex === 0) {
      console.log("true");
      return true;
    } else if (buttonType === "next" && activeIndex === 14) {
      return true;
    } else return false;
  };

  return (
    <div className="carousel">
      <h2 className="choice-name">{setText()}</h2>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          className="indicators-button"
          onClick={() => {
            updateIndex(activeIndex - 1);
            if (setPiece1) {
              setPiece1(activeIndex - 1);
            } else if (setPiece2) {
              setPiece2(activeIndex - 1);
            }
          }}
          disabled={disable("back")}
        >
          BACK
        </button>
        <button
          className="indicators-button"
          onClick={() => {
            updateIndex(activeIndex + 1);
            if (setPiece1) {
              setPiece1(activeIndex + 1);
            } else if (setPiece2) {
              setPiece2(activeIndex + 1);
            }
          }}
          disabled={disable("next")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Carousel;
