"use client";

import { Dashboard } from "@/components/dashboard";
import { DataUpload } from "@/components/data-upload";
import { RegulatoryComplianceDashboard } from "@/components/regulatory-compliance-dashboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  // Mock data for demonstration purposes
  const mockCreditScore = 680;
  const mockDefaultProbability = 0.05;
  const mockInvoiceAnomalies = [
    "Invoice #123: Amount mismatch",
    "Invoice #456: Duplicate entry",
  ];

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
        isLoading={false}
      />

      <RegulatoryComplianceDashboard gstin="12345ABCDE6789" />
    </div>
  );
}

