import React from "react";
import reactLogo from "./images/react_logo.png"

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <img className="logo-img" src={reactLogo} alt="React Logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;