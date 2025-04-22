"use client";

import { RegulatoryComplianceDashboard } from "@/components/regulatory-compliance-dashboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RegulatoryCompliancePage() {
  // Mock GSTIN value for demonstration
  const [mockGstin, setMockGstin] = useState<string>("12345ABCDE6789"); // Initial value

  useEffect(() => {
    // You can update the mock GSTIN after some time if needed
    // For example:
    // setTimeout(() => {
    //   setMockGstin("NEWGSTIN98765");
    // }, 3000);
  }, []);

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
