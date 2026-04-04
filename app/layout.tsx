import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agung Cahyo - Videographer & Editor',
  description: 'Professional videographer and video editor. Transforming stories into stunning visual content.',
  openGraph: {
    title: 'Agung Cahyo - Videographer & Editor',
    description: 'Professional videographer and video editor',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
