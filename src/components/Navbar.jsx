import React from 'react';
import { Heart, Phone, Info, Home } from 'lucide-react';

const Navbar = ({ onDonateClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-xl tracking-tight" style={{
          background: 'linear-gradient(90deg, #f97a17, #ffccee)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          NurtureHope NGO
        </a>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="/" className="hover:text-gray-900 transition inline-flex items-center gap-2"><Home size={18}/> Home</a>
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="/our-work" className="hover:text-gray-900 transition">Our Work</a>
          <a href="#impact" className="hover:text-gray-900 transition inline-flex items-center gap-2"><Info size={18}/> About</a>
          <a href="#contact" className="hover:text-gray-900 transition inline-flex items-center gap-2"><Phone size={18}/> Contact</a>
        </nav>
        <button
          onClick={onDonateClick}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold shadow-lg shadow-orange-500/20 text-white"
          style={{ background: 'linear-gradient(90deg, #f97a17, #ffccee)' }}
          aria-label="Donate"
        >
          <Heart className="fill-white/90" size={18}/> Donate
        </button>
      </div>
    </header>
  );
};

export default Navbar;
