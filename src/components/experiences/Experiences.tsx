import { Container } from 'react-bootstrap'
import GridWrapper from '../GridWrapper'
import Work from './Work'

function Experiences() {
  return (
    <Container className="p-5 bg-dark text-light">
      <center className="d-block d-md-none">
        <h1>
          Work Experiences/Internships
        </h1>
      </center> 
      <h2 className="d-none d-md-block ms-3">
			Work Experiences/Internships
      </h2>
      <GridWrapper numperrows={3}>
				<Work title = "Game Dev Intern"
					employer='Koei Tecmo Singapore Pte Ltd'
					imageLink="https://www.koeitecmo.com.sg/wp-content/uploads/2023/10/black3.png"
					hyperlink='https://www.koeitecmo.com.sg/'
					badges={["Unity", "Game Dev", "C#" ]}
					date="JUN 2025 - DEC 2025"
					height="180px"/>
				<Work title = "Software Engineer Intern"
					employer='Acies Security Pte Ltd'
					imageLink="https://static.wixstatic.com/media/bfb65e_d4493e9a087a4daba2418ee8cca6bb0c~mv2.png/v1/crop/x_0,y_37,w_312,h_259/fill/w_418,h_348,al_c,lg_1,q_85,enc_avif,quality_auto/Acies%20Logo%20transparent%20for%20wix.png"
					hyperlink='https://www.acies.com.sg/'
					badges={["Flutter", "Stripe", "Software Dev"]}
					date="DEC 2024 - JAN 2025"
					height="180px"/>
				<Work title = "Robotics Course Coordinator"
					employer='Abound Learning Pte Ltd'
					imageLink="https://abound.edu.sg/wp-content/uploads/2020/01/logo-1.jpg"
					hyperlink="https://abound.edu.sg/"
					badges={["Education", "Mindstorm", "Robotics"]}
					date="AUG 2024 - JUN 2025"
					height="180px"/>
			</GridWrapper>
    </Container>
  )
}

export default Experiences