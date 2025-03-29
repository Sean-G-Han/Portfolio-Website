import React from "react";
import { Badge, Card, Image } from "react-bootstrap";

interface ProjectProps {
  title: string;
  imageLink: string;
  badges?: string[];
}

const Product: React.FC<ProjectProps> = ({ title, imageLink, badges }) => {
  return (
    <Card className="border-2 my-2" bg="dark" data-bs-theme="dark">
      <Card.Header className="text-light fw-bold">{title}</Card.Header>
      <Card.Body className="text-center p-0">
        <Image 
					src={imageLink}
          fluid 
					style={{ height: '225px', width: '100%', objectFit: 'cover', objectPosition: 'bottom' }} 
				/>
      </Card.Body>
      <Card.Footer>
        {badges?.map((badge, index) => (
          <Badge key={index} className="m-1" bg="secondary" pill>
            {badge}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
};

export default Product;
