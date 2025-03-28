import GridWrapper from "./GridWrapper";
import Project from "./Project";

function WorkExperience() {
    return (
      <div className="py-4 mx-5">
        <h1 className="mx-3">Past Internship/Work Experience</h1>
        <h3 className="mx-3">Here is a quick summary of all my most recent work and internship experiences</h3>
        <div className="my-4" />
        <GridWrapper>
          <Project 
            name="Abound Learning - Robotics/Programming Junior" 
            description="AUG 2024 - NOW"
            badges={[
              "Robotics", 
              "Programming", 
              "Education"
            ]}
            items={[
              "Create a robotics and programming course",
              "Create interactive lesson plans to teach children basic coding",
              "Teach children basic coding and robotics skills"
            ]}
          />

          <Project 
            name="NSI Generation - Software Engineering Intern" 
            description="DEC 2024 - JAN 2025"
            badges={[
              "Flutter", 
              "Stripe", 
              "Software-Engineering"
            ]}
            items={[
              "Aided in Flutter application development",
              "Integrated Stripe payment system into the application",
              "Learned and applied basic SE skills and concepts"
            ]}
          />
        </GridWrapper>
      </div>
    );
}

export default WorkExperience;
