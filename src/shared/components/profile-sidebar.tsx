'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, Linkedin, Github, FileText } from 'lucide-react'
import { profileData } from '@/shared/lib/portfolio-data'

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full lg:w-80 glass-card p-4 md:p-6 lg:sticky lg:top-8 h-fit z-10"
    >
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent animate-pulse-slow" />
          <div className="absolute inset-[2px] rounded-3xl bg-secondary/50 backdrop-blur-sm overflow-hidden border border-white/10">
            <img
              src={data.avatar || "/placeholder.svg"}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <h1 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 text-center">
          {data.name}
        </h1>
        <p className="text-[10px] md:text-xs text-black dark:text-white bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full font-semibold tracking-wide text-center mt-2 leading-relaxed">
          {data.title}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/50 my-6 md:my-8" />

      {/* Contact Info */}
      <div className="flex flex-col gap-3 md:gap-5">

        {[
          { icon: Mail, label: 'Correo', value: data.email, href: `mailto:${data.email}`, isBreak: true },
          { icon: Phone, label: 'Teléfono', value: data.phone, href: `tel:${data.phone.replace(/\s/g, '')}` },
          { icon: MapPin, label: 'Ubicación', value: data.location },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-start gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1 min-w-0 overflow-hidden">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-0.5">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className={`text-xs md:text-sm text-foreground hover:text-primary transition-colors ${item.isBreak ? 'break-all' : 'truncate'} block font-medium`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xs md:text-sm text-foreground font-medium truncate">{item.value}</p>
              )}
            </div>

          </motion.div>
        ))}

        {/* Social Links */}
        <div className="h-px bg-border/50 my-2 md:my-3" />

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">

          {[
            { icon: Linkedin, href: data.linkedin, color: 'hover:text-blue-500' },
            { icon: Github, href: (data as any).github, color: 'hover:text-white' },
            { icon: FileText, href: (data as any).cvOnline, color: 'hover:text-primary', label: 'CV' },
          ].map((social, i) => social.href && (
            <motion.a
              key={i}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-9 md:h-10 rounded-xl glass-effect flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 ${social.label ? 'px-3 md:px-4 gap-1.5 md:gap-2' : 'w-9 md:w-10'}`}
            >
              <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              {social.label && <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{social.label}</span>}
            </motion.a>

          ))}
        </div>
      </div>
    </motion.aside>
  )
}
