// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-10 lg:h-16 sticky top-0 z-50 font-titleFont bg-accentColor text-secondaryColor mx-auto px-2 flex justify-between items-center lg:px-10">
        <div>
          <img className="w-auto h-8 lg:h-16" src={logoImg} alt="logo_image" />
        </div>
        <div>
          <ul className="inline-flex gap-3 lg:gap-10">
            <li className="text-xs lg:text-base font-normal text-white tracking-wide cursor-pointer hover:text-secondaryColor duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xs lg:text-base font-normal text-white tracking-wide cursor-pointer hover:text-secondaryColor duration-300">
              Project Details
            </li>
            <li className="text-xs lg:text-base font-normal text-white tracking-wide cursor-pointer hover:text-secondaryColor duration-300">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <Link
            className="text-xs lg:text-base text-darkText bg-secondaryColor px-2 lg:px-10 py-1 lg:py-3 rounded-md cursor-pointer"
            to="/price-predictor"
          >
            Predict Price
          </Link>
        </div>
      </div>
    </>
  );
}
