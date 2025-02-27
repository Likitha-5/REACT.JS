import { createContext, useState } from "react";
import { Link } from "react-router-dom"; 
import Welcome from "./Welcome";
import Tab from "./Tabs";

export const UserContext = createContext();
function Home(){
    const [isLogin, setIsLogin]=useState(false);
    return(
        <UserContext.Provider
        value={{isLogin, setIsLogin}}>
            <div>
                {
                    isLogin ? <Welcome/> : <Tab/>
                }
            </div>
        </UserContext.Provider>
    )
}
export default Home;