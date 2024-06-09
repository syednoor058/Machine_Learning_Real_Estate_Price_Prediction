/* eslint-disable no-unused-vars */
import React from "react";
import { SiTicktick } from "react-icons/si";
import accuratePricePredictionImg from "../../assets/images/accurate_prediction.png";

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-20 bg-darkText px-5 lg:px-20">
      <div className="w-full flex items-center justify-center">
        <h4 className="text-base font-titleFont text-secondaryColor">
          WHY CHOOSE US?
        </h4>
      </div>
      <div className="pt-16 lg:pt-20">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3 flex flex-col gap-7 lg:justify-center lg:items-center">
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="text-sm flex flex-col gap-2 lg:text-base text-white">
                  <span className="font-bold text-bodyColor text-lg lg:text-2xl">
                    Accurate Predictions:
                  </span>{" "}
                  Leveraging cutting-edge machine learning algorithms, we offer
                  precise price predictions tailored to Bengaluru&apos;s dynamic
                  real estate market.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="flex flex-col gap-2 text-sm lg:text-base text-white">
                  <span className="font-bold text-bodyColor text-lg lg:text-2xl">
                    User-Friendly Interface:
                  </span>{" "}
                  Navigate effortlessly through our intuitive platform designed
                  for both novice buyers and seasoned investors.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="flex flex-col gap-2 text-sm lg:text-base text-white">
                  <span className="font-bold text-bodyColor text-lg lg:text-2xl">
                    Comprehensive Data:
                  </span>{" "}
                  Access a wealth of information including neighborhood trends,
                  property amenities, and historical price data to make the best
                  decisions.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="flex flex-col gap-2 text-sm lg:text-base text-white">
                  <span className="font-bold text-bodyColor text-lg lg:text-2xl">
                    Real-Time Updates:
                  </span>{" "}
                  Stay ahead with real-time updates and market forecasts to
                  ensure you never miss an opportunity.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img
              className="w-[250px] lg:w-[400px] h-auto"
              src={accuratePricePredictionImg}
              alt="accurate_image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
