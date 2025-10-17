
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ElderInductionSchema, type ElderInductionFormValues } from "@/lib/schemas";

export default function ElderInductionPage() {
  const router = useRouter();
  const form = useForm<ElderInductionFormValues>({
    resolver: zodResolver(ElderInductionSchema),
    defaultValues: {
      candidateName: "",
      candidateContact: "",
      candidateChurch: "",
      bio: "",
      candidateAge: 0,
    },
  });

  function onSubmit(values: ElderInductionFormValues) {
    const whatsAppNumber = "2349023567833";
    const text = `Elderstateswomen Induction Application:

Candidate Name: ${values.candidateName}
Age: ${values.candidateAge}
Contact Phone: ${values.candidateContact}
Church/Ministry: ${values.candidateChurch}
Bio: ${values.bio}

Amount: ₦75,000`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsAppNumber}?text=${encodedText}`, '_blank');
    router.push('/thank-you');
  }

  return (
    <div className="container py-12 md:py-20 flex justify-center px-4 md:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Elderstateswomen Hall of Faith Induction</CardTitle>
          <CardDescription>Induction Fee: ₦75,000. Candidates must be 50 years or older. This is a special feature of the State Conference.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <FormField
                control={form.control}
                name="candidateName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Candidate's Full Name</FormLabel>
                    <FormControl><Input placeholder="Candidate's Full Name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="candidateAge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl><Input type="number" min="50" placeholder="50 or older" {...field} onChange={event => field.onChange(+event.target.value)} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="candidateContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Phone</FormLabel>
                      <FormControl><Input type="tel" placeholder="Candidate's Phone Number" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="candidateChurch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Church / Ministry</FormLabel>
                    <FormControl><Input placeholder="Candidate's Church or Ministry" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Bio</FormLabel>
                    <FormControl><Textarea placeholder="Provide a brief biography of the candidate." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Apply via WhatsApp (₦75,000)
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
