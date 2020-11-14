import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavIcon, Wrapper } from "../Styles/Styles";

export default function Navbar({ offset }) {
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);

    const handleClick = ({ target }) => {
        let icon = document.getElementById("toggleIcon");
        console.log(icon.children);
        setTimeout(() => {
            if (target === icon || icon.hasChildNodes) {
                setShow(!show);
                clearTimeout();
            } else {
                setShow(true);
            }
        }, 120);
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
    useEffect(() => {
        const reff = document.getElementById("inputref");
        const toggle = document.querySelector(".toggle");
        let inputRef = document.querySelector("#inputref");
        inputRef.addEventListener("click", handleClick);
        reff.onclick = () => {
            if (reff.hasChildNodes(toggle)) {
                if (show) {
                    setShow(!show);
                }
            } else {
                if (!show) {
                    setShow(show);
                }
            }
        };
    }, []);
    return (
        <nav className={state ? "navbarArea navbarFixed" : "navbarArea"}>
            <Link to="/">
                <li className="navbar-brand">Saydullaev</li>
            </Link>
            <ul
                className="navbarNav"
                style={{
                    transition: "display .3s linear",
                    display: show && window.innerWidth < 930 ? "none" : "flex",
                }}
                ref={(node) => {
                    node = node;
                }}
            >
                <li className="navItem">
                    <Link className="navItem" to="/">
                        Home
                    </Link>
                </li>
                <li className="navItem">
                    <Link className="navItem" to="/about">
                        ABOUT
                    </Link>
                </li>
                <li className="navItem">
                    <Link className="navItem" to="/services">
                        SERVICES
                    </Link>
                </li>
                <li className="navItem" id="pagesHover">
                    <Link className="navItem" to="/portfolio">
                        PORTFOLIO
                    </Link>
                </li>
                <li className="navItem">
                    <Link className="navItem" to="/contact">
                        CONTACT
                    </Link>
                </li>
            </ul>
            <div className="toggle">
                <Wrapper>
                    <NavIcon onClick={handleClick} id="toggleIcon" />
                </Wrapper>
            </div>
        </nav>
    );
}
