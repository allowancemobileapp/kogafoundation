
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/awards', label: 'Awards' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-20 w-full bg-transparent text-primary-foreground">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold sm:inline-block font-headline">
              KOGA Events
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'transition-colors hover:text-white',
                  pathname === href ? 'text-white' : 'text-white/70'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                </SheetHeader>
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Logo />
                <span className="font-bold font-headline">KOGA Events</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-muted-foreground transition-colors hover:text-foreground',
                        pathname === href && 'text-foreground'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                   <div className="flex flex-col space-y-2 pt-6">
                    <Button asChild>
                        <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>Register Now</Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="/nominate" onClick={() => setIsMobileMenuOpen(false)}>Nominate Someone</Link>
                    </Button>
                   </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
           <div className="hidden md:flex items-center space-x-2">
             <Button asChild className="hidden md:inline-flex" variant="ghost">
                <Link href="/nominate">Nominate Someone</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/register">Register Now</Link>
            </Button>
           </div>
        </div>
      </div>
    </header>
  );
}
