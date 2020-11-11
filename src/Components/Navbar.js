import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavIcon, Wrapper } from "../Styles/Styles";

export default function Navbar({ offset }) {
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setTimeout(() => setShow(!show), 120);
        clearTimeout();
    };

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        if (window.pageYOffset > offset) {
            setState(true);
        } else {
            setState(false);
        }
    }
    // useEffect(() => {
    //     const reff = document.getElementById("inputref");
    //     const toggle = document.querySelector(".toggle");
    //     reff.onclick = () => {
    //         if (reff.hasChildNodes(toggle)) {
    //             if (show) {
    //                 setShow(!show);
    //             }
    //         } else {
    //             if (!show) {
    //                 setShow(show);
    //             }
    //         }
    //     };
    // }, []);
    return (
        <nav className={state ? "navbar-area navbar-fixed" : "navbar-area"}>
            <Link to="/">
                <li className="navbar-brand">Saydullaev</li>
            </Link>
            <div className="navbar">
                <ul
                    className="navbar-nav"
                    style={{
                        transition: "display .3s linear",
                        display:
                            show && window.innerWidth < 930 ? "none" : "flex",
                    }}
                    ref={(node) => {
                        node = node;
                    }}
                >
                    <li className="nav-item">
                        <Link className="nav-item" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/services">
                            SERVICES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/pages">
                            PAGES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/blog">
                            BLOG
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div className="toggle">
                    <Wrapper>
                        <NavIcon onClick={handleClick} id="toggleIcon" />
                    </Wrapper>
                </div>
            </div>
        </nav>
    );
}
