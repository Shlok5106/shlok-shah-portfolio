import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, ShieldCheck } from 'lucide-react';
import { credentialsData } from '../../data/credentialsData';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function CertificatesSection({ onSelectCertificate }) {
  return (
    <section id="credentials" className="py-28 relative bg-[#F5F5F5] text-black border-t border-b border-[#DDDDDD]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
      >
        
        {/* Header */}
        <motion.div variants={fadeInUp} custom={0} className="pb-8 border-b border-[#DDDDDD]">
          <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block mb-2">
            VERIFIED CREDENTIALS & TRAINING
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-black tracking-tight">
            CREDENTIALS
          </h2>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentialsData.map((cred, cIdx) => (
            <motion.div
              key={cred.id}
              variants={fadeInUp}
              custom={cIdx + 1}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectCertificate(cred)}
              data-cursor="credential"
              data-cursor-text="EXPLORE"
              className="p-8 rounded-3xl bg-white border border-[#DDDDDD] hover:border-black transition-colors flex flex-col justify-between space-y-6 group grayscale-media cursor-pointer"
            >
              <div className="space-y-4 font-mono text-xs">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#DDDDDD] pb-4">
                  <span className="font-bold text-[#444444] uppercase">
                    {cred.type}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-black" />
                </div>

                {/* Title & Issuer */}
                <h3 className="font-heading font-extrabold text-xl text-black uppercase">
                  {cred.title}
                </h3>
                <p className="text-[#777777]">
                  ISSUER: <span className="text-black font-bold">{cred.issuer}</span>
                </p>

                {/* Description */}
                <p className="text-xs text-[#444444] leading-relaxed font-sans">
                  {cred.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#DDDDDD] flex items-center justify-between font-mono text-xs">
                <span className="text-[#777777]">{cred.date}</span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={() => onSelectCertificate(cred)}
                    className="px-3.5 py-2.5 rounded-xl btn-bw-on-white flex items-center gap-1.5 text-xs group/btn"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    VIEW <span className="arrow-shift">→</span>
                  </motion.button>

                  {cred.verifyUrl && (
                    <motion.a
                      whileTap={{ scale: 0.94 }}
                      href={cred.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl btn-bw-on-white flex items-center gap-1.5 text-xs"
                    >
                      CREDLY
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
