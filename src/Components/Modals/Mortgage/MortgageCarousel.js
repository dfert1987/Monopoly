import React from "react";
import useSound from "use-sound";
import Choose from "../../../Assets/Sounds/choose.mp3";

export const MortgageItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const MortgageCarousel = ({
  children,
  setMortgageProp,
  mortgageable,
  activeIndex,
  setActiveIndex,
  mortgageable2,
}) => {
  const [choose] = useSound(Choose);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
    choose();
  };

  const disable = (buttonType) => {
    if (buttonType === "back" && activeIndex === 0) {
      return true;
    } else if (
      mortgageable &&
      buttonType === "next" &&
      activeIndex === mortgageable.length - 1
    ) {
      return true;
    } else if (
      mortgageable2 &&
      buttonType === "next" &&
      activeIndex === mortgageable2.length - 1
    ) {
      return true;
    } else return false;
  };

  return (
    <div className="carousel">
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
            if (setMortgageProp) {
              setMortgageProp(activeIndex - 1);
            }
            return null;
          }}
          disabled={disable("back")}
        >
          BACK
        </button>
        <button
          className="indicators-button"
          onClick={() => {
            updateIndex(activeIndex + 1);
            if (setMortgageProp) {
              setMortgageProp(activeIndex + 1);
            }
            return null;
          }}
          disabled={disable("next")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default MortgageCarousel;
