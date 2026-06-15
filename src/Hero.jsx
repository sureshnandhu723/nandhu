import React from 'react';
import Resume from './assets/Nandhakumar_Resume.pdf';
import profile from './assets/Hero.jpg';

const Hero = () => {
  return (
    <section id="Home" className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
      <div className="lg:col-span-7 space-y-6 z-10">
        <div className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-800/40 px-4 py-1.5 rounded-full text-purple-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"></span>
          Hello, I'm Nandhakumar N
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          I Analyze & Transform <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
            Data Into Insights.
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg max-w-xl">
          I create modern, user-friendly websites and applications that are fast, responsive, and visually stunning. I help businesses make informed decisions by analyzing data, uncovering trends, and creating interactive dashboards. I turn complex datasets into clear, actionable insights.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a href="#Project" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all">
            View My Project&rarr;
          </a>
          <a href={Resume} download className="border border-gray-800 hover:bg-gray-900/50 px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all text-gray-300">
            Download CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </a>
        </div>
      </div>

      {/* Main Feature Image Container */}
      <div className="lg:col-span-5 relative flex justify-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-b from-purple-600/20 to-transparent p-1">
          <div className="w-full h-full bg-[#0d0f1a] rounded-full overflow-hidden border border-gray-800 flex items-center justify-center">
            {/* Replace with your cutout face portrait */}
            <img src={profile} alt="Profile" className="w-full h-full object-cover scale-110 object-top" />
          </div>
        </div>

            </div>

    </section>
  )
};

export default Hero;