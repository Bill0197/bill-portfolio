import React from "react";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import GenericHeader from "../Components/GenericHeader";
import GoogleMap from "../Components/GoogleMap";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export default function Contact({ display }) {
    return (
        <div>
            {!display && <GenericHeader title="Contact" page="Contact" />}
            <Container className="themed-container mt-5 p-5" fluid="sm">
                <h5>Our location on Google maps</h5>
                <GoogleMap />
            </Container>
            <Form />
            {!display && (
                <div className="fullWidth">
                    <Link to="/" className="center bannerBtn">
                        back to home
                    </Link>
                </div>
            )}
            {!display && <Footer />}
        </div>
    );
}
