import GridWrapper from "./GridWrapper";
import Project from "./Project";

function ProjectShowcase() {
    return (
      <div className="py-3">
        <h1 className="text-center">Projects</h1>
        <GridWrapper>
          <Project name="20XX Space Bounty" description="2D platformer shooter roguelike developed as part of Project:Dev" hyperlink='https://xenoxzard.itch.io/20xx-space-bounty'>
            <li>Made with Godot 4.0</li>
            <li>Procedural generation</li>
            <li>Power-up upgrades</li>
            <li>Advanced pathfinding</li>
          </Project>
          <Project name="Top Down Shooter?" description="Top down shooter developed as part of NUS Game Development Group" hyperlink='https://xenoxzard.itch.io/top-down-shooter-rouge-like'>
            <li>Made with Godot 3.5</li>
            <li>Procedural generation</li>
            <li>Advanced pathfinding</li>
            <li>State machines behaviours</li>
          </Project>
          <Project name="Translation Service Website" description="Business website for Speedy Translations Services PTE LTD" hyperlink='https://speedytranslation.web.app/'>
            <li>Made with React-Bootstrap</li>
            <li>Responsive design</li>
            <li>Backend powered by Firebase</li>
            <li>Sends confirmation email to customer</li>
          </Project>
          <Project name="Efficient Frontier Generator" description="Stocks portfolio generator using modern portfolio theory" hyperlink='https://github.com/Sean-G-Han/Efficient-Frontier-Generator'>
            <li>Made with Python</li>
            <li>Used Numpy and Pandas for calculation</li>
            <li>Used MPT to calculate performance</li>
            <li>Includes backtester to test accuracy</li>
          </Project>
        </GridWrapper>
      </div>
    );
}

export default ProjectShowcase;