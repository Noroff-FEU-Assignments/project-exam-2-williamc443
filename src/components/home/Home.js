import React from "react";
// import Heading from "./headings/Heading";
// import CharacterList from "./products/ProductList";
import { Container } from "react-bootstrap";
import RenderUserNav from "../nav/userNav";
import RenderCard from "./Card";
import RenderLogo from "./Logo";
import { Row, Col } from "react-bootstrap";
import Img1 from "../images/miata.png";
import Img2 from "../images/garage.png";
import Img3 from "../images/meet.jpg";
import Img4 from "../images/mazda-mx5-trike.jpg";
import Img5 from "../images/datsun_lights.jpg";
import Img6 from "../images/datsun-mx5-garage.jpg";



function Home() {
  return <Container>

    <RenderLogo />

    <Container>
      <Row>
        <Col>
          <RenderCard
            title="Hvem er vi?"
            img={Img1} alt="Miata" />
        </Col>
        <Col>
          <RenderCard
            title="Hva gjør vi?"
            img={Img2} alt="Garage" />
        </Col>
        <Col>
          <RenderCard
            title="Bli med oss?"
            img={Img3} alt="Meet" />
        </Col>
      </Row>

    </Container>
    <Row>
      <img src={Img4} width={900} alt="Miata and Trike" />
    </Row>

    <Row>
    <Col >
    <img className="container-fluid" src={Img5} width={500} alt="LIghts" />
    </Col>
    <Col>
    <img className="container-fluid" src={Img6} width={500} alt="Garage" />
    </Col>

    </Row>

    </Container>



    {/* <div className="container">Environment: {process.env.NODE_ENV}</div> */}
    {/* <Heading content="Legalish"/> */}
    {/* <CharacterList /> */}
}

export default Home;