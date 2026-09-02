import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, ChevronLeft, ChevronRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { credentialsData } from '../../data/credentialsData';
import { modalBackdrop, modalScaleIn } from '../../utils/motionVariants';

export default function CertificateModal({ certificate, onClose, onSelectCertificate }) {
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoadError(false);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  const currentIndex = credentialsData.findIndex(c => c.id === certificate.id || c.title === certificate.title);
  
  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + credentialsData.length) % credentialsData.length;
    onSelectCertificate(credentialsData[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % credentialsData.length;
    onSelectCertificate(credentialsData[nextIdx]);
  };

  const handleOpenNewTab = () => {
    if (certificate.file) {
      window.open(certificate.file, "_blank", "noopener,noreferrer");
    }
  };

  const isImage = certificate.file && (
    certificate.file.toLowerCase().endsWith('.png') ||
    certificate.file.toLowerCase().endsWith('.jpg') ||
    certificate.file.toLowerCase().endsWith('.jpeg') ||
    certificate.file.toLowerCase().endsWith('.webp')
  );

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
                  Credential {currentIndex >= 0 ? currentIndex + 1 : 1} of {credentialsData.length} · {certificate.type}
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-base sm:text-2xl text-white tracking-tight truncate uppercase">
                {certificate.title}
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
            <div className="text-[#B5B5B5] truncate">
              Issuer: <span className="text-white font-bold">{certificate.issuer}</span> ({certificate.date})
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenNewTab}
                className="px-3.5 py-2 rounded-xl btn-bw-primary flex items-center gap-1.5 text-xs font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                OPEN IN NEW TAB ↗
              </button>

              {certificate.file && (
                <a
                  href={certificate.file}
                  download
                  className="px-3.5 py-2 rounded-xl btn-bw-secondary flex items-center gap-1.5 text-xs font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  DOWNLOAD ↓
                </a>
              )}
            </div>
          </div>

          {/* Document Viewing Area */}
          <div className="flex-1 bg-[#000000] p-2 sm:p-4 relative overflow-hidden flex items-center justify-center">
            
            {loadError ? (
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-[#333333] text-center space-y-4 max-w-md">
                <AlertCircle className="w-10 h-10 text-white mx-auto" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-lg text-white uppercase">
                    Certificate could not be loaded.
                  </h4>
                  <p className="text-xs text-[#777777] font-mono">
                    The document could not be rendered directly in the inline frame.
                  </p>
                </div>

                <button
                  onClick={handleOpenNewTab}
                  className="px-6 py-3 rounded-xl btn-bw-primary inline-flex items-center gap-2 font-mono text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  OPEN IN NEW TAB ↗
                </button>
              </div>
            ) : isImage ? (
              <div className="w-full h-full flex items-center justify-center p-2">
                <img
                  src={certificate.file}
                  alt={certificate.title}
                  onError={() => setLoadError(true)}
                  className="max-h-full max-w-full object-contain rounded-xl border border-[#333333] shadow-2xl"
                />
              </div>
            ) : (
              <iframe
                src={certificate.file}
                title={certificate.title}
                onError={() => setLoadError(true)}
                className="w-full h-full border-0 rounded-xl bg-white shadow-2xl"
              />
            )}

          </div>

          {/* Footer Navigation Controls */}
          <div className="p-4 bg-[#000000] border-t border-[#333333] flex items-center justify-between gap-4 shrink-0 font-mono text-xs">
            <button
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl btn-bw-secondary flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              PREVIOUS
            </button>

            <span className="text-[#777777] hidden sm:inline text-center">
              Use navigation buttons or ESC to close
            </span>

            <button
              onClick={handleNext}
              className="px-4 py-2.5 rounded-xl btn-bw-secondary flex items-center gap-1.5"
            >
              NEXT
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
