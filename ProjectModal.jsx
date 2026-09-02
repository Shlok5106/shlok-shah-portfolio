import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ExternalLink, Code, CheckCircle2, HelpCircle, Send, Sparkles, AlertCircle, Info, ChevronRight, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { answerProjectQuestion } from '../../utils/qaEngine';

export default function ProjectModal({ project, initialAskTab = false, onClose }) {
  const [activeTab, setActiveTab] = useState(initialAskTab ? 'ask' : 'overview');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [customQuestion, setCustomQuestion] = useState('');
  const [qaHistory, setQaHistory] = useState([]);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSelectQuestion = (item) => {
    setSelectedQuestion(item.q);
    const result = answerProjectQuestion(project, item.q);
    setCurrentAnswer(result);
    
    // Add to Q&A conversation history
    setQaHistory(prev => [
      ...prev,
      { q: item.q, a: result.answer, source: result.source }
    ]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    const result = answerProjectQuestion(project, customQuestion);
    setQaHistory(prev => [
      ...prev,
      { q: customQuestion, a: result.answer, source: result.source }
    ]);
    setSelectedQuestion(customQuestion);
    setCurrentAnswer(result);
    setCustomQuestion('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-950 border-b border-white/10 flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Verified Project Spec
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Switcher */}
        <div className="flex items-center px-6 sm:px-8 border-b border-white/10 bg-slate-900/60 shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Info className="w-4 h-4" />
            Project Overview & Specs
          </button>

          <button
            onClick={() => setActiveTab('ask')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'ask'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            Ask Me About This Project
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-indigo-500/20 text-indigo-300">
              Interviewer Panel
            </span>
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* TAB 1: OVERVIEW & SPECS */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Short Overview */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                  Project Summary
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                  <h4 className="font-heading font-bold text-sm text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    The Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                  <h4 className="font-heading font-bold text-sm text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    The Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

              </div>

              {/* How it Works Step-by-Step */}
              {project.howItWorks && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                    Execution & Architecture Workflow
                  </h3>
                  <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                    {project.howItWorks}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Key Implemented Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-950 text-indigo-300 border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning & Contribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <h4 className="font-heading font-semibold text-sm text-slate-200">
                    What I Learned
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.learning}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-semibold text-sm text-slate-200">
                    My Contribution
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.myContribution}
                  </p>
                </div>
              </div>

              {/* Demo Availability Banner */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Live Demo Status
                    </span>
                    <span className="text-xs text-amber-400">
                      Live demo not available for this academic/hardware project
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Code
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5">
                      Documentation Verified
                    </span>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: INTERACTIVE "ASK ME ABOUT THIS PROJECT" INTERVIEWER PANEL */}
          {activeTab === 'ask' && (
            <div className="space-y-6">
              
              {/* Interviewer Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/30 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-600 text-white shrink-0 shadow-lg shadow-indigo-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-white">
                    Recruiter Q&A Panel — {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Click any suggested interview question below to inspect Shlok's verified project implementation answers, architecture choices, and lessons learned.
                  </p>
                </div>
              </div>

              {/* Suggested Questions Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-indigo-400" />
                  Suggested Interviewer Questions:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.faq.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuestion(item)}
                      className={`p-3 rounded-xl text-xs text-left font-medium transition-all border flex items-center justify-between gap-2 ${
                        selectedQuestion === item.q
                          ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-md'
                          : 'bg-slate-950 text-slate-300 border-white/10 hover:border-indigo-500/40 hover:bg-slate-900'
                      }`}
                    >
                      <span>{item.q}</span>
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Conversation Feed */}
              {qaHistory.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Interview Exchange History
                  </h4>

                  <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                    {qaHistory.map((exchange, idx) => (
                      <div key={idx} className="space-y-2 text-xs">
                        {/* Question Bubble */}
                        <div className="p-3 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 max-w-xl font-medium">
                          <strong className="text-indigo-400 block mb-1">Recruiter Question:</strong>
                          "{exchange.q}"
                        </div>

                        {/* Answer Bubble */}
                        <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 text-slate-200 max-w-2xl ml-auto space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-1">
                            <span className="font-semibold text-emerald-400">Shlok Shah:</span>
                            <span className="font-mono text-slate-500">{exchange.source}</span>
                          </div>
                          <p className="leading-relaxed">{exchange.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* "Ask Your Own Question" Input Form */}
              <form onSubmit={handleCustomSubmit} className="pt-4 border-t border-white/10 space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Ask your own custom question:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Can you explain the sensor logic or tech stack?"
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Send className="w-4 h-4" />
                    Ask
                  </button>
                </div>
              </form>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
