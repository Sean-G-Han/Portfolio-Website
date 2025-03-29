import 'bootstrap/dist/css/bootstrap.min.css';
import './FancyFont.css';
import './Sidebar.css';
import { Container, ListGroup } from 'react-bootstrap';
import BarItem from './BarItem';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaFileAlt, FaSuitcase } from 'react-icons/fa';

function Sidebar() {
  return (
    <Container className='vh-100 fixed-sidebar black'>
      <ListGroup variant="flush">
        <center className='alex-brush-regular'>Tan Yi Han</center>
        <BarItem name="Home" link="/">
          <FaHome />
        </BarItem>
        <BarItem name="About" link="#aboutMe">
          <FaInfoCircle />
        </BarItem>
        <BarItem name="Projects" link="#projects">
          <FaProjectDiagram />
        </BarItem>
        <BarItem name="Experiences" link="#experiences">
          <FaSuitcase />
        </BarItem>
        <BarItem name="Contact" link="#contact">
          <FaEnvelope />
        </BarItem>
        <BarItem name="Resume" link="#resume">
          <FaFileAlt />
        </BarItem>
      </ListGroup>
    </Container>
  );
}

export default Sidebar;
