import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Sky from './components/Home/Sky';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
  
const App = () => {
  return (
    <>
    <Sky />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
export default App;
