import { RoutePage} from './Routes';
import './App.css';
import { NavBar } from './Components/NavBar/navbar';

function App() {
  return (
    <>
     <NavBar/>
     <RoutePage />
     <div className='copyright'>
      <p className='intro-mini'>© 2024 Ipoola Olajumoke</p>
     </div>
    
    </>
    
  );
}

export default App;

