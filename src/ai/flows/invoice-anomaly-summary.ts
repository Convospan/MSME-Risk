'use server';
/**
 * @fileOverview Summarizes detected invoice anomalies, highlighting potential fraud or errors.
 *
 * - invoiceAnomalySummary - A function that summarizes invoice anomalies.
 * - InvoiceAnomalySummaryInput - The input type for the invoiceAnomalySummary function.
 * - InvoiceAnomalySummaryOutput - The return type for the invoiceAnomalySummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const InvoiceAnomalySummaryInputSchema = z.object({
  invoiceData: z.string().describe('The invoice data containing potential anomalies.'),
});
export type InvoiceAnomalySummaryInput = z.infer<typeof InvoiceAnomalySummaryInputSchema>;

const InvoiceAnomalySummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the detected anomalies in the invoices.'),
  potentialIssues: z.string().describe('A list of potential issues or fraud detected.'),
});
export type InvoiceAnomalySummaryOutput = z.infer<typeof InvoiceAnomalySummaryOutputSchema>;

export async function invoiceAnomalySummary(input: InvoiceAnomalySummaryInput): Promise<InvoiceAnomalySummaryOutput> {
  return invoiceAnomalySummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'invoiceAnomalySummaryPrompt',
  input: {
    schema: z.object({
      invoiceData: z.string().describe('The invoice data containing potential anomalies.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the detected anomalies in the invoices.'),
      potentialIssues: z.string().describe('A list of potential issues or fraud detected.'),
    }),
  },
  prompt: `You are an expert financial analyst specializing in invoice anomaly detection.

You will analyze the provided invoice data and summarize any detected anomalies, highlighting potential fraud or errors.

Invoice Data: {{{invoiceData}}}

Provide a concise summary of the anomalies and a list of potential issues that need to be addressed.
`,
});

const invoiceAnomalySummaryFlow = ai.defineFlow<
  typeof InvoiceAnomalySummaryInputSchema,
  typeof InvoiceAnomalySummaryOutputSchema
>(
  {
    name: 'invoiceAnomalySummaryFlow',
    inputSchema: InvoiceAnomalySummaryInputSchema,
    outputSchema: InvoiceAnomalySummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
