'use server';
/**
 * @fileOverview Summarizes regulatory compliance status and requirements for MSMEs.
 *
 * - getRegulatoryComplianceSummary - A function that generates a summary of regulatory compliance.
 * - RegulatoryComplianceSummaryInput - The input type for the getRegulatoryComplianceSummary function.
 * - RegulatoryComplianceSummaryOutput - The return type for the getRegulatoryComplianceSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {getGstinDetails, GstinDetails} from "@/services/gstn-api";

const RegulatoryComplianceSummaryInputSchema = z.object({
  gstin: z.string().describe('The GST Identification Number of the MSME.'),
});
export type RegulatoryComplianceSummaryInput = z.infer<typeof RegulatoryComplianceSummaryInputSchema>;

const RegulatoryComplianceSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the MSME\'s regulatory compliance status, including any outstanding requirements.'),
  gstinDetails: z.optional(z.any()).describe('Details about the GSTIN number.'),
  nextSteps: z.string().describe('Recommended next steps for the MSME to ensure full regulatory compliance.'),
});
export type RegulatoryComplianceSummaryOutput = z.infer<typeof RegulatoryComplianceSummaryOutputSchema>;

export async function getRegulatoryComplianceSummary(input: RegulatoryComplianceSummaryInput): Promise<RegulatoryComplianceSummaryOutput> {
  // Skip API call if GSTIN is empty
  if (!input.gstin) {
    return {
      summary: 'GSTIN not provided.',
      gstinDetails: null,
      nextSteps: 'Please provide a valid GSTIN to check compliance status.',
    };
  }
  return regulatoryComplianceSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'regulatoryComplianceSummaryPrompt',
  input: {
    schema: z.object({
      gstin: z.string().describe('The GST Identification Number of the MSME.'),
      gstinDetails: z.optional(z.any()).describe('GSTIN details from GSTN API.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the MSME\'s regulatory compliance status, including any outstanding requirements.'),
      nextSteps: z.string().describe('Recommended next steps for the MSME to ensure full regulatory compliance.'),
    }),
  },
  prompt: `You are an expert in regulatory compliance for MSMEs in India.

Based on the provided GSTIN and any available details, summarize the compliance status of the MSME and provide actionable next steps to ensure they meet all regulatory requirements.

GSTIN: {{{gstin}}}
GSTIN Details: {{{gstinDetails}}}

Provide a concise summary and clear next steps.
`,
});

const regulatoryComplianceSummaryFlow = ai.defineFlow<
  typeof RegulatoryComplianceSummaryInputSchema,
  typeof RegulatoryComplianceSummaryOutputSchema
>(
  {
    name: 'regulatoryComplianceSummaryFlow',
    inputSchema: RegulatoryComplianceSummaryInputSchema,
    outputSchema: RegulatoryComplianceSummaryOutputSchema,
  },
  async input => {
    // Fetch GSTIN details from GSTN API
    let gstinDetails: GstinDetails | null = null;
    try {
      gstinDetails = await getGstinDetails(input.gstin);
    } catch (error) {
      console.error("Error fetching GSTIN details:", error);
    }

    const {output} = await prompt({...input, gstinDetails});
    return {
      ...output!,
      gstinDetails: gstinDetails,
    };
  }
);
