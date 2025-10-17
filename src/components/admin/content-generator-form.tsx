'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Clipboard, Check } from 'lucide-react';
import { generateContentAction } from '@/app/actions/generate-content';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  contentType: z.enum(['eventDetails', 'awardCategory', 'speakerBio'], {
    required_error: 'Please select a content type.',
  }),
  topic: z.string().min(3, 'Topic must be at least 3 characters long.'),
  keywords: z.string().optional(),
  styleGuide: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContentGeneratorForm() {
  const { toast } = useToast();
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      keywords: '',
      styleGuide: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setGeneratedContent('');
    const result = await generateContentAction(data);
    setIsLoading(false);

    if (result.success && result.data) {
      setGeneratedContent(result.data.contentSnippet);
    } else {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error,
      });
    }
  };

  const handleCopy = () => {
    if (generatedContent) {
      navigator.clipboard.writeText(generatedContent);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
      toast({
        title: 'Copied to clipboard!',
      })
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-accent" />
          AI Content Generator
        </CardTitle>
        <CardDescription>
          Generate content snippets for event details, award categories, and speaker bios using AI.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="contentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a content type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="eventDetails">Event Details</SelectItem>
                        <SelectItem value="awardCategory">Award Category</SelectItem>
                        <SelectItem value="speakerBio">Speaker Bio</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic / Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'Youth Leadership Award' or 'Dr. Jane Doe'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., innovation, community, impact" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="styleGuide"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Style Guide (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Tone should be formal and inspiring. Keep it under 150 words.'"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate Content'}
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
            
          </CardFooter>
        </form>
      </Form>
      
      {(isLoading || generatedContent) && (
        <>
          <CardContent>
             <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Generated Content</h3>
              <div className="relative rounded-md border bg-muted p-4 pr-12 min-h-[120px]">
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{generatedContent}</p>
                )}
                {!isLoading && generatedContent && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={handleCopy}
                  >
                    {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
}
