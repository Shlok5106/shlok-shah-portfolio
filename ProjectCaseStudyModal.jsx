import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, ArrowRight, CheckCircle2, Info, Code } from 'lucide-react';
import { answerProjectQuestion } from '../../utils/qaEngine';
import { modalBackdrop, modalScaleIn } from '../../utils/motionVariants';

export default function ProjectCaseStudyModal({ project, initialAskTab = false, onClose }) {
  const [activeTab, setActiveTab] = useState(initialAskTab ? 'notes' : 'casestudy');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [customQuestion, setCustomQuestion] = useState('');
  const [qaHistory, setQaHistory] = useState([]);

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
    setCustomQuestion('');
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          variants={modalScaleIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-5xl bg-[#050505] border border-[#333333] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-white"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#000000] border-b border-[#333333] flex items-start justify-between gap-4 shrink-0 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[#B5B5B5] uppercase block font-bold">
                {project.category} — {project.year}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#111111] hover:bg-white hover:text-black text-white border border-[#333333] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Bar */}
          <div className="flex items-center px-6 sm:px-8 border-b border-[#333333] bg-[#050505] shrink-0 font-mono text-xs">
            <button
              onClick={() => setActiveTab('casestudy')}
              className={`py-3.5 px-4 font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === 'casestudy'
                  ? 'border-white text-white'
                  : 'border-transparent text-[#777777] hover:text-white'
              }`}
            >
              <Info className="w-4 h-4" />
              CASE STUDY
            </button>

            <button
              onClick={() => setActiveTab('notes')}
              className={`py-3.5 px-4 font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === 'notes'
                  ? 'border-white text-white'
                  : 'border-transparent text-[#777777] hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-white" />
              PROJECT NOTES
            </button>
          </div>

          {/* Scroll Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-10 flex-1 font-sans">
            
            {activeTab === 'casestudy' && (
              <div className="space-y-10">
                
                {/* OVERVIEW */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    OVERVIEW
                  </span>
                  <p className="text-base sm:text-lg text-white leading-relaxed p-6 rounded-2xl bg-[#0A0A0A] border border-[#333333]">
                    {project.shortDescription}
                  </p>
                  <div className="font-mono text-xs text-[#B5B5B5] pt-1">
                    CONTEXT: <span className="text-white">{project.context || "Academic / Portfolio Case Study"}</span>
                  </div>
                </div>

                {/* PROBLEM */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    PROBLEM
                  </span>
                  <div className="p-6 rounded-2xl bg-[#000000] border border-[#333333] text-[#B5B5B5] text-sm leading-relaxed">
                    {project.problem}
                  </div>
                </div>

                {/* TECHNOLOGY */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    TECHNOLOGY
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-[#000000] text-white border border-[#333333]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* HOW IT WORKS */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    HOW IT WORKS
                  </span>
                  <div className="p-6 rounded-2xl bg-[#000000] border border-[#333333] font-mono text-xs text-[#B5B5B5] whitespace-pre-line leading-relaxed">
                    {project.howItWorks}
                  </div>
                </div>

                {/* FEATURES */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    KEY FEATURES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#0A0A0A] border border-[#333333] flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-xs text-white">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RESULTS */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    RESULTS
                  </span>
                  <div className="p-6 rounded-2xl bg-[#000000] border border-[#333333] text-[#B5B5B5] text-sm leading-relaxed space-y-3 font-mono text-xs">
                    <p className="font-sans text-white">Verified project performance metrics:</p>
                    {project.metrics ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#333333]">
                            <span className="text-[#777777] block text-[10px] uppercase">{m.model}</span>
                            <span className="text-white font-bold text-base">{m.accuracy}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#333333] text-[#B5B5B5]">
                        Verified project implementation. Live demo not deployed.
                      </div>
                    )}
                  </div>
                </div>

                {/* WHAT I LEARNED */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                    WHAT I LEARNED
                  </span>
                  <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#333333] text-[#B5B5B5] text-sm leading-relaxed">
                    {project.learning}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="pt-6 border-t border-[#333333] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl btn-bw-primary flex items-center gap-2"
                      >
                        <Code className="w-4 h-4" />
                        VIEW SOURCE CODE
                      </a>
                    ) : (
                      <span className="px-4 py-2.5 rounded-xl bg-[#000000] text-[#777777] border border-[#333333]">
                        Source Code Privately Maintained
                      </span>
                    )}
                  </div>

                  <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-xl btn-bw-secondary"
                  >
                    ← BACK TO PROJECTS
                  </button>
                </div>

              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#000000] border border-[#333333] space-y-2 font-mono">
                  <div className="flex items-center justify-between text-xs text-[#777777]">
                    <span className="text-white font-bold">PROJECT NOTES</span>
                    <span>STRUCTURED Q&A</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Explore {project.title}
                  </h3>
                  <p className="text-xs text-[#B5B5B5]">
                    Select a question below to inspect technical details and implementation notes.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-[#777777] uppercase tracking-wider">
                    Select Question:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.faq.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectQuestion(item)}
                        className={`p-3.5 rounded-xl text-xs text-left font-medium border transition-all flex items-center justify-between gap-2 ${
                          selectedQuestion === item.q
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#000000] text-[#B5B5B5] border-[#333333] hover:border-white'
                        }`}
                      >
                        <span>{item.q}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {qaHistory.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-[#333333] font-mono text-xs">
                    <h4 className="text-[#777777] uppercase tracking-wider font-bold">
                      EXCHANGE LOG
                    </h4>

                    <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                      {qaHistory.map((exchange, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="p-3 rounded-xl bg-[#0A0A0A] text-white border border-[#333333]">
                            <strong className="text-[#777777] block mb-1">&gt; QUESTION:</strong>
                            "{exchange.q}"
                          </div>

                          <div className="p-4 rounded-xl bg-[#000000] text-[#B5B5B5] border border-[#333333] space-y-1">
                            <div className="flex items-center justify-between text-[10px] text-[#777777] border-b border-[#333333] pb-1">
                              <span className="text-white font-bold">SHLOK SHAH (VERIFIED NOTE):</span>
                              <span>{exchange.source}</span>
                            </div>
                            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white pt-1">{exchange.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <form onSubmit={handleCustomSubmit} className="pt-4 border-t border-[#333333] space-y-2 font-mono">
                  <label className="text-xs font-semibold text-[#777777] block">
                    Ask your own question:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="e.g. What dataset or technology was used?"
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#000000] border border-[#333333] text-xs text-white placeholder-[#777777] focus:outline-none focus:ring-1 focus:ring-white"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-xl btn-bw-primary text-xs shrink-0"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
