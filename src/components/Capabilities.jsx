import React from 'react';
import { Brain, Database, Bot, Layers } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Reasoning + Planning',
    desc: 'Chain-of-thought, tools, and multi-step action planning with guardrails.',
    accent: 'from-fuchsia-400 to-violet-400',
  },
  {
    icon: Database,
    title: 'RAG + Vector Search',
    desc: 'Ingest docs, build embeddings, and retrieve with precision at scale.',
    accent: 'from-cyan-400 to-sky-400',
  },
  {
    icon: Bot,
    title: 'Agent Orchestration',
    desc: 'Autonomous workflows across APIs, data, and services — safely.',
    accent: 'from-emerald-400 to-lime-400',
  },
  {
    icon: Layers,
    title: 'Models + Serving',
    desc: 'Plug in any model (OpenAI, HF, local) and serve with caching & tracing.',
    accent: 'from-amber-400 to-orange-400',
  },
];

const Capabilities = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#0b0b11] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Capabilities</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Everything you need to build, deploy, and scale intelligent systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20"
            >
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${accent} p-3`}>
                <Icon size={22} className="text-black" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
