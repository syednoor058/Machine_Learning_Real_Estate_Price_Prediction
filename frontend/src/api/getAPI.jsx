export const getLocations = async () => {
  const response = await fetch(
    "https://house-price-prediction-api-mxg2.onrender.com/get-location",
    {
      method: "GET",
    }
  );
  return response.json();
};

export const getAreaType = async () => {
  const response = await fetch(
    "https://house-price-prediction-api-mxg2.onrender.com/get-area-type",
    {
      method: "GET",
    }
  );
  return response.json();
};

export const getAvailability = async () => {
  const response = await fetch(
    "https://house-price-prediction-api-mxg2.onrender.com/get-availability",
    {
      method: "GET",
    }
  );
  return response.json();
};
