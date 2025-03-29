import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';

interface GridProps {
    numperrows: number;
    children?: React.ReactNode;
}

const GridWrapper: React.FC<GridProps> = ({ children, numperrows }) => {
    if (!children || !Array.isArray(children)) {
      return null;
    }
  
    return (
      <Container fluid className="w-100">
        <Row className="py-1">
          {children.map((child, index) => (
            <Col key={index} md={12/numperrows} className="mb-3">
              {child}
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default GridWrapper;
