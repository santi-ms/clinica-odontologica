'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
  honeypot: string // Campo oculto para detectar bots
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  consent?: string
}

const services = [
  'Consulta general',
  'Implantes dentales',
  'Estética dental',
  'Ortodoncia',
  'Odontopediatría',
  'Urgencias',
  'Periodoncia',
  'Endodoncia',
  'Otro'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
    honeypot: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido'
    }

    if (!formData.service) {
      newErrors.service = 'Por favor selecciona un servicio'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    if (!formData.consent) {
      newErrors.consent = 'Debes aceptar el tratamiento de datos'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    // Verificar honeypot (si está lleno, es un bot)
    if (formData.honeypot) {
      console.log('Bot detected')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          consent: false,
          honeypot: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Formato básico para números argentinos
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2-$3')
    }
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2-$3')
  }

  return (
    <section id="contacto" className="py-20 bg-background-light">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Solicitar Turno
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para coordinar tu consulta.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Formulario de contacto</CardTitle>
              <CardDescription>
                Todos los campos son obligatorios. Te responderemos en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => handleInputChange('honeypot', e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-red-500' : ''}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', formatPhoneNumber(e.target.value))}
                    className={errors.phone ? 'border-red-500' : ''}
                    placeholder="11 1234-5678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-dark mb-2">
                    Motivo/Servicio *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className={`w-full h-10 px-3 py-2 border rounded-md bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      errors.service ? 'border-red-500' : 'border-input'
                    }`}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={errors.message ? 'border-red-500' : ''}
                    placeholder="Cuéntanos sobre tu consulta o el tratamiento que necesitas..."
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange('consent', e.target.checked)}
                      className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-neutral-gray">
                      Acepto el tratamiento de mis datos personales según la{' '}
                      <a href="#" className="text-primary hover:underline">
                        política de privacidad
                      </a>
                      . *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar solicitud'
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      ¡Gracias! Te contactaremos para confirmar tu turno.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800 font-medium">
                      Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
