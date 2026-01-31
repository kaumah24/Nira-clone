
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import DocumentAnalyzer from './components/DocumentAnalyzer';
import HomeView from './views/Home';
import ServicesView from './views/ServicesDetail';
import DownloadsView from './views/Downloads';
import AboutView from './views/About';
import ContactView from './views/Contact';
import { generateSpeech, playPCMAudio } from './services/gemini';

export type Page = 'home' | 'services' | 'downloads' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAnalyzerOpen, setIsAnalyzerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleReadAloud = async (text: string) => {
    try {
      const audio = await generateSpeech(text);
      if (audio) await playPCMAudio(audio);
    } catch (error) {
      console.error("Speech error:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onReadAloud={handleReadAloud} onOpenAnalyzer={() => setIsAnalyzerOpen(true)} />;
      case 'services':
        return <ServicesView />;
      case 'downloads':
        return <DownloadsView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onReadAloud={handleReadAloud} onOpenAnalyzer={() => setIsAnalyzerOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <div className="uganda-stripe sticky top-0 z-50"></div>
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onOpenChat={() => setIsChatOpen(true)} 
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      {/* Floating Action for Chat */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-105 z-40 group"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} isDarkMode={isDarkMode} />
      <DocumentAnalyzer isOpen={isAnalyzerOpen} onClose={() => setIsAnalyzerOpen(false)} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
