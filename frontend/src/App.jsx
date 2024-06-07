/* eslint-disable no-unused-vars */
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Pricepredictor from "./screens/price-predictor/Pricepredictor";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/price-predictor" element={<Pricepredictor />} />
        </Routes>
      </div>
    </Router>
  );
}
