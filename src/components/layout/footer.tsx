
import Link from 'next/link';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ADDRESSES, CONFERENCE_DETAILS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="text-lg font-bold font-headline sr-only">KOGA Faith Foundation</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {CONFERENCE_DETAILS.subheadline}
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href={SOCIAL_LINKS.twitter} aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href={SOCIAL_LINKS.facebook} aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href={SOCIAL_LINKS.instagram} aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold tracking-wider font-headline">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/agenda" className="text-muted-foreground hover:text-foreground">Agenda</Link></li>
              <li><Link href="/awards" className="text-muted-foreground hover:text-foreground">Awards</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold tracking-wider font-headline">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/legal/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-semibold tracking-wider font-headline">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay updated on the latest conference news and announcements.
            </p>
            <form className="mt-4 flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="flex-1" aria-label="Email for newsletter"/>
              <Button type="submit" size="icon" aria-label="Subscribe to newsletter">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 gap-8 text-sm text-muted-foreground md:grid-cols-3">
            <div>
                <h4 className="font-semibold text-foreground">Contact Us</h4>
                <p>Phone: {CONFERENCE_DETAILS.contactPhone}</p>
                <p>US (WhatsApp): {CONFERENCE_DETAILS.contactPhoneUS}</p>
                <p>Email: {CONFERENCE_DETAILS.contactEmail}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground">Nigeria Office</h4>
                <p>{ADDRESSES.nigeria}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground">USA Office</h4>
                <p>{ADDRESSES.usa}</p>
            </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} KOGA Faith Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
