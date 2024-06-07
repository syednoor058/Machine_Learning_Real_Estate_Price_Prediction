/* eslint-disable no-unused-vars */
import React from "react";
import logoImg from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <section className="px-2 pt-10 lg:px-10 bg-accentColor">
      <div className="pb-10 flex flex-col lg:flex-row gap-10 lg:gap-24">
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <img className="w-auto" src={logoImg} alt="logo_image" />
        </div>
        <div className="w-full lg:w-3/5 flex gap-10 px-8 lg:px-0">
          <div className="w-1/2 flex flex-col gap-3 lg:gap-5">
            <h6 className="text-sm lg:text-base font-titleFont font-bold">
              Quick Links
            </h6>
            <ul className="flex flex-col gap-3 text-bodyColor">
              <li className="text-sm lg:text-base cursor-pointer">Home</li>
              <li className="text-sm lg:text-base cursor-pointer">
                Project Details
              </li>
              <li className="text-sm lg:text-base cursor-pointer">
                Documentation
              </li>
              <li className="text-sm lg:text-base cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col gap-3 lg:gap-5">
            <h6 className="text-sm lg:text-base font-titleFont font-bold">
              Developer Info
            </h6>
            <ul className="flex flex-col gap-3 text-bodyColor">
              <li className="text-sm lg:text-base cursor-pointer">About</li>
              <li className="text-sm lg:text-base cursor-pointer">
                Educational Background
              </li>
              <li className="text-sm lg:text-base cursor-pointer">
                Experiences
              </li>
              <li className="text-sm lg:text-base cursor-pointer">
                Other Projects
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-2 lg:px-0">
        <div className="h-0.5 bg-white opacity-25"></div>
      </div>
      <div className="flex justify-center items-center px-5 lg:px-0 py-3">
        <h5 className="text-xs lg:text-base text-darkText text-center">
          © 2024. All rights reserved by Syed Shaeduzzaman Noor
        </h5>
      </div>
    </section>
  );
}
