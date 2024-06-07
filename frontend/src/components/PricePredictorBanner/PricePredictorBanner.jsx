/* eslint-disable no-unused-vars */
import React from "react";
import howItWorks from "../../assets/images/how_it_works.png";

export default function PricePredictorBanner() {
  return (
    <section className="px-5 py-16 lg:p-20 bg-darkText">
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-5">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5">
            <h1 className="font-titleFont text-secondaryColor text-xl lg:text-4xl font-bold text-center lg:text-left">
              Discover the Future of Real Estate in Bengaluru
            </h1>
            <p className="text-sm lg:text-base text-white text-center lg:text-left">
              With our innovative tool, you&apos;re not just getting a price
              estimate—you&apos;re gaining a comprehensive understanding of the
              market, empowering you to make smarter, data-driven decisions.
              Whether you&apos;re a first-time homebuyer, a seller looking to
              maximize your returns, or an investor seeking lucrative
              opportunities, our platform is designed to meet your needs.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <img className="w-auto h-[200px] lg:h-[300px]" src={howItWorks} />
        </div>
      </div>
    </section>
  );
}
