import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar fixed="bottom" bg="light" data-bs-theme="light" expand="lg">
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
                style={{ marginRight: "5px" }}
              />
              GitHub
              </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
