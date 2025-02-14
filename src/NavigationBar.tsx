import { Nav, Navbar } from "react-bootstrap";

function NavigationBar(){
  return (
    <Navbar className="fixed-bottom" bg="dark" data-bs-theme="dark">
      <Navbar.Collapse className="justify-content-center">
        <Nav>
          <Nav.Link href="#introduction">Introduction</Nav.Link>
          <Nav.Link href="#proficiencies">Proficiencies</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#workExperience">Work Experience</Nav.Link>
          <Nav.Link href="https://github.com/Sean-G-Han?tab=repositories">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;