
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <h2 className="text-xl font-bold tracking-tight">NIRA UGANDA</h2>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              NIRA is established under the Registration of Persons Act, 2015 to create, manage, maintain and operate the National Identification Register of Uganda.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-slate-200 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('downloads')} className="hover:text-blue-400 transition-colors">Downloads</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-slate-200 uppercase tracking-widest text-xs">Official Contact</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                Kololo Ceremonial Grounds, Kampala
              </li>
              <li className="flex gap-3 text-blue-400 font-bold">
                0800 211 700 (Toll Free)
              </li>
              <li className="flex gap-3">
                info@nira.go.ug
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} National Identification and Registration Authority (NIRA) Uganda.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
