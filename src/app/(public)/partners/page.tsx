
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const partnerLogos = PlaceHolderImages.filter(p => p.id.startsWith('partner-logo-'));

export default function PartnersPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Our Partners & Sponsors
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        We are grateful for the support of our partners who make this event possible.
      </p>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partnerLogos.map(logo => (
            <div key={logo.id} className="flex flex-col items-center justify-center text-center gap-4 p-4 border rounded-lg">
                <div className="relative w-40 h-40">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      data-ai-hint={logo.imageHint}
                      fill
                      className="object-contain"
                    />
                </div>
                <p className="text-lg font-medium text-foreground">{logo.description}</p>
            </div>
        ))}
      </div>

       <div className="mt-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold font-headline">Become a Partner</h2>
        <p className="mt-2 text-muted-foreground">
          Join us in this landmark event to showcase your organization's commitment to community development. For partnership inquiries, please reach out to our team.
        </p>
        <Button size="lg" asChild className="mt-6">
            <Link href="/contact">Contact Us for Partnership</Link>
        </Button>
      </div>
    </div>
  );
}
