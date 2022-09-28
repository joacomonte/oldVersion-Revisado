
import './App.css';
import RevisadoTitle from './components/RevisadoTitle/RevisadoTitle';
import Shop from './components/Shop/Shop';
import Confiar from './components/Confiar/Confiar';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Sliders from './components/SliderProducts/SliderProducts';

function App() {
  return (
    <div className="App">
{/* 
        <Routes>
          <Route path='/' element={<Navbar/>} />
        </Routes> */}
        
        <RevisadoTitle/>
        <Shop/>
        <Confiar/>
        <Sliders/>
        
    </div>
  );
}

export default App;
