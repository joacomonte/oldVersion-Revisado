
import './App.css';
import RevisadoTitle from './components/RevisadoTitle/RevisadoTitle';
import Shop from './components/Shop/Shop';
import Confiar from './components/Confiar/Confiar';
import Sliders from './components/SliderProducts/SliderProducts';
import HowToPost from './components/HowToPost/HowToPost';
import WhoWeAre from './components/WoWeAre/WhoWeAre';


function App() {
  return (
    <div className="App">


        <RevisadoTitle/>
        <Shop/>
        <Confiar/>
        <Sliders/>
        <HowToPost/>
        <WhoWeAre/>

        
    </div>
  );
}

export default App;
