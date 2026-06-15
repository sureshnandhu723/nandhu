import React from 'react';
import Navbar from './Navbar';
import Profile from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#07080e] text-white font-sans selection:bg-purple-500 selection:text-white antialiased no-scroll-mobile">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-16">
        <Profile />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;