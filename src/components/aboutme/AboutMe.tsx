import { Col, Container, Image, Row } from "react-bootstrap"
import ProfileImage from "../../assets/Profile.jpg"
import SoftwareProficiencyChart from "./SoftwareProficiencyChart"

function AboutMe() {
  return (
		<Container className="p-5 bg-dark text-light">
			<Row>
				<Col xs={12} md="auto">
					<center>
						<Image src={ProfileImage} alt="Portrait" className="rounded-circle" width={180} height={180} />
					</center>
				</Col>
				<Col>
					<center className="d-block d-md-none">
						<h1>
							About Me
						</h1>
					</center> 
						<h2 className="d-none d-md-block">
							About Me
						</h2>
					<p>
						Hi, I'm Yi Han, a software and game developer from NUS Computer Science. In my free time I enjoy
						creating games and exploring new technologies especially in the field of robotics. 
						Other than that, I enjoy playing JRPGs like Xenoblade and Atelier.
						I’m always eager to learn and to take on new challenges.
					</p>
					<p>
						I am currently looking for internship opportunities in software development and game development. 
						Feel free to reach out to me if you have any questions or opportunities.
						You can find my resume <a href="#resume">here</a>.
					</p>
				</Col>

			</Row>
			<div className="my-4" />
			<Row>
				<Col xs={12} md={6}>
					<center>
					<h4>Programming Languages</h4>
					</center>
					<SoftwareProficiencyChart data={
						[
							{	label: "Java", value: 100},
							{	label: "Python", value: 90},
							{	label: "C++/C#", value: 85},
							{	label: "JS/TS", value: 85},
							{	label: "C#", value: 80},
						]}/>
				</Col>
				<Col xs={12} md={6}>
					<center>
					<h4>Software/Game Development</h4>
					</center>
					<SoftwareProficiencyChart data={
						[
							{	label: "ReactJS", value: 90},
							{	label: "Flutter", value: 90},
							{ label: "Bootstrap", value: 85},
							{ label: "Unity", value: 85},
							{ label: "Godot", value: 95},
						]}/>
				</Col>
			</Row>
		</Container>
  )
}

export default AboutMe