import React from "react";
import myPic from "../assets/hojibobo-removebg.png";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import Portfolio from "../Components/Portfolio";
import Pdf from "../assets/resume.pdf";

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
                        Discover More
                    </Link>
                    <a
                        className="ml-1 px-3 mt-2 px-1 bannerBtn"
                        href={Pdf}
                        download="resume.pdf"
                    >
                        Download CV
                    </a>
                </div>
            </section>
            <About display="true" />
            <Portfolio display="true" />
            <Contact display="true" />
            <Footer />
        </>
    );
}
