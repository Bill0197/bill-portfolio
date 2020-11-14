import React from "react";
import GenericHeader from "../Components/GenericHeader";
import {
    Feature,
    FastlyIcon,
    PercentIcon,
    SatisfiedIcon,
    HighQualityIcon,
} from "../Styles/Styles";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Services({ display }) {
    return (
        <>
            {!display && <GenericHeader title="SERVICES" page="Services" />}

            <section className="Services">
                <h2 className="center">OFFERINGS TO MY CLIENTS</h2>
                <p className="serviceText">
                    If you are looking for a confident front-end developer who
                    can satisfy all your needs and prototype all your designs,
                    you have made the right choice selecting me.
                </p>
                <div className="row">
                    <Feature>
                        <FastlyIcon />
                        <h4>Consistency</h4>
                        Customers expect consistency in the quality of service
                        they receive. So, the number one thing I will make sure
                        is the consistency.
                    </Feature>
                    <Feature>
                        <PercentIcon />
                        <h4>Accuracy</h4>
                        The foregoing editorial accurately sums up the attitude
                        of the profession. The service I would like to give you
                        is with 100% full accuracy.
                    </Feature>
                    <Feature>
                        <SatisfiedIcon />
                        <h4>Satisfaction</h4>
                        We don't always get satisfied with services we get.
                        Therefore, you will be satisfied with the service you
                        are provided with.
                    </Feature>
                    <Feature>
                        <HighQualityIcon />
                        <h4>High Quality</h4>We will make sure the product you get is of
                        high quality and is not expensive either. So, you can trust us without a doubt.
                    </Feature>
                </div>
            </section>
            <div>
                {!display && (
                    <div className="fullWidth">
                        <Link to="/" className="center bannerBtn">
                            back to home
                        </Link>
                    </div>
                )}
            </div>
            {!display && <Footer />}
        </>
    );
}
