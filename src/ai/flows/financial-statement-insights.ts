// src/ai/flows/financial-statement-insights.ts
'use server';
/**
 * @fileOverview Provides a GenAI-powered summary of key insights from uploaded financial statements.
 *
 * - getFinancialStatementInsights - A function that generates insights from financial statements.
 * - FinancialStatementInsightsInput - The input type for the getFinancialStatementInsights function.
 * - FinancialStatementInsightsOutput - The return type for the getFinancialStatementInsights function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const FinancialStatementInsightsInputSchema = z.object({
  financialStatementText: z.string().describe('The text extracted from the financial statements.'),
});
export type FinancialStatementInsightsInput = z.infer<typeof FinancialStatementInsightsInputSchema>;

const FinancialStatementInsightsOutputSchema = z.object({
  summary: z.string().describe('A summary of the key insights from the financial statements, highlighting strengths and weaknesses.'),
});
export type FinancialStatementInsightsOutput = z.infer<typeof FinancialStatementInsightsOutputSchema>;

export async function getFinancialStatementInsights(input: FinancialStatementInsightsInput): Promise<FinancialStatementInsightsOutput> {
  return financialStatementInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialStatementInsightsPrompt',
  input: {
    schema: z.object({
      financialStatementText: z.string().describe('The text extracted from the financial statements.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the key insights from the financial statements, highlighting strengths and weaknesses.'),
    }),
  },
  prompt: `You are an expert financial analyst. Please provide a concise summary of the key insights from the following financial statements, highlighting areas of strength and weakness.\n\nFinancial Statements:\n{{{financialStatementText}}}`, // Removed HTML escaping
});

const financialStatementInsightsFlow = ai.defineFlow<
  typeof FinancialStatementInsightsInputSchema,
  typeof FinancialStatementInsightsOutputSchema
>(
  {
    name: 'financialStatementInsightsFlow',
    inputSchema: FinancialStatementInsightsInputSchema,
    outputSchema: FinancialStatementInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
