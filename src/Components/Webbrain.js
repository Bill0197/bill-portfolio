import React from "react";
import GenericHeader from "./GenericHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import WebbrainImg from "../assets/portfolio/webbrain.PNG";

export default function Webbrain() {
    return (
        <>
            <GenericHeader
                title="PORTFOLIO"
                page="Portfolio &#10132; Project Details "
            />
            <div className="linkWrapper">
                <div>
                    <img
                        className="biggerImgForWbba"
                        src={WebbrainImg}
                        alt="hotel reservation site"
                    />
                </div>

                <div className="wrapper">
                    <a
                        className="bannerBtn marginRigth"
                        target="blank"
                        href="https://wbba.netlify.app/"
                    >
                        website on netlify
                    </a>
                    <div className="#wrapper">
                        <div>
                            <h5>Desctription:</h5>
                            <p className="half">
                                The project is like the library
                                <a
                                    target="blank"
                                    href="https://ant.design/"
                                    className="black"
                                >
                                    {" "}
                                    ant.design{" "}
                                </a>
                                by which you can build your project extremely
                                fast. You can find a lot of components to
                                include in your project. The project is still
                                ongoing with Sardor Mukhtorov with whom I am
                                working. It will be a design system for
                                enterprise-level products. You will be able to
                                create an efficient and enjoyable work
                                experience. It will take about a month to finish
                                all the components and it will have an official
                                domain name. As we are not using so many
                                packages (which means we are doing everything
                                from scratch), the project is taking a lot of
                                time to finish.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h6>tools used:</h6>
                        <p>1. react-router-dom</p>
                        <p>2. styled-components</p>
                        <p>3. context api</p>
                        <p>4. prop-types</p>
                        <p>5. react-maps</p>
                        <p>6. styled-icons</p>
                        <p>7. react-calendar</p>
                        <p>... some others</p>
                    </div>
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
