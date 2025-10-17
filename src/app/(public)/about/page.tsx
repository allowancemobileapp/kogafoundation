import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONFERENCE_DETAILS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        About the Conference
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        {CONFERENCE_DETAILS.subheadline}
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              The State Conference & Awards for Faith-Based Initiatives is a premier gathering dedicated to sensitizing, mobilizing, equipping, and engaging faith-based organizations (FBOs) for impactful socio-economic development. 
            </p>
            <p>
              Our mission is to create a collaborative platform for leaders, members, and stakeholders from diverse faith backgrounds to share knowledge, build capacity, and foster partnerships that drive positive change within communities across Lagos and beyond.
            </p>
             <p>
              We believe that FBOs play a crucial role in the fabric of society, and by strengthening their capacity, we can unlock immense potential for sustainable development, social cohesion, and spiritual growth.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
