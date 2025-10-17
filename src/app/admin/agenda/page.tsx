import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAgendaPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agenda & Speakers</CardTitle>
        <CardDescription>
          Manage the conference schedule and speaker information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground p-8 border-dashed border-2 rounded-md">
            <p>Agenda and speaker management interface will be here.</p>
            <p className="text-sm">This will likely involve a form or a WYSIWYG editor.</p>
            <Button className="mt-4">Add New Session</Button>
        </div>
      </CardContent>
    </Card>
  );
}
