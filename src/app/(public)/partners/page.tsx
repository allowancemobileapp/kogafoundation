import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PartnersPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Our Partners & Sponsors
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        We are proud to collaborate with organizations that share our vision.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Become a Partner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This section will feature a showcase of sponsor and partner logos, along with information on partnership opportunities and a form to express interest.
            </p>
            <p>
              Sponsor logos and partnership details can be managed from the admin dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
