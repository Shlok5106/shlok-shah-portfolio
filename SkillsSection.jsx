import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["C", "C++", "JAVA", "PYTHON"]
  },
  {
    title: "WEB DEVELOPMENT",
    skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "PHP"]
  },
  {
    title: "CORE COMPUTER SCIENCE",
    skills: ["DSA", "DAA", "DBMS", "OPERATING SYSTEMS", "COMPUTER NETWORKS", "COA"]
  },
  {
    title: "DATA & ANALYTICS",
    skills: ["DATA SCIENCE", "DATA ANALYSIS", "POWER BI", "DAX", "POWER QUERY"]
  },
  {
    title: "OTHER",
    skills: ["OOP", "UML", "CRYPTOGRAPHY", "DISTRIBUTED SYSTEMS", "NETWORK SYSTEMS", "SCIENTIFIC COMPUTING"]
  }
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-28 relative bg-[#050505] text-white border-t border-b border-[#333333]">
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
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-editorial-headline font-extrabold text-white max-w-4xl leading-none uppercase font-heading">
            WHAT I WORK WITH
          </h2>
        </motion.div>

        {/* Interactive Typography Wall with Framer Motion Spring */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div variants={fadeInUp} custom={catIdx + 1} key={cat.title} className="space-y-4">
              <span className="font-mono text-xs text-[#777777] uppercase tracking-widest block border-b border-[#333333] pb-2 font-bold">
                {cat.title}
              </span>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {cat.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  const isDimmed = hoveredSkill !== null && !isHovered;

                  return (
                    <motion.span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      animate={{
                        scale: isHovered ? 1.05 : 1,
                        x: isHovered ? 4 : 0,
                        opacity: isHovered ? 1 : isDimmed ? 0.35 : 0.8,
                        color: isHovered ? '#ffffff' : isDimmed ? '#333333' : '#B5B5B5',
                      }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="font-heading font-extrabold cursor-pointer uppercase tracking-tight text-xl sm:text-3xl select-none"
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
