import GridWrapper from "./GridWrapper";
import Project from "./Project";

function WorkExperience() {
    return (
      <div className="py-3">
        <h1 className="text-center">Past Internship/Work Experience</h1>
        <GridWrapper>
          <Project name="Abound Learning - Robotics/Programming Junior" description="AUG 2024 - NOW">
            <li>Create a robotics and programming course</li>
            <li>Create interactive lesson plans to teach children basic coding </li>
            <li>Teach children basic coding and robotics skills</li>
          </Project>
          <Project name="NSI Generation - Software Engineering Intern" description="DEC 2024 - JAN 2025">
            <li>Aided in Flutter application development</li>
            <li>Integrated Stripe payment system into the application</li>
            <li>Learned and applied basic SE skills and concepts</li>
          </Project>
        </GridWrapper>
      </div>
    );
}

export default WorkExperience;