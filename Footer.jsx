import React from 'react';
import { profileData } from '../../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-[#333333] pt-16 pb-12 text-[#B5B5B5] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-12 border-b border-[#333333]">
          
          <div className="space-y-2">
            <h3 className="font-heading font-extrabold text-2xl text-white tracking-wider uppercase">
              SHLOK SHAH
            </h3>
            <p className="text-[#777777] text-xs font-mono uppercase">
              SOFTWARE & WEB DEVELOPER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold">
            <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">
              GITHUB
            </a>
            <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">
              LINKEDIN
            </a>
            <a href={profileData.socials.email} className="hover:text-white transition-colors uppercase tracking-wider">
              EMAIL
            </a>
            <a href={profileData.resumePath} download="SHLOK_SHAH_RESUME.pdf" className="hover:text-white transition-colors uppercase tracking-wider">
              RESUME
            </a>
          </div>

        </div>

        <div className="flex items-center justify-between text-xs text-[#777777]">
          <span>© 2026 SHLOK SHAH. ALL RIGHTS RESERVED.</span>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors uppercase tracking-wider"
          >
            TOP ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
