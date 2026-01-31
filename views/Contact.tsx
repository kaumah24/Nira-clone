
import React, { useState } from 'react';

const allOffices = [
  { region: 'Central', district: 'Kampala', location: 'Kololo Ceremonial Grounds (Head Office)', contact: '0800 211 700' },
  { region: 'Central', district: 'Wakiso', location: 'Wakiso District Headquarters', contact: '0414 123 456' },
  { region: 'Central', district: 'Mukono', location: 'Mukono District Headquarters', contact: '0414 555 222' },
  { region: 'Central', district: 'Masaka', location: 'Masaka City Administration Block', contact: '0481 999 111' },
  { region: 'Northern', district: 'Gulu', location: 'Gulu District Administration Block', contact: '0471 432 109' },
  { region: 'Northern', district: 'Lira', location: 'Lira Municipal Council Office', contact: '0473 333 444' },
  { region: 'Northern', district: 'Arua', location: 'Arua City Council Administration', contact: '0476 111 222' },
  { region: 'Western', district: 'Mbarara', location: 'Mbarara City Hall, Regional Office', contact: '0485 555 111' },
  { region: 'Western', district: 'Fort Portal', location: 'Kabarole District Headquarters', contact: '0483 121 212' },
  { region: 'Western', district: 'Kabale', location: 'Kabale District Administration', contact: '0486 444 555' },
  { region: 'Eastern', district: 'Mbale', location: 'Mbale City Administration', contact: '0454 999 000' },
  { region: 'Eastern', district: 'Jinja', location: 'Jinja District Headquarters', contact: '0434 222 333' },
  { region: 'Eastern', district: 'Soroti', location: 'Soroti District Administration', contact: '0454 112 233' },
  { region: 'Central', district: 'Entebbe', location: 'Entebbe Municipal Office', contact: '0414 321 000' },
];

const ContactView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const filteredOffices = allOffices.filter(o => 
    o.district.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFindNearest = () => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Simple logic for the demo: "Central" region search
        setTimeout(() => {
          setSearchTerm('Kampala');
          setIsLocating(false);
        }, 1200);
      },
      () => setIsLocating(false)
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 py-24 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-6">NIRA District Offices</h2>
          <p className="text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">NIRA provides services at every District Headquarters across Uganda. Find your local office below.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-800">
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Toll Free Line</p>
                    <p className="text-xl font-black text-blue-900 dark:text-blue-400 leading-tight">0800 211 700</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Official Email</p>
                    <p className="text-lg font-black text-blue-900 dark:text-blue-400 leading-tight">info@nira.go.ug</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Service Hours</h3>
                <p className="text-slate-400 font-medium">Monday - Friday</p>
                <p className="text-white font-black text-xl mb-6">8:00 AM - 5:00 PM</p>
                <p className="text-slate-400 text-sm italic">*Closed on Public Holidays</p>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-800">
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="relative flex-grow">
                  <input 
                    type="text" 
                    placeholder="Search for your district..."
                    className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 rounded-2xl px-12 py-5 outline-none transition-all dark:text-white font-bold"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <button 
                  onClick={handleFindNearest}
                  disabled={isLocating}
                  className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-100 transition-all flex items-center justify-center gap-3 border border-blue-100 dark:border-blue-800"
                >
                  <svg className={`w-5 h-5 ${isLocating ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {isLocating ? 'Locating...' : 'Near Me'}
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-slate-800">
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Region</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">District</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Office Location</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Direct Line</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {filteredOffices.map((off, i) => (
                      <tr key={i} className="group hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
                        <td className="px-6 py-6 text-sm font-bold text-gray-500 dark:text-slate-400">{off.region}</td>
                        <td className="px-6 py-6 text-lg font-black text-slate-900 dark:text-slate-100">{off.district}</td>
                        <td className="px-6 py-6 text-sm font-medium text-gray-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors">{off.location}</td>
                        <td className="px-6 py-6">
                           <span className="text-xs bg-gray-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg font-bold text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {off.contact}
                           </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
