# Clínica Odontológica SmileCare - Landing Page

Una landing page moderna y profesional para clínica odontológica, desarrollada con Next.js 15, TypeScript, Tailwind CSS y componentes tipo shadcn/ui.

## 🚀 Características

- **Diseño Responsivo**: Mobile-first, totalmente adaptable a todos los dispositivos
- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap.xml
- **Accesibilidad**: Cumple estándares WCAG AA, navegación por teclado, etiquetas ARIA
- **Rendimiento**: Optimizado para Lighthouse, lazy loading, imágenes optimizadas
- **Formulario de Contacto**: Validación frontend, API con honeypot anti-spam
- **Integración WhatsApp**: Botón flotante y enlaces directos
- **Mapa Interactivo**: Google Maps embebido con ubicación
- **Modales**: Servicios con detalles expandibles
- **Animaciones**: Transiciones suaves y efectos hover

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Fuentes**: Inter (texto) + Poppins (títulos)

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd clinica-odontologica
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
├── app/
│   ├── api/contact/route.ts    # API para formulario de contacto
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx             # Layout principal con SEO
│   ├── page.tsx               # Página principal
│   └── not-found.tsx          # Página 404
├── components/
│   ├── ui/                     # Componentes base (shadcn/ui)
│   ├── Header.tsx             # Header con navegación
│   ├── Hero.tsx               # Sección hero principal
│   ├── Services.tsx           # Cards de servicios con modal
│   ├── Technology.tsx         # Tecnología y protocolos
│   ├── Team.tsx               # Equipo profesional
│   ├── Testimonials.tsx       # Testimonios de pacientes
│   ├── Insurers.tsx          # Obras sociales y prepagas
│   ├── Location.tsx          # Ubicación y horarios
│   ├── ContactForm.tsx       # Formulario de contacto
│   ├── FAQs.tsx              # Preguntas frecuentes
│   ├── Footer.tsx            # Footer completo
│   └── WhatsAppButton.tsx    # Botón flotante WhatsApp
├── lib/
│   └── utils.ts              # Utilidades (cn function)
├── public/
│   ├── robots.txt            # Configuración para bots
│   └── sitemap.xml           # Mapa del sitio
└── ...
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.ts`:
- **Primario**: #0891b2 (cyan-600)
- **Primario Oscuro**: #0e7490 (cyan-700)
- **Texto Oscuro**: #0f172a (slate-900)
- **Gris**: #64748b (slate-500)
- **Fondo Claro**: #f8fafc (slate-50)

### Contenido
Para personalizar el contenido:

1. **Información de contacto**: Editar en `components/Header.tsx`, `components/Location.tsx` y `components/Footer.tsx`
2. **Servicios**: Modificar array `services` en `components/Services.tsx`
3. **Equipo**: Actualizar array `teamMembers` en `components/Team.tsx`
4. **Testimonios**: Cambiar array `testimonials` en `components/Testimonials.tsx`
5. **FAQs**: Editar array `faqs` en `components/FAQs.tsx`

### SEO
Configurar en `app/layout.tsx`:
- Título y descripción
- Open Graph y Twitter Cards
- JSON-LD para LocalBusiness
- Google Analytics (descomentar y agregar GA4_ID)

## 📧 Configuración del Formulario

El formulario de contacto incluye:
- Validación frontend completa
- API `/api/contact` con honeypot anti-spam
- Integración lista para servicios de email (Formspree, EmailJS, etc.)

### Para configurar envío de emails:

1. **Con Formspree** (recomendado):
   ```typescript
   // En app/api/contact/route.ts, descomentar y configurar:
   const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
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
   ```

2. **Con EmailJS**:
   - Instalar: `npm install @emailjs/browser`
   - Configurar servicio en EmailJS
   - Implementar envío en el frontend

## 🗺️ Configuración del Mapa

El mapa de Google Maps está configurado con:
- Dirección placeholder: Av. Corrientes 1234, CABA
- Coordenadas: -34.6037, -58.3816
- Modo responsivo

Para cambiar la ubicación, editar en `components/Location.tsx`:
```typescript
// Cambiar src del iframe y coordenadas
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895304!2d-58.38375968477024!3d-34.60373888245914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0xbe0c438b8bdb4c70!2sAv.%20Corrientes%201234%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1635789012345!5m2!1ses!2sar"
```

## 📱 WhatsApp Integration

Configurado para:
- Número: +54 11 1234-5678
- Mensaje predefinido para nuevos contactos
- Botón flotante que aparece después de scroll

Para cambiar el número, buscar y reemplazar `541112345678` en:
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Location.tsx`
- `components/WhatsAppButton.tsx`
- `app/layout.tsx` (JSON-LD)

## 🚀 Deployment

### 🌐 Vercel (Recomendado)

**Ventajas de Vercel:**
- ✅ Creado por el equipo de Next.js - integración perfecta
- ✅ Deploy automático desde GitHub
- ✅ Optimización automática de imágenes
- ✅ Edge Functions para mejor rendimiento
- ✅ CDN global súper rápido
- ✅ Variables de entorno fáciles de configurar

**Pasos para deploy:**

1. **Sube tu código a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente Next.js
   - Haz clic en "Deploy"

3. **Configuración automática:**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 🌐 Netlify (Alternativa)

**Ventajas de Netlify:**
- ✅ Más económico en planes gratuitos
- ✅ Formularios nativos (perfecto para tu formulario de contacto)
- ✅ Redirects y rewrites fáciles

**Pasos para deploy:**

1. **Sube tu código a GitHub** (igual que arriba)

2. **Conecta con Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión con GitHub
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio
   - Configura:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Haz clic en "Deploy site"

### 🔧 Configuración Post-Deploy

#### Variables de Entorno (Vercel)
En el dashboard de Vercel, ve a Settings > Environment Variables y agrega:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

#### Configuración del Formulario
Para que el formulario de contacto funcione en producción:

1. **Opción 1 - Formspree (Recomendado):**
   - Ve a [formspree.io](https://formspree.io)
   - Crea una cuenta gratuita
   - Crea un nuevo formulario
   - Copia el endpoint
   - Actualiza `app/api/contact/route.ts` con tu endpoint

2. **Opción 2 - EmailJS:**
   - Ve a [emailjs.com](https://emailjs.com)
   - Configura tu servicio de email
   - Actualiza el código del formulario

#### Dominio Personalizado
1. **Vercel:**
   - Ve a Settings > Domains
   - Agrega tu dominio personalizado
   - Configura los DNS según las instrucciones

2. **Netlify:**
   - Ve a Site settings > Domain management
   - Agrega tu dominio personalizado
   - Configura los DNS

### 📊 Monitoreo y Analytics

#### Google Analytics 4
1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu Measurement ID
3. Agrega el código en `app/layout.tsx`:

```tsx
// En el <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

## 📊 Performance

El proyecto está optimizado para:
- **Lighthouse Score**: 90+ en todas las métricas
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **SEO**: 100/100 en Lighthouse SEO
- **Accesibilidad**: WCAG AA compliant

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para soporte o preguntas:
- Email: info@smilecare-clinica.com
- Teléfono: +54 11 1234-5678

---

**Desarrollado con ❤️ para clínicas odontológicas modernas**
