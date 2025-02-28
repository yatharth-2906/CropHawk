# -*- coding: utf-8 -*-
"""PUBLIC_API_OF_MODEL.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1t2HDl-PlQCSKGX6c_3MqrZqNfOzvjBke
"""

!pip install fastapi
!pip install uvicorn
!pip install pickle5
!pip install pydantic
!pip install scikit-learn
!pip install requests
!pip install pypi-json
!pip install pyngrok
!pip install nest-asyncio

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import uvicorn
from pyngrok import ngrok
from fastapi.middleware.cors import CORSMiddleware
import nest_asyncio

from google.colab import drive
drive.mount('/content/drive')

fertilizer_model = pickle.load(open('/content/drive/MyDrive/ML_MODELS/fertilizer_model.pkl', 'rb'))

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

class model_input(BaseModel):

    temperature : int
    humidity : int
    moisture : int
    soil_type : int
    crop_type : int
    nitrogen : int
    potassium : int
    phosphorous : int

@app.get("/")
def read_root():
    return {"message": "Swagat hai aapka CropHawk ki duniya mei :)"}

@app.post('/fertilizer_prediction')
async def fertilizer_predd(input_parameters : model_input):

    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)

    temperature = input_dictionary['temperature']
    humidity = input_dictionary['humidity']
    moisture = input_dictionary['moisture']
    soil_type = input_dictionary['soil_type']
    crop_type = input_dictionary['crop_type']
    nitrogen = input_dictionary['nitrogen']
    potassium = input_dictionary['potassium']
    phosphorous = input_dictionary['phosphorous']

    input_list = [temperature, humidity, moisture, soil_type, crop_type, nitrogen, potassium, phosphorous]

    prediction = fertilizer_model.predict([input_list])

    return {"prediction": prediction.tolist()}

ngrok.set_auth_token("2rIMkiAvhUo04tGj4mFGg4odv7N_4iwktTJkKoj6VxpWQyQLR")
ngrok_tunnel = ngrok.connect(8000)
print('Public URL:', ngrok_tunnel.public_url)
nest_asyncio.apply()
uvicorn.run(app, port=8000)