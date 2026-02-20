'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { contactData } from '@/lib/portfolio-data'

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
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contacto</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>



      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder="mail@ejemplo.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all resize-none text-sm md:text-base"
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex items-center justify-center gap-2 w-full md:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-accent text-accent-foreground rounded-xl font-medium hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          <Send className={`w-4 h-4 ${status === 'submitting' ? 'animate-pulse' : ''}`} />
          {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {status === 'success' && (
          <p className="text-green-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">
            ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
          </p>
        )}
        {status === 'err' && (
          <p className="text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">
            Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
          </p>
        )}
      </form>
    </div>
  )
}
