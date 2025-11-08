
"use client"
import React from "react";
import { useState } from "react";
export default function Bot(){
    const [arrays,setArrays]= useState("");
    const [heaps,setHeaps]=useState("")
    const [graphs,setGraphs]=useState("");
    const [dp,setDp]=useState("");
    const predictProb=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!arrays||!heaps||!graphs||!dp){
            alert("Fill All Fields")
            return;
        }
        console.log(arrays,heaps,graphs,dp);
        setArrays(" ")
        setHeaps(" ")
        setGraphs(" ")
        setDp(" ")
    }
    return(
        <div>
            <h1>Predict your possibility of getting placed</h1>
            <form onSubmit={predictProb}>
                <input
                className="text-black"
                placeholder="arrays"
                value={arrays}
                type="number"
                onChange={(e)=>{setArrays(e.target.value)}}
                />
                <input placeholder="heaps"
                type="number"
                value={heaps}
                onChange={(e)=>{setHeaps(e.target.value)}}

                
                />
                <input placeholder="graphs"
                type="number"
                value={graphs}
                onChange={(e)=>{setGraphs(e.target.value)}}
                />
                <input placeholder="dynamic programming"
                required 
                type="number"
                value={dp}
                onChange={(e)=>{setDp(e.target.value)}}
                />
                <button type="submit">Predict</button>
                

            </form>
        </div>
    );
}