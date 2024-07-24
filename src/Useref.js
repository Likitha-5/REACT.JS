import {useRef} from "react";
function Ele(){
    const firstRef=useRef(null);//reference
    const formSubmitted=(event)=>{
        event.preventDefault();//to avoid refresh we use this
        console.log("Form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value="";
    }
    return(
        <div>
            <form>
            <input type="text" ref={firstRef}/> 
            <button type="submit">Submit</button>
            </form>

            
       </div>
    );
}
export default Ele;