
import React from 'react';

interface HeroProps {
  onReadAloud: (text: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onReadAloud }) => {
  const welcomeText = "Welcome to the National Identification and Registration Authority (NIRA) Uganda. We are responsible for the establishment and maintenance of the National Identification Register.";
  // Provided base64 image from user
  const heroImage = "data:image/jpeg;base64,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";

  return (
    <section className="relative min-h-[650px] flex items-center text-white overflow-hidden py-20 lg:py-32">
      {/* Real Ugandan Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Uganda National Image" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" className="w-10 h-6 shadow-lg rounded-sm" alt="Uganda Flag" />
              <span className="inline-block px-4 py-1.5 bg-yellow-400 text-black text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-xl shadow-yellow-400/20">
                Republic of Uganda
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              Securing <br />
              <span className="text-yellow-400">Your Identity.</span>
            </h2>
            
            <div className="relative group">
              <p className="text-xl text-blue-50/80 mb-10 max-w-xl leading-relaxed font-medium">
                {welcomeText}
              </p>
              <button 
                onClick={() => onReadAloud(welcomeText)}
                className="absolute -right-12 top-0 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 hidden sm:block border border-white/10"
                title="Read Aloud"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 14.657a1 1 0 01-1.414-1.414A3 3 0 0013.5 10a3 3 0 00-.257-3.243 1 1 0 011.414-1.414A5 5 0 0115.5 10a5 5 0 01-.843 4.657z" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-yellow-400 text-black px-12 py-5 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/30 transform hover:-translate-y-1 active:scale-95">
                REGISTER FOR NIN
              </button>
              <button className="bg-white/5 backdrop-blur-xl border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Forms Portal
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 object-cover shadow-2xl" src={src} alt="Ugandan Citizen" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-2xl">
                  +18M
                </div>
              </div>
              <div>
                <p className="font-black text-white leading-none">18.4 Million</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Verified Ugandans</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-600 rounded-[4rem] rotate-12 opacity-20 blur-3xl"></div>
              <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                 <img 
                  src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Kampala Life" 
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex items-center gap-6 border border-gray-100 dark:border-slate-800">
                  <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Status: Operational</p>
                    <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">Smart Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* National Color Ribbon Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 flex h-2.5 shadow-2xl">
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-[#FCD116]"></div>
        <div className="flex-1 bg-[#CE1126]"></div>
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-[#FCD116]"></div>
        <div className="flex-1 bg-[#CE1126]"></div>
      </div>
    </section>
  );
};

export default Hero;
