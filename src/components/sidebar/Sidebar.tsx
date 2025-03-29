import 'bootstrap/dist/css/bootstrap.min.css';
import './FancyFont.css';
import './Sidebar.css';
import { Container, ListGroup } from 'react-bootstrap';
import BarItem from './BarItem';
import { FaGithub, FaHome, FaInfoCircle, FaProjectDiagram, FaSuitcase } from 'react-icons/fa';

function Sidebar() {
  return (
    <Container className='vh-100 fixed-sidebar black align-items-center'>
      <ListGroup variant="flush">
        <center className='alex-brush-regular' style={{fontSize: '1.7rem'}}>Tan Yi Han</center>
        <BarItem name="Home" link="/">
          <FaHome size={25} />
        </BarItem>
        <BarItem name="About" link="#aboutMe">
          <FaInfoCircle size={25} />
        </BarItem>
        <BarItem name="Projects" link="#projects">
          <FaProjectDiagram size={25} />
        </BarItem>
        <BarItem name="Experiences" link="#experiences">
          <FaSuitcase size={25} />
        </BarItem>
        <BarItem name="GitHub" link="https://github.com/Sean-G-Han?tab=repositories">
          <FaGithub size={25} />
        </BarItem>
      </ListGroup>
    </Container>
  );
}

export default Sidebar;
