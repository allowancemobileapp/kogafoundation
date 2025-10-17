import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        About the Conference
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Learn more about the mission and vision behind the State Conference & Awards.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This section will detail the mission of the conference, focusing on sensitizing, mobilizing, equipping, and engaging faith-based organizations for socio-economic development.
            </p>
            <p>
              Content for this page can be managed from the admin dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
