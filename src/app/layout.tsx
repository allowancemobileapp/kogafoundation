import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { CONFERENCE_DETAILS } from '@/lib/constants';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-headline',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: CONFERENCE_DETAILS.name,
  startDate: '2025-12-05T10:00:00+01:00',
  endDate: '2025-12-05T18:00:00+01:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Lagos State Government Secretariat Hall',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lagos State Government Secretariat',
      addressLocality: 'Ikeja',
      addressRegion: 'Lagos',
      postalCode: '100281',
      addressCountry: 'NG',
    },
  },
  image: [`${CONFERENCE_DETAILS.domain}/og-image.png`],
  description: CONFERENCE_DETAILS.subheadline,
  organizer: {
    '@type': 'Organization',
    name: 'KOGA Faith Foundation',
    url: CONFERENCE_DETAILS.domain,
  },
  offers: {
    '@type': 'Offer',
    url: `${CONFERENCE_DETAILS.domain}/register`,
    price: '10000',
    priceCurrency: 'NGN',
    availability: 'https://schema.org/InStock',
    validFrom: new Date().toISOString().split('T')[0],
  },
};

const logoUrl = 'https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/koga-events/logo.png';

export const metadata: Metadata = {
  title: 'KOGA Faith Foundation — State Conference & Awards (Lagos 2025)',
  description: 'Sensitizing, Mobilizing, Equipping, and Engaging Faith-Based Organizations for Socio-Economic Development',
  metadataBase: new URL('https://www.kogaagencies.org'),
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: 'KOGA Faith Foundation — State Conference & Awards (Lagos 2025)',
    description: 'Sensitizing, Mobilizing, Equipping, and Engaging Faith-Based Organizations for Socio-Economic Development',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOGA Faith Foundation — State Conference & Awards (Lagos 2025)',
    description: 'Sensitizing, Mobilizing, Equipping, and Engaging Faith-Based Organizations for Socio-Economic Development',
    images: ['/og-image.png'],
  },
  other: {
    'application/ld+json': JSON.stringify(eventSchema),
  }
};

export const viewport: Viewport = {
  themeColor: '#0B4F4A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-body antialiased', fontPoppins.variable, fontInter.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
