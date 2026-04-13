import type { Metadata } from 'next'
import { CursorFollower } from '@/components/ui/CursorFollower'
import { ThemeColor } from '@/components/ui/ThemeColor'
import { TextureOverlays } from '@/components/ui/TextureOverlays'
import { PageTransition } from '@/components/ui/PageTransition'
import { ActivePanelProvider } from '@/lib/activePanelContext'
import { LanguageProvider } from '@/lib/languageContext'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Agung Cahyo Prasetyo — Code · Cinema · Craft',
    template: '%s | Agung Cahyo Prasetyo',
  },
  description: 'Videographer, Full-Stack Developer, and Beverage Crafter based in Kudus. Intentionality in every detail.',
  keywords: [
    'Agung Cahyo Prasetyo',
    'Kudus',
    'Portfolio Kudus',
    'Videographer Kudus',
    'Full-Stack Developer Kudus',
    'Jasa Videographer Kudus',
    'Videographer Indonesia',
    'Full-Stack Developer Indonesia',
    'Beverage Crafter',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Agung Cahyo Prasetyo — Code · Cinema · Craft',
    description: 'Videographer · Developer · Beverage Crafter',
    type: 'website',
    url: '/',
    siteName: 'Agung Cahyo Prasetyo Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agung Cahyo Prasetyo — Code · Cinema · Craft',
    description: 'Videographer · Developer · Beverage Crafter',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Agung Cahyo Prasetyo',
  url: siteUrl,
  jobTitle: 'Videographer, Full-Stack Developer, Beverage Crafter',
  description: 'Multidisciplinary creator based in Kudus, working across code, cinema, and craft.',
  email: 'mailto:cahyoprasetyo507@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kudus',
    addressRegion: 'Jawa Tengah',
    addressCountry: 'ID',
  },
  homeLocation: {
    '@type': 'Place',
    name: 'Kudus, Indonesia',
  },
  knowsAbout: [
    'Videography',
    'Video Editing',
    'Full-Stack Development',
    'AI Automation',
    'Beverage Craft',
  ],
  sameAs: [
    'https://github.com/agungcahyo',
    'https://www.youtube.com/@agungcahyo',
    'https://medium.com/@agungc',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Agung Cahyo Prasetyo Portfolio',
  url: siteUrl,
  inLanguage: 'en',
  description: 'Portfolio showcasing developer, videography, and beverage craft work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <LanguageProvider>
          <ActivePanelProvider>
            <ThemeColor />
            <TextureOverlays />
            <CursorFollower/>
            <PageTransition>
              {children}
            </PageTransition>
          </ActivePanelProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
