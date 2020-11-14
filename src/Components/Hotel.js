import React from "react";
import GenericHeader from "./GenericHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HotelImg from "../assets/portfolio/hotel.PNG";

export default function Hotel() {
    return (
        <>
            <GenericHeader
                title="PORTFOLIO"
                page="Portfolio &#10132; Project Details "
            />
            <div className="linkWrapper">
                <div>
                    <img
                        className="imgPortf"
                        src={HotelImg}
                        alt="hotel reservation site"
                    />
                </div>

                <div className="wrapper">
                    <a
                        className="bannerBtn marginRigth"
                        target="blank"
                        href="https://bill-hotel-site.netlify.app/"
                    >
                        Site
                    </a>
                    <a
                        className="bannerBtn"
                        target="blank"
                        href="https://github.com/Bill0197/hotel-reservation"
                    >
                        Code
                    </a>
                    <h6>tools used:</h6>
                    <p>1. react-router-dom</p>
                    <p>2. styled-components</p>
                    <p>3. context api</p>
                    <p>4. prop-types</p>
                </div>
            </div>
            <div className="fullWidth">
                <Link to="/portfolio" className="center bannerBtn">
                    back to portfolio
                </Link>
            </div>
            <div className="fullWidth">
                <Link to="/" className="center bannerBtn">
                    Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
}
