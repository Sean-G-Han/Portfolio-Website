import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/sidebar/Sidebar';
import NavigationBar from './components/mobile-navbar/NavigationBar';
import Introduction from './components/Introduction';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Experiences from './components/experiences/Experiences';
import ContactUs from './components/contact/Email';

function App() {
  return (
    <Container fluid className='m-0 p-0'>
      <Row className='vh-100 g-0'>
        <NavigationBar />
        <Sidebar />
        <Col className='main-body'>
          <Row id='introduction' className='g-0'>
            <Introduction />
          </Row>
          <Row id='aboutMe' className='g-0'>
            <AboutMe />
          </Row>
          <Row id='projects' className='g-0'>
            <Projects />
          </Row>
          <Row id='experiences' className='g-0'>
            <Experiences />
          </Row>
          <Row id='contact' className='g-0'>
            <ContactUs />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
