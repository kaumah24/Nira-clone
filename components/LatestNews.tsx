
import React from 'react';

const newsItems = [
  {
    id: '1',
    title: "Mass Enrollment for National ID Renewal to Start in 2024",
    date: "Dec 12, 2023",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    title: "NIRA Extends Mobile Enrollment Services to Northern Districts",
    date: "Nov 28, 2023",
    category: "Updates",
    image: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    title: "Important Notice: Update on Alien Registration Procedures",
    date: "Nov 15, 2023",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&q=80&w=800"
  }
];

interface LatestNewsProps {
  onReadAloud: (text: string) => void;
}

const LatestNews: React.FC<LatestNewsProps> = ({ onReadAloud }) => {
  return (
    <section className="bg-gray-50/50 dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-xs">Press Center</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-slate-100 tracking-tight">Latest News & Events</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-3 text-lg">Real-time updates on national registration activities.</p>
          </div>
          <button className="bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl border border-gray-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm">
            Explore All Articles
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {newsItems.map((item) => (
            <div key={item.id} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-white/20">
                    {item.category}
                  </span>
                </div>
                
                <button 
                  onClick={() => onReadAloud(`${item.title}. Published on ${item.date}`)}
                  className="absolute bottom-6 right-6 bg-yellow-400 text-black p-4 rounded-2xl shadow-xl transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 hover:bg-yellow-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 14.657a1 1 0 01-1.414-1.414A3 3 0 0013.5 10a3 3 0 00-.257-3.243 1 1 0 011.414-1.414A5 5 0 0115.5 10a5 5 0 01-.843 4.657z" /></svg>
                </button>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                   <p className="text-xs text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest">{item.date}</p>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 dark:text-slate-100 mb-6 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <button className="flex items-center gap-3 text-blue-600 dark:text-blue-400 text-sm font-black uppercase tracking-widest group/btn">
                  Continue Reading
                  <div className="w-10 h-0.5 bg-blue-600/20 dark:bg-blue-400/20 group-hover/btn:w-14 group-hover/btn:bg-blue-600 transition-all duration-500"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
