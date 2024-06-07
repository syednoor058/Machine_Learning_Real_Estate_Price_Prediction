export const getLocations = async () => {
  const response = await fetch("http://127.0.0.1:8000/get-location", {
    method: "GET",
  });
  return response.json();
};

export const getAreaType = async () => {
  const response = await fetch("http://127.0.0.1:8000/get-area-type", {
    method: "GET",
  });
  return response.json();
};

export const getAvailability = async () => {
  const response = await fetch("http://127.0.0.1:8000/get-availability", {
    method: "GET",
  });
  return response.json();
};
