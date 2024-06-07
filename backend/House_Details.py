from pydantic import BaseModel


class House_Detail(BaseModel):
    size: str
    bath: str
    balcony: str
    total_sqft: str
    availability: str
    area_type: str
    location: str

    # {"size": str,
    # "bath": str,
    # "balcony": str,
    # "total_sqft": str,
    # "availability": str,
    # "area_type": str,
    # "location": str}