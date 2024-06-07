/* eslint-disable no-unused-vars */
import React from "react";
import {
  TbHexagonNumber1Filled,
  TbHexagonNumber2Filled,
  TbHexagonNumber3Filled,
  TbHexagonNumber4Filled,
} from "react-icons/tb";
import howItWorks from "../../assets/images/how_it_works.png";

export default function HowItWorks() {
  return (
    <section className="p-16 lg:py-20 px-5 lg:px-20">
      <div className="w-full flex items-center justify-center">
        <h4 className="text-base font-titleFont text-darkText">
          HOW IT WORKS?
        </h4>
      </div>
      <div className="pt-16 lg:pt-20 flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <img
            className="w-[250px] lg:w-[350px] h-auto"
            src={howItWorks}
            alt="ai_bots_img"
          />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col gap-7 lg:justify-center lg:items-center">
          <div className="flex gap-3">
            <div className="text-2xl lg:text-4xl text-secondaryColor">
              <TbHexagonNumber1Filled />
            </div>
            <div>
              <p className="text-sm lg:text-base flex flex-col gap-2 text-darkText">
                <span className="text-accentColor text-lg lg:text-2xl font-bold">
                  Enter Property Details:
                </span>{" "}
                Input key information about the property such as location, size,
                and features. Specify the exact location or area within
                Bengaluru. Choose between apartment, villa, or independent
                house. Enter the total built-up area in square feet. Help us
                understand the configuration of your property.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-2xl lg:text-4xl text-secondaryColor">
              <TbHexagonNumber2Filled />
            </div>
            <div>
              <p className="text-sm lg:text-base flex flex-col gap-2 text-darkText">
                <span className="text-accentColor text-lg lg:text-2xl font-bold">
                  Get Instant Estimate:
                </span>{" "}
                Once you&apos;ve entered the property details, our advanced
                machine learning model gets to work. Using a vast dataset of
                real estate transactions, market trends, and socio-economic
                factors, the model generates a highly accurate price prediction
                within seconds.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-2xl lg:text-4xl text-secondaryColor">
              <TbHexagonNumber3Filled />
            </div>
            <div>
              <p className="text-sm lg:text-base flex flex-col gap-2 text-darkText">
                <span className="text-accentColor text-lg lg:text-2xl font-bold">
                  Explore Market Insights:
                </span>{" "}
                Dive deeper into detailed market analytics and trends specific
                to Bengaluru. Understand the average prices, trends, and future
                projections for specific areas within Bengaluru. Review past
                price trends to see how the market has evolved over time.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-2xl lg:text-4xl text-secondaryColor">
              <TbHexagonNumber4Filled />
            </div>
            <div>
              <p className="text-sm lg:text-base flex flex-col gap-2 text-darkText">
                <span className="text-accentColor text-lg lg:text-2xl font-bold">
                  Make Informed Decisions:
                </span>{" "}
                Armed with accurate price predictions and detailed market
                insights, you can confidently make decisions whether you&apos;re
                buying, selling, or investing. Our platform equips you with the
                knowledge to use the price estimate to negotiate with buyers or
                sellers effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
