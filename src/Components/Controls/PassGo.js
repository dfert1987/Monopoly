import React, { useEffect } from "react";
import "../../Components/Styles/Controls.css";

export const PassGo = ({ pass, setPass }) => {
  useEffect(() => {
    if (pass) {
      setTimeout(() => {
        setPass(false);
      }, 1500);
    }
  }, [pass, setPass]);
  return <>{pass ? <div className="pass-container">POOP</div> : null}</>;
};

export default PassGo;
