import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPartnersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Partners & Sponsors</CardTitle>
        <CardDescription>
          Manage sponsor logos and partnership tiers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground p-8 border-dashed border-2 rounded-md">
            <p>Sponsor and partner management interface will be here.</p>
            <Button className="mt-4">Add New Partner</Button>
        </div>
      </CardContent>
    </Card>
  );
}
