import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Coffee, Award, Shield } from "lucide-react";

const agendaItems = [
  { time: "09:00 AM - 10:00 AM", title: "Registration & Networking", icon: Coffee },
  { time: "10:00 AM - 10:30 AM", title: "Opening Ceremony & Keynote Address", icon: Clock },
  { time: "10:30 AM - 12:00 PM", title: "Session 1: Mobilizing FBOs for Economic Empowerment", icon: Clock },
  { time: "12:00 PM - 01:00 PM", title: "Defining Ceremony: National Council for Faith-Based Women and Youths Initiatives", icon: Shield },
  { time: "01:00 PM - 02:00 PM", title: "Lunch Break", icon: Coffee },
  { time: "02:00 PM - 03:30 PM", title: "Session 2: Equipping Leaders for Community Impact", icon: Clock },
  { time: "03:30 PM - 04:30 PM", title: "Kingdom Elderstateswomen Hall of Faith Induction", icon: Award },
  { time: "04:30 PM - 05:30 PM", title: "Awards for Faith-Based Initiatives", icon: Award },
  { time: "05:30 PM - 06:00 PM", title: "Closing Remarks & Vote of Thanks", icon: Clock },
];

export default function AgendaPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Conference Agenda
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Plan your day with our detailed event schedule for December 5th, 2025.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Event Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {agendaItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  {index < agendaItems.length - 1 && (
                    <div className="w-px h-12 bg-border"></div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-primary">{item.time}</p>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
