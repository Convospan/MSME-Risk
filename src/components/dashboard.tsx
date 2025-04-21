"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditScore } from "./credit-score";
import { ProbabilityOfDefault } from "./probability-of-default";
import { InvoiceAnomalies } from "./invoice-anomalies";
import { Skeleton } from "./ui/skeleton";

interface DashboardProps {
  creditScore?: number;
  defaultProbability?: number;
  invoiceAnomalies?: string[];
  isLoading?: boolean;
}

export const Dashboard = ({
  creditScore,
  defaultProbability,
  invoiceAnomalies,
  isLoading = true,
}: DashboardProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Credit Score</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-20" />
          ) : (
            <CreditScore score={creditScore || 0} />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Probability of Default (12 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-20" />
          ) : (
            <ProbabilityOfDefault probability={defaultProbability || 0} />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Anomalies</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-40" />
          ) : (
            <InvoiceAnomalies anomalies={invoiceAnomalies || []} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};
