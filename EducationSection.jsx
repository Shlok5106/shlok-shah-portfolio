import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function EducationSection() {
  return (
    <section id="education" className="py-28 relative bg-[#F5F5F5] text-[#000000] border-t border-b border-[#DDDDDD]">
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
            ACADEMIC EDUCATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-black tracking-tight">
            EDUCATION
          </h2>
        </motion.div>

        {/* Primary Education Focus */}
        <motion.div variants={fadeInUp} custom={1} className="p-8 sm:p-14 rounded-3xl bg-white border border-[#DDDDDD] space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DDDDDD] pb-6 font-sans">
            <div>
              <h3 className="font-heading font-extrabold text-4xl sm:text-6xl text-black tracking-tight uppercase">
                INDUS UNIVERSITY
              </h3>
              <h4 className="text-sm font-bold text-[#444444] uppercase mt-2 font-mono">
                B.TECH INFORMATION TECHNOLOGY
              </h4>
            </div>

            <div className="text-right space-y-1 font-mono">
              <span className="text-2xl font-extrabold text-black font-heading block">
                8.5 / 10 GPA
              </span>
              <span className="text-xs text-[#777777] uppercase block">
                2023 — 2027
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#444444] max-w-3xl leading-relaxed font-sans">
            Enrolled in B.Tech Information Technology covering Software Engineering, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Data Structures & Algorithms (DSA), Operating Systems (OS), Computer Networks (CN), and Data Analytics.
          </p>

        </motion.div>

        {/* Secondary Schooling */}
        <motion.div variants={fadeInUp} custom={2} className="pt-4 border-t border-[#DDDDDD] space-y-4 font-mono text-xs text-[#777777]">
          <span className="uppercase font-bold block">SCHOOL EDUCATION</span>
          <div className="flex flex-wrap items-center justify-between gap-4 text-[#444444]">
            <div>
              <strong className="text-black">St. Kabir School</strong> — Higher Secondary School Certificate (HSC) & Secondary School Certificate (SSC)
            </div>
            <div>
              <span>HSC: 67% | SSC: 77.8%</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
