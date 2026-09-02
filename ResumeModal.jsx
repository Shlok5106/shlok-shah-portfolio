import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { modalBackdrop, modalScaleIn } from '../../utils/motionVariants';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleOpenNewTab = () => {
    window.open(profileData.resumePath, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          variants={modalScaleIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-5xl bg-[#050505] border border-[#333333] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[92vh] max-h-[92vh] text-white"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-[#000000] border-b border-[#333333] flex items-center justify-between gap-4 shrink-0 font-mono text-xs">
            <div className="space-y-1 overflow-hidden">
              <div className="flex items-center gap-2 text-[#777777]">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span className="uppercase truncate">
                  OFFICIAL CURRICULUM VITAE
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-base sm:text-2xl text-white tracking-tight truncate uppercase">
                SHLOK SHAH — RESUME PDF
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#111111] hover:bg-white hover:text-black text-white border border-[#333333] transition-colors shrink-0 focus:outline-none"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Controls Bar */}
          <div className="px-4 py-3 bg-[#0A0A0A] border-b border-[#333333] flex flex-wrap items-center justify-between gap-3 shrink-0 font-mono text-xs">
            <div className="text-[#B5B5B5] truncate font-sans">
              B.Tech IT (Indus University, GPA 8.5/10) · <span className="text-white font-bold">MERN Stack Intern @ Radixweb</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenNewTab}
                className="px-3.5 py-2 rounded-xl btn-bw-primary flex items-center gap-1.5 text-xs font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                OPEN IN NEW TAB ↗
              </button>

              <a
                href={profileData.resumePath}
                download="SHLOK_SHAH_RESUME.pdf"
                className="px-3.5 py-2 rounded-xl btn-bw-secondary flex items-center gap-1.5 text-xs font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                DOWNLOAD PDF ↓
              </a>
            </div>
          </div>

          {/* Document Viewing Area */}
          <div className="flex-1 bg-[#000000] p-2 sm:p-4 relative overflow-hidden flex items-center justify-center">
            <iframe
              src={`${profileData.resumePath}#toolbar=1`}
              title="Shlok Shah Resume PDF"
              className="w-full h-full border-0 rounded-xl bg-white shadow-2xl"
            />
          </div>

          {/* Footer Navigation Bar */}
          <div className="p-4 bg-[#000000] border-t border-[#333333] flex items-center justify-between gap-4 shrink-0 font-mono text-xs">
            <span className="text-[#777777] hidden sm:inline">
              Verified PDF Document · Shlok Shah
            </span>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl btn-bw-secondary ml-auto"
            >
              CLOSE
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
