import {useState} from "react";
function Details(){
    const [collegeIdvalue, setCollegeId]=useState('');
    const [passwordValue, setPassword]=useState('');
    const [email,setmail]=useState('');
    const [branch,setBranch]=useState('');
    const [year,setYear]=useState('');
    const [gender,setGender]=useState('');

    const getclg=(event)=>{
        setCollegeId(event.target.value)
        console.log(collegeIdvalue);
    }
    const pass=(event)=>{
        setPassword(event.target.value)
        console.log(passwordValue);
    }
    const mail=(event)=>{
        setmail(event.target.value)
        console.log(email);
    }
    const gbranch=(event)=>{
        setbranch(event.target.value);
        console.log(branch);
    }
    const gyear=(event)=>{
        setyear(event.target.value);
            console.log(year);
    }
    const lgender=(event)=>{
        setGender(event.target.value);
        console.log(gender);
    }
    const submitData=()=>{
        const obj={
            collegeIdvalue,passwordValue,email,branch,year,gender
        }
        console.log(obj);
    }
    return(
        <div className="contaniner" align="centre" >
        <div className="card" style={{width:"300px,padding;'20px"}}>
        <h1>Register</h1>
        <p>Provide your details</p>
        <form onSubmit={formSubmit}
        style={{width:'250px',display:'flex',flexDirection:'column'}}>
        <h2>college id</h2>
        <input type="text"onChange={getclg} placeholder="enter college id"/>
        <br/>
        <h2>Password</h2>
        <input type="password"onChange={pass} placeholder="enter Password"/>
        <br/>
        <h2>Email Address</h2>
        <input type="text"onChange={mail} placeholder="enter email"/>
        <br/>
        <h2>Branch</h2>
        <select className="form-select" value={branch} onChange={gbranch} aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">AIDS</option>
        <option value="2">CSE</option>
        <option value="3">IT</option>
        </select>
        <h2>Year</h2>
        <select class="form-select"onChange={gyear} aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
        <h2>Gender</h2>
        <
        <div>
        <input type="radio"checked="true"value="Female"onChange={lgender}></input>Female
        <input type="radio"checked="true"value="Male"onChange={lgender}></input>Male
        <input type="radio"checked="true"value="Transgender"onChange={lgender}></input>Transgender
        <button></button>
        </div>
        <br/>
        <br/>
        <button type="submit" className="btn btn-dark" align="right"></button>
        </form>
        </div>
        </div>
    );
}
export default Details;
