import { useRef,useState } from "react"

function Practice()
{
    const inputref=useRef(null);
    const[data,setData]=useState([]);
    return(
        <div>
            <input type="text" ref={inputref}/>
            <br/>

            <button onClick={()=>{setData(...data,inputref.current.value)}}>Submit</button>
            {data.map((item,index)=>{return<h2 key={index}>item</h2>})}

        </div>
    );
}
export default Practice;