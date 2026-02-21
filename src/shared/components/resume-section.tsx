'use client'

import { motion } from 'framer-motion'
import { BookOpen, Briefcase } from 'lucide-react'
import { resumeData } from '@/shared/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Resumen</h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-10" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        {/* Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Educación</h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 border-l-2 border-border/50 ml-6 pl-8"
          >
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.title}</h4>
                <p className="text-sm font-bold text-primary/80 mb-3 tracking-wider">{edu.period}</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Experiencia</h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 border-l-2 border-border/50 ml-6 pl-8"
          >
            {data.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors" />
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{exp.title}</h4>
                <p className="text-sm font-bold text-accent/80 mb-3 tracking-wider">{exp.period}</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
