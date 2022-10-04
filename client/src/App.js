
import './App.css';

import HomePage from './pages/HomePage';

import  { Routes, Route } from "react-router-dom";

import ShopPage from './pages/ShopPage';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/shop-page' element={<ShopPage/>} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
