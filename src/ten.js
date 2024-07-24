import {useEffect,useState} from "react";
function Ten(){
    //const count=0;
    const[count,setCount]=useState(1);
    //useState
    useEffect(()=>{
        setCount(1000);
        console.log("Use effect is called ")
    });
     const btnDecrement=()=>{
        setCount(count-1);
    }
    const btnIncrement=()=>{
        setCount(count+1);
    }
    return(
        <div style={{display:'flex'}}>
        <button className="btn btn-outline-dark btn-sm"
        onClick={btnDecrement}>-</button>
        <h1>{count}</h1>
        <button className="btn btn-outline-dark btn-sm"
        onClick={btnIncrement}>+</button>
        </div>
    );
}
export default Nine;