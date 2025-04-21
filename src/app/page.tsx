"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import PaymentForm from '@/components/PaymentForm';
import CampaignForm from '@/components/CampaignForm';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Copy, Download, Lightbulb, Rocket, ShieldCheck, MessageSquare, Code, CheckCircle, TrendingUp, Translate, BookOpen } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const sampleData = `Description,Photo URL,Identification.isPlant,Identification.commonName,Identification.latinName,Diagnosis.isHealthy,Diagnosis.diagnosis
"Healthy plant with vibrant green leaves","https://picsum.photos/200/300",true,"Rose","Rosa spp.",true,"No issues detected"
"Plant with yellowing leaves and brown spots","https://picsum.photos/200/300",true,"Tomato","Solanum lycopersicum",false,"Possible fungal infection"
"Succulent with wilting leaves","https://picsum.photos/200/300",true,"Echeveria","Echeveria elegans",false,"Overwatering or root rot"
"Orchid with healthy roots and blooming flowers","https://picsum.photos/200/300",true,"Orchid","Orchidaceae",true,"Vibrant and thriving"
"Herb with some brown edges on leaves","https://picsum.photos/200/300",true,"Mint","Mentha spp.",false,"Minor nutrient deficiency or dryness"
`;

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground">
      {/* Navigation Menu */}
      <nav className="w-full py-4 bg-card shadow-md">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            AI Coder Bot
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/features">Features</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/plans">Plans</Link>
            <Link href="/process">Process</Link>
            {/* Add Login/Sign Up buttons if needed */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-24 bg-muted">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="AI Coder Bot - Your Intelligent Coding Assistant"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover opacity-30"
          priority
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-primary mb-4">AI Coder Bot - Your Intelligent Coding Assistant</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Revolutionize your development workflow with AI-powered code generation, debugging, and learning.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button size="lg">Start Coding for Free</Button>
            <Button variant="secondary" size="lg">Explore Our Plans</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Supercharge Your Coding with Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Code Generation */}
            <div className="flex items-start space-x-4">
              <Code className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Code Generation</h3>
                <p className="text-muted-foreground">
                  Instantly generate code snippets, functions, and even entire modules based on your specifications.
                </p>
              </div>
            </div>
            {/* Code Completion */}
            <div className="flex items-start space-x-4">
              <Lightbulb className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Code Completion</h3>
                <p className="text-muted-foreground">
                  Get intelligent suggestions as you type, reducing errors and speeding up development.
                </p>
              </div>
            </div>
            {/* Debugging Assistance */}
            <div className="flex items-start space-x-4">
              <ShieldCheck className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Debugging Assistance</h3>
                <p className="text-muted-foreground">
                  Identify and understand errors faster with AI-powered explanations and potential solutions.
                </p>
              </div>
            </div>
            {/* Code Refactoring */}
            <div className="flex items-start space-x-4">
              <Rocket className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Code Refactoring</h3>
                <p className="text-muted-foreground">
                  Optimize and improve your existing code with AI-driven suggestions for readability and efficiency.
                </p>
              </div>
            </div>
            {/* Language Translation */}
            <div className="flex items-start space-x-4">
              <Translate className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Language Translation</h3>
                <p className="text-muted-foreground">
                  Seamlessly translate code between different programming languages.
                </p>
              </div>
            </div>
            {/* Learning & Explanation */}
            <div className="flex items-start space-x-4">
              <BookOpen className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Learning & Explanation</h3>
                <p className="text-muted-foreground">
                  Understand complex code concepts and algorithms with AI-powered explanations and examples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Unlock Limitless Potential and Efficiency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Boost Productivity */}
            <div className="flex items-start space-x-4">
              <TrendingUp className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Boost Productivity</h3>
                <p className="text-muted-foreground">
                  Write code faster and more efficiently, freeing up time for complex problem-solving.
                </p>
              </div>
            </div>
            {/* Reduce Errors */}
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Reduce Errors</h3>
                <p className="text-muted-foreground">
                  Intelligent suggestions and debugging help minimize mistakes and improve code quality.
                </p>
              </div>
            </div>
            {/* Accelerate Learning */}
            <div className="flex items-start space-x-4">
              <Lightbulb className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Accelerate Learning</h3>
                <p className="text-muted-foreground">
                  Grasp new programming languages and concepts quickly with AI-powered explanations.
                </p>
              </div>
            </div>
            {/* Improve Code Quality */}
            <div className="flex items-start space-x-4">
              <Code className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Improve Code Quality</h3>
                <p className="text-muted-foreground">
                  Refactor and optimize your code for better performance and maintainability.
                </p>
              </div>
            </div>
            {/* Explore New Languages */}
            <div className="flex items-start space-x-4">
              <Translate className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Explore New Languages</h3>
                <p className="text-muted-foreground">
                  Easily experiment with and translate between different programming paradigms.
                </p>
              </div>
            </div>
            {/* Stay Ahead of the Curve */}
            <div className="flex items-start space-x-4">
              <Rocket className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Stay Ahead of the Curve</h3>
                <p className="text-muted-foreground">
                  Leverage the latest AI advancements in your development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Data Display (Table) */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Sample Bot Output</h2>
          <Table>
            <TableCaption>A preview of the data to be analyzed.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Description</TableHead>
                <TableHead>Photo URL</TableHead>
                <TableHead>isPlant</TableHead>
                <TableHead>Common Name</TableHead>
                <TableHead>Latin Name</TableHead>
                <TableHead>isHealthy</TableHead>
                <TableHead>Diagnosis</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {sampleData.split('\n').slice(1).map((row, index) => {
                const [Description, Photo, isPlant, Common, Latin, isHealthy, Diagnosis] = row.split(',');
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{Description}</TableCell>
                    <TableCell><a href={Photo} target="_blank" rel="noopener noreferrer">View Image</a></TableCell>
                    <TableCell>{isPlant}</TableCell>
                    <TableCell>{Common}</TableCell>
                    <TableCell>{Latin}</TableCell>
                    <TableCell>{isHealthy}</TableCell>
                    <TableCell>{Diagnosis}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-card w-full">
        <div className="container mx-auto">
          © 2025 AI Coder Bot. All rights reserved.
          {/* Add Privacy Policy and Terms of Service links if needed */}
        </div>
      </footer>
    </main>
  );
}
