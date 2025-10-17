import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgendaPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Conference Agenda
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Plan your day with our detailed event schedule.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Event Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              The full conference agenda, including session times, topics, and speaker information, will be displayed here.
            </p>
            <p>
              This schedule is editable by administrators in the admin dashboard. Please check back for updates.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
