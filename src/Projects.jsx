import React from 'react';
import dashboard from './assets/Olx.png';
import fashion from './assets/Attance.png';
import finpay from './assets/Bike.png';


const Projects = () => {
  const projectList = [
    {
      title: "Dashboard Analytics",
      desc: "Developed an interactive OLX Car Analysis Project Dashboard in Power BI with dynamic visualizations.Used card, line, donut, and slicer charts to highlight trends.",
      tag: "Power BI",
      tagColor: "bg-purple-950 text-purple-400 border-purple-900/50",
      img: dashboard,
      link: "https://github.com/suresh723siva/OLX-Cars"
    },
    {
      title: "Attendance management System",
      desc: "Developed an attendance management system in Excel using VLOOKUP, pivot tables, and conditional formatting.Efficiently tracked and managed employee attendance data with advanced Excel functions.wrong.",
      tag: "Advanced Excel",
      tagColor: "bg-green-950 text-green-400 border-green-900/50",
      img: fashion,
      link: "https://github.com/suresh723siva/Attendance-Management-System"
    },
    {
      title: "Bike Sales",
      desc: "Analyzing sales performance is critical for business growth, and our Bike Sales Report in Power BI does just that! This comprehensive report uses a variety of powerful visuals to provide a clear picture of our bike sales trends.",
      tag: "Power BI",
      tagColor: "bg-blue-950 text-blue-400 border-blue-900/50",
      img: finpay,
      link: "https://github.com/suresh723siva/bikes-sales"
    },
    {
      title: "Creative Agency",
      desc: "Landing page for a digital creative agency." ,        
      tag: "Landing Page",
      tagColor: "bg-pink-950 text-pink-400 border-pink-900/50",
      img: dashboard,
      link: "#"
    }
  ];

  return (
    <section id="Project" className="space-y-8">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
           <div className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-800/40 px-4 py-1.5 rounded-full text-purple-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"></span>
          My Projects
        </div>
          <h2 className="text-3xl font-bold">Browse My Recent Projects</h2>
        </div>
        <a href="#AllProjects" className="text-sm font-medium text-gray-400 hover:text-purple-400 flex items-center gap-1.5 transition-colors">
          View All Projects &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="bg-[#0b0c16] border border-gray-900 rounded-2xl overflow-hidden flex flex-col group hover:border-gray-800 transition-all">
            <div className="p-4 bg-[#0e1020] border-b border-gray-900 flex items-center justify-center overflow-hidden aspect-[4/3]">
              <img 
                src={project.img} 
                alt={project.title} 
                className="rounded-lg object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className={`inline-block text-[10px] px-2.5 py-0.5 rounded-full font-bold border ${project.tagColor}`}>
                  {project.tag}
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{project.desc}</p>
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center self-end hover:bg-purple-600 hover:border-purple-500 text-gray-400 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;