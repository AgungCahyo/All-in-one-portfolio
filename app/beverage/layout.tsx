import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agungcahyo.my.id'

export const metadata: Metadata = {
  title: 'Team Coordinator & Leadership',
  description:
    'Leadership portfolio of Agung Cahyo Prasetyo: coordinating beverage teams, staff training, SOP systems, and operations under pressure.',
  alternates: {
    canonical: '/beverage',
  },
  openGraph: {
    title: 'Team Coordinator & Leadership | Agung Cahyo Prasetyo',
    description:
      'Coordinating teams, training staff, and keeping beverage operations moving — leadership in a high-volume F&B context.',
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
        name: 'Leadership',
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
