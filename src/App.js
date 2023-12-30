import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
  
  const App = () => {
    return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </>
    );
  }
export default App;
