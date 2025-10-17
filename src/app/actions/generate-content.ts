'use server';

import { generateContentSnippet, type GenerateContentSnippetInput } from '@/ai/flows/generate-content-snippets';

export async function generateContentAction(input: GenerateContentSnippetInput) {
  try {
    const result = await generateContentSnippet(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating content:', error);
    return { success: false, error: 'Failed to generate content. Please try again.' };
  }
}
