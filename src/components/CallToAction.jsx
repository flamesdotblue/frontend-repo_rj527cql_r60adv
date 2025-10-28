import React from 'react';
import { Rocket } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" className="relative w-full bg-gradient-to-b from-[#0b0b11] to-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Build your unstoppable AI
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Spin up an agent that connects models, data, and tools — with observability, safety, and speed baked in.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-black transition hover:bg-white/90"
          >
            <Rocket size={18} className="transition group-hover:translate-x-0.5" />
            Get Started Free
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-white backdrop-blur transition hover:border-white/40"
          >
            View Docs
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-sm text-white/80">Production-grade</p>
            <p className="text-xs text-white/60">Observability, retries, caching, and rate limiting.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-sm text-white/80">Secure by default</p>
            <p className="text-xs text-white/60">Sandboxed tools and least-privilege credentials.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-sm text-white/80">Model-agnostic</p>
            <p className="text-xs text-white/60">Bring your own providers or run local models.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
