'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProfileSidebar } from '@/shared/components/profile-sidebar'
import { HeroSection } from '@/shared/components/hero-section'
import { SkillsSection } from '@/shared/components/skills-section'
import { ResumeSection } from '@/shared/components/resume-section'
import { PortfolioSection } from '@/shared/components/portfolio-section'
import { ContactSection } from '@/shared/components/contact-section'
import { ThemeToggle } from '@/shared/components/theme-toggle'
import {
  profileData,
  resumeData,

  portfolioData,
  contactData,
} from '@/shared/lib/portfolio-data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio')

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'skills', label: 'Tecnología' },
    { id: 'resume', label: 'Resumen' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'contact', label: 'Contacto' }
  ]

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <ProfileSidebar data={profileData} />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col gap-6 overflow-hidden">
            {/* Navigation Bar */}
            <nav className="glass-card p-2 md:p-3 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeSection === section.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="active-tab"
                        className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Content Switcher */}
            <div className="glass-card p-4 sm:p-6 md:p-10 min-h-[600px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {activeSection === 'inicio' && <HeroSection onNavigate={setActiveSection} />}
                  {activeSection === 'skills' && <SkillsSection />}
                  {activeSection === 'resume' && <ResumeSection data={resumeData} />}
                  {activeSection === 'portfolio' && <PortfolioSection data={portfolioData} />}
                  {activeSection === 'contact' && <ContactSection data={contactData} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
