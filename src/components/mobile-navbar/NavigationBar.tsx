import { Container, Nav, Navbar } from "react-bootstrap";
import "./FancyFont.css";
import "./NavigationBar.css";
import { FaGithub, FaHome, FaInfoCircle, FaProjectDiagram, FaSuitcase } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" expand="lg" className="mobile-only">
      <Container>
      <Navbar.Brand href="#introduction" className="alex-brush-regular">Tan Yi Han</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="text-center">
          <Nav.Link href="#introduction">
						<FaHome className="me-2"/>
						Home
					</Nav.Link>
					<Nav.Link href="#aboutMe">
						<FaInfoCircle className="me-2"/>
						About
					</Nav.Link>
          <Nav.Link href="#project">
						<FaProjectDiagram className="me-2"/>
						Projects
					</Nav.Link>
          <Nav.Link href="#experience">
						<FaSuitcase className="me-2"/>
						Experience
					</Nav.Link>
          <Nav.Link href="https://github.com/Sean-G-Han?tab=repositories">
            <FaGithub className="me-2"/>
						GitHub
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;