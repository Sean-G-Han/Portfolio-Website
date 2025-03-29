import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Introduction from './components/Introduction';
import Sidebar from './components/sidebar/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Container fluid className='m-0 p-0'>
        <Row className='vh-100'>
          <Sidebar />
          <Col className='main-body'>
            <Row>
              <Introduction />
            </Row>
            <Row>
              <AboutMe />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
