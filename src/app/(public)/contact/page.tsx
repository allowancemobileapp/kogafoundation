import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ADDRESSES, CONFERENCE_DETAILS } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Contact Us
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Have questions? We&apos;d love to hear from you.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." required />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold font-headline">Contact Information</h3>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> {CONFERENCE_DETAILS.contactPhone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> {CONFERENCE_DETAILS.contactEmail}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Nigeria Office</h3>
            <p className="mt-2 text-muted-foreground">{ADDRESSES.nigeria}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">USA Office</h3>
            <p className="mt-2 text-muted-foreground">{ADDRESSES.usa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
