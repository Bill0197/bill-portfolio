import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Alert,
} from "reactstrap";

let Notification;

export default class extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        let templateParams = {
            from_name: email,
            to_name: "010197kh1997",
            subject: subject,
            message: message,
        };
        emailjs
            .send(
                "010197kh1997",
                "template_h2by6sk",
                templateParams,
                "user_iNQAExw1eXrlCY2aPMdNF"
            )
            .then((data) => {
                if (data.status === 200 && data.text === "OK") {
                    Notification = (
                        <Alert color="success">
                            Your message has been sent successfully. I will
                            contact you soon.
                        </Alert>
                    );
                    this.resetForm();
                } else {
                    Notification = (
                        <Alert color="danger">
                            Please check the required fields before sending your
                            message! Something went wrong!
                        </Alert>
                    );
                }
            });
        this.resetForm();
    }
    resetForm() {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    };
    render() {
        return (
            <Container className="themed-container p-5" fluid="sm">
                {Notification}

                <h4>
                    Would you like to chat with me? <br /> Just drop a message.
                    I will make sure I reply soon!
                </h4>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlid="formBasicEmail">
                        <Label className="text-muted">Email address</Label>
                        <Input
                            type="email"
                            name="email"
                            required
                            value={this.state.email}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, "email")}
                            placeholder="Enter your email"
                        />
                    </FormGroup>
                    <FormGroup controlid="formBasicName">
                        <Label className="text-muted">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            required
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, "name")}
                            placeholder="Your name"
                        />
                    </FormGroup>
                    <FormGroup controlid="formBasicSubject">
                        <Label className="text-muted">Subject</Label>
                        <Input
                            type="text"
                            name="subject"
                            className="text-primary"
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, "subject")}
                            placeholder="Subject"
                        />
                    </FormGroup>
                    <FormGroup controlid="formBasicMessage">
                        <Label className="text-muted">Message</Label>
                        <Input
                            type="textarea"
                            name="message"
                            required
                            className="text-primary"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, "message")}
                        />
                    </FormGroup>
                    <Button type="submit" color="primary" size="md">
                        Send Message
                    </Button>
                </Form>
            </Container>
        );
    }
}
