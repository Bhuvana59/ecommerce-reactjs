import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({cartItems}) {
    return <nav className="navbar row">
            <div className="col-0 col-md-1">
                <div className="navbar-brand">
                <Link to="/"> <img width="150px" src="" /></Link>
                </div>
            </div>

            <div className="col-12 col-md-7 mt-2 mt-md-0">
              <Search/>
            </div>
            <div className="col-2 col-md-1 mt-4 mt-md-0 ">
            <Link to={"/"}>
                <span id="cart">Home</span>
                </Link>
            </div>

            <div className="col-2 col-md-1 mt-4 mt-md-0 ">
                
                <Link to={"/cart"}>
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
            </div>
        </nav>
}