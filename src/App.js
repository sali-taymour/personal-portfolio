import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    </div>
  );
}

export default App;
