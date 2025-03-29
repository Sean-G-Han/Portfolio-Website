import { Container } from "react-bootstrap"
import Product from "./Product"
import GridWrapper from "../GridWrapper"
import logo from "../../assets/logo.png"


function Projects() {
  return (
		<Container className="p-5 bg-dark text-light">
			<center className="d-block d-md-none">
				<h1>
					Projects
				</h1>
			</center> 
				<h2 className="d-none d-md-block ms-3">
					Projects
				</h2>
			<GridWrapper numperrows={2}>
				<Product title = "20XX Space Bounty"
					imageLink="https://img.itch.zone/aW1nLzEzNjE2MDc2LnBuZw==/347x500/WS56k6.png"
					hyperlink="https://xenoxzard.itch.io/20xx-space-bounty"
					height="225px"
					badges={["Godot", "Platformer", "Game Dev"]}/>
				<Product title = "Top Down Shooter?"
					imageLink="https://img.itch.zone/aW1nLzEzMTk5NjE0LnBuZw==/347x500/ouvSNb.png"
					hyperlink="https://xenoxzard.itch.io/top-down-shooter-rouge-like"
					height="225px"
					badges={["Godot", "Shooter", "Game Dev"]}/>
				<Product title = "Efficent Frontier Generator"
					badges={["MPT", "Quant", "Algorithm", "Python"]}
					hyperlink="https://github.com/Sean-G-Han/Efficient-Frontier-Generator"
					height="225px"
					imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsWXs5QTPJybNFmB-7ZFeQgsH-4bmaNivGw&s"/>
				<Product title = "Portfolio Website"
					badges={["React", "Bootstrap", "Web Dev", "Firebase"]}
					hyperlink="https://github.com/Sean-G-Han/Portfolio-Website"
					height="225px"
					imageLink={logo}/>
			</GridWrapper>
		</Container>
  )
}

export default Projects