import { type MetadataRoute } from 'next'
import { CONFERENCE_DETAILS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = CONFERENCE_DETAILS.domain;
  
  const routes = [
    '',
    '/about',
    '/agenda',
    '/register',
    '/nominate',
    '/elder-induction',
    '/awards',
    '/partners',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
