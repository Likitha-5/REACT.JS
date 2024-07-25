import { useState } from "react";
import Reg from "./details2";
import Login from "./login";
function Tab(){
    const [isLogin, setIsLogin]=useState(true);
    const showLogin=()=>{
        setIsLogin(true);
    }
    const showRegistered=()=>{
        setIsLogin(false);
    }
    return(
        <div>
            <button onClick={showLogin}>LOGIN</button>
            <button onClick={showRegistered}>REGISTER</button>
            {isLogin ?
                <Login />
                :
                <Reg/>
            }
        </div>
    );
}
export default Tab;