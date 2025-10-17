import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AwardsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Awards Categories
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Recognizing excellence and impact within the faith-based community.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Categories & Criteria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This page will list all award categories, their descriptions, and the criteria for nomination. Information about past winners may also be featured.
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
