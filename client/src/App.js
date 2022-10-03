
import './App.css';
import RevisadoTitle from './components/RevisadoTitle/RevisadoTitle';
import Shop from './components/Shop/Shop';
import Confiar from './components/Confiar/Confiar';
import Sliders from './components/SliderProducts/SliderProducts';
import HowToPost from './components/HowToPost/HowToPost';
import WhoWeAre from './components/WoWeAre/WhoWeAre';
import NuestraApp from './components/NuestraApp/NuestraApp';
import Banner1 from './components/Banner1/Banner1';


function App() {
  return (
    <div className="App">


        <RevisadoTitle/>
        <Shop/>
        <Banner1/>
        {/* <Confiar/> */}
        <Sliders/>
        <HowToPost/>
        <WhoWeAre/>
        <NuestraApp/>
    </div>
  );
}

export default App;
