import React from "react";
import { Badge, Card, Accordion, ListGroup } from "react-bootstrap";

interface ProjectProps {
  name: string;
  description: string;
  imageLink?: string;
  badges?: string[];
  hyperlink?: string;
  items?: string[];
}

const Product: React.FC<ProjectProps> = ({ name, imageLink, badges, items }) => {
  return (
    <Card className="border-0 my-2" bg="dark" data-bs-theme="dark">
    <Card.Body>
      <Card.Img variant="top" src={imageLink ? imageLink : ""} className="rounded"/>
        <div className="my-2" />
        <Card.Title>{name}</Card.Title>
        	{badges && badges.map((badge, index) => (
            <Badge key={index} bg="dark" className="me-1">
              {badge}
          	</Badge>
        	))}
				<div className="my-3" />
        {items && items.length > 0 && (
          <Accordion className="mt-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>More Details</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  {items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
