import PropTypes from "prop-types";
import Heading from "../headings/Heading";
import DashboardMenu from "./DashboardMenu";
import React from "react";
// import Heading from "./headings/Heading";
// import CharacterList from "./products/ProductList";
import { Container } from "react-bootstrap";
// import frontpagevideo from "./video/frontpagevideo.mp4";
// import Logo from "./images/logo.png";
import SideBar from "../nav/SideBar";
import { Col, Row } from "react-bootstrap";
// import AddArticle from "./ArticleForm";

export default function DashboardPage({ children }) {
    return (
        <><Heading content="Dashboard" />
            <Container>

                <Row>
                    <Col>
                        <DashboardMenu />
                    </Col>
                    <Col xs={9}>
                        {children ? children : <p>Select a section</p>}
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </>
    );
}

DashboardPage.propTypes = {
    children: PropTypes.node,
};