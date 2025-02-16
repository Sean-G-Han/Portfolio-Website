import React from "react";
import { Badge, Card, Accordion, ListGroup } from "react-bootstrap";

interface ProjectProps {
  name: string;
  description: string;
  badges?: string[];
  hyperlink?: string;
  items?: string[]; // Accepts an array of list items
}

const Project: React.FC<ProjectProps> = ({ name, description, badges, hyperlink, items }) => {
  return (
    <Card className="border-1 my-2 shadow">
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        {hyperlink ? (
          <Card.Text>
            {description}. To find out more, <a href={hyperlink}>Click Here</a>
          </Card.Text>
        ) : (
          <Card.Text>{description}</Card.Text>
        )}

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
      <Card.Footer>
        {badges && badges.map((badge, index) => (
          <Badge key={index} bg="primary" className="me-1">
            {badge}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
};

export default Project;
