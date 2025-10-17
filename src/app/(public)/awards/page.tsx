import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Lightbulb } from "lucide-react";
import Link from "next/link";

const awardCategories = [
    {
        icon: Star,
        title: "Community Impact Award",
        description: "Recognizing FBOs that have demonstrated outstanding service and tangible impact in their local communities through social welfare, education, or healthcare projects."
    },
    {
        icon: Users,
        title: "Youth Leadership Award",
        description: "Celebrating young leaders and youth-led initiatives within faith-based organizations that are driving positive change and inspiring their peers."
    },
    {
        icon: Lightbulb,
        title: "Innovation in Ministry Award",
        description: "Awarding organizations that have shown creativity and innovation in their approach to ministry, outreach, and engagement in the modern world."
    }
]

export default function AwardsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Awards for Faith-Based Initiatives
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Recognizing excellence and outstanding contributions to community and society.
      </p>
      
      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {awardCategories.map(category => (
            <Card key={category.title}>
                <CardHeader className="items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 font-headline">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    <p>{category.description}</p>
                </CardContent>
            </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/nominate">Nominate Someone Now</Link>
        </Button>
        <p className="text-muted-foreground text-sm mt-2">Nominations are free and open to all.</p>
      </div>
    </div>
  );
}
