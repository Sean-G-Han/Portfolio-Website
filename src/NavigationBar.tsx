import { Container, Nav, Navbar } from "react-bootstrap";
import "./FancyFont.css";

function NavigationBar() {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#introduction" className="alex-brush-regular">Tan Yi Han</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="text-center">
          <Nav.Link href="#introduction">Introduction</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#workExperience">Work Experience</Nav.Link>
          <Nav.Link href="#proficiencies">Proficiencies</Nav.Link>
                <Nav.Link href="https://github.com/Sean-G-Han?tab=repositories">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  width="20"
                  height="20"
                  style={{ marginRight: "5px", filter: "invert(1)" }}
                />
                GitHub
                </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
