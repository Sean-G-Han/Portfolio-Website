import { Col, Container, Image, Row } from "react-bootstrap";

function Proficiencies() {
  return (
    <div className="py-3">
      <h1 className="text-center">Proficiencies</h1>
      <Container>
        <Row>
          <Col md={3}/>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/javascript.png" alt="JavaScript" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/python.png" alt="Python" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" alt="Java" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/react-native.png" alt="React" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/nodejs.png" alt="Node.js" />
          </Col>
          <Col md={3}/>
        </Row>
        <Row>
          <Col md={3}/>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/flutter.png" alt="Flutter" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://godotengine.org/assets/press/icon_color.png" alt="Godot" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="Bootstrap" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/unity.png" alt="Unity" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" alt="C++" />
          </Col>
          <Col md={1} className="text-center">
            <Image width="100%" src="https://img.icons8.com/color/96/000000/firebase.png" alt="Firebase" />
          </Col>
          <Col md={3}/>
        </Row>
      </Container>
    </div>
  );
}

export default Proficiencies;