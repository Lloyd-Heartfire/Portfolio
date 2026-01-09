import React from 'react';
import Background from './components/Background/Background';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-cyan-400 overflow-hidden">
      <Background />
      <Navigation />
      <div id="home">
        <Home />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;