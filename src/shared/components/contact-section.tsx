'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { contactData } from '@/shared/lib/portfolio-data'

interface ContactSectionProps {
  data?: typeof contactData
}

export function ContactSection({ data = contactData }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'err'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: data.contactFormKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nuevo mensaje de ${formData.name} desde tu Portafolio`,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('err')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('err')
    }
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Contacto</h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-10" />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed italic text-lg md:text-xl max-w-2xl mx-auto">
            Si tenés un proyecto en mente, buscás talento especializado o simplemente querés intercambiar ideas sobre tecnología y educación, mi puerta digital está abierta.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-10 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 glass-effect rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 glass-effect rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 glass-effect rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium"
              placeholder="¿Cómo puedo ayudarte?"
              required
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'submitting'}
              className="group flex items-center justify-center gap-3 px-12 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${status === 'submitting' ? 'animate-pulse' : ''}`} />
              {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </div>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-500 font-bold"
              >
                <CheckCircle2 className="w-5 h-5" />
                ¡Mensaje enviado con éxito! Te contactaré pronto.
              </motion.div>
            )}
            {status === 'err' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 font-bold"
              >
                <AlertCircle className="w-5 h-5" />
                Hubo un error. Por favor, intenta de nuevo.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </div>
  )
}
