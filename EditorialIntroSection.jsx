import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function EditorialIntroSection() {
  return (
    <section className="py-28 relative bg-[#F5F5F5] text-[#000000] border-t border-b border-[#DDDDDD]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        
        <motion.div variants={fadeInUp} custom={0} className="space-y-2 font-mono text-xs text-[#777777] uppercase tracking-widest">
          <span>/ INTRO</span>
          <p className="text-sm font-sans font-bold text-[#000000]">
            Hi, I'm Shlok.
          </p>
        </motion.div>

        <motion.h2 variants={fadeInUp} custom={1} className="text-editorial-headline font-extrabold text-[#000000] max-w-5xl leading-none uppercase font-heading">
          I LIKE BUILDING THINGS THAT ARE USEFUL, VISUAL AND WELL MADE.
        </motion.h2>

        <motion.p variants={fadeInUp} custom={2} className="text-lg sm:text-xl text-[#444444] max-w-3xl leading-relaxed font-sans font-normal">
          I am an Information Technology engineering student passionate about turning software and data concepts into clean digital tools. From building web applications in React to modeling financial data in Power BI and writing Python scripts, I focus on readable logic and functional design.
        </motion.p>

      </motion.div>
    </section>
  );
}
