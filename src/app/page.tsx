import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute top-4 right-4">
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
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

