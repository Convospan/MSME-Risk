"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Icons } from "@/components/icons";
import { generateSampleCSV } from "@/lib/utils";

const sampleData = [
  { id: 1, col1: "Data 1", col2: "Data 2", col3: "Data 3" },
  { id: 2, col1: "Data A", col2: "Data B", col3: "Data C" },
  { id: 3, col1: "Value X", col2: "Value Y", col3: "Value Z" },
];

const formSchema = z.object({
  filename: z.string().min(2, {
    message: "Filename must be at least 2 characters.",
  }),
});

export default function Home() {
  const [showSampleData, setShowSampleData] = useState(false);
  const { toast } = useToast();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const toggleSampleData = () => {
    setShowSampleData(!showSampleData);
  };

  const onSubmit = useCallback(
    (data: z.infer<typeof formSchema>) => {
      const csvData = generateSampleCSV(sampleData);
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = data.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast({
        title: "Downloading Sample CSV",
        description: `Downloading ${data?.filename}`,
      });
    },
    [toast]
  );

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
        <h1 className="text-4xl font-bold mb-4">Welcome to MSME Insights AI</h1>
        <p className="text-lg mb-8">Empowering MSMEs with AI-driven financial insights.</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">
              Upload Data
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Sample Data</DialogTitle>
              <DialogDescription>
                Add a filename to download as a sample CSV.
              </DialogDescription>
            </DialogHeader>
            
              
                Filename
                <Input id="filename" defaultValue="data.csv"  {...register("filename")} />
                {errors.filename && (
                   errors.filename?.message
                  
                )}
              
            
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit(onSubmit)}>Download</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-8">
        <Button variant="secondary" onClick={toggleSampleData}>
          {showSampleData ? "Hide Sample Data" : "Show Sample Data"}
        </Button>

        {showSampleData && (
          
            Sample Financial Data
            
              
                ID
                Column 1
                Column 2
                Column 3
              
            
            
              {sampleData.map((row) => (
                
                  
                    {row.id}
                  
                  
                    {row.col1}
                  
                  
                    {row.col2}
                  
                  
                    {row.col3}
                  
                
              ))}
            
          
        )}
      </div>
    </main>
  );
}

