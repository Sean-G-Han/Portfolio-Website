import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';

interface GridProps {
    children?: React.ReactNode;
}

const GridWrapper: React.FC<GridProps> = ({ children }) => {
    if (!children || !Array.isArray(children)) {
      return null;
    }
  
    return (
      <Container>
        <Row className="py-1">
          {children.map((child, index) => (
            <Col key={index} md={4} className="mb-3">
              {child}
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  

export default GridWrapper;
