/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function PostBanner() {
  return (
    <section className="w-full flex justify-center items-center bg-darkText">
      <div className="w-full px-2 lg:px-0 lg:w-4/5 flex justify-center items-center -mt-6 lg:-mt-8">
        <div className="w-2/3 h-12 lg:h-16 px-2 lg:px-0 bg-white rounded-md flex justify-center items-center">
          <h3 className="text-xs lg:text-lg font-titleFont text-darkText text-center lg:text-left">
            Ready to unlock the potential of Bengaluru&apos;s real estate
            market?
          </h3>
        </div>
        <Link
          to="/price-predictor"
          className="w-1/3 h-12 lg:h-16 bg-secondaryColor rounded-md z-10 -ml-2 border border-bodyColor flex justify-center items-center cursor-pointer"
        >
          <p className="font-bold text-darkText text-xs lg:text-xl text-center lg:text-left">
            Get Started Today!
          </p>
        </Link>
      </div>
    </section>
  );
}
