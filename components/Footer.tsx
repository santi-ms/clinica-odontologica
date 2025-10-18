'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+54 11 1234-5678',
    link: 'tel:+541112345678'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@smilecare-clinica.com',
    link: 'mailto:info@smilecare-clinica.com'
  },
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Av. Corrientes 1234, CABA',
    link: 'https://maps.google.com/?q=Av.+Corrientes+1234,+CABA'
  },
  {
    icon: Clock,
    title: 'Horarios',
    content: 'Lun-Vie: 9:00-18:00 | Sáb: 9:00-13:00',
    link: null
  }
]

const socialLinks = [
  { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/smilecare-clinica' },
  { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/smilecare-clinica' },
  { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/smilecare-clinica' }
]

const quickLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Equipo', href: '#equipo' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Ubicación', href: '#ubicacion' },
  { name: 'Contacto', href: '#contacto' }
]

const legalLinks = [
  { name: 'Política de Privacidad', href: '/privacidad' },
  { name: 'Términos y Condiciones', href: '/terminos' },
  { name: 'Aviso Legal', href: '/aviso-legal' }
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-primary">
              Clínica Odontológica SmileCare
            </h3>
            <p className="text-gray-300 mb-6">
              Combinamos tecnología de vanguardia y atención humana para lograr resultados predecibles y estéticos.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <info.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.content}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios destacados */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Implantes Dentales</li>
              <li>Estética Dental</li>
              <li>Ortodoncia</li>
              <li>Odontopediatría</li>
              <li>Urgencias</li>
              <li>Periodoncia</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/20 hover:bg-primary/30 p-3 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Horario de atención:
              </p>
              <p className="text-sm text-gray-300">
                Lun-Vie: 9:00-18:00<br />
                Sáb: 9:00-13:00<br />
                Urgencias: 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Clínica Odontológica SmileCare. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
