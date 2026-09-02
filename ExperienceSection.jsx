import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer, lineDraw } from '../../utils/motionVariants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 relative bg-[#050505] text-white border-t border-b border-[#333333]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
      >
        
        {/* Header */}
        <motion.div variants={fadeInUp} custom={0} className="pb-8 border-b border-[#333333]">
          <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block mb-2">
            PRACTICAL EXPERIENCE
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Flowing Vertical Experience Layout */}
        <div className="space-y-16 max-w-5xl">
          {profileData.experience.map((item, eIdx) => (
            <React.Fragment key={item.id}>
              <motion.div
                variants={fadeInUp}
                custom={eIdx + 1}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-[#333333] hover:border-white transition-colors space-y-8 group relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#333333] pb-6 font-sans">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
                        {item.company}
                      </h3>

                      {item.period.includes('Present') && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white text-black uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                          <span className="status-pulse-dot bg-black" />
                          CURRENT / PRESENT
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-[#B5B5B5] uppercase mt-2 font-mono">
                      {item.role} — <span className="text-[#777777]">{item.type}</span>
                    </h4>
                  </div>

                  <div className="text-xs text-[#B5B5B5] space-y-1 sm:text-right font-mono">
                    <p className="font-bold text-white uppercase">{item.period}</p>
                    <p className="text-[#777777]">{item.location}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 text-base text-[#B5B5B5] font-sans leading-relaxed">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-white font-mono text-sm mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#333333]">
                  {item.skillsUsed.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-[#000000] text-[#B5B5B5] border border-[#333333]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>

              {/* Animated Line Draw Divider */}
              {eIdx < profileData.experience.length - 1 && (
                <motion.div
                  variants={lineDraw}
                  className="h-[1px] bg-[#333333] w-full origin-left my-8"
                />
              )}
            </React.Fragment>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
