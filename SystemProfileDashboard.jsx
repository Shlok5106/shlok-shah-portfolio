import React from 'react';
import { Terminal, Shield, ArrowRight, Code, Database, Cpu, Brain } from 'lucide-react';

const progressionSteps = [
  { step: '01', title: 'CODE', desc: 'C, C++, Java, Python Fundamentals', icon: Code },
  { step: '02', title: 'DATA', desc: 'Power BI, DAX, Power Query & Analysis', icon: Database },
  { step: '03', title: 'SYSTEMS', desc: 'IoT Sensors, Android SDK & Backend PHP/MERN', icon: Cpu },
  { step: '04', title: 'INTELLIGENCE', desc: 'Machine Learning, NLP & AI Workflows', icon: Brain },
];

export default function SystemProfileDashboard() {
  return (
    <section className="py-20 relative bg-slate-950/80 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-mono text-sm font-bold text-white tracking-wider uppercase">
              SHLOK // SYSTEM PROFILE
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-500 hidden sm:inline">
            SPEC_ID: INDUS_BTECH_IT_2027
          </span>
        </div>

        {/* Major Concept: Progression Concept Bar */}
        <div className="mb-14">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
            ENGINEERING PROGRESSION CONCEPT
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {progressionSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="surface-card p-5 rounded-2xl border border-white/10 space-y-3 relative group">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>PHASE {item.step}</span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>

                  <h4 className="font-heading font-extrabold text-2xl text-white tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical System Specs Grid */}
        <div className="surface-card p-8 rounded-3xl border border-white/10 space-y-6">
          <h4 className="font-mono text-xs font-bold text-slate-400 tracking-wider uppercase border-b border-white/10 pb-4">
            SPECIFICATION MATRIX
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">ROLE</span>
              <span className="text-white font-bold">Software / Data / AI Learner</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">FOCUS</span>
              <span className="text-white font-bold">AI • ML • Data • Web • Systems</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">LANGUAGES</span>
              <span className="text-white font-bold">C • C++ • Java • Python</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">WEB STACK</span>
              <span className="text-white font-bold">HTML • CSS • JS • PHP • React • MERN</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">DATA SUITE</span>
              <span className="text-white font-bold">Power BI • DAX • Power Query</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">CURRENT STATE</span>
              <span className="text-emerald-400 font-bold">LEARNING + BUILDING</span>
            </div>

          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>NEXT TARGET:</span>
            <span className="font-bold text-white bg-slate-900 px-3 py-1 rounded-md border border-white/10">
              DEEPER AI/ML ENGINEERING
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
