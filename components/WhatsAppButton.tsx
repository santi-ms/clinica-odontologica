'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón después de hacer scroll hacia abajo
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola! Me interesa solicitar un turno en la clínica. ¿Podrían ayudarme?'
    )
    window.open(`https://wa.me/541112345678?text=${message}`, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Botón principal de WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          ¡Escribinos por WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>

        {/* Indicador de pulso */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}
