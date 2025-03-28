import { Col, Container, Row, Image } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import profile from "./assets/Profile.jpg";

function Introduction() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Col>
        <Row>
          <center>
          <Image src={profile} alt="Profile" className="rounded-circle" style={{ width: "300px", height: "300px" }} />
          </center>
        </Row>
        <div className="my-4" />
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