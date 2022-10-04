
import './App.css';
import MenuBar from './components//MenuBar/MenuBar';
import Shop from './components/Shop/Shop';
import Confiar from './components/Confiar/Confiar';
import Sliders from './components/SliderProducts/SliderProducts';
import HowToPost from './components/HowToPost/HowToPost';
import WhoWeAre from './components/WoWeAre/WhoWeAre';
import NuestraApp from './components/NuestraApp/NuestraApp';
import Banners from './components/Banners/Banners';


function App() {
  return (
    <div className="App">


        <MenuBar/>
        <Shop/>
        <Banners/>
        {/* <Confiar/> */}
        <Sliders/>
        <HowToPost/>
        <WhoWeAre/>
        <NuestraApp/>
    </div>
  );
}

export default App;
