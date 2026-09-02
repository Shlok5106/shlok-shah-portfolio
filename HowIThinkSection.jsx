import React from 'react';
import { ArrowDown } from 'lucide-react';

const methodologySteps = [
  "Understand the problem.",
  "Break it down.",
  "Build the system.",
  "Analyze the result.",
  "Improve.",
  "Learn."
];

export default function HowIThinkSection() {
  return (
    <section className="py-24 relative bg-tech-grid border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        
        {/* Editorial Heading */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest block">
            / METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
            "I don't want to just write code.<br />
            <span className="text-mono-silver">I want to understand the system behind it."</span>
          </h2>
        </div>

        {/* Sequential Methodology Flow */}
        <div className="max-w-md mx-auto space-y-4">
          {methodologySteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="surface-card p-4 rounded-xl border border-white/10 font-mono text-sm sm:text-base font-semibold text-slate-200 hover:border-white/30 transition-all">
                {step}
              </div>
              {idx < methodologySteps.length - 1 && (
                <ArrowDown className="w-4 h-4 text-slate-600 mx-auto animate-bounce" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
