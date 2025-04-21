-import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { getFinancialStatementInsights, FinancialStatementInsightsOutput } from "@/ai/flows/financial-statement-insights";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";

export default function FinancialInsights() {
  const [financialStatementText, setFinancialStatementText] = useState('');
  const [insights, setInsights] = useState<FinancialStatementInsightsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateInsights = async () => {
    setIsLoading(true);
    try {
      const data = await getFinancialStatementInsights({ financialStatementText });
      setInsights(data);
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
      <h1 className="text-3xl font-bold mb-4">Financial Statement Insights</h1>
      <Link href="/">
        <Button variant="outline" className="mb-4">
          Back to Home
        </Button>
      </Link>
      <div className="flex flex-col space-y-4">
        <Textarea
          placeholder="Paste financial statement text here..."
          className="w-full rounded-md shadow-sm border-input"
          rows={4}
          value={financialStatementText}
          onChange={(e) => setFinancialStatementText(e.target.value)}
        />
        <Button onClick={handleGenerateInsights} disabled={isLoading} className="w-fit">
          Generate Insights
        </Button>
        <Card className="mt-4 rounded-md shadow-sm">
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-full" />
            ) : insights ? (
              <p>{insights.summary}</p>
            ) : (
              <p>No insights generated yet. Please upload your financial data.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
