import { Col, Container, Image, Row } from "react-bootstrap";

function Introduction() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col xs="auto" className="text-center">
          <Row>
            <Col xs={12} md="auto" className="d-flex justify-content-center">
              <div>
                <Image 
                  src="https://avatars.githubusercontent.com/u/156769273?s=96&v=4" 
                  alt="Profile" 
                  className="img-fluid rounded-circle d-block d-md-none" 
                  style={{ width: "250px" }}
                />
                <Image 
                  src="https://avatars.githubusercontent.com/u/156769273?s=96&v=4"
                  alt="Profile"
                  className="img-fluid rounded-circle d-none d-md-block" 
                  style={{ width: "150px" }} 
                />
              </div>
            </Col>
            <Col xs={12} md="auto" className="mt-3 text-nowrap d-flex align-items-center justify-content-center">
              <div>
                <h1>Hi, I am Tan Yi Han</h1>
                <h5 className="d-none d-md-block">Year 2 NUS Computer Science Student</h5>
                <p className="d-block d-md-none">Year 2 NUS Computer Science Student</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;