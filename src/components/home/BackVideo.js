import React from "react";
import { Row, Col } from "react-bootstrap";
import frontpagevideo from "./video/frontpagevideo.mp4";

function RenderVideo() {
    return (<>
        <video className="video" autoPlay muted >
            <source src={frontpagevideo} type="video/mp4" />
        </video>
        <Col sm={2} className="m-auto min-vh-100">
            <img
                className="d-block mx-auto img-fluid w-50"
                src={Logo}
                alt="mysvg">
            </img>
        </Col>
    </>

    )
}