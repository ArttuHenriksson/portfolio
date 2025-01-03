import React from 'react';
import './index.css';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 relative">
      <Header />
      <div className="flex-1 relative">
        <main className="flex-1 px-4 mt-16 mb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
