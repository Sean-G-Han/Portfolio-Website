import GridWrapper from "./GridWrapper";
import Project from "./Project";

function ProjectShowcase() {
  return (
    <div className="py-4 mx-5">
      <h1 className="mx-3">Projects</h1>
      <h3 className="mx-3">I love to create things, and I'm always working on something new! You can view some of my favorite projects below.</h3>
      <div className="my-4" />
      <GridWrapper>
        <Project 
          name="20XX Space Bounty" 
          description="2D platformer shooter roguelike developed with Godot" 
          badges={["Godot", "Game-Dev"]} 
          hyperlink="https://xenoxzard.itch.io/20xx-space-bounty"
          items={[
            "Made with Godot 4.0",
            "Procedural generation",
            "Power-up upgrades",
            "Advanced pathfinding"
          ]}
        />

        <Project 
          name="Top Down Shooter?" 
          description="Top down shooter game developed with Godot" 
          badges={["Godot", "Game-Dev"]} 
          hyperlink="https://xenoxzard.itch.io/top-down-shooter-rouge-like"
          items={[
            "Made with Godot 3.5",
            "Procedural generation",
            "Advanced pathfinding",
            "State machine behaviors"
          ]}
        />

        <Project 
          name="Translation Service Website" 
          description="Business website for Speedy Translations Services PTE LTD" 
          badges={["React", "Bootstrap", "Web-Dev"]} 
          hyperlink="https://speedytranslation.web.app/"
          items={[
            "Made with React-Bootstrap",
            "Responsive design",
            "Backend powered by Firebase",
            "Sends confirmation email to customer"
          ]}
        />

        <Project 
          name="Efficient Frontier Generator" 
          description="Stocks portfolio generator using modern portfolio theory" 
          badges={["Python", "Quant"]} 
          hyperlink="https://github.com/Sean-G-Han/Efficient-Frontier-Generator"
          items={[
            "Made with Python",
            "Used Numpy and Pandas libraries",
            "Used MPT to calculate performance",
            "Includes backtester to test accuracy"
          ]}
        />

        <Project 
          name="Smart Vertical Farm" 
          description="Reactive Vertical Farm that responds to environment" 
          badges={["Poly", "C/C++", "Robotics"]} 
          items={[
            "Programmed a smart vertical farm",
            "Programmed modes of operation (Automatic/Manual/Calibrate) in C",
            "Designed temperature control systems using PID Controllers"
          ]}
        />

        <Project 
          name="Automated Guided Vehicle" 
          description="Line tracing/follower robot for pick and place operations" 
          badges={["Poly", "Arduino", "Robotics"]} 
          items={[
            "Programmed robot to complete line-tracing operations in Python",
            "Programmed CNC routers and lathe to machine out parts",
            "Constructed a robot to perform simple 'pick and place' operations"
          ]}
        />
      </GridWrapper>
    </div>
  );
}

export default ProjectShowcase;
