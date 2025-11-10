
"use client"
import React from "react";
import { useState } from "react";
export default function Bot(){
    const [arrays,setArrays]= useState("");
    const [heaps,setHeaps]=useState("")
    const [graphs,setGraphs]=useState("");
    const [dp,setDp]=useState("");
    const [loading,setLoading]=useState(false);
    const [prediction,setPrediction]=useState("");
    const predictProb= async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!arrays||!heaps||!graphs||!dp){
            alert("Fill All Fields")
            return;
        }
        const array={
            arrays,
            heaps,
            graphs,
            dp,
        };
        setLoading(true);
        try{
            const res= await fetch("http://localhost:8000/predict",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(array),
            });
            const data = await res.json();
            console.log(data);
            if(res.ok){
                console.log(data["Prediction"])
                setPrediction(data["Prediction"])
            }
        }
        catch(err){
            console.log(err);
        }
        console.log(arrays,heaps,graphs,dp);
        setArrays(" ")
        setHeaps(" ")
        setGraphs(" ")
        setDp(" ")
        setLoading(false);
    }
    return(
        <div>
            <h1 className="text-center text-3xl font-sans p-4">Predict your possibility of getting placed</h1>
            <form onSubmit={predictProb}>
                <input
                className="w-1/2 p-4"
                placeholder="arrays"
                value={arrays}
                type="number"
                onChange={(e)=>{setArrays(e.target.value)}}
                />
                <input placeholder="heaps"
                className="w-1/2 p-4"
                type="number"
                value={heaps}
                onChange={(e)=>{setHeaps(e.target.value)}}

                
                />
                <input placeholder="graphs"
                type="number"
                value={graphs}
                className="w-1/2 p-4"
                onChange={(e)=>{setGraphs(e.target.value)}}
                />
                <input placeholder="dynamic programming"
                required 
                type="number"
                className="w-1/2 p-4"
                value={dp}
                onChange={(e)=>{setDp(e.target.value)}}
                />
                <button className="w-full p-4 font-sans text-2xl bg-amber-400 text-black hover:bg-teal-300"
                disabled={loading}
                type="submit">{loading?"predicting":"predict"}</button>
                

            </form>
            <h1 className="text-sans text-2xl p-4 text-center text-green-400">You are <span className="text-black">{prediction} % getting placed</span></h1>
        </div>
    );
}