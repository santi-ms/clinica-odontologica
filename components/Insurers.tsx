'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const insurers = [
  { name: 'OSDE', logo: '/images/osde.jpg' },
  { name: 'Swiss Medical', logo: '/images/swissmedical.jpg' },
  { name: 'Galeno', logo: '/images/galeno.jpg' },
  { name: 'Omint', logo: '/images/omint.jpg' },
  { name: 'Medicus', logo: '/images/medicus.jpg' },
  { name: 'Sancor Salud', logo: '/images/sancorsalud.jpg' },
  { name: 'Federada Salud', logo: '/images/federadasalud.jpg' },
  { name: 'IOMA', logo: '/images/ioma.jpg' },
  { name: 'OSPAT', logo: '/images/ospat.jpg' },
  { name: 'OSDEPYM', logo: '/images/osdepym.jpg' },
  { name: 'Accord Salud', logo: '/images/accordsalud.jpg' },
  { name: 'Medifé', logo: '/images/medife.jpg' }
]

export default function Insurers() {
  return (
    <section className="py-20 bg-background-light">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Obras Sociales y Prepagas
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Trabajamos con las principales obras sociales y prepagas para facilitar el acceso a nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {insurers.map((insurer, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center justify-center h-24">
                <div className="relative w-full h-12">
                  <Image
                    src={insurer.logo}
                    alt={insurer.name}
                    fill
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-gray mb-4">
            ¿No encontrás tu obra social? Consultanos sobre convenios especiales.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contacto')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Consultar cobertura
          </button>
        </div>
      </div>
    </section>
  )
}
