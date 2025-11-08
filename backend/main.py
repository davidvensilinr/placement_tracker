from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pickle
import pandas as pd
app=FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=["http://localhost:3000"],
allow_credentials=True,
allow_methods=['*'],
allow_headers=['*']
)

@app.post('/predict')
async def predict(request:Request):
    try:
        data = await request.json()
        print(data)
        array = pd.DataFrame([[data["arrays"], data["heaps"], data["graphs"], data["dp"]]],
                     columns=["Arrays", "Heaps", "Graphs", "DynamicProgramming"])
        print(array)
        with open("model.pkl","rb") as f:
            model=pickle.load(f)
        print(model.predict_proba(array)[0][1]*100)
        prediction=round(model.predict_proba(array)[0][1]*100,2)
        return {"Prediction":prediction,"status":"success"}
    except Exception as e:
        print(e)
    return {"status":"failed"}
    