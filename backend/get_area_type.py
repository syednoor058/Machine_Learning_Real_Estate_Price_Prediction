import pandas as pd

df = pd.read_csv("./data/Bengaluru_House_Data.csv")

def get_area_type_array():
    area_type = sorted(df["area_type"].unique())
    return area_type