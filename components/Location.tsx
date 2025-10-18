'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Car, Accessibility } from 'lucide-react'

const schedule = [
  { day: 'Lunes a Viernes', hours: '09:00 - 18:00' },
  { day: 'Sábados', hours: '09:00 - 13:00' },
  { day: 'Domingos', hours: 'Cerrado' },
  { day: 'Urgencias', hours: '24/7' }
]

const facilities = [
  {
    icon: Car,
    title: 'Estacionamiento',
    description: 'Estacionamiento gratuito disponible en el edificio'
  },
  {
    icon: Accessibility,
    title: 'Accesibilidad',
    description: 'Instalaciones completamente accesibles para personas con movilidad reducida'
  }
]

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Ubicación & Horarios
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Encontranos en el corazón de Buenos Aires con fácil acceso y estacionamiento disponible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Nuestra ubicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895304!2d-58.38375968477024!3d-34.60373888245914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0xbe0c438b8bdb4c70!2sAv.%20Corrientes%201234%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1635789012345!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la clínica"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Clínica Odontológica SmileCare</h3>
                  <p className="text-neutral-gray mb-2">
                    Av. Corrientes 1234, CABA
                  </p>
                  <p className="text-neutral-gray mb-4">
                    Buenos Aires, Argentina
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+541112345678"
                      className="btn-primary flex items-center justify-center space-x-2"
                    >
                      <span>Llamar ahora</span>
                    </a>
                    <a
                      href="https://wa.me/541112345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center space-x-2"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule and Facilities */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horarios de atención</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-neutral-dark">{item.day}</span>
                      <span className="text-neutral-gray">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    💡 Para urgencias fuera del horario, llamanos al +54 11 1234-5678
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Servicios adicionales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <facility.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-neutral-dark">{facility.title}</h4>
                        <p className="text-sm text-neutral-gray">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Directions */}
            <Card>
              <CardHeader>
                <CardTitle>Cómo llegar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-neutral-gray">
                  <p><strong>Subte:</strong> Línea B - Estación Callao (2 cuadras)</p>
                  <p><strong>Colectivos:</strong> 6, 12, 24, 26, 29, 39, 60, 64, 68, 75, 99, 101, 102, 106, 109, 111, 115, 140, 146, 152, 168</p>
                  <p><strong>Auto:</strong> Estacionamiento gratuito en el edificio</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
