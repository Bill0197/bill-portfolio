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
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the difference in price. You may
                        see some for as low as $17 each.
                    </Feature>
                    <Feature>
                        <PercentIcon />
                        <h4>Accuracy</h4>
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the difference in price. You may
                        see some for as low as $17 each.
                    </Feature>
                    <Feature>
                        <SatisfiedIcon />
                        <h4>Satisfaction</h4>
                        If you are looking at blank cence in price. You may
                        see some for as low as $17 each.
                    </Feature>
                    <Feature>
                        <HighQualityIcon />
                        <h4>High Quality</h4>
                        If you are looking at blank cassettes
                        see some for as low as $17 each.
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
        </>
    );
}
