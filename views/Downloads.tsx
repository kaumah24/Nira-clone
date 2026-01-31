
import React, { useState } from 'react';

const forms = [
  { id: 'NS3', name: 'Application Form for National ID (Citizens)', size: '2.4 MB', type: 'PDF' },
  { id: 'NS1', name: 'Birth Registration Form', size: '1.8 MB', type: 'PDF' },
  { id: 'DS1', name: 'Death Registration Form', size: '1.5 MB', type: 'PDF' },
  { id: 'AL1', name: 'Alien Registration Application', size: '2.1 MB', type: 'PDF' },
  { id: 'CH1', name: 'Change of Particulars Form', size: '3.0 MB', type: 'PDF' },
  { id: 'RE1', name: 'Replacement of Lost ID Form', size: '1.2 MB', type: 'PDF' },
];

const DownloadsView: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredForms = forms.filter(f => f.name.toLowerCase().includes(search.toLowerCase()) || f.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-white dark:bg-slate-950 py-24 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-blue-950 rounded-[3rem] p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-500/20 rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-300 text-xs font-black uppercase tracking-[0.2em]">Official Archive</span>
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tight">Form Center</h2>
              <p className="text-slate-400 text-xl font-medium max-w-xl leading-relaxed">
                Access verified digital application forms. Fill, sign, and submit at your nearest NIRA station.
              </p>
            </div>
            
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search by Form Code (e.g. NS3)..." 
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-lg text-white placeholder-white/40 focus:bg-white focus:text-slate-900 focus:outline-none transition-all shadow-2xl backdrop-blur-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl shadow-xl">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-10 -mr-64 -mt-64"></div>
        </div>

        <div className="grid gap-6">
          {filteredForms.map((form) => (
            <div key={form.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-gray-100 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-500">
              <div className="flex items-center gap-8 mb-6 sm:mb-0">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 font-black text-lg shadow-sm border border-blue-100/50 dark:border-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {form.type}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center border-4 border-white dark:border-slate-900">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{form.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 font-black px-3 py-1 rounded-full uppercase tracking-widest">{form.id}</span>
                    <span className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest">{form.size}</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xl group-hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Download
              </button>
            </div>
          ))}
          
          {filteredForms.length === 0 && (
            <div className="py-32 text-center bg-gray-50 dark:bg-slate-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-slate-800">
              <div className="w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-xl font-bold">No documents found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadsView;
