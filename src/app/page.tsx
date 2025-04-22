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
import React from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="absolute top-4 right-4 flex space-x-2">
        <Link href="/dashboard">
          <Button variant="outline">Dashboard</Button>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Sheet Content</h2>
              <p>This is a sample sheet for additional info or actions.</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Rest of the content remains the same as previous version */}
      <header className="grid grid-cols-[1fr_auto] items-center px-6 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] mt-16">
        {/* ... (rest of header) */}
      </header>
      <section className="relative mx-auto w-full max-w-7xl mt-16">
        {/* ... (rest of hero section) */}
      </section>
      {/* ... (rest of sections) */}
      <footer className="bg-gray-950 text-white py-6 text-center w-full mt-16">
        {/* ... (rest of footer) */}
      </footer>
    </main>
  );
}

export default Home;
