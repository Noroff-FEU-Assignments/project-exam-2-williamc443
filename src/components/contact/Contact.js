import React from "react";
import Heading from "../headings/Heading";
// import CharacterList from "./characters/CharacterList";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import "../../App.css";
// import '../../index.css';
// import InputGroup from 'react-bootstrap/InputGroup';


const schema = yup.object().shape({
    firstname: yup.string()
        .required("Please enter your name")
        .min(3, "must be 3 or more characters"),

    lastname: yup.string()
        .required("Please enter your name")
        .min(4, "must be 4 or more characters"),

    subject: yup.string()
        .required("Please select one"),

    email: yup.string()
        .required("Please enter an email address")
        .email("Please enter a valid email address"),

    message: yup.string()
        .required("Please enter your message").min(10, "The message must be at least 10 characters")


});

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <>
            <Heading content="Kontakt" />
            <Container className="container">
            <Form  onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                <Col lg={3}>
                    <Form.Group controlId="formGridFirstname" {...register("firstname")}>
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control placeholder="Firstname" />
                        {errors.firstname && <span>{errors.firstname.message}</span>}
                    </Form.Group>

                    <Form.Group controlId="formGridLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="string" placeholder="Lastname" {...register("lastname")} />
                        {errors.lastname && <span>{errors.lastname.message}</span>}
                    </Form.Group>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </Form.Group>
                </Col>

                <Col md={5} >
                <Form.Group className="mb-3" controlId="formGridMessage">
                    <Form.Label >Message</Form.Label>
                    <Form.Control as="textarea" rows={7} placeholder="Message" {...register("message")} />
                    {errors.message && <span>{errors.message.message}</span>}
                </Form.Group>
                </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        </>
    );
}

export default Contact;