"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getRegulatoryComplianceSummary, RegulatoryComplianceSummaryOutput } from "@/ai/flows/regulatory-compliance-summary";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface RegulatoryComplianceDashboardProps {
  gstin: string;
}

export const RegulatoryComplianceDashboard = ({ gstin }: RegulatoryComplianceDashboardProps) => {
  const [complianceData, setComplianceData] = useState<RegulatoryComplianceSummaryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getRegulatoryComplianceSummary({ gstin });
        setComplianceData(data);
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

    fetchData();
  }, [gstin]);

  return (
    <Card className="rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Regulatory Compliance Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-40 animate-pulse" />
        ) : (
          <>
            {complianceData ? (
              <>
                <p className="text-sm text-muted-foreground">
                  <strong>GSTIN:</strong> {gstin}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Status:</strong> {complianceData.gstinDetails?.status}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Summary:</strong> {complianceData.summary}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Next Steps:</strong> {complianceData.nextSteps}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">No compliance data available.</p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
