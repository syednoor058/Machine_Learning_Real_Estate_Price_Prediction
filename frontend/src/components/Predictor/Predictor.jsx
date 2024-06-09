/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAreaType, getAvailability, getLocations } from "../../api/getAPI";
import housePricePredictionImg from "../../assets/images/house_price_prediction.png";

export default function Predictor() {
  const [locations, setLocations] = useState([]);
  const [areaTypes, setAreaTypes] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [predictedPrice, setPredictedPrice] = useState("");
  // const [location, setLocation] = useState("");
  // const [areaType, setAreaType] = useState("");
  // const [availability, setAvailability] = useState("");

  const [houseInfo, setHouseInfo] = useState({
    size: "",
    bath: "",
    balcony: "",
    total_sqft: "",
    availability: "",
    area_type: "",
    location: "",
  });

  const onChange = (event) => {
    setHouseInfo({ ...houseInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://house-price-prediction-api-mxg2.onrender.com/house-price-prediction",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(houseInfo),
      }
    );

    if (response.ok) {
      console.log("Success");
    } else {
      console.log("Failed");
    }

    const data = await response.json();
    setPredictedPrice(data.predicted_price);
  };

  useEffect(() => {
    getLocations().then((data) => {
      setLocations(data["location"]);
    });
    getAreaType().then((data) => {
      setAreaTypes(data["area-type"]);
    });
    getAvailability().then((data) => {
      setAvailabilities(data["availability"]);
    });
  }, []);

  return (
    <section className="px-5 py-16 lg:p-20">
      <div className="flex flex-col gap-5 pb-20 justify-center items-center">
        <h2 className="font-titleFont font-bold text-lg lg:text-3xl text-accentColor text-center">
          House Price Predictor AI Tool
        </h2>
        <p className="text-sm lg:text-base text-darkText text-center">
          Start your journey with us today and transform the way you navigate
          Bengaluru&apos;s real estate market. Enter your property details and
          unlock the full potential of our prediction tool now!
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-10">
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <img
            className="w-[270px] lg:w-[350px] h-auto"
            src={housePricePredictionImg}
            alt="house_price_prediction_image"
          />
        </div>
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="w-full flex gap-5">
                <div className="w-1/2 flex flex-col gap-3 text-sm lg:text-base">
                  <p>House Size (BHK)</p>
                  <input
                    className="w-full border-2 border-secondaryColor rounded-sm px-5 py-2"
                    name="size"
                    value={houseInfo.size}
                    defaultValue="1"
                    placeholder="Example: 3"
                    onChange={onChange}
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-3 text-sm lg:text-base">
                  <p>Bathroom(s)</p>
                  <input
                    name="bath"
                    onChange={onChange}
                    value={houseInfo.bath}
                    defaultValue="1"
                    className="w-full border-2 border-secondaryColor rounded-sm px-5 py-2"
                    placeholder="Example: 2"
                  />
                </div>
              </div>
              <div className="w-full flex gap-5 text-sm lg:text-base">
                <div className="w-1/2 flex flex-col gap-3">
                  <p>Balcony(s)</p>
                  <input
                    name="balcony"
                    onChange={onChange}
                    value={houseInfo.balcony}
                    defaultValue="0"
                    className="w-full border-2 border-secondaryColor rounded-sm px-5 py-2"
                    placeholder="Example: 1"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-3 text-sm lg:text-base">
                  <p>Total Area (Sq. Feet)</p>
                  <input
                    name="total_sqft"
                    onChange={onChange}
                    value={houseInfo.total_sqft}
                    defaultValue={houseInfo.size * 450}
                    className="w-full border-2 border-secondaryColor rounded-sm px-5 py-2"
                    placeholder="Example: 1560"
                  />
                </div>
              </div>
              <div className="w-full flex gap-5 text-sm lg:text-base">
                <div className="w-1/2 flex flex-col gap-3">
                  <p>Availability</p>
                  <select
                    name="availability"
                    onChange={onChange}
                    className="w-full border-2 border-secondaryColor text-darkText rounded-sm px-5 py-2"
                    defaultValue="disabled"
                  >
                    <option key="disabled" value="disabled" disabled={true}>
                      Select house availability
                    </option>
                    {availabilities.map((opt) => {
                      return (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-1/2 flex flex-col gap-3 text-sm lg:text-base">
                  <p>Area Type</p>
                  <select
                    className="w-full border-2 border-secondaryColor text-darkText rounded-sm px-5 py-2"
                    name="area_type"
                    onChange={onChange}
                    defaultValue="disabled"
                  >
                    <option key="disabled" value="disabled" disabled={true}>
                      Select an area type
                    </option>
                    {areaTypes.map((opt) => {
                      return (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm lg:text-base">
                <p>Location</p>
                {/* <input
                  className="w-full border-2 border-secondaryColor rounded-sm px-5 py-2"
                  placeholder="Example: Central Rd Sadar"
                /> */}
                <select
                  className="w-full border-2 border-secondaryColor text-darkText rounded-sm px-5 py-2"
                  name="location"
                  onChange={onChange}
                  defaultValue="disabled"
                >
                  <option key="disabled" value="disabled" disabled={true}>
                    Select your prefered location
                  </option>
                  {locations.map((opt) => {
                    return (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-10 rounded-sm bg-secondaryColor text-sm lg:text-base"
                >
                  Predict Price
                </button>
              </div>
            </div>
          </form>
          <div className="pt-5">
            {predictedPrice && (
              <div className="w-full h-10 bg-darkText flex justify-center items-center rounded-sm">
                <p className="font-titleFont text-sm lg:text-base text-white">
                  Predicted Price:{" "}
                  <span className="text-base lg:text-xl text-secondaryColor pl-3">
                    {predictedPrice}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
