import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-black bg-white">
      <Navbar />
      
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
