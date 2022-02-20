import React from "react";
import { Link } from "react-router-dom";
// import Heading from "./headings/Heading";
// import CharacterList from "./products/ProductList";
import { Container } from "react-bootstrap";
// import frontpagevideo from "./video/frontpagevideo.mp4";
// import Logo from "./images/logo.png";
import SideBar from "../nav/SideBar";
import { Col, Row } from "react-bootstrap";
import ArticleList from "../articles2/ArticleList";

function Minside() {
    return <Container>
        <Row>
            <Col>
                <SideBar />
            </Col>
            <Col xs={9}>
            <Link to="/minside/artikkels/add">AddArticle</Link>
            <ArticleList />
            </Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>


}

export default Minside;