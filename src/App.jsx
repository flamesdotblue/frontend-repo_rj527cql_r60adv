import React from 'react';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CallToAction from './components/CallToAction.jsx';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b11]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-400 to-cyan-400">
              <Sparkles size={18} className="text-black" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">Quantum Organic AI</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#cta" className="hover:text-white">Get started</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Capabilities />
        <HowItWorks />
        <CallToAction />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Quantum Organic AI • Built for exploration and inspiration.
      </footer>
    </div>
  );
}

export default App;
