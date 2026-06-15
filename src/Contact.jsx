import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="bg-[#0b0c16] border border-gray-900 rounded-3xl p-8 sm:p-10 flex flex-col xl:flex-row xl:items-center justify-between gap-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Have a <span className="text-purple-500">project</span> in mind?
        </h2>
        <p className="text-gray-400 text-sm">
          Let's work together and bring your creative ideas to life perfectly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap xl:items-center gap-6 text-sm">
        <a href="https://wa.me/919080143969" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-green-700 text-white text-sm px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
          WhatsApp
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-900 sm:pl-6">
          <div className="space-y-1">
            <div className="text-gray-500 text-xs font-medium flex items-center gap-1.5">📧 Email</div>
            <a href="mailto:sureshnandhu723@" className="text-gray-300 font-medium hover:text-purple-400 transition-colors text-xs">sureshnandhu723@gmail.com</a>
          </div>
          


          <div className="space-y-1">
            <div className="text-gray-500 text-xs font-medium flex items-center gap-1.5">📞 Phone</div>
            <a href="tel:+919080143969" className="text-gray-300 font-medium hover:text-purple-400 transition-colors text-xs">+91 90801 43969</a>
          </div>
          
          <div className="space-y-1">
            <div className="text-gray-500 text-xs font-medium flex items-center gap-1.5">📍 Location</div>
            <div className="text-gray-300 font-medium text-xs">Salem, TamilNadu, India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;