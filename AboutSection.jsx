import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative bg-[#F5F5F5] text-[#000000] border-t border-b border-[#DDDDDD]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
      >
        
        {/* Header */}
        <motion.div variants={fadeInUp} custom={0}>
          <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block mb-4">
            ABOUT SHLOK SHAH
          </span>
          <h2 className="text-editorial-headline font-extrabold text-[#000000] max-w-5xl leading-none uppercase font-heading">
            I BUILD THINGS I FIND INTERESTING.
          </h2>
        </motion.div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          
          <motion.div variants={fadeInUp} custom={1} className="lg:col-span-7 space-y-8 text-[#444444] text-lg sm:text-xl leading-relaxed">
            <p className="p-8 rounded-2xl bg-white border border-[#DDDDDD] text-[#000000]">
              I am a B.Tech Information Technology student at <strong className="text-black font-extrabold">Indus University</strong> (expected graduation May 2027), currently maintaining an academic GPA of <strong className="text-black font-extrabold">8.5 / 10</strong>.
            </p>

            <p className="p-8 rounded-2xl bg-white border border-[#DDDDDD] text-[#444444]">
              My practical experience covers software development, web tools, data analytics, IoT hardware sensors, and Android applications. I am currently interning as a MERN Stack Developer at <strong className="text-black font-extrabold">Radixweb</strong> while expanding my knowledge in Machine Learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-[#DDDDDD] space-y-1 font-mono text-xs">
                <span className="text-[#777777] uppercase block font-bold">CURRENT INTERNSHIP</span>
                <h4 className="font-heading font-extrabold text-black text-base">Radixweb</h4>
                <p className="text-[#444444]">MERN Stack Intern (July 2026 – Present)</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#DDDDDD] space-y-1 font-mono text-xs">
                <span className="text-[#777777] uppercase block font-bold">EDUCATION</span>
                <h4 className="font-heading font-extrabold text-black text-base">Indus University</h4>
                <p className="text-[#444444]">B.Tech IT (GPA: 8.5 / 10)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar Metadata */}
          <motion.div variants={fadeInUp} custom={2} className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white border border-[#DDDDDD] space-y-6 font-mono text-xs">
              
              <div className="border-b border-[#DDDDDD] pb-4">
                <span className="font-bold text-black uppercase tracking-wider block text-sm font-heading">
                  PROFILE OVERVIEW
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3">
                  <span className="text-[#777777]">NAME</span>
                  <span className="text-black font-bold">SHLOK SHAH</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3">
                  <span className="text-[#777777]">ROLE</span>
                  <span className="text-black font-bold">CSE / IT STUDENT</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3">
                  <span className="text-[#777777]">LOCATION</span>
                  <span className="text-black font-bold">INDIA</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3">
                  <span className="text-[#777777]">DEGREE</span>
                  <span className="text-black font-bold">B.TECH IT</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3">
                  <span className="text-[#777777]">GPA</span>
                  <span className="text-black font-bold">8.5 / 10</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#777777]">FOCUS</span>
                  <span className="text-black font-bold">SOFTWARE • DATA • WEB</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
