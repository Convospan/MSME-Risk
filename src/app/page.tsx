
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="absolute top-4 right-4 flex space-x-2">
        <Link href="/dashboard">
          <Button variant="outline">Dashboard</Button>
        </Link>
        <Link href="/regulatory-compliance">
          <Button variant="outline">Regulatory Compliance</Button>
        </Link>
        <Link href="/financial-insights">
          <Button variant="outline">Financial Insights</Button>
        </Link>
        <Link href="/invoice-analysis">
          <Button variant="outline">Invoice Analysis</Button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to MSME Insights AI
        </h1>
        <p className="text-lg mb-8">
          Empowering MSMEs with AI-driven financial insights.
        </p>
        <Link href="/data-upload">
          <Button>Upload Data</Button>
        </Link>
      </div>
    </main>
  );
}
