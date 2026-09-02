import React, { useState } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import EditorialIntroSection from './components/sections/EditorialIntroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProjectCaseStudyModal from './components/modals/ProjectCaseStudyModal';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import CertificatesSection from './components/sections/CertificatesSection';
import CertificateModal from './components/modals/CertificateModal';
import ResumeSection from './components/sections/ResumeSection';
import ResumeModal from './components/modals/ResumeModal';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialAskTab, setInitialAskTab] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenProjectModal = (project, openAskTab = false) => {
    setSelectedProject(project);
    setInitialAskTab(openAskTab);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      {/* Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Desktop Custom B&W Cursor */}
      <CustomCursor />

      {/* Minimal B&W Sticky Navbar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Alternating Black and White Sections */}
      <main>
        {/* HERO: BLACK */}
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* INTRO: OFF-WHITE */}
        <EditorialIntroSection />

        {/* ABOUT: OFF-WHITE */}
        <AboutSection />

        {/* SKILLS: BLACK */}
        <SkillsSection />

        {/* PROJECTS: BLACK */}
        <ProjectsSection onSelectProject={handleOpenProjectModal} />

        {/* EXPERIENCE: BLACK */}
        <ExperienceSection />

        {/* EDUCATION: OFF-WHITE */}
        <EducationSection />

        {/* CREDENTIALS: OFF-WHITE */}
        <CertificatesSection onSelectCertificate={(cred) => setSelectedCertificate(cred)} />

        {/* RESUME: BLACK */}
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* CONTACT: BLACK */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* PURE BLACK FOOTER */}
      <Footer />

      {/* Modals */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          initialAskTab={initialAskTab}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onSelectCertificate={(cred) => setSelectedCertificate(cred)}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </div>
  );
}
