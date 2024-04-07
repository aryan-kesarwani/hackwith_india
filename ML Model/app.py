import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
import seaborn as sns
from sklearn.model_selection import train_test_split
from keras.models import load_model
import pyrebase


config = {
  "apiKey": "AIzaSyBaRy-JGsezzQKbgovI6SDJfZawkXBWa30",
  "authDomain": "maggi-agro.firebaseapp.com",
  "databaseURL": "https://maggi-agro-default-rtdb.asia-southeast1.firebasedatabase.app",
  "projectId": "maggi-agro",
  "storageBucket": "maggi-agro.appspot.com",
  "messagingSenderId": "541790404357",
  "appId": "1:541790404357:web:b3c6679e883a3d655c016c"
};
firebase = pyrebase.initialize_app(config)
db = firebase.database()
data = db.child("ESP_RECIVER")

def predict():




    latest_child_ref = db.order_by_key().limit_to_last(1)
    latest_data = latest_child_ref.get().val()

    key = list(latest_data.keys())

    temp = latest_data[key[0]]['temperature']
    hum = float(latest_data[key[0]]['pressure'])/10
    co2 = latest_data[key[0]]['altitude']
    li = latest_data[key[0]]['light_intensity']
    ph = latest_data[key[0]]['pH']
    wl = latest_data[key[0]]['water_level']

    g_data = [5 , float(co2), float(temp), float(hum), float(li), float(ph), float(wl)]
    n_data = np.array([g_data])


    ann_Model=load_model('hackwithIndia.h5')
    dummy  = np.array([[7. , 343. ,  40.4,  11.4,  13. ,   6. ,  32.]])
    output = ann_Model.predict(n_data)
    if output >= 0.5:
        output =  1
    else:
        output = 0
    return output


    
o = predict()
print(o)
