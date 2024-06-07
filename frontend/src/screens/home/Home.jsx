/* eslint-disable no-unused-vars */

import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import PostBanner from "../../components/PostBanner/PostBanner";
import WhyUs from "../../components/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-darkText text-darkText font-bodyFont">
        <Navbar />
        <Banner />
        <PostBanner />
        <WhyUs />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
}
