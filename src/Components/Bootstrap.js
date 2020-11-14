import React from "react";
import GenericHeader from "./GenericHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BootstrapImg from "../assets/portfolio/bootstrap.PNG";

export default function Bootstrap() {
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
                        src={BootstrapImg}
                        alt="hotel reservation site"
                    />
                </div>

                <div className="wrapper">
                    <a
                        className="bannerBtn marginRigth"
                        target="blank"
                        href="https://khabibullosaydullaev.netlify.app/"
                    >
                        Site
                    </a>
                    <a
                        className="bannerBtn"
                        target="blank"
                        href="https://github.com/Bill0197/bootstrap-the-updated-one"
                    >
                        Code
                    </a>
                    <h6>tools used:</h6>
                    <p>1. bootstrap </p>
                    <p>2. bootstrap grid & flex</p>
                    <p>3. bootstrap maps </p>
                    <p>4. font-awesome icons</p>
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
