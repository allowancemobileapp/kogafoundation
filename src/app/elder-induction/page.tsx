
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ElderInductionSchema, type ElderInductionFormValues } from "@/lib/schemas";
import { inductAction } from "../actions/induction";

export default function ElderInductionPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ElderInductionFormValues>({
    resolver: zodResolver(ElderInductionSchema),
    defaultValues: {
      candidateName: "",
      candidateContact: "",
      candidateChurch: "",
      bio: "",
    },
  });

  function onSubmit(values: ElderInductionFormValues) {
    startTransition(async () => {
      const result = await inductAction(values);
      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: "You will be redirected to the confirmation page shortly.",
        });
        router.push('/thank-you');
      } else {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: result.error,
        });
      }
    });
  }

  return (
    <div className="container py-12 md:py-20 flex justify-center">
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
                      <FormControl><Input type="number" min="50" placeholder="50 or older" {...field} /></FormControl>
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
              <Button type="submit" disabled={isPending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isPending ? 'Submitting...' : 'Proceed to Payment (₦75,000)'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
