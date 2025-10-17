'use server';

/**
 * @fileOverview AI-powered content creation tool for generating content snippets and descriptions.
 *
 * - generateContentSnippet - A function that handles the content generation process.
 * - GenerateContentSnippetInput - The input type for the generateContentSnippet function.
 * - GenerateContentSnippetOutput - The return type for the generateContentSnippet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateContentSnippetInputSchema = z.object({
  contentType: z
    .enum(['eventDetails', 'awardCategory', 'speakerBio'])
    .describe('The type of content to generate.'),
  topic: z.string().describe('The topic or subject of the content snippet.'),
  keywords:
    z.string().optional().describe('Optional keywords to guide content generation.'),
  styleGuide:
    z.string().optional().describe('Optional style guide for the generated content.'),
});
export type GenerateContentSnippetInput = z.infer<
  typeof GenerateContentSnippetInputSchema
>;

const GenerateContentSnippetOutputSchema = z.object({
  contentSnippet: z.string().describe('The generated content snippet.'),
});
export type GenerateContentSnippetOutput = z.infer<
  typeof GenerateContentSnippetOutputSchema
>;

export async function generateContentSnippet(
  input: GenerateContentSnippetInput
): Promise<GenerateContentSnippetOutput> {
  return generateContentSnippetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContentSnippetPrompt',
  input: {schema: GenerateContentSnippetInputSchema},
  output: {schema: GenerateContentSnippetOutputSchema},
  prompt: `You are a content creation assistant designed to generate engaging and informative content snippets.

  Based on the content type, topic, and keywords provided, generate a content snippet. Adhere to the specified style guide if provided.

  Content Type: {{{contentType}}}
  Topic: {{{topic}}}
  Keywords: {{{keywords}}}
  Style Guide: {{{styleGuide}}}

  Content Snippet: `,
});

const generateContentSnippetFlow = ai.defineFlow(
  {
    name: 'generateContentSnippetFlow',
    inputSchema: GenerateContentSnippetInputSchema,
    outputSchema: GenerateContentSnippetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
