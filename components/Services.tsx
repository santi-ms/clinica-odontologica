'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Service {
  id: string
  title: string
  description: string
  image: string
  details: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'implantes',
    title: 'Implantes Dentales',
    description: 'Reemplazo de dientes perdidos con tecnología de última generación para una solución duradera y natural.',
    image: '/images/implantes.jpg',
    details: 'Los implantes dentales son la solución más avanzada para reemplazar dientes perdidos. Utilizamos materiales de titanio de grado médico y técnicas mínimamente invasivas para garantizar resultados óptimos.',
    features: [
      'Titanio de grado médico',
      'Técnicas mínimamente invasivas',
      'Garantía extendida',
      'Seguimiento post-operatorio'
    ]
  },
  {
    id: 'estetica',
    title: 'Estética Dental',
    description: 'Carillas, blanqueamiento y tratamientos estéticos para lograr la sonrisa perfecta que siempre soñaste.',
    image: '/images/estetica.jpg',
    details: 'Transformamos tu sonrisa con tratamientos estéticos personalizados. Desde blanqueamiento profesional hasta carillas de porcelana, diseñamos el tratamiento perfecto para ti.',
    features: [
      'Carillas de porcelana',
      'Blanqueamiento profesional',
      'Diseño de sonrisa digital',
      'Resultados naturales'
    ]
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Alineadores invisibles y brackets tradicionales para corregir la posición de tus dientes de forma efectiva.',
    image: '/images/ortodoncia.jpg',
    details: 'Ofrecemos diferentes opciones de ortodoncia adaptadas a tus necesidades y estilo de vida. Desde brackets tradicionales hasta alineadores invisibles.',
    features: [
      'Alineadores invisibles',
      'Brackets estéticos',
      'Ortodoncia lingual',
      'Plan de tratamiento personalizado'
    ]
  },
  {
    id: 'pediatria',
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado para niños con un ambiente amigable y técnicas adaptadas a cada edad.',
    image: '/images/odontopediatria.jpg',
    details: 'Especialistas en el cuidado dental de los más pequeños. Creamos un ambiente divertido y seguro para que los niños disfruten de sus visitas al dentista.',
    features: [
      'Ambiente amigable para niños',
      'Técnicas sin dolor',
      'Educación en higiene dental',
      'Prevención de caries'
    ]
  },
  {
    id: 'urgencias',
    title: 'Urgencias',
    description: 'Atención inmediata para emergencias dentales con horarios extendidos y disponibilidad los fines de semana.',
    image: '/images/urgencias.jpg',
    details: 'Sabemos que las emergencias dentales no esperan. Ofrecemos atención inmediata para aliviar el dolor y resolver problemas urgentes.',
    features: [
      'Atención 24/7',
      'Alivio inmediato del dolor',
      'Tratamientos de emergencia',
      'Seguimiento post-urgencia'
    ]
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia',
    description: 'Tratamiento especializado de las encías para mantener una base sólida y saludable para tus dientes.',
    image: '/images/periodoncia.jpg',
    details: 'La salud de las encías es fundamental para mantener tus dientes. Tratamos enfermedades periodontales con técnicas avanzadas y mínimamente invasivas.',
    features: [
      'Tratamiento de gingivitis',
      'Cirugía periodontal',
      'Regeneración ósea',
      'Mantenimiento periodontal'
    ]
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section id="servicios" className="py-20 bg-background-light">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Ofrecemos una amplia gama de tratamientos odontológicos con la más alta calidad y tecnología de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                <CardDescription className="text-neutral-gray">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setSelectedService(service)}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Ver más</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-heading font-bold mb-4">{selectedService.title}</h3>
              <p className="text-neutral-gray mb-6">{selectedService.details}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Características principales:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-neutral-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    setSelectedService(null)
                    const element = document.querySelector('#contacto')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary flex-1"
                >
                  Solicitar consulta
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                  className="flex-1"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
