import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/CardList">Products</Link>
        </div>
    );
}

export default Navigation;