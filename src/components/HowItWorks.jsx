import React from 'react';
import { Sparkles, Search, Workflow, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Understand',
    desc: 'Parse intent, extract entities, and plan actions with attention & memory.'
  },
  {
    icon: Search,
    title: 'Retrieve',
    desc: 'Query vector stores and knowledge bases to ground responses in facts.'
  },
  {
    icon: Workflow,
    title: 'Execute',
    desc: 'Call tools, APIs, and services; orchestrate multi-step workflows.'
  },
  {
    icon: CheckCircle2,
    title: 'Verify',
    desc: 'Self-check outputs with constraints, tests, and safety rules.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-[#0b0b11] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A simple loop that scales from chat to enterprise automation.</p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2"><Icon size={20} /></div>
                <span className="text-sm text-white/60">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
