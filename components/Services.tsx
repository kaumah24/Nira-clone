
import React from 'react';

const services = [
  {
    title: "National ID Card",
    desc: "Application for issuance and renewal of National Identity cards for citizens.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    color: "from-blue-500/20 to-blue-600/5 text-blue-600 dark:text-blue-400 border-blue-100/50 dark:border-blue-900/30"
  },
  {
    title: "Birth Registration",
    desc: "Issuance of birth certificates and registration of new births in Uganda.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    color: "from-green-500/20 to-green-600/5 text-green-600 dark:text-green-400 border-green-100/50 dark:border-green-900/30"
  },
  {
    title: "Death Registration",
    desc: "Registration of deaths and issuance of death certificates across all districts.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    color: "from-slate-500/20 to-slate-600/5 text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800"
  },
  {
    title: "Alien Registration",
    desc: "Legal identification and registration services for non-citizens residing in Uganda.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "from-yellow-500/20 to-yellow-600/5 text-yellow-600 dark:text-yellow-400 border-yellow-100/50 dark:border-yellow-900/30"
  },
  {
    title: "NIN Confirmation",
    desc: "Request for confirmation of National Identification Number for various entities.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-600/5 text-purple-600 dark:text-purple-400 border-purple-100/50 dark:border-purple-900/30"
  },
  {
    title: "Change of Details",
    desc: "Legal procedures for correction of names, dates of birth, and other personal data.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: "from-red-500/20 to-red-600/5 text-red-600 dark:text-red-400 border-red-100/50 dark:border-red-900/30"
  }
];

const Services: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} border rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-all duration-500`}>
            {service.icon}
          </div>
          
          <h3 className="text-2xl font-black text-gray-900 dark:text-slate-100 mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-8 text-sm font-medium">
            {service.desc}
          </p>
          
          <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-extrabold text-sm uppercase tracking-wider group-hover:gap-3 gap-2 transition-all">
              Learn More 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            
            <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
