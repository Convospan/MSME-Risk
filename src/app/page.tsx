import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to MSME Insights AI
        </h1>
        <p className="text-lg mb-8">
          Empowering MSMEs with AI-driven financial insights.
        </p>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
