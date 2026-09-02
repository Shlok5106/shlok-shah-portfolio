import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profileData';

const navItems = [
  { label: 'WORK', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CREDENTIALS', href: '#credentials' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#333333] py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white hover:text-[#CCCCCC] transition-colors uppercase focus:outline-none"
        >
          SHLOK SHAH
        </a>

        {/* Minimal Navigation with Underline Slide */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-xs font-semibold text-[#CCCCCC]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-link-item hover:text-white transition-colors tracking-widest py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icon Group & Resume CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl text-white bg-black border border-[#333333] hover:bg-white hover:text-black transition-all flex items-center justify-center"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/shlokshah5106/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl text-white bg-black border border-[#333333] hover:bg-white hover:text-black transition-all flex items-center justify-center"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:shlokshah5106@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-xl text-white bg-black border border-[#333333] hover:bg-white hover:text-black transition-all flex items-center justify-center"
          >
            <Mail className="w-4 h-4" />
          </a>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onOpenResumeModal}
            className="ml-1 px-4 py-2.5 rounded-xl font-sans text-xs font-bold text-white bg-black border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider"
          >
            RESUME
          </motion.button>
        </div>

        {/* Mobile Trigger */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-black border border-[#333333] text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-[66px] bg-[#050505] border-t border-[#333333] p-8 flex flex-col justify-between z-50 font-sans"
          >
            <div className="space-y-6">
              <span className="text-xs text-[#777777] font-mono block border-b border-[#333333] pb-2">
                NAVIGATION
              </span>
              <div className="flex flex-col gap-5">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-3xl font-extrabold text-white hover:text-[#CCCCCC] transition-colors uppercase font-heading"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#333333] space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex-1 py-3 rounded-xl bg-[#0A0A0A] text-white border border-[#333333] flex items-center justify-center gap-1.5 font-bold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shlokshah5106/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex-1 py-3 rounded-xl bg-[#0A0A0A] text-white border border-[#333333] flex items-center justify-center gap-1.5 font-bold"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="mailto:shlokshah5106@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-xl bg-[#0A0A0A] text-white border border-[#333333] flex items-center justify-center text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-4 rounded-xl text-center text-xs font-bold bg-white text-black uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all font-mono"
              >
                VIEW RESUME
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
