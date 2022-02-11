import React from "react";
// import Heading from "./headings/Heading";
// import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Img5 from "../images/datsun_lights.jpg";
import Img6 from "../images/datsun-mx5-garage.jpg";
// import GarageStyles from "./Garage.module.css";
import Heading from "../headings/Heading";
// import Layout from "../layout/Layout";
import styles from "./Garage.module.css";
import Container from "../layout/Container";
import Button from "../content/form/Button";
import WeeksCar from "./images/lexus.jpg";
 


function Garage() {
  return (<>
  <Heading content="#Garasjen" />
<Button/>
 <Container >
   {/* <Col className={styles.imgContainer}>
   <img src={WeeksCar} className={styles.img} />
   </Col> */}
      <Row className={styles.imgrow}>
        <Col>
          <img className="container-fluid, float-right" src={Img5} width={500} alt="LIghts" />
        </Col>
        <Col>
          <img className="container-fluid, float-right" src={Img6} width={500} alt="Garage" />
        </Col>
      </Row>
    </Container>
  </>
  )

}

export default Garage;