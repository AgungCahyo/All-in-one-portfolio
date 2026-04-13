import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  title: 'Beverage Crafter',
  description:
    'Beverage craft portfolio of Agung Cahyo Prasetyo: mocktail development, sensory profiling, and menu engineering.',
  alternates: {
    canonical: '/beverage',
  },
  openGraph: {
    title: 'Beverage Crafter | Agung Cahyo Prasetyo',
    description:
      'Craft-focused beverage projects: menu development, flavor systems, and hospitality precision.',
    url: '/beverage',
    type: 'website',
  },
}

export default function BeverageLayout({ children }: { children: React.ReactNode }) {
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
        name: 'Beverage Crafter',
        item: `${siteUrl}/beverage`,
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
