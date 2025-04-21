"use client";

import {Card, CardBody, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import {motion} from "framer-motion";
import React from "react";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Top Navigation Bar */}
      <header className="bg-secondary py-4 shadow-md">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            MSME Insights AI
          </Link>
          <nav className="space-x-6">
            <Link href="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
            <Link href="/regulatory-compliance" className="hover:text-primary">
              Regulatory Compliance
            </Link>
            <Link href="/financial-insights" className="hover:text-primary">
              Financial Insights
            </Link>
            <Link href="/invoice-analysis" className="hover:text-primary">
              Invoice Analysis
            </Link>
            <Link href="/data-upload" className="hover:text-primary">
              Data Upload
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Empowering MSMEs with AI-Driven Insights
          </motion.h1>
          <motion.p
            className="text-lg mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Unlock your business potential with our AI-powered platform for financial analysis, risk assessment, and regulatory compliance.
          </motion.p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Credit Score Generation */}
            <Card shadow="sm" className="border-none">
              <CardHeader className="flex gap-3">
                <Image
                  alt="Credit Score Icon"
                  height={40}
                  radius="lg"
                  src="https://nextui.org/docs/k-mean-cluster-result.png"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md font-bold">Credit Score Generation</p>
                  <p className="text-small text-default-500">Generate credit scores using advanced AI.</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                Leverage XGBoost to generate a credit score (300-850) based on uploaded financial statements, invoices, and customer data.
              </CardBody>
            </Card>

            {/* Default Probability Calculation */}
            <Card shadow="sm" className="border-none">
              <CardHeader className="flex gap-3">
                <Image
                  alt="Default Probability Icon"
                  height={40}
                  radius="lg"
                  src="https://nextui.org/docs/k-mean-cluster-result.png"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md font-bold">Default Probability Calculation</p>
                  <p className="text-small text-default-500">Assess the likelihood of default with AI-driven models.</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                Employ XGBoost to calculate the probability of default for an MSME over a 12-month period, aiding in risk management.
              </CardBody>
            </Card>

            {/* Invoice Anomaly Detection */}
            <Card shadow="sm" className="border-none">
              <CardHeader className="flex gap-3">
                <Image
                  alt="Invoice Anomaly Detection Icon"
                  height={40}
                  radius="lg"
                  src="https://nextui.org/docs/k-mean-cluster-result.png"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md font-bold">Invoice Anomaly Detection</p>
                  <p className="text-small text-default-500">Detect discrepancies and anomalies in invoices using AI.</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                Utilize XGBoost in a tool to perform invoice reconciliation by identifying discrepancies and anomalies in invoices and payment data.
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-6 text-center">
        <p>
          © 2025 MSME Insights AI
        </p>
      </footer>
    </main>
  );
}
