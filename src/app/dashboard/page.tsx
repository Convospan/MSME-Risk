"use client";

import { Dashboard } from "@/components/dashboard";
import { DataUpload } from "@/components/data-upload";
import { RegulatoryComplianceDashboard } from "@/components/regulatory-compliance-dashboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AIToolsSummary } from "@/components/ai-tools-summary";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  // Mock data for demonstration purposes
  const [mockCreditScore, setMockCreditScore] = useState(680);
  const [mockDefaultProbability, setMockDefaultProbability] = useState(0.05);
  const [mockInvoiceAnomalies, setMockInvoiceAnomalies] = useState([
    "Invoice #123: Amount mismatch",
    "Invoice #456: Duplicate entry",
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">MSME Insights AI Dashboard</h1>
      <Link href="/">
        <Button variant="outline" className="mb-4">
          Back to Home
        </Button>
      </Link>
      <DataUpload />
      <Dashboard
        creditScore={mockCreditScore}
        defaultProbability={mockDefaultProbability}
        invoiceAnomalies={mockInvoiceAnomalies}
        isLoading={isLoading}
      />
      <AIToolsSummary />
      <RegulatoryComplianceDashboard gstin="12345ABCDE6789" />
    </div>
  );
}
