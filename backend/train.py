from sklearn.linear_model import LogisticRegression
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score,classification_report
import pickle

df=pd.read_csv("dataset/dsa_placement_dataset.csv")

X,y=df[["Arrays","Heaps","Graphs","DynamicProgramming"]],df["Probability_of_Placement"]
X_train,X_test,y_train,y_test=train_test_split(X,y,random_state=42,test_size=0.2)
model=LogisticRegression()
model.fit(X_train,y_train)
print(accuracy_score(y_test,model.predict(X_test)))

with open("model.pkl","wb") as f:
    pickle.dump(model,f)
print(model.predict_proba([[1,27,7,15]]))
print("model is successfully trained")
