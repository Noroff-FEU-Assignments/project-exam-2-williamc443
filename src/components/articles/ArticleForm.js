
import React from "react";
import Heading from "../headings/Heading";
// import CharacterList from "./characters/CharacterList";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import EditArticel from "./edit";
// import "../../App.css";
// import '../../index.css';
// import InputGroup from 'react-bootstrap/InputGroup';

const schema = yup.object().shape({
    title: yup.string()
        .required("skriv en tittel for innlegget")
        .min(3, "must be 3 or more characters"),

    secondTitle: yup.string()
        .min(3, "must be 3 or more characters"),

    subject: yup.string()
        .required("Skriv emne for innlegget")
        .min(4, "must be 4 or more characters"),

    introduction: yup.string()
        .required("Please enter your message").min(30, "The introduction must be at least 30 characters"),

    content: yup.string()
        .required("Please enter your message").min(50, "The content must be at least 50 characters")

});


function AddArticle(EditArticel) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <>
            <Heading content="Legg til Artikkel" />
            <Container className="container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="FromGridtitle">
                                <Form.Label>Tittel</Form.Label>
                                <Form.Control placeholder="Firstname" {...register("title")}/>
                                {errors.firstname && <span>{errors.firstname.message}</span>}
                            </Form.Group>

                            <Form.Group controlId="formGridSubject">
                                <Form.Label>Emne</Form.Label>
                                <Form.Control type="string" placeholder="Emne" {...register("subject")} />
                                {errors.subject && <span>{errors.subject.message}</span>}
                            </Form.Group>

                            <Form.Group controlId="formGridSecondTitle">
                                <Form.Label>Undertittel</Form.Label>
                                <Form.Control type="string" placeholder="Emne" {...register("secondTitle")} />
                                {errors.SecondTitle && <span>{errors.SecondTitle.message}</span>}
                            </Form.Group>
                        </Col>

                        <Col md={5} >
                            <Form.Group className="mb-3" controlId="formGridintroduction">
                                <Form.Label >Introduksjon</Form.Label>
                                <Form.Control as="textarea" rows={7} placeholder="Introduksjon" {...register("introduction")} />
                                {errors.message && <span>{errors.introduction.message}</span>}
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col md={9} >
                                <Form.Group className="mb-3" controlId="formGridContent">
                                    <Form.Label >Innhold</Form.Label>
                                    <Form.Control as="textarea" rows={7} placeholder="Innhold" {...register("content")} />
                                    {errors.content && <span>{errors.content.message}</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Row>

                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default AddArticle;
