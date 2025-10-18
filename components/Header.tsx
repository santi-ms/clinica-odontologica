'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Esquina izquierda */}
          <div className="flex-shrink-0">
            <h1 className="text-lg lg:text-xl font-heading font-bold text-primary">
              Clínica Odontológica SmileCare
            </h1>
          </div>

          {/* Desktop Navigation - Centro */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA & Phone - Esquina derecha */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-neutral-gray">
              <Phone className="h-4 w-4" />
              <span className="font-medium text-sm">+54 11 1234-5678</span>
            </div>
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="btn-primary text-sm px-4 py-2"
            >
              Solicitar turno
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-dark" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-neutral-gray mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+54 11 1234-5678</span>
                </div>
                <Button
                  onClick={() => scrollToSection('#contacto')}
                  className="w-full btn-primary"
                >
                  Solicitar turno
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
