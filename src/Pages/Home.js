import React from "react";
import myPic from "../assets/hojibobo-removebg.png";
import { Link } from "react-router-dom";
import About from "./About";

export default function Home() {
    return (
        <>
            <section id="Home" className="Home">
                <div>
                    <img className="imgContainer" src={myPic} alt="my pic" />
                </div>
                <div className="aboutPartTwo">
                    <p>This is me</p>
                    <h1>
                        SAYDULLAEV <br /> KHABIBULLO
                    </h1>
                    <p>Passionate Front-End Web Developer</p>

                    <Link to="/about" className="center bannerBtn">
                        discover more
                    </Link>
                </div>
            </section>
            <About display="true" />
        </>
    );
}
