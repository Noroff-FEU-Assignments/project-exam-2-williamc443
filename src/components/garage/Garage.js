import React from "react";
// import Heading from "./headings/Heading";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Img5 from "../images/datsun_lights.jpg";
import Img6 from "../images/datsun-mx5-garage.jpg";
import styles from "./Garage.module.css";



function RenderGarage() {
  return (<html className={styles.garage}>

  <Container >

    {/* <Container>
      <Row>
        <Col>
          <img className="container-fluid, float-right" src={Img5} width={500} alt="LIghts" />
        </Col>
        <Col>
          <img className="container-fluid, float-right" src={Img6} width={500} alt="Garage" />
        </Col>
      </Row>
    </Container> */}
  </Container>
  </html>
  )
  {/* <div className="container">Environment: {process.env.NODE_ENV}</div> */ }
  {/* <Heading content="Legalish"/> */ }
  {/* <CharacterList /> */ }

}

export default RenderGarage;