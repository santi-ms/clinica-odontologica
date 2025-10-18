'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-neutral-dark mb-4">
            Página no encontrada
          </h2>
          <p className="text-neutral-gray mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="btn-primary w-full flex items-center justify-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Volver al inicio</span>
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary w-full flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Página anterior</span>
          </button>
        </div>

        <div className="mt-12 text-sm text-neutral-gray">
          <p>¿Necesitas ayuda? Contáctanos:</p>
          <div className="mt-2 space-x-4">
            <a href="tel:+541112345678" className="text-primary hover:underline">
              +54 11 1234-5678
            </a>
            <a href="mailto:info@smilecare-clinica.com" className="text-primary hover:underline">
              info@smilecare-clinica.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
