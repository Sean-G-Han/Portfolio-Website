import { Col, Container, Image, Row } from "react-bootstrap";

const proficiencies = [
  { src: "https://img.icons8.com/color/96/000000/typescript.png", alt: "TypeScript" },
  { src: "https://img.icons8.com/color/96/000000/javascript.png", alt: "JavaScript" },
  { src: "https://img.icons8.com/color/96/000000/python.png", alt: "Python" },
  { src: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png", alt: "Java" },
  { src: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png", alt: "C++" },
  { src: "https://img.icons8.com/color/96/000000/react-native.png", alt: "React" },
  { src: "https://img.icons8.com/color/96/000000/nodejs.png", alt: "Node.js" },
  { src: "https://img.icons8.com/color/96/000000/flutter.png", alt: "Flutter" },
  { src: "https://img.icons8.com/color/96/000000/bootstrap.png", alt: "Bootstrap" },
  { src: "https://img.icons8.com/color/96/000000/firebase.png", alt: "Firebase" },
  { src: "https://godotengine.org/assets/press/icon_color.png", alt: "Godot" },
  { src: "https://img.icons8.com/color/96/000000/unity.png", alt: "Unity" },
];

function Proficiencies() {
  return (
    <div className="py-4">
      <h1 className="text-center">Proficiencies</h1>
      <Container>
        <Row className="justify-content-center">
          {proficiencies.map((skill, index) => (
            <Col key={index} xs={4} sm={3} md={2} lg={1} className="text-center">
              <Image width="75%" src={skill.src} alt={skill.alt} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Proficiencies;
