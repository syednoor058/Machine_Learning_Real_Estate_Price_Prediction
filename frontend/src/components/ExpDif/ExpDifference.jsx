/* eslint-disable no-unused-vars */
import React from "react";
import { SiTicktick } from "react-icons/si";
import accuratePricePredictionImg from "../../assets/images/accurate_prediction.png";

export default function ExpDifference() {
  return (
    <section className="px-5 py-16 lg:px-20 lg:py-20  text-darkText">
      <div className="w-full flex items-center justify-center">
        <h4 className="text-base font-titleFont text-darkText">
          Experience the Difference
        </h4>
      </div>
      <div className="pt-10">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3 flex flex-col gap-7 lg:justify-center lg:items-center">
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="flex flex-col gap-2 text-sm lg:text-base">
                  <span className="font-bold text-lg lg:text-2xl">
                    Accuracy:
                  </span>{" "}
                  Our predictions are backed by rigorous data analysis and
                  state-of-the-art machine learning techniques.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="flex flex-col gap-2 text-sm lg:text-base">
                  <span className="font-bold  text-lg lg:text-2xl">
                    Simplicity:
                  </span>{" "}
                  User-friendly interface making complex data easily
                  understandable.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-accentColor text-lg lg:text-2xl pt-1">
                <SiTicktick />
              </div>
              <div>
                <p className="flex flex-col gap-2 text-sm lg:text-base">
                  <span className="font-bold  text-lg lg:text-2xl">
                    Reliability:
                  </span>{" "}
                  Depend on real-time data and consistent updates for the most
                  current market insights.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img
              className="w-[250px] lg:w-[300px] h-auto"
              src={accuratePricePredictionImg}
              alt="accurate_image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
