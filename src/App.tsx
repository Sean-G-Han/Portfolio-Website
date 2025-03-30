import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Introduction from './components/Introduction';
import Sidebar from './components/sidebar/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Experiences from './components/experiences/Experiences';
import NavigationBar from './components/mobile-navbar/NavigationBar';
import ContactUs from './components/contact/Email';

function App() {
  return (
    <div className='bg-dark text-light'>
      <Container fluid className='m-0 p-0'>
        <Row className='vh-100'>
          <Sidebar />
          <NavigationBar />
          <Col className='main-body'>
            <Row id='introduction'>
              <Introduction />
            </Row>
            <Row id='aboutMe'>
              <AboutMe />
            </Row>
            <Row id='projects'>
              <Projects />
            </Row>
            <Row id='experiences'>
              <Experiences />
            </Row>
            <Row id='contact'>
              <ContactUs />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
