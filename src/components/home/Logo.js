import React from "react";
import Logo from "../../images/logo.png";
import Figure from 'react-bootstrap/Figure'
import { Row, Col } from "react-bootstrap";

function RenderLogo() {

    return( 
        <Row className="justify-content-md-center">
        <Col  xs={12} sm={4} md={4} >
        <Figure >
        <Figure.Image src={Logo} />
    </Figure>
        </Col>
    </Row>
    )
}

export default RenderLogo;