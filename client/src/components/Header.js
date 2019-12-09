import React from "react";
import { Link } from "react-router-dom";


const Header = () =>
    (
        <nav style={{ backgroundColor: "#ffb813" }}>
            <div className="nav-wrapper">
                <Link to={"/"} className="brand-logo" style={{ marginLeft: "25px", fontSize: 26 }}>Google Books Search</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={"/savedBooks"} style={{ fontSize: "30px", marginRight: 25 }}>Saved</Link></li>
                </ul>
            </div>
        </nav>

    )


export default Header
