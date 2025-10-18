import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María Elena',
    rating: 5,
    text: 'Excelente atención y resultados increíbles. El equipo es muy profesional y el ambiente es muy acogedor.',
    service: 'Implantes dentales'
  },
  {
    name: 'Roberto',
    rating: 5,
    text: 'Después de años con miedo al dentista, aquí me sentí cómodo desde el primer día. Recomiendo totalmente.',
    service: 'Ortodoncia'
  },
  {
    name: 'Carmen',
    rating: 5,
    text: 'Mi sonrisa cambió completamente. El tratamiento fue indoloro y los resultados superaron mis expectativas.',
    service: 'Estética dental'
  },
  {
    name: 'Diego',
    rating: 5,
    text: 'Llevo a mis hijos aquí y están encantados. El doctor sabe cómo tratar a los niños y hacerlos sentir seguros.',
    service: 'Odontopediatría'
  },
  {
    name: 'Patricia',
    rating: 5,
    text: 'Tuve una urgencia en fin de semana y me atendieron inmediatamente. Muy agradecida por la rapidez.',
    service: 'Urgencias'
  },
  {
    name: 'Alejandro',
    rating: 5,
    text: 'El tratamiento periodontal fue muy efectivo. Ahora mis encías están sanas y mis dientes más firmes.',
    service: 'Periodoncia'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-gray mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-neutral-dark">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
