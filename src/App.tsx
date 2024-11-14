import React from 'react';
import './index.css';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
//import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
