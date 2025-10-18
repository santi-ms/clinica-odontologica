import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Dr. María González',
    specialty: 'Cirugía Oral e Implantología',
    credentials: 'Mat. 12345 - Universidad de Buenos Aires',
        image: '/images/equipomujer1.jpg',
    experience: '15 años',
    description: 'Especialista en implantes dentales y cirugía oral con más de 15 años de experiencia.'
  },
  {
    name: 'Dra. Carlos Rodríguez',
    specialty: 'Ortodoncia',
    credentials: 'Mat. 67890 - Universidad Nacional de Córdoba',
        image: '/images/equipohombre1.jpg',
    experience: '12 años',
    description: 'Experto en ortodoncia invisible y tratamiento de maloclusiones complejas.'
  },
  {
    name: 'Dra. Ana Martínez',
    specialty: 'Estética Dental',
    credentials: 'Mat. 11111 - Universidad de La Plata',
        image: '/images/equipomujer2.jpg',
    experience: '10 años',
    description: 'Especialista en diseño de sonrisa y tratamientos estéticos avanzados.'
  },
  {
    name: 'Dr. Luis Fernández',
    specialty: 'Odontopediatría',
    credentials: 'Mat. 22222 - Universidad de Rosario',
        image: '/images/equipohombre2.jpg',
    experience: '8 años',
    description: 'Especialista en el cuidado dental de niños y adolescentes.'
  },
  {
    name: 'Dra. Sofía López',
    specialty: 'Periodoncia',
    credentials: 'Mat. 33333 - Universidad de Tucumán',
        image: '/images/equipomujer3.jpg',
    experience: '11 años',
    description: 'Experta en tratamiento de enfermedades de las encías y regeneración ósea.'
  },
  {
    name: 'Dr. Miguel Torres',
    specialty: 'Endodoncia',
    credentials: 'Mat. 44444 - Universidad de Mendoza',
        image: '/images/equipohombre4.jpg',
    experience: '9 años',
    description: 'Especialista en tratamientos de conducto y preservación dental.'
  }
]

export default function Team() {
  return (
    <section id="equipo" className="py-20 bg-background-light">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Nuestro Equipo Profesional
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Profesionales matriculados con actualización constante en técnicas mínimamente invasivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                <CardDescription className="text-neutral-gray mb-2">
                  {member.description}
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {member.specialty}
                  </Badge>
                  <p className="text-sm text-neutral-gray">
                    {member.credentials}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {member.experience} de experiencia
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
