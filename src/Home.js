const UserContent=createContext();
function Home(){
    const [isLogin, setIsLogin]=useState(false);
    return(
        <UserContent.Provider
        value={{isLogin, setIsLogin}}>
        <div>
            {
                isLogin?
            <div>
            <h1>WELCOME HOME PAGE</h1>
        <Link to="/products">WE</Link>
            </div>
            </div>
    );
}
export default Home;
