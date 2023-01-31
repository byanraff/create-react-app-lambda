import './App.css';
import Identity from './Identity';
import About from './About';
import Interest from './Interest';
import Socials from './Socials';

function App() {
  return (
    <div className="App">
      <Identity />
      <div className='About' >
        <About />
        <Interest />
      </div>
      <Socials /> 
    </div>
  );
}

export default App;
