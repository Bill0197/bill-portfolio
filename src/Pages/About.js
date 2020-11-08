import React from "react";
import {
    NetworkIcon,
    GroupsIcon,
    TasklistIcon,
    StatusOnlineIcon,
} from "../Styles/Styles";
import GenericHeader from "../Components/GenericHeader";
import { Link } from "react-router-dom";

export default function About({ display }) {
    return (
        <>
            {!display && <GenericHeader title="About Me" page="About Me" />}
            <section className="About">
                <div id="partOne">
                    <div id="aboutPart">
                        <h3>About myself</h3>
                        <p> Hi, I’m Khabibullo. Nice to meet you.</p>
                        <div className="welcome-text">
                            I like to code things from scratch, and enjoy
                            bringing ideas to life in the browser. Since
                            beginning my journey as a web developer nearly a
                            year ago, I've done remote work for small agencies,
                            consulted for small-scale startups, and collaborated
                            with talented people to create digital products for
                            both business and consumer use. I'm quietly
                            confident, naturally curious, and perpetually
                            working on improving my chops one problem at a time.
                        </div>
                        <div className="flexWrapper">
                            <div className="work-item">
                                <p>
                                    <StatusOnlineIcon />
                                </p>
                                <h5>7 </h5>
                                <p>Total Courses </p>
                            </div>
                            <div className="work-item">
                                <p>
                                    <TasklistIcon />
                                </p>
                                <h5>15 </h5>
                                <p>Total Projects</p>
                            </div>
                            <div className="work-item">
                                <p>
                                    <GroupsIcon />
                                </p>
                                <h5>5 </h5>
                                <p>Total Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="partTwo">
                    <div className="tools_expert">
                        <h5>SKILLS EXPERTNESS</h5>
                        <p className="text">React.js &#10139; 80%</p>
                        <div className="progress">
                            <div
                                id="react"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">JavaScript &#10139; 85%</p>
                        <div className="progress">
                            <div
                                id="javascript"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">MERN stack &#10139; 35%</p>
                        <div className="progress">
                            <div
                                id="Backend"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="35"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Git &#10139; 90%</p>
                        <div className="progress">
                            <div
                                id="git"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Html5 &#10139; 99%</p>
                        <div className="progress">
                            <div
                                id="html"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="99"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Css3 &#10139; 95%</p>
                        <div className="progress">
                            <div
                                id="CSS"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Bootstrap &#10139; 80%</p>
                        <div className="progress">
                            <div
                                id="bootstrap"
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
            {!display && (
                <div className="fullWidth">
                    <Link to="/" className="center bannerBtn">
                        back to home
                    </Link>
                </div>
            )}
        </>
    );
}
