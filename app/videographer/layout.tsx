import type { Metadata } from 'next'
import { projects } from '@/data/videographer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  title: 'Videographer',
  description:
    'Videography and editing portfolio of Agung Cahyo Prasetyo: cinematic storytelling for brand, corporate, and documentary work.',
  alternates: {
    canonical: '/videographer',
  },
  openGraph: {
    title: 'Videographer | Agung Cahyo Prasetyo',
    description:
      'Cinematic video production, editing, and visual storytelling projects.',
    url: '/videographer',
    type: 'website',
  },
}

export default function VideographerLayout({ children }: { children: React.ReactNode }) {
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
        name: 'Videographer',
        item: `${siteUrl}/videographer`,
      },
    ],
  }

  const worksJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Videographer Portfolio',
    url: `${siteUrl}/videographer`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: typeof project.title === 'string' ? project.title : project.title.en,
          dateCreated: project.year,
          url: project.link !== '#' ? project.link : `${siteUrl}/videographer`,
          keywords: project.tags.join(', '),
          description:
            typeof project.description === 'string'
              ? project.description
              : project.description.en,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(worksJsonLd) }}
      />
      {children}
    </>
  )
}
