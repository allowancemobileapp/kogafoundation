import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-headline',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'KOGA Faith Foundation — State Conference & Awards (Lagos 2025)',
  description: 'Sensitizing, Mobilizing, Equipping, and Engaging Faith-Based Organizations for Socio-Economic Development',
  metadataBase: new URL('https://www.kogaagencies.org'),
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
