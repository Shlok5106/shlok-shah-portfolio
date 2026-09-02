import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profileData';
import { heroTextReveal, fadeInUp, staggerContainer } from '../../utils/motionVariants';

const techBadges = [
  "C / C++", "JAVA", "PYTHON", "REACT", "JAVASCRIPT", "POWER BI", "DATA SCIENCE"
];

export default function HeroSection({ onOpenResumeModal }) {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-36 pb-28 md:pt-44 md:pb-36 bg-[#050505] text-white overflow-hidden min-h-[92vh] flex flex-col justify-between">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 relative z-10"
      >
        
        {/* Prominent Visual Anchor Above the Fold */}
        <div className="space-y-4 overflow-hidden">
          <motion.h1
            variants={heroTextReveal}
            custom={0}
            className="text-hero-giant font-extrabold text-white tracking-tighter uppercase font-heading"
          >
            SHLOK SHAH
          </motion.h1>

          <motion.h2
            variants={heroTextReveal}
            custom={1}
            className="text-editorial-headline font-extrabold font-heading text-[#B5B5B5] uppercase"
          >
            SOFTWARE & WEB DEVELOPER
          </motion.h2>
        </div>

        {/* Headline Statement */}
        <motion.div variants={fadeInUp} custom={2} className="space-y-3 max-w-4xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight uppercase">
            I BUILD DIGITAL EXPERIENCES, SOFTWARE AND DATA-DRIVEN SOLUTIONS.
          </h3>
          <p className="text-base sm:text-xl text-[#B5B5B5] leading-relaxed font-sans max-w-3xl">
            Computer Science Engineering student with hands-on experience in software development, web technologies, and data analysis.
          </p>
        </motion.div>

        {/* Technologies List */}
        <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
          {techBadges.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-xl bg-[#0A0A0A] border border-[#333333] text-[#CCCCCC]">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons & Social Profile Links */}
        <motion.div variants={fadeInUp} custom={4} className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#333333]">
          <motion.a
            whileTap={{ scale: 0.96 }}
            href="#projects"
            onClick={handleScrollToWork}
            data-cursor="project"
            data-cursor-text="VIEW"
            className="px-8 py-4 rounded-xl btn-bw-primary flex items-center gap-2 group font-sans"
          >
            VIEW PROJECTS <span className="arrow-shift">→</span>
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onOpenResumeModal}
            className="px-6 py-4 rounded-xl btn-bw-secondary flex items-center gap-2 group font-sans"
          >
            <Download className="w-4 h-4 text-[#CCCCCC]" />
            DOWNLOAD RESUME
          </motion.button>

          <div className="flex items-center gap-2 pl-2 border-l border-[#333333]">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#333333] hover:border-white text-white hover:text-black hover:bg-white transition-all flex items-center justify-center"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#333333] hover:border-white text-white hover:text-black hover:bg-white transition-all flex items-center justify-center"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </motion.div>

      {/* Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 flex items-center justify-between font-mono text-xs text-[#777777] border-t border-[#333333]"
      >
        <div className="flex items-center gap-6">
          <span>INDIA</span>
          <span>2026</span>
          <span className="text-white font-bold">CURRENTLY: BUILDING + LEARNING</span>
        </div>

        <a
          href="#about"
          className="hover:text-white transition-colors uppercase tracking-widest hidden sm:inline"
        >
          SCROLL TO EXPLORE ↓
        </a>
      </motion.div>

    </section>
  );
}
