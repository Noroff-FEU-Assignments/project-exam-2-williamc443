import React from "react";
// import Heading from "./headings/Heading";
// import ArticlesCall from "./products/ArticlesCall";
import { Container } from "react-bootstrap";
import SideBar from "../nav/SideBar";
import { Col, Row } from "react-bootstrap";
// import AddArticle from "./ArticleForm";

function ArticleList() {
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

export default ArticleList;