
import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <div className="inline-block px-4 py-1.5 bg-yellow-400 text-black rounded-xl mb-6 font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-yellow-400/20">
              Authority Profile
            </div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-slate-100 mb-10 tracking-tight leading-[1.1]">Defining Ugandan Identity Since 2015.</h2>
            <div className="space-y-8 text-xl text-gray-600 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                The National Identification and Registration Authority (NIRA) is the apex government body mandated to establish a credible National Identification Register.
              </p>
              <p>
                From capturing biometric data for National IDs to registering vital life events like births and deaths, we ensure every person in Uganda has a legal, secure, and verifiable identity.
              </p>
            </div>
          </div>
          
          <div className="grid gap-8 relative">
             <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-500/5 rounded-[4rem] blur-3xl -z-10"></div>
             
             <div className="bg-slate-900 dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl transform rotate-1 border border-white/10 group hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <h3 className="font-black text-white text-3xl mb-4 tracking-tight">Our Vision</h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">To be the most professional and trusted authority for legal identity for all persons in Uganda.</p>
             </div>
             
             <div className="bg-blue-600 p-12 rounded-[3rem] shadow-2xl transform -rotate-2 border border-blue-400 group hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-black/10 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="font-black text-white text-3xl mb-4 tracking-tight">Our Mission</h3>
                <p className="text-blue-50 text-lg font-medium leading-relaxed">To provide secure identity for all through efficient registration and management of high-quality data.</p>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 pt-32">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Our Pillars of Excellence</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-xl">The core values that drive our service delivery daily.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { title: "Integrity", desc: "Upholding high moral principles and total transparency.", icon: "I" },
              { title: "Service", desc: "Selfless commitment to the people of Uganda.", icon: "S" },
              { title: "Professionalism", desc: "Expert competence in every registration procedure.", icon: "P" },
              { title: "Security", desc: "Absolute protection of national biometric records.", icon: "S" }
            ].map((v, i) => (
              <div key={i} className="group text-center">
                <div className="w-24 h-24 bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-slate-900 dark:text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-blue-600/20 group-hover:-translate-y-2 transition-all duration-500">
                  <span className="text-4xl font-black">{v.icon}</span>
                </div>
                <h3 className="font-black text-2xl text-slate-900 dark:text-slate-100 mb-4">{v.title}</h3>
                <p className="text-gray-500 dark:text-slate-400 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
