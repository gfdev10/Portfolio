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
                <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-4">Tecnologías</h2>
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
                className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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

                            <div className="relative glass-card p-6 md:p-8 flex flex-col items-center text-center space-y-4 h-full border-white/5 group-hover:border-primary/30 group-hover:bg-white/[0.08] transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                                    <Icon className="w-8 h-8" />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-xl md:text-2xl font-display font-black group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { label: 'DevOps', icon: GitBranch, tags: ['Docker', 'CI/CD', 'Azure', 'Git'] },
                    { label: 'IA', icon: Brain, tags: ['Prompt Engineering', 'Python'] },
                ].map((area, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-6 py-5 glass-effect rounded-2xl flex flex-col gap-3 group hover:bg-white/5 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <area.icon className="w-4 h-4" />
                            </div>
                            <p className="text-sm font-bold text-foreground">{area.label}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {area.tags.map((tag, j) => (
                                <span
                                    key={j}
                                    className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
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
