import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Megaphone, Trophy } from "lucide-react";
import Link from "next/link";

const partnershipTiers = [
    {
        icon: Handshake,
        title: "Platinum Partner",
        perks: ["Keynote speaking slot", "Lead branding on all event materials", "Exhibition booth", "Social media campaign"]
    },
    {
        icon: Trophy,
        title: "Gold Sponsor",
        perks: ["Branding on specific event segments", "Exhibition booth", "Logo on website and banners"]
    },
    {
        icon: Megaphone,
        title: "Silver Sponsor",
        perks: ["Logo placement on event materials", "Mention during the ceremony"]
    }
]

export default function PartnersPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Our Partners & Sponsors
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Collaborate with us to empower faith-based organizations and drive socio-economic change.
      </p>
      
      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {partnershipTiers.map(tier => (
            <Card key={tier.title} className="flex flex-col">
                <CardHeader className="items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <tier.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 font-headline">{tier.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        {tier.perks.map(perk => <li key={perk}>{perk}</li>)}
                    </ul>
                </CardContent>
            </Card>
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
