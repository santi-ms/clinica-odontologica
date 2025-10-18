import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Monitor, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

const technologies = [
  {
    icon: Monitor,
    title: 'Radiografía Digital',
    description: 'Diagnóstico preciso con imágenes de alta resolución y menor exposición a radiación.',
    image: '/images/radiografia.jpg'
  },
  {
    icon: Zap,
    title: 'Escáner Intraoral',
    description: 'Tecnología 3D para moldes digitales precisos y tratamientos más cómodos.',
    image: '/images/escanerintraoral.jpg'
  },
  {
    icon: Shield,
    title: 'Protocolos de Bioseguridad',
    description: 'Esterilización avanzada y medidas de seguridad para proteger tu salud.',
    image: '/images/bioseguridad.jpg'
  }
]

export default function Technology() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Tecnología & Protocolos
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Utilizamos la tecnología más avanzada y protocolos de seguridad rigurosos para garantizar los mejores resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <tech.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading">{tech.title}</CardTitle>
                <CardDescription className="text-neutral-gray">
                  {tech.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
