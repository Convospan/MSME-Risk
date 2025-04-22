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
  creditScore = 0,
  defaultProbability = 0,
  invoiceAnomalies = [],
  isLoading = true,
}: DashboardProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Credit Score</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-20 animate-pulse" />
          ) : (
            <CreditScore score={creditScore} />
          )}
        </CardContent>
      </Card>

      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Probability of Default (12 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-20 animate-pulse" />
          ) : (
            <ProbabilityOfDefault probability={defaultProbability} />
          )}
        </CardContent>
      </Card>

      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Invoice Anomalies</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-40 animate-pulse" />
          ) : (
            <InvoiceAnomalies anomalies={invoiceAnomalies} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};
