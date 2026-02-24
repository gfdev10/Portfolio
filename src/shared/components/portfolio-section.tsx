'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Maximize2 } from 'lucide-react'
import { portfolioData } from '@/shared/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'todos' | string>('todos')
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({})
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null)

  const categories = ['todos', ...new Set(data.projects.map(p => p.category))]

  const filteredProjects = activeCategory === 'todos'
    ? data.projects
    : data.projects.filter(p => p.category === activeCategory)

  const handleImageLoad = (imageSrc: string) => {
    setImageLoaded(prev => ({ ...prev, [imageSrc]: true }))
  }

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
    <div className="space-y-6 md:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">Portafolio</h2>
        <div className="w-16 md:w-20 h-1 md:h-1.5 bg-primary rounded-full mb-6 md:mb-10" />
      </motion.div>

      {/* Filter Bar */}
      <div className="flex items-center gap-2 md:gap-4 border-b border-border/50 pb-4 md:pb-6 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-1.5 md:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeCategory === cat
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              variants={item}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="group relative glass-card rounded-xl md:rounded-2xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${!imageLoaded[project.image || ''] ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => handleImageLoad(project.image || '')}
                />

                {/* Skeleton loader */}
                {!imageLoaded[project.image || ''] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-secondary animate-pulse" />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Hover actions */}
                <div className="absolute inset-0 flex items-end justify-end gap-2 p-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Open image in lightbox */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLightboxImage({ src: project.image || '/placeholder.svg', title: project.title })}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-2xl"
                    title="Ver imagen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </motion.button>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all shadow-2xl"
                      title="Ver sitio en vivo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>

                {/* Category badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-white bg-black/50 backdrop-blur-md px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 space-y-1.5 sm:space-y-2 md:space-y-3">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-bold group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 sm:gap-1 md:gap-1.5 pt-1 md:pt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[8px] sm:text-[9px] md:text-[10px] font-medium px-1 sm:px-1.5 md:px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black"
            onClick={() => setLightboxImage(null)}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <span className="text-white/80 text-sm font-medium truncate pr-4">{lightboxImage.title}</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all flex-shrink-0"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image area */}
            <div
              className="flex-1 flex items-center justify-center overflow-hidden px-2 pb-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
