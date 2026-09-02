import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function ContactSection({ onOpenResumeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-[#050505] text-white border-t border-b border-[#333333]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20"
      >
        
        {/* Editorial Headline */}
        <motion.div variants={fadeInUp} custom={0}>
          <span className="font-mono text-xs font-bold text-[#777777] uppercase tracking-widest block mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-hero-giant font-extrabold text-white tracking-tight leading-none uppercase max-w-5xl font-heading">
            LET'S BUILD SOMETHING.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-mono text-xs">
          
          {/* Direct Contact Info & Action Buttons */}
          <motion.div variants={fadeInUp} custom={1} className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-[#333333] space-y-6">
              
              <div className="border-b border-[#333333] pb-4">
                <span className="text-[#777777] uppercase text-[10px] block">DIRECT CONTACT</span>
                <span className="text-white font-extrabold font-heading text-xl">SHLOK SHAH</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#333333] pb-3">
                  <span className="text-[#777777]">EMAIL</span>
                  <a href={profileData.socials.email} className="text-white font-bold hover:underline">
                    {profileData.email}
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-[#333333] pb-3">
                  <span className="text-[#777777]">PHONE</span>
                  <a href={profileData.socials.phone} className="text-white font-bold hover:underline">
                    {profileData.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-[#333333] pb-3">
                  <span className="text-[#777777]">LOCATION</span>
                  <span className="text-white font-bold">{profileData.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-3 font-sans">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={profileData.socials.email}
                    className="flex-1 py-3.5 rounded-xl btn-bw-primary text-center font-bold"
                  >
                    EMAIL ME
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={profileData.resumePath}
                    download="SHLOK_SHAH_RESUME.pdf"
                    className="flex-1 py-3.5 rounded-xl btn-bw-secondary text-center flex items-center justify-center gap-1.5 font-bold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    RESUME
                  </motion.a>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-[#000000] text-white border border-[#333333] hover:border-white transition-all text-center flex items-center justify-center gap-2 font-mono"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GITHUB
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-[#000000] text-white border border-[#333333] hover:border-white transition-all text-center flex items-center justify-center gap-2 font-mono"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LINKEDIN
                  </motion.a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUp} custom={2} className="lg:col-span-7 font-sans">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-[#333333] space-y-6">
              
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Send a Message
              </h3>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-[#000000] border border-[#333333] text-white space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    MESSAGE TRANSMITTED
                  </div>
                  <p>Shlok Shah will review your message and reply via email.</p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 font-bold px-4 py-2 rounded-xl bg-white text-black hover:bg-black hover:text-white border border-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div className="space-y-1">
                      <label className="text-[#777777] font-semibold block">YOUR NAME *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#000000] border text-xs text-white placeholder-[#777777] focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                          errors.name ? 'border-rose-500' : 'border-[#333333]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#777777] font-semibold block">YOUR EMAIL *</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#000000] border text-xs text-white placeholder-[#777777] focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                          errors.email ? 'border-rose-500' : 'border-[#333333]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs">
                    <label className="text-[#777777] font-semibold block">MESSAGE *</label>
                    <textarea
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#000000] border text-xs text-white placeholder-[#777777] focus:outline-none focus:ring-1 focus:ring-white transition-all resize-none font-sans ${
                        errors.message ? 'border-rose-500' : 'border-[#333333]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl btn-bw-primary flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span>SENDING...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND MESSAGE <span className="arrow-shift">→</span>
                      </>
                    )}
                  </motion.button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
