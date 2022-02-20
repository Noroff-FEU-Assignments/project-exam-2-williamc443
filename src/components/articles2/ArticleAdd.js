import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import useAxios from "../../hooks/useAxios";
import Heading from "../headings/Heading";
import DashboardPage from "../dashboard/DashboardPage";
import {Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";


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

export default function AddArticle() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useNavigate();
	const http = useAxios();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		console.log(data);

		try {
			const response = await http.post("/minside/artikkels", data);
			console.log("response", response.data);
			history.push("/minside/artikkels");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<DashboardPage>
            <Heading content="Legg til Artikkel" />
            <Container className="container">
                <Form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="FromGridTitle">
                                <Form.Label>Tittel</Form.Label>
                                <Form.Control placeholder="Title" {...register("title")}/>
                                {/* {errors.title && <span>{errors.title.message}</span>} */}
                            </Form.Group>

                            <Form.Group controlId="formGridSubject">
                                <Form.Label>Emne</Form.Label>
                                <Form.Control type="string" placeholder="Emne" {...register("subject")} />
                                {/* {errors.subject && <span>{errors.subject.message}</span>} */}
                            </Form.Group>

                            <Form.Group controlId="formGridSecondTitle">
                                <Form.Label>Undertittel</Form.Label>
                                <Form.Control type="string" placeholder="Emne" {...register("secondTitle")} />
                                {/* {errors.SecondTitle && <span>{errors.SecondTitle.message}</span>} */}
                            </Form.Group>
                        </Col>

                        <Col md={5} >
                            <Form.Group className="mb-3" controlId="formGridintroduction">
                                <Form.Label >Introduksjon</Form.Label>
                                <Form.Control as="textarea" rows={7} placeholder="Introduksjon" {...register("introduction")} />
                                {/* {errors.introduction && <span>{errors.introduction.message}</span>} */}
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col md={9} >
                                <Form.Group className="mb-3" controlId="formGridContent">
                                    <Form.Label >Innhold</Form.Label>
                                    <Form.Control as="textarea" rows={7} placeholder="Innhold" {...register("content")} />
                                    {/* {errors.content && <span>{errors.content.message}</span>} */}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Row>

                    <Button variant="primary" type="submit">
					{submitting ? "Submitting..." : "Submit"}
                    </Button>
                </Form>
            </Container>
		</DashboardPage>
	);
}