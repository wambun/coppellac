import { MetadataRoute } from 'next';
import { services } from '@/data/content/services';

export const dynamic = 'force-static';

const baseUrl = 'https://coppellac.com';

// Service areas for local SEO
const serviceAreas = [
  'coppell',
  'irving',
  'lewisville',
  'flower-mound',
  'carrollton',
  'grapevine',
  'dallas',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0];

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tips`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Individual service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Service area pages
  const areaPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...servicePages, ...areaPages];
}
