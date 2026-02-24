'use client'

import { motion } from 'framer-motion'
import { resumeData } from '@/shared/lib/portfolio-data'
import { Cpu, Globe, Database, Shield, Zap, Layout, Code2, Cloud, GitBranch, Brain } from 'lucide-react'

export function SkillsSection() {
    const { skills } = resumeData

    // Simplified getIcon for now using available Lucide icons
    const getIcon = (name: string) => {
        const n = name.toLowerCase()
        if (n.includes('html') || n.includes('css')) return Layout
        if (n.includes('sql') || n.includes('mysql')) return Database
        if (n.includes('typescript') || n.includes('javascript')) return Globe
        if (n.includes('node')) return Cpu
        if (n.includes('git')) return Code2
        if (n.includes('python')) return Code2
        if (n.includes('c#')) return Code2
        if (n.includes('seguridad')) return Shield
        return Code2
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

    const item: any = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    }

    return (
        <div className="space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-foreground mb-4">Tecnologías</h2>

                <p className="text-muted-foreground max-w-2xl text-lg italic">
                    Diseño e implementación de arquitecturas modernas orientadas a la
                    <span className="text-primary font-bold"> escalabilidad</span>,
                    <span className="text-primary font-bold"> seguridad</span> y
                    <span className="text-primary font-bold"> alta disponibilidad</span>.
                </p>
                <div className="w-20 h-1.5 bg-primary rounded-full mt-8" />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"

            >
                {skills.map((skill, index) => {
                    const Icon = getIcon(skill.name)
                    return (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-accent/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative glass-card p-4 sm:p-6 md:p-8 flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full border-white/5 group-hover:border-primary/30 group-hover:bg-white/[0.08] transition-all duration-300">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-display font-black group-hover:text-primary transition-colors line-clamp-1">
                                        {skill.name}
                                    </h3>

                                    <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                                            Tecnología Activa
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>

            {/* Specialized Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                {[
                    { label: 'DevOps', icon: GitBranch, tags: ['Docker', 'CI/CD', 'Azure', 'Git'] },
                    { label: 'IA', icon: Brain, tags: ['Prompt Engineering', 'Python'] },
                ].map((area, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 sm:px-6 py-4 sm:py-5 glass-effect rounded-xl sm:rounded-2xl flex flex-col gap-2 sm:gap-3 group hover:bg-white/5 transition-all"
                    >
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <area.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-foreground">{area.label}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">

                                {area.tags.map((tag, j) => (
                                    <span
                                        key={j}
                                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tag}
                                    </span>
                                ))}

                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}
