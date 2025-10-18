import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
  honeypot: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validación básica de campos requeridos
    const requiredFields = ['name', 'email', 'phone', 'service', 'message']
    for (const field of requiredFields) {
      const value = body[field as keyof ContactFormData]
      if (!value || 
          (typeof value === 'string' && !value.trim())) {
        return NextResponse.json(
          { error: `El campo ${field} es requerido` },
          { status: 400 }
        )
      }
    }

    // Verificar consentimiento
    if (!body.consent) {
      return NextResponse.json(
        { error: 'Debes aceptar el tratamiento de datos' },
        { status: 400 }
      )
    }

    // Verificar honeypot (si está lleno, es un bot)
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.log('Bot detected:', body.honeypot)
      return NextResponse.json(
        { error: 'Solicitud inválida' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'El email no es válido' },
        { status: 400 }
      )
    }

    // Validación de teléfono (básica)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: 'El teléfono no es válido' },
        { status: 400 }
      )
    }

    // Aquí puedes agregar la lógica para enviar el email
    // Por ejemplo, usando un servicio como Formspree, EmailJS, o un proveedor de email
    
    // Ejemplo con Formspree (descomenta y configura):
    /*
    const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message,
        _subject: `Nueva consulta - ${body.service}`,
        _replyto: body.email,
      }),
    })

    if (!formspreeResponse.ok) {
      throw new Error('Error al enviar el formulario')
    }
    */

    // Por ahora, solo logueamos los datos (en producción, aquí enviarías el email)
    console.log('Nueva consulta recibida:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // Simular envío de email (reemplazar con implementación real)
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        message: 'Formulario enviado correctamente',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Método GET no permitido
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
