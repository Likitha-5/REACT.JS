import { useState } from "react";
import React from "react";
 export function Assign(){
    const[array,setArray]=useState([])
    const[review,setReview]=useState('');
     const valueChange = (event)=>{
        setReview(event.target.value);
     }
     const addReview =()=>{
       setArray([...array,review]);
       console.log(array);
     }
    return(
        <div>
         
        <input type="text" onChange={valueChange}></input>
        <button onClick={addReview}>Add Review</button>
        <div>
           {array.map((item)=>(
                <h1>{item}</h1>
           ))}
        </div>
        </div>
    )
 }