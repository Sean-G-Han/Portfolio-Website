import React from 'react'
import { ListGroupItem, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'

interface NavItemProps {
  name: string;
  link: string;
  sub?: boolean;
  children: React.ReactNode;
}

const BarItem: React.FC<NavItemProps> = ({ name, link, sub = false, children }) => {
  return (
    <ListGroupItem className='bg-dark text-light'>
      <Nav>
        <Nav.Item>
          <Nav.Link href={link} className={sub ? 'text-secondary' : 'text-light fw-bold'}>
          <OverlayTrigger placement="right"
            overlay={<Tooltip id="tooltip-right">{name}</Tooltip>}
          >
            <span className='me-2'>{children}</span>
          </OverlayTrigger>
            <span className='d-none d-md-inline' style={{ fontSize: '0.875rem' }}>{name}</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </ListGroupItem>
  );
}

export default BarItem;
