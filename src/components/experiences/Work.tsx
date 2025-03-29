import React from "react";
import { Badge, Card, Image } from "react-bootstrap";

interface WorkProps {
  title: string;
  employer: string;
  imageLink: string;
	hyperlink?: string;
  badges?: string[];
  date?: string;
  height?: string;
}

const Work: React.FC<WorkProps> = ({ title, imageLink, badges, employer, date, height, hyperlink}) => {
  return (
    <Card className="border-2 my-2" bg="dark" data-bs-theme="dark">
      <Card.Header className="text-light fw-bold">
        <div>
          {title}
					<br />
        	<span> @ {employer}</span>
					<br />
					<span className="text-secondary">{date}</span>
        </div>
      </Card.Header>
      <Card.Body className="text-center p-0">
				{hyperlink ? (
					<a href={hyperlink} target="_blank" rel="noopener noreferrer">
						<Image 
							src={imageLink}
							fluid 
							style={{ height: height, width: '100%', objectFit: 'cover', objectPosition: 'bottom' }} 
						/>
					</a>
				) : (
					<Image 
						src={imageLink}
						fluid 
						style={{ height: height, width: '100%', objectFit: 'cover', objectPosition: 'bottom' }} 
					/>
				)}
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

export default Work;
