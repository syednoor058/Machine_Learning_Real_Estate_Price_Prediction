import json

import get_area_type
import get_availability
import get_locations
import pred_model
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from House_Details import House_Detail

app = FastAPI()

origins = [
    "https://house-price-prediction-five.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {"message": "Welcome to Shaed's House Price Prediction ML Project"}


@app.post("/house-price-prediction")
def house_price_prediction(data: House_Detail):
    data = data.model_dump_json()
    data_dict = json.loads(data)

    size = data_dict["size"]
    bath = data_dict["bath"]
    balcony = data_dict["balcony"]
    total_sqft = data_dict["total_sqft"]
    availability = data_dict["availability"]
    area_type = data_dict["area_type"]
    location = data_dict["location"]

    predicted_price = str(int(pred_model.predict_house_price(size, bath, balcony, total_sqft, availability, area_type, location)*100000))
    price = []

    for i in range(1, len(predicted_price)+1):
        price.append(predicted_price[-i])
        if i%3 == 0:
            if i+1 < len(predicted_price)+1:
                price.append(",")
    price.reverse()
    predicted_price = ("").join(price)

    return {"predicted_price": predicted_price +" ₹"}
    


@app.get("/get-location")
def get_location():
    locations = get_locations.get_location_array()
    return {"location": locations}


@app.get("/get-area-type")
def get_area_type_api():
    area_type = get_area_type.get_area_type_array()
    return {"area-type": area_type}


@app.get("/get-availability")
def availability_api():
    availability = get_availability.get_availability_array()
    return {"availability": availability}