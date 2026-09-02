import React, { useState, useEffect } from 'react';
import { Terminal, Check, Sparkles } from 'lucide-react';

const initLogs = [
  "loading developer_profile...",
  "loading verified_projects...",
  "loading industry_experience...",
  "loading technical_stack...",
  "loading ai_learning_path...",
  "system_ready ✓"
];

export default function SystemInitializer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentStep < initLogs.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setIsDone(true);
    }
  }, [currentStep]);

  const progressPct = Math.round(((currentStep + 1) / initLogs.length) * 100);

  return (
    <div className="my-12 relative max-w-4xl mx-auto px-4">
      <div className="surface-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-slate-400" />
            <span className="font-mono text-xs font-bold text-slate-300 tracking-wider uppercase">
              INITIALIZING SHLOK.SH...
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
            <span>SYS_VER: 2026.1</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              ONLINE
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400">
            <span>SEQUENCE_PROGRESS</span>
            <span className="text-white font-bold">{progressPct}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-white/5">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Log Window */}
        <div className="font-mono text-xs leading-relaxed space-y-2 bg-slate-950/80 p-4 rounded-xl border border-white/5 text-slate-400 max-h-40 overflow-y-auto">
          {initLogs.slice(0, currentStep + 1).map((log, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-slate-600">&gt;</span>
              <span className={idx === currentStep ? 'text-white font-semibold' : 'text-slate-400'}>
                {log}
              </span>
              {idx === initLogs.length - 1 && isDone && (
                <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
              )}
            </div>
          ))}
        </div>

        {/* Transition Headline */}
        {isDone && (
          <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs sm:text-sm font-heading font-semibold text-slate-200 animate-fadeIn">
            <span>Here is what I'm building:</span>
            <span className="text-slate-500 font-mono text-xs">CODE → DATA → SYSTEMS → INTELLIGENCE</span>
          </div>
        )}

      </div>
    </div>
  );
}
