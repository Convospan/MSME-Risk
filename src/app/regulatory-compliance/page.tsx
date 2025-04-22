;"use client";

import { RegulatoryComplianceDashboard } from "@/components/regulatory-compliance-dashboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegulatoryCompliancePage() {
  // Mock GSTIN value for demonstration
  const mockGstin = "12345ABCDE6789";

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Regulatory Compliance</h1>
      <Link href="/">
        <Button variant="outline" className="mb-4">
          Back to Home
        </Button>
      </Link>
      <RegulatoryComplianceDashboard gstin={mockGstin} />
    </div>
  );
}

