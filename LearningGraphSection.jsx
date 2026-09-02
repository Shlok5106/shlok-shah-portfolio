import React from 'react';
import { Cpu, Brain, Network, Cloud, Database, Code, Sparkles, Layers } from 'lucide-react';

const learningNodes = [
  { id: 'ml', title: 'MACHINE LEARNING', desc: 'Algorithm Training & Scikit-Learn Pipelines', icon: Brain, x: '20%', y: '25%' },
  { id: 'nlp', title: 'NATURAL LANGUAGE PROCESSING', desc: 'Text Vectorization, TF-IDF & NLTK', icon: Cpu, x: '80%', y: '25%' },
  { id: 'cloud', title: 'CLOUD COMPUTING', desc: 'AWS Academy Foundations & Cloud Infra', icon: Cloud, x: '15%', y: '75%' },
  { id: 'data', title: 'DATA ANALYTICS', desc: 'Power BI, DAX & Power Query ETL', icon: Database, x: '85%', y: '75%' },
  { id: 'fullstack', title: 'FULL STACK DEV', desc: 'React, Node, Express, MongoDB & MERN', icon: Code, x: '50%', y: '15%' },
  { id: 'intelligent', title: 'INTELLIGENT SYSTEMS', desc: 'IoT Sensors & Automated Decision Loops', icon: Layers, x: '50%', y: '85%' },
];

export default function LearningGraphSection() {
  return (
    <section className="py-24 relative bg-tech-grid border-t border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider">
            <Network className="w-3.5 h-3.5" />
            / CURRENTLY EXPLORING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            AI & Engineering <span className="text-mono-silver">Learning Graph</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A visual overview of Shlok's active technical learning nodes bridging software fundamentals with AI and cloud technology.
          </p>
        </div>

        {/* Learning Graph Visual Area */}
        <div className="relative min-h-[520px] rounded-3xl surface-card p-8 border border-white/10 flex items-center justify-center overflow-hidden">
          
          {/* Subtle Canvas Connecting Line Structure */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/10" strokeWidth="1">
            {/* Cross Lines to Center */}
            <line x1="20%" y1="25%" x2="50%" y2="50%" strokeDasharray="4 4" className="animate-line-pulse" />
            <line x1="80%" y1="25%" x2="50%" y2="50%" strokeDasharray="4 4" className="animate-line-pulse" />
            <line x1="15%" y1="75%" x2="50%" y2="50%" strokeDasharray="4 4" className="animate-line-pulse" />
            <line x1="85%" y1="75%" x2="50%" y2="50%" strokeDasharray="4 4" className="animate-line-pulse" />
            <line x1="50%" y1="15%" x2="50%" y2="50%" strokeDasharray="4 4" className="animate-line-pulse" />
            <line x1="50%" y1="85%" x2="50%" y2="50%" strokeDasharray="4 4" className="animate-line-pulse" />
          </svg>

          {/* Center Hub Node */}
          <div className="relative z-20 p-6 rounded-2xl bg-white text-slate-950 border border-white shadow-2xl text-center space-y-1 transform hover:scale-105 transition-transform duration-300">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-600 block">
              CENTRAL HUB
            </span>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl tracking-tight">
              SHLOK'S<br />LEARNING GRAPH
            </h3>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-white inline-block mt-1">
              B.TECH IT @ INDUS
            </span>
          </div>

          {/* Peripheral Learning Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10 pt-8 sm:pt-0">
            {learningNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="surface-card p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white group-hover:bg-white group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">ACTIVE NODE</span>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-slate-200 transition-colors">
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Currently learning and building toward deeper AI/ML engineering.</span>
        </div>

      </div>
    </section>
  );
}
