
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { NominationSchema, type NominationFormValues } from "@/lib/schemas";
import { nominateAction } from "../actions/nomination";

export default function NominatePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<NominationFormValues>({
    resolver: zodResolver(NominationSchema),
    defaultValues: {
      nominatorName: "",
      nominatorEmail: "",
      nominatorPhone: "",
      nomineeName: "",
      nomineeOrg: "",
      nomineeRole: "",
      statement: "",
    },
  });

  function onSubmit(values: NominationFormValues) {
    startTransition(async () => {
      const result = await nominateAction(values);
      if (result.success) {
        toast({
          title: "Nomination Submitted!",
          description: "Thank you for your submission. We will be in touch.",
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
    <div className="container py-12 md:py-20 flex justify-center px-4 md:px-8">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Submit a Nomination</CardTitle>
          <CardDescription>Nominate a deserving individual or organization for an award. Nomination is free.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <fieldset className="space-y-4 p-4 border rounded-lg">
                <legend className="text-lg font-semibold px-2 font-headline">Your Information</legend>
                <FormField
                  control={form.control}
                  name="nominatorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl><Input placeholder="Your Full Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nominatorEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nominatorPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Phone</FormLabel>
                        <FormControl><Input type="tel" placeholder="Your Phone Number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-4 p-4 border rounded-lg">
                <legend className="text-lg font-semibold px-2 font-headline">Nominee Information</legend>
                 <FormField
                  control={form.control}
                  name="nomineeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nominee's Name</FormLabel>
                      <FormControl><Input placeholder="Nominee's Full Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nomineeOrg"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nominee's Organization (Optional)</FormLabel>
                        <FormControl><Input placeholder="Nominee's Organization" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nomineeRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nominee's Role (Optional)</FormLabel>
                        <FormControl><Input placeholder="e.g., Pastor, Founder" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="awardCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Award Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="community-impact">Community Impact</SelectItem>
                          <SelectItem value="youth-leadership">Youth Leadership</SelectItem>
                          <SelectItem value="innovation-in-ministry">Innovation in Ministry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>

              <FormField
                control={form.control}
                name="statement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomination Statement (Max 1000 characters)</FormLabel>
                    <FormControl><Textarea placeholder="Explain why this nominee is deserving of the award." maxLength={1000} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormLabel>Supporting Documents (Optional)</FormLabel>
                <FormControl><Input id="documents" type="file" /></FormControl>
                <p className="text-xs text-muted-foreground">You can upload files like PDFs, images, or documents. File uploads are not yet enabled.</p>
              </div>

              <Button type="submit" disabled={isPending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isPending ? 'Submitting...' : 'Submit Nomination'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
