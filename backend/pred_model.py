import joblib
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("./data/ohe_clean_bengaluru_house_data.csv")

#Train dataset and test dataset
X = df.drop(["price_per_sqft", "price"], axis=1)
y = df['price']

#train-test-split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 64)

#Feature scaling
sc = StandardScaler()
sc.fit(X_train)
X_train= sc.transform(X_train)
X_test = sc.transform(X_test)

#load machine learning model

prediction_model = joblib.load(open("./model/bangalore_house_price_prediction_rfr_model.pkl", "rb"))

def predict_house_price(size, bath, balcony, clean_total_sqft, availability, area_type, location):

  x =np.zeros(len(X.columns)) # create zero numpy array, len = 107 as input value for model

  # adding feature's value according to their column index
  x[0]=size
  x[1]=bath
  x[2]=balcony

  x[3]=clean_total_sqft

  if availability == "Ready To Move":
    x[8]=1

  if 'area_type'+area_type in X.columns:
    area_type_index = np.where(X.columns=="area_type"+area_type)[0][0]
    x[area_type_index] =1

  if 'location_'+location in X.columns:
    loc_index = np.where(X.columns=="location_"+location)[0][0]
    x[loc_index] =1

  # feature scaling
  x = sc.transform([x])[0] # give 2d np array for feature scaling and get 1d scaled np array

  return prediction_model.predict([x])[0]