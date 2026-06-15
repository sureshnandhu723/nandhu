import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#07080e]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-17 flex items-center justify-between">
        <div className="text-2xl font-bold flex items-center gap-1 text-white">
          <span className="text-blue-500 text-5xl font-extrabold">N</span>ANDHU
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm font-medium">
          <a href="#Home" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#About" className="text-white hover:text-blue-400 transition-colors">About</a>
          <a href="#Project" className="text-white hover:text-blue-400 transition-colors">Projects</a>
           <a href="#Skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
          <a href="#Contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
        </div>

        <a href="https://wa.me/919080143969" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-green-500 text-white text-sm px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
          WhatsApp
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;