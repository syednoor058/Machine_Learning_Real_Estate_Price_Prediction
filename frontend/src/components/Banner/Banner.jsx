/* eslint-disable no-unused-vars */
import React from "react";
import bannerHouseImg from "../../assets/images/banner_house.png";

export default function Banner() {
  return (
    <section className="w-full bg-accentColor text-bodyColor font-bodyFont flex flex-col pt-10 pb-16 px-5 justify-center items-center lg:flex-row lg:px-10 gap-10 lg:gap-5">
      <div className="w-full h-full lg:w-3/5 flex flex-col gap-7 lg:gap-10 justify-center">
        <div className="flex flex-col gap-3 lg:gap-5">
          <h1 className="font-titleFont text-secondaryColor text-3xl text-center lg:text-left lg:text-5xl font-bold">
            Unlock the Future of Bengaluru Real Estate with Accurate{" "}
            <span className="text-darkText">Price Predictions</span>
          </h1>
          <h2 className="text-xl text-center lg:text-2xl lg:text-left text-gray-300">
            Your Smart Guide to Buying and Selling Homes
          </h2>
        </div>
        <div>
          <p className="text-sm text-center lg:text-base lg:text-left text-bodyColor">
            Welcome to Bengaluru&apos;s Premier House Price Prediction Tool!
            Whether you&apos;re buying your first home, selling an existing
            property, or investing in the booming Bengaluru real estate market,
            our advanced machine learning model provides you with the most
            accurate price predictions. Our platform helps you make informed
            decisions with confidence.
          </p>
        </div>
      </div>
      <div className="w-full h-full lg:w-2/5 lg:pl-10 flex justify-center items-center">
        <img
          className="w-[400px] h-auto"
          src={bannerHouseImg}
          alt="banner_house_image"
        />
      </div>
    </section>
  );
}
