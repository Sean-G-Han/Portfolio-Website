import { Container, Nav, Navbar } from "react-bootstrap";
import { menuItems, NavBarItem } from "../menu-items/MenuItems"
import "./FancyFont.css";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" expand="lg" className="mobile-only">
      <Container>
        <Navbar.Brand href="#introduction" className="alex-brush-regular">Tan Yi Han</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center">
            {menuItems.map((item, index) => (
              <NavBarItem key={index} {...item} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
