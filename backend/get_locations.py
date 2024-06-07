import pandas as pd

df = pd.read_csv("./data/Bengaluru_House_Data.csv")

def get_location_array():

    location_value_count = df['location'].value_counts()
    location_get_20 = location_value_count[location_value_count>=20].index
    location_get_20
    df['location'] = df['location'].apply(lambda x: x if x in location_get_20 else "Others")
    location_array = sorted(df["location"].unique())

    return location_array