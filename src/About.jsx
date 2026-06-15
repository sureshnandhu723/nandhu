import React from 'react';

const About = () => {
  const stats = [
    { icon: "👜", value: "03+", label: "Projects Completed", color: "bg-sky-950/40 text-sky-400" },
    { icon: "🎓", value: "Fresher", label: "Ready to Learn", color: "bg-sky-950/40 text-sky-400" },
    { icon: "🎯", value: "Focused", label: "Visualization,Dashboard,insights", color: "bg-sky-950/40 text-sky-400" },
  ];

  return (
    <section id="About" className="bg-[#111320] border border-gray-900 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 space-y-4">
         <div className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-800/40 px-4 py-1.5 rounded-full text-purple-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"></span>
          About Me
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          I am a <span className="text-purple-500">Fresher</span> Data Analyst
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-400">
          <p>
            I am currently pursuing MCA and building my expertise in Power BI,
            Excel, SQL, and dashboard development. As a fresher, I enjoy learning
            new tools and turning data into meaningful insights.
          </p>
          <p>
            I am passionate about data visualization, business intelligence, and
            designing reports that help teams make smarter decisions.
          </p>
          <p>
            I am eager to work on real-world projects, gain practical experience,
            and grow my analytical and problem-solving skills.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="https://www.linkedin.com/in/nandha-kumar-n-9136432bb?"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-700 px-4 py-2 text-sm text-white hover:bg-blue-500 hover:border-blue-500 transition"
          >
            <span>🔗</span>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-[#0d1020] border border-gray-900 p-6">
            <div className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-800/40 px-4 py-1.5 rounded-full text-purple-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"></span>
          Education
        </div>
            <div className="space-y-3 p-6 text-gray-400 text-sm leading-relaxed">
              <div>
                <div className="font-semibold text-white">B.Sc Computer Science</div>
                <div>Government Arts and Science College, Komarapalayam</div>
                <div>Periyar University | 2021 - 2024</div>
              </div>
              <div>
                <div className="font-semibold text-white">MCA - Master of Computer Applications</div>
                <div>RVS College of Engineering and Technology, Coimbatore</div>
                <div>Anna University | 2025 - 2027</div>
              </div>
            </div>
          </div>
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0e1020] border border-gray-900 p-6 rounded-2xl flex items-center gap-4 hover:border-gray-800 transition-colors">
            <div className={`p-3.5 ${stat.color} rounded-xl text-xl`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;