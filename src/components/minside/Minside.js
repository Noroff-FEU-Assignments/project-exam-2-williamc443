import React from "react";
// import Heading from "./headings/Heading";
// import CharacterList from "./products/ProductList";
import { Container } from "react-bootstrap";
// import frontpagevideo from "./video/frontpagevideo.mp4";
// import Logo from "./images/logo.png";
import SideBar from "../nav/SideBar";
import { Col, Row } from "react-bootstrap";
// import AddArticle from "./ArticleForm";

function Minside() {
    return <Container>
        <Row>
            <Col>
                <SideBar />
            </Col>
            <Col xs={9}>
                {/* <AddArticle /> */}
            </Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>


}

export default Minside;