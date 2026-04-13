import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  title: 'Developer',
  description:
    'Full-stack developer portfolio of Agung Cahyo Prasetyo: production-ready apps, AI integrations, automation, and engineering projects.',
  alternates: {
    canonical: '/developer',
  },
  openGraph: {
    title: 'Developer | Agung Cahyo Prasetyo',
    description:
      'Production-grade web and mobile projects with AI, automation, and modern full-stack architecture.',
    url: '/developer',
    type: 'website',
  },
}

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Developer',
        item: `${siteUrl}/developer`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
