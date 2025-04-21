-import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { invoiceAnomalySummary, InvoiceAnomalySummaryOutput } from "@/ai/flows/invoice-anomaly-summary";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";

export default function InvoiceAnalysis() {
  const [invoiceData, setInvoiceData] = useState('');
  const [summary, setSummary] = useState<InvoiceAnomalySummaryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzeInvoices = async () => {
    setIsLoading(true);
    try {
      const data = await invoiceAnomalySummary({ invoiceData });
      setSummary(data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Invoice Anomaly Analysis</h1>
      <Link href="/">
        <Button variant="outline" className="mb-4">
          Back to Home
        </Button>
      </Link>
      <div className="flex flex-col space-y-4">
        <Textarea
          placeholder="Paste invoice data here..."
          className="w-full rounded-md shadow-sm border-input"
          rows={4}
          value={invoiceData}
          onChange={(e) => setInvoiceData(e.target.value)}
        />
        <Button onClick={handleAnalyzeInvoices} disabled={isLoading} className="w-fit">
          Analyze Invoices
        </Button>
        <Card className="mt-4 rounded-md shadow-sm">
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-full" />
            ) : summary ? (
              <>
                <p><strong>Summary:</strong> {summary.summary}</p>
                <p><strong>Potential Issues:</strong> {summary.potentialIssues}</p>
              </>
            ) : (
              <p>No invoice analysis generated yet. Please upload your invoice data.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
