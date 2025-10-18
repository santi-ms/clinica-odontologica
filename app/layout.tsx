import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Clínica Odontológica SmileCare - Odontología de Alta Precisión',
  description: 'Combinamos tecnología de vanguardia y atención humana para lograr resultados predecibles y estéticos. Implantes, estética dental, ortodoncia y más.',
  keywords: 'odontología, implantes dentales, estética dental, ortodoncia, blanqueamiento, clínica dental',
  authors: [{ name: 'Clínica Odontológica SmileCare' }],
  openGraph: {
    title: 'Clínica Odontológica SmileCare - Odontología de Alta Precisión',
    description: 'Combinamos tecnología de vanguardia y atención humana para lograr resultados predecibles y estéticos.',
    url: 'https://smilecare-clinica.com',
    siteName: 'SmileCare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clínica Odontológica SmileCare',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Odontológica SmileCare - Odontología de Alta Precisión',
    description: 'Combinamos tecnología de vanguardia y atención humana para lograr resultados predecibles y estéticos.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DentalClinic',
  name: 'Clínica Odontológica SmileCare',
  description: 'Clínica odontológica especializada en implantes, estética dental y ortodoncia',
  url: 'https://smilecare-clinica.com',
  telephone: '+54-11-1234-5678',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Corrientes 1234',
    addressLocality: 'Buenos Aires',
    addressRegion: 'CABA',
    postalCode: '1043',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.6037',
    longitude: '-58.3816',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  acceptsReservations: true,
  medicalSpecialty: 'Dentistry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics - Descomentar y agregar GA4_ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA4_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA4_ID');
            `,
          }}
        /> */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
