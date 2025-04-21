"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ClientOnly from "@/components/ClientOnly";

const sampleData = `Loan Amount,Interest Rate,Term (Months),Credit Score,Industry
100000,0.08,36,720,Retail
50000,0.06,24,680,Manufacturing
75000,0.07,48,700,Service
120000,0.09,60,650,Technology`;

export default function DataUploadPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // TODO: Implement upload logic here
    console.log("Uploading files:", selectedFiles);
  };

  const handleCopySampleData = () => {
    if (textAreaRef.current) {
      navigator.clipboard.writeText(sampleData);
      toast({
        title: "Sample data copied!",
        description: "Paste it into your spreadsheet.",
      });
    }
  };

  const handleDownloadSampleData = () => {
    const element = document.createElement("a");
    const file = new Blob([sampleData], { type: 'text/csv' });
    element.href = URL.createObjectURL(file);
    element.download = "sample_msme_data.csv";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };


  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Data Upload</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="mb-2">
          Upload your MSME financial data in CSV or Excel format. Ensure the data includes the following columns:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Loan Amount</li>
          <li>Interest Rate</li>
          <li>Term (Months)</li>
          <li>Credit Score</li>
          <li>Industry</li>
        </ul>
        <p>
          You can also copy and paste data directly into a text area, or download a sample CSV file:
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Sample Data</h2>
        <ClientOnly>
        <div className="relative">
          <textarea
            ref={textAreaRef}
            readOnly
            value={sampleData}
            className="w-full h-48 p-4 bg-muted rounded-md font-mono text-sm"
            placeholder="Sample data will appear here"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <Button variant="secondary" size="sm" onClick={handleCopySampleData}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Data
            </Button>
            <Button variant="secondary" size="sm" onClick={handleDownloadSampleData}>
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
          </div>
        </div>
        </ClientOnly>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Upload Files</h2>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden" // Hide the default input
            id="file-upload" // Add an ID
          />
          <label htmlFor="file-upload">
            <Button variant="secondary" asChild>
              <span className="flex items-center">
                Select Files
              </span>
            </Button>
          </label>
          <Button onClick={handleUpload} disabled={selectedFiles.length === 0}>
            Upload Files
          </Button>
          {selectedFiles.length > 0 && (
            <div>
              <h3>Selected Files:</h3>
              <ul>
                {selectedFiles.map((file) => (
                  <li key={file.name} className="text-sm">{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Data Preview</h2>
        <Table>
          <TableCaption>A preview of the data to be analyzed.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Loan Amount</TableHead>
              <TableHead>Interest Rate</TableHead>
              <TableHead>Term (Months)</TableHead>
              <TableHead>Credit Score</TableHead>
              <TableHead>Industry</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">100000</TableCell>
              <TableCell>0.08</TableCell>
              <TableCell>36</TableCell>
              <TableCell>720</TableCell>
              <TableCell>Retail</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">50000</TableCell>
              <TableCell>0.06</TableCell>
              <TableCell>24</TableCell>
              <TableCell>680</TableCell>
              <TableCell>Manufacturing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">75000</TableCell>
              <TableCell>0.07</TableCell>
              <TableCell>48</TableCell>
              <TableCell>700</TableCell>
              <TableCell>Service</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">120000</TableCell>
              <TableCell>0.09</TableCell>
              <TableCell>60</TableCell>
              <TableCell>650</TableCell>
              <TableCell>Technology</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
