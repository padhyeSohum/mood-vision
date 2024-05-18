import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "./scenes/home/index.jsx";
import About from "./scenes/about/index.jsx";
import Brain from './scenes/brain/index.jsx';
function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path ="/brain" element={<Brain />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
