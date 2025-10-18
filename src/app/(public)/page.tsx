
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Landmark, Mic, Milestone, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CONFERENCE_DETAILS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const elderImages = PlaceHolderImages.filter(p => p.id.startsWith('elder-induction-'));
const awardsImages = PlaceHolderImages.filter(p => p.id.startsWith('awards-'));
const ceremonyImages = PlaceHolderImages.filter(p => p.id.startsWith('ceremony-'));

const features = [
  {
    title: 'Kingdom Elderstateswomen Hall of Faith Induction',
    description: 'Honoring the matriarchs of faith for their lifelong service.',
    fee: 'Fee ₦75,000',
    images: elderImages,
    link: '/elder-induction',
  },
  {
    title: 'Awards for Faith-Based Initiatives',
    description: 'Recognizing outstanding contributions to community and society.',
    fee: 'Nomination Free',
    images: awardsImages,
    link: '/nominate',
  },
  {
    title: 'Defining Ceremony',
    description: 'The National Council for Faith-Based Women and Youths Initiatives.',
    fee: 'Included with registration',
    images: ceremonyImages,
    link: '/agenda',
  },
];

const whyAttend = [
  {
    icon: Users,
    text: 'Network with faith leaders, women, and youth.',
  },
  {
    icon: Mic,
    text: 'Gain insights from influential speakers and experts.',
  },
  {
    icon: Star,
    text: 'Celebrate excellence in faith-based initiatives.',
  },
  {
    icon: Landmark,
    text: 'Engage in discussions on socio-economic development.',
  },
];

const partnerLogos = PlaceHolderImages.filter(p => p.id.startsWith('partner-logo-'));

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4 md:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline md:text-5xl lg:text-6xl">
              {CONFERENCE_DETAILS.name}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
              {CONFERENCE_DETAILS.subheadline}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm font-semibold">
              <div className="flex items-center space-x-2 rounded-full bg-background/10 px-4 py-2">
                <Calendar className="h-4 w-4" />
                <span>{CONFERENCE_DETAILS.date} - {CONFERENCE_DETAILS.time}</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-background/10 px-4 py-2">
                <Milestone className="h-4 w-4" />
                <span>{CONFERENCE_DETAILS.venue}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/register">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
                <Link href="/nominate">Nominate Someone</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm">
              Questions? Call us at <a href={`tel:${CONFERENCE_DETAILS.contactPhone}`} className="font-bold underline hover:text-accent">{CONFERENCE_DETAILS.contactPhone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center font-headline">Why You Should Attend</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            Join us for a transformative experience designed to inspire, equip, and connect leaders for greater impact.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyAttend.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center font-headline">Special Features</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            Explore the unique opportunities and ceremonies at this year&apos;s conference.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="overflow-hidden flex flex-col group">
                 {feature.images && feature.images.length > 0 && (
                   <Carousel className="w-full relative">
                      <CarouselContent>
                        {feature.images.map((img, index) => (
                          <CarouselItem key={index}>
                             <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                <Image
                                  src={img.imageUrl}
                                  alt={img.description}
                                  data-ai-hint={img.imageHint}
                                  width={600}
                                  height={400}
                                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {feature.images.length > 1 && (
                        <>
                          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                        </>
                      )}
                    </Carousel>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-sm font-semibold text-primary">{feature.fee}</span>
                        <Link href={feature.link} className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center">
                            Learn More <ArrowRight className="ml-1 h-4 w-4"/>
                        </Link>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center font-headline">Our Trusted Partners & Sponsors</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            We are grateful for the support of our partners who make this event possible.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 items-center">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="flex flex-col items-center justify-center text-center gap-2">
                {logo && (
                  <div className="relative w-32 h-32">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      data-ai-hint={logo.imageHint}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <p className="text-sm font-medium text-muted-foreground">{logo.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/partners">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
