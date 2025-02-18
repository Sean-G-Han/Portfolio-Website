import { Col, Container, Row } from "react-bootstrap";
import { ReactTyped } from "react-typed";

function Introduction() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Col>
      <Row>
        <center>
          <h1>
          <ReactTyped
            strings={[
              "Hi, I am Tan Yi Han",
              "NUS Computer Science Undergraduate",
              "Game Developer", 
              "Software Developer",
              "Looking for Internship Opportunities"
            ]}
            typeSpeed={40}
            backSpeed={50}
          />
          </h1>
        </center>
      </Row>
      </Col>
    </Container>
  );
}

export default Introduction;