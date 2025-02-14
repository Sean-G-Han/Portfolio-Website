import React from "react";
import { Card } from "react-bootstrap"; // Ensure you're using the correct Card component

interface ProjectProps {
  name: string;
  description: string;
  hyperlink?: string;
	children?: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ name, description, children, hyperlink }) => {
  return (
    <Card className="border-1 my-2 shadow">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {hyperlink ? (
          <Card.Text>{description}. To find out more, <a href={hyperlink}>Click Here</a></Card.Text>
        ) : (
          <Card.Text>{description}</Card.Text>
        )}
				{children}
      </Card.Body>
    </Card>
  );
};

export default Project;