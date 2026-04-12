import type { Metadata } from 'next'
import { CursorFollower } from '@/components/ui/CursorFollower'
import { ThemeColor } from '@/components/ui/ThemeColor'
import { TextureOverlays } from '@/components/ui/TextureOverlays'
import { PageTransition } from '@/components/ui/PageTransition'
import { ActivePanelProvider } from '@/lib/activePanelContext'
import { LanguageProvider } from '@/lib/languageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agung Cahyo Prasetyo — Code · Cinema · Craft',
  description: 'Videographer, Full-Stack Developer, and Beverage Crafter based in Jakarta. Intentionality in every detail.',
  openGraph: {
    title: 'Agung Cahyo Prasetyo',
    description: 'Videographer · Developer · Beverage Crafter',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ cursor: 'none' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased" style={{ cursor: 'none' }}>
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
