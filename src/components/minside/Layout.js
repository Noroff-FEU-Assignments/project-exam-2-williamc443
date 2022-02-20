// import RenderNavbar from "../nav/Navbar";
// import { Container } from "react-bootstrap";
import styles from "./Container.module.css"
import Container from "./Container";


function MinsideLayout() {
    return (
    <Container className={styles.container}>
    <Row>
    <Col>1 of 3</Col>
    <Col xs={8}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
    </Row>
    </Container>


    )
}

export default MinsideLayout;
