'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Eye, Filter } from 'lucide-react'
import { portfolioData } from '@/shared/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('todos')

  const categories = ['todos', ...new Set(data.projects.map(p => p.category))]

  const filteredProjects = activeCategory === 'todos'
    ? data.projects
    : data.projects.filter(p => p.category === activeCategory)

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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  }

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Portafolio</h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-10" />
      </motion.div>

      {/* Filter Bar */}
      <div className="flex items-center gap-4 border-b border-border/50 pb-6 overflow-x-auto scrollbar-hide">
        <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              variants={item}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="group relative glass-card p-4 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(project.image)}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-2xl"
                  >
                    <Eye className="w-6 h-6" />
                  </motion.button>
                  {project.liveUrl !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-all shadow-2xl"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-black group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-3 italic">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-2xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-6 right-6 p-3 bg-secondary rounded-full border border-border hover:bg-primary hover:text-white transition-all z-10 shadow-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-6xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Project Preview"
                className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
