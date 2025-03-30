import { FaGithub, FaHome, FaInfoCircle, FaPhone, FaProjectDiagram, FaSuitcase } from "react-icons/fa";
import { Nav, ListGroup } from "react-bootstrap";
import "./menuItem.css"

export const menuItems = [
  { name: "Home", link: "#introduction", icon: <FaHome size={25} /> },
  { name: "About", link: "#aboutMe", icon: <FaInfoCircle size={25} /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram size={25} /> },
  { name: "Experiences", link: "#experiences", icon: <FaSuitcase size={25} /> },
  { name: "Contact", link: "#contact", icon: <FaPhone size={25} /> },
  { name: "GitHub", link: "https://github.com/Sean-G-Han?tab=repositories", icon: <FaGithub size={25} /> },
];

interface MenuItemProps {
    link: string;
    icon: JSX.Element;
    name: string;
}


export const NavBarItem: React.FC<MenuItemProps> = ({ link, icon, name}) => {
  return (
    <Nav.Link href={link}>
      {icon}
      <span className="ms-2">{name}</span>
    </Nav.Link>
  );
}

export const SidebarMenuItem: React.FC<MenuItemProps> = ({ link, icon, name}) => {
  return (
    <ListGroup.Item action href={link} className="d-flex align-items-center black py-3">
      {icon}
      <span className="ms-2">{name}</span>
    </ListGroup.Item>
  );
}
