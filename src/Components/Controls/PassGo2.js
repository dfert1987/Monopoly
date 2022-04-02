import React, { useEffect } from "react";
import "../../Components/Styles/Controls.css";

export const PassGo2 = ({ pass2, setPass2 }) => {
  useEffect(() => {
    if (pass2) {
      setTimeout(() => {
        setPass2(false);
      }, 1500);
    }
  }, [pass2, setPass2]);
  return <>{pass2 ? <div className="pass-container">POOP</div> : null}</>;
};

export default PassGo2;
