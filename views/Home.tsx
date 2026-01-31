
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LatestNews from '../components/LatestNews';

interface HomeViewProps {
  onReadAloud: (text: string) => void;
  onOpenAnalyzer: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onReadAloud, onOpenAnalyzer }) => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackResult, setTrackResult] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setIsTracking(true);
    // Simulate API call to NIRA Backend
    setTimeout(() => {
      setTrackResult("Application Received: Your National ID is currently in the 'Card Printing' stage. Expected delivery to your district office in 14 days.");
      setIsTracking(false);
    }, 1500);
  };

  return (
    <>
      <Hero onReadAloud={onReadAloud} />
      
      {/* Priority Tracking Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-2">Track Application</h3>
              <p className="text-gray-500 dark:text-slate-400 font-medium">Enter your Application ID or NIN to check your status.</p>
            </div>
            <div className="lg:col-span-2">
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="e.g. APP-12345678"
                  className="flex-grow bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
                <button 
                  type="submit"
                  disabled={isTracking}
                  className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isTracking ? 'Searching...' : 'Check Status'}
                </button>
              </form>
              {trackResult && (
                <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <p className="text-blue-900 dark:text-blue-200 font-bold leading-relaxed">{trackResult}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="services-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
              <span className="text-yellow-600 dark:text-yellow-400 font-black uppercase tracking-widest text-xs">Citizen Services</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-slate-100 tracking-tight">How can we help you?</h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-slate-400 font-medium">Digital access to all national identity resources.</p>
          </div>
          <button 
            onClick={onOpenAnalyzer}
            className="group bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all flex items-center gap-3 shadow-xl shadow-blue-700/20"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            AI Document Scan
          </button>
        </div>
        <Services />
      </div>

      <LatestNews onReadAloud={onReadAloud} />
    </>
  );
};

export default HomeView;
