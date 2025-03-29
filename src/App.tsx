import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Introduction';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className='mb-5 bg-dark text-light'>
      <NavigationBar />
      <div id="introduction">
      <Introduction />
      </div>
    </div>
  );
}


export default App;
