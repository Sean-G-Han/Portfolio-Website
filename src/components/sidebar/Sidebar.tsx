import 'bootstrap/dist/css/bootstrap.min.css';
import './FancyFont.css';
import './Sidebar.css';
import { Container, ListGroup } from 'react-bootstrap';
import { menuItems, SidebarMenuItem } from "../menu-items/MenuItems";

function Sidebar() {
  return (
    <Container className="vh-100 fixed-sidebar black align-items-center">
      <ListGroup variant="flush">
        <center className="alex-brush-regular" style={{ fontSize: '1.7rem' }}>Tan Yi Han</center>
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} {...item}/>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Sidebar;
