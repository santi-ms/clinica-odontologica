'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: '¿Los tratamientos son dolorosos?',
    answer: 'Utilizamos técnicas mínimamente invasivas y anestesia local para garantizar tu comodidad. La mayoría de nuestros pacientes reportan molestias mínimas durante y después del tratamiento.'
  },
  {
    question: '¿Cuánto dura un blanqueamiento dental?',
    answer: 'Los resultados del blanqueamiento profesional pueden durar entre 1 y 3 años, dependiendo de tus hábitos alimentarios y de higiene. Te brindaremos consejos para mantener los resultados por más tiempo.'
  },
  {
    question: '¿Qué cuidados debo tener después de un implante?',
    answer: 'Los primeros días es importante evitar alimentos duros, mantener una higiene oral adecuada y seguir las indicaciones específicas de tu odontólogo. Te proporcionaremos un plan de cuidados personalizado.'
  },
  {
    question: '¿Trabajan con mi obra social?',
    answer: 'Trabajamos con las principales obras sociales y prepagas del país. Consulta en nuestro formulario de contacto o llámanos para verificar la cobertura de tu plan específico.'
  },
  {
    question: '¿Ofrecen planes de financiación?',
    answer: 'Sí, ofrecemos diferentes opciones de financiación para que puedas acceder a los tratamientos que necesitas. Consulta con nuestro equipo sobre las opciones disponibles.'
  },
  {
    question: '¿Cómo es la primera consulta?',
    answer: 'En la primera consulta realizamos una evaluación completa de tu salud bucal, incluyendo radiografías digitales si es necesario. Te explicaremos el estado de tu boca y las opciones de tratamiento disponibles.'
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros tratamientos y servicios.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <CardTitle className="flex items-center justify-between text-left">
                    <span className="text-lg">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 ml-4" />
                    )}
                  </CardTitle>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <p className="text-neutral-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-gray mb-6">
              ¿Tienes alguna otra pregunta? No dudes en contactarnos.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contacto')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Hacer una consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
