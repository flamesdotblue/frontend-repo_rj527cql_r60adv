import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0"> 
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Zap size={16} className="text-yellow-400" />
            Real-time Reasoning • RAG • Multi-Tool Agent
          </span>
          <h1 className="text-balance font-bold tracking-tight">
            <span className="block text-4xl leading-tight md:text-6xl">The Greatest Unstoppable</span>
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-4xl text-transparent md:text-6xl">
              Quantum Organic AI
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 md:text-lg">
            A futuristic AI agent that reasons, retrieves, and executes across your stack — from dataset to deployment. Ask anything. Orchestrate everything.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black transition hover:bg-white/90"
            >
              <Rocket size={18} className="transition group-hover:translate-x-0.5" />
              Launch Now
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition hover:border-white/40"
            >
              <Shield size={18} className="text-emerald-300" />
              Safe-by-Design
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
