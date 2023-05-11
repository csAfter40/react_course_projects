import React from "react";

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <img className="logo-img" src="./react_logo.png" alt="React Logo"/>
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