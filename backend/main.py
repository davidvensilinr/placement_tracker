from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

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
    data = await request.json()
    print(data)
    return {"message":"something"}