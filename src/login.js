import { useRef,useState,useEffect} from "react";
function Login(){
    const firstref=useRef(null);
    const firstrefs=useRef(null);
    const [loginpage, setMessage]=useState('');
     useEffect(()=>{
        firstref.current.focus();
    });
    const form=(event)=>{
        event.preventDefault();//to avoid refresh we use this
        console.log("Form Submitted");

        if(firstref.current.value==firstrefs.current.value)
        {
            //console.log("correct");
            setMessage("Correct");
        }
        else{
            //console.log("incorrect")
            setMessage("Incorrect");
        }


    }
    return(
        <div className="container"align="center">
        <div className="card"style={{width:'500px'}}>
            <form onSubmit={form}
            style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <h1>Login details</h1>
            <p>provide the details</p>
            <h2 align="left">Name</h2>
            <input type="text" placeholder="enter the name"ref={firstref}/>
            <h2 align="left">Password</h2>
            <input type="password" placeholder="enter password"ref={firstrefs}/>
            <br/>
            <br/>
            <button>Submit</button>
            </form>
            <h1>{loginpage}</h1>
        </div>
        </div>
    );
}
export default Login;