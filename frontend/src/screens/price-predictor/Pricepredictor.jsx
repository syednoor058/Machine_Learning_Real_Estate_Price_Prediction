/* eslint-disable no-unused-vars */
import React from "react";
import ExpDifference from "../../components/ExpDif/ExpDifference";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Predictor from "../../components/Predictor/Predictor";
import PricePredictorBanner from "../../components/PricePredictorBanner/PricePredictorBanner";

export default function Pricepredictor() {
  return (
    <div className="w-full h-screen text-darkText font-bodyFont">
      <Navbar />
      <PricePredictorBanner />
      <Predictor />
      <ExpDifference />
      <Footer />
    </div>
  );
}
