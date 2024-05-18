import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './scenes/home/index.jsx';
import About from './scenes/about/index.jsx';
import Brain from './scenes/brain/index.jsx';
import Personalize from './scenes/personalize/index.jsx'; // Adjust the import path as necessary
import Navbar from './components/Navbar'; // Adjust the import path as necessary

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/about" element={<About />} />
          <Route path="/personalize" element={<Personalize />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
