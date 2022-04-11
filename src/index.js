import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ChoosePieces from "./Components/SetupPages/ChoosePieces";
import Landing from "./Components/SetupPages/Landing";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/choosepieces" element={<ChoosePieces />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
