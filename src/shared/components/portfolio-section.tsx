'use client'

import { useState } from 'react'
import { ExternalLink, X, Eye } from 'lucide-react'
import { portfolioData } from '@/shared/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portafolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="aspect-[4/3] overflow-hidden bg-background">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex gap-2 md:gap-3 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-border text-foreground rounded-lg text-xs md:text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Visualizar
                </button>
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Visitar
                  </a>
                )}
              </div>
            </div>

            {/* Category Badge - Always visible */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-accent capitalize">
              {project.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-secondary rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
            <img
              src={selectedImage}
              alt="Project Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
