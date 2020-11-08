import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ offset }) {
    const [state, setState] = useState(false);

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        console.log(offset);
        if (window.pageYOffset > offset) {
            setState(true);
        } else {
            setState(false);
        }
    }

    return (
        <nav className={state ? "navbar-area navbar-fixed" : "navbar-area"}>
            <div className="navbar">
                <Link to="/">
                    <li className="navbar-brand">Saydullaev</li>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pages">PAGES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
