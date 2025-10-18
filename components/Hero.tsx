'use client'

import { useState } from 'react'
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  const advantages = [
    'Implantes y estética avanzada',
    'Diagnóstico digital 3D',
    'Atención segura y personalizada',
  ]

  const trustBadges = [
    '+15 años de experiencia',
    'Equipamiento de última generación',
    'Atención con obras sociales/Prepagas',
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home.jpg"
          alt="Clínica odontológica moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container-max section-padding py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-relaxed">
            Sonreí con confianza:{' '}
            <span className="text-primary">odontología de alta precisión</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Combinamos tecnología de vanguardia y atención humana para lograr
            resultados predecibles y estéticos.
          </p>

          {/* Advantages */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">{advantage}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => {
                const element = document.querySelector('#contacto')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Solicitar turno</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 text-lg px-8 py-4 flex items-center space-x-2"
              onClick={() => window.open('https://wa.me/541112345678', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {badge.split(' ')[0]}
                </div>
                <div className="text-sm text-gray-200">
                  {badge.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
