import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '../../data/projectsData';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer, clipPathReveal } from '../../utils/motionVariants';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="py-28 relative bg-[#050505] text-white border-t border-b border-[#333333]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeInUp} custom={0} className="pb-8 border-b border-[#333333]">
          <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block mb-2">
            FEATURED WORK & CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            SELECTED PROJECTS
          </h2>
        </motion.div>

        {/* Large Editorial Project Blocks */}
        <div className="space-y-28">
          {projectsData.map((project, pIdx) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              custom={pIdx + 1}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="project"
              data-cursor-text="VIEW"
              className={`p-8 sm:p-14 rounded-3xl bg-[#0A0A0A] border transition-colors duration-300 group space-y-8 relative overflow-hidden ${
                project.id === 'fake-review-detection'
                  ? 'border-white/60 shadow-2xl'
                  : 'border-[#333333] hover:border-white'
              }`}
            >
              
              {/* Category, Featured Badge & Year */}
              <div className="flex items-center justify-between font-mono text-xs text-[#B5B5B5] border-b border-[#333333] pb-4">
                <div className="flex items-center gap-3">
                  {project.id === 'fake-review-detection' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-black font-bold text-[10px] uppercase">
                      FEATURED MAIN PROJECT
                    </span>
                  )}
                  <span className="font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                </div>
                <span>{project.year}</span>
              </div>

              {/* Title & Overview */}
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-3xl sm:text-5xl text-white group-hover:text-[#CCCCCC] transition-colors tracking-tight uppercase">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-[#B5B5B5] max-w-3xl leading-relaxed font-sans">
                  {project.shortDescription}
                </p>
              </div>

              {/* MASKED CLIP-PATH VISUAL REVEAL */}
              
              {/* 1. Fake Review Detection ML Visual */}
              {project.id === 'fake-review-detection' && (
                <motion.div
                  variants={clipPathReveal}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#333333] space-y-4 font-mono text-xs grayscale-media group-hover:scale-[1.03]"
                >
                  <div className="flex flex-wrap items-center justify-between border-b border-[#333333] pb-3 text-[#B5B5B5] gap-2">
                    <span>DATASET: 40K+ REVIEWS</span>
                    <span>3 MODELS EVALUATED</span>
                    <span>BEST ACCURACY: 85.66%</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {project.metrics.slice(0, 3).map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#050505] border border-[#333333] space-y-1">
                        <span className="text-[#777777] text-[10px] uppercase block">{m.model}</span>
                        <span className="text-2xl font-bold font-heading text-white">{m.accuracy}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 2. Smart Parking Slot Visual */}
              {project.id === 'smart-parking' && (
                <motion.div
                  variants={clipPathReveal}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#333333] space-y-3 font-mono text-xs grayscale-media group-hover:scale-[1.03]"
                >
                  <span className="text-[#777777] uppercase block border-b border-[#333333] pb-2">
                    REAL-TIME PARKING BAY STATUS PREVIEW
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {project.slotStatusPreview.map((slot, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border flex flex-col justify-between h-20 ${
                          slot.status === 'FREE'
                            ? 'bg-[#050505] border-white text-white font-bold'
                            : 'bg-[#050505] border-[#333333] text-[#777777]'
                        }`}
                      >
                        <span className="font-bold text-white text-sm">{slot.slot}</span>
                        <span className="text-[11px] font-bold uppercase">{slot.status}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 3. Credit Card Usage Dashboard Visual */}
              {project.id === 'credit-card-dashboard' && (
                <motion.div
                  variants={clipPathReveal}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#333333] space-y-3 font-mono text-xs grayscale-media group-hover:scale-[1.03]"
                >
                  <span className="text-[#777777] uppercase block border-b border-[#333333] pb-2">
                    POWER BI FINANCIAL ANALYTICS METRICS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-[#050505] border border-[#333333]">
                      <span className="text-[#777777] block">SPENDING TRENDS</span>
                      <span className="text-xl font-bold text-white font-heading">CATEGORIZED</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#050505] border border-[#333333]">
                      <span className="text-[#777777] block">CREDIT LIMITS</span>
                      <span className="text-xl font-bold text-white font-heading">ANALYZED</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#050505] border border-[#333333]">
                      <span className="text-[#777777] block">RISK FLAGS</span>
                      <span className="text-xl font-bold text-white font-heading">SEGMENTED</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 4. Reminder Mobile App Phone Visual */}
              {project.id === 'reminder-app' && (
                <motion.div
                  variants={clipPathReveal}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#333333] font-mono text-xs space-y-3 grayscale-media group-hover:scale-[1.03]"
                >
                  <span className="text-[#777777] uppercase block border-b border-[#333333] pb-2">
                    ANDROID APP INTERFACE MOCKUP
                  </span>
                  <div className="max-w-xs mx-auto p-4 rounded-2xl bg-[#050505] border border-[#333333] space-y-2">
                    <div className="flex items-center justify-between text-[#B5B5B5] pb-2 border-b border-[#333333]">
                      <span className="font-bold text-white">REMINDER</span>
                      <span>10:30 AM</span>
                    </div>
                    <div className="text-[#B5B5B5] font-sans text-xs">
                      <p className="font-bold text-white">{project.previewCard.title}</p>
                      <p className="text-[#777777]">{project.previewCard.date}</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded bg-[#333333] text-[10px] text-white">
                        NOTIFICATION ENABLED
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 5. Smart Expense Tracker Browser Visual */}
              {project.id === 'smart-expense-tracker' && (
                <motion.div
                  variants={clipPathReveal}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#333333] font-mono text-xs space-y-3 grayscale-media group-hover:scale-[1.03]"
                >
                  <span className="text-[#777777] uppercase block border-b border-[#333333] pb-2">
                    WEB APPLICATION BROWSER PREVIEW
                  </span>
                  <div className="p-4 rounded-xl bg-[#050505] border border-[#333333] space-y-2">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-[#333333]">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="text-[10px] text-[#777777] ml-2">expense_tracker.php</span>
                    </div>
                    <div className="flex items-center justify-between text-[#B5B5B5] font-sans text-xs pt-1">
                      <span>CATEGORIES: FOOD • TRAVEL • BILLS</span>
                      <span className="font-mono text-white">PHP BACKEND</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 6. Library Management Code Visual */}
              {project.id === 'library-management' && (
                <motion.div
                  variants={clipPathReveal}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#333333] font-mono text-xs space-y-3 grayscale-media group-hover:scale-[1.03]"
                >
                  <span className="text-[#777777] uppercase block border-b border-[#333333] pb-2">
                    PYTHON MODULAR ARCHITECTURE
                  </span>
                  <div className="p-4 rounded-xl bg-[#050505] border border-[#333333] space-y-1 text-[#B5B5B5]">
                    <p><span className="text-white">class</span> Library:</p>
                    <p className="pl-4">def displayAvailableBooks(self): ...</p>
                    <p className="pl-4">def issueBook(self, bookName): ...</p>
                    <p><span className="text-white">class</span> Student:</p>
                    <p className="pl-4">def requestBook(self): ...</p>
                  </div>
                </motion.div>
              )}

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-[#000000] text-[#B5B5B5] border border-[#333333]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Inverting B&W Action Buttons & Direct GitHub Button */}
              <div className="pt-6 border-t border-[#333333] flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
                <div className="flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onSelectProject(project, false)}
                    className="px-6 py-3.5 rounded-xl btn-bw-primary flex items-center gap-2 group/btn font-bold"
                  >
                    READ CASE STUDY
                    <span className="arrow-shift">→</span>
                  </motion.button>

                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3.5 rounded-xl btn-bw-secondary flex items-center gap-2 font-mono"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GITHUB
                  </a>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectProject(project, true)}
                  className="px-4 py-3.5 rounded-xl btn-bw-secondary flex items-center gap-2 font-mono"
                >
                  PROJECT NOTES
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
