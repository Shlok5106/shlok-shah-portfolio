import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function ResumeSection({ onOpenResumeModal }) {
  return (
    <section id="resume" className="py-28 relative bg-[#050505] text-white border-t border-b border-[#333333]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        <div className="rounded-3xl p-8 sm:p-14 border border-[#333333] relative overflow-hidden bg-[#0A0A0A]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div variants={fadeInUp} custom={0} className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block">
                OFFICIAL DOCUMENTATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
                WANT THE FULL STORY?
              </h2>
              <p className="text-[#B5B5B5] text-base max-w-xl leading-relaxed font-sans">
                Review Shlok Shah's official resume covering B.Tech Information Technology academic records, Radixweb MERN internship, Pruthvi Infotech web dev experience, and project metrics.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 font-mono text-xs">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResumeModal}
                className="w-full py-4 px-6 rounded-2xl btn-bw-primary flex items-center justify-center gap-2 group"
              >
                <Eye className="w-4 h-4" />
                VIEW RESUME <span className="arrow-shift">→</span>
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.96 }}
                href={profileData.resumePath}
                download="SHLOK_SHAH_RESUME.pdf"
                className="w-full py-4 px-6 rounded-2xl btn-bw-secondary flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD RESUME ↓
              </motion.a>
            </motion.div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
