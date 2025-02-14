import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Introduction';
import ProjectShowcase from './ProjectShowcase';
import WorkExperience from './WorkExperience';
import NavigationBar from './NavigationBar';
import Proficiencies from './Proficiencies';

function App() {
  return (
    <div className='my-5'>
      <NavigationBar />
      <div id="introduction">
        <Introduction />
      </div>
      <div id="proficiencies">
        <Proficiencies />
      </div>
      <div id="project">
        <ProjectShowcase />
      </div>
      <div id="workExperience">
        <WorkExperience />
      </div>
    </div>
  );
}


export default App;
