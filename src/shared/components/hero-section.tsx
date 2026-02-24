'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/shared/lib/portfolio-data'

interface HeroSectionProps {
    onNavigate?: (id: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
    return (
        <section className="relative min-h-[400px] md:min-h-[500px] flex flex-col justify-center py-10 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-accent/20 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
                    HOLA, SOY
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-4 sm:mb-6">
                    <span className="text-gradient">Gastón</span> <br />
                    <span className="text-foreground">Ferrari.</span>
                </h1>


                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 md:mb-10"
                >

                    <span className="text-foreground font-bold">Arquitecto de Software Full Stack, profesor de nivel secundario y universitario</span>, especializado en el diseño de soluciones escalables, seguras y orientadas al negocio. Combino la construcción de arquitecturas modernas con la formación de talento técnico, promoviendo estándares de ingeniería de excelencia y pensamiento crítico en entornos académicos y profesionales.
                </motion.p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate?.('portfolio')}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 text-sm sm:text-base touch-manipulation"
                    >
                        Explorar Proyectos
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate?.('contact')}
                        className="px-6 sm:px-8 py-3 sm:py-4 glass-effect text-foreground rounded-2xl font-bold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base touch-manipulation"
                    >
                        Contactar
                    </motion.button>
                </div>

            </motion.div>
        </section>
    )
}
