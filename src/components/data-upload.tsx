"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const DataUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // TODO: Implement upload logic here
    console.log("Uploading files:", selectedFiles);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileSelect}
        className="mb-4"
      />
      <Button onClick={handleUpload} disabled={selectedFiles.length === 0}>
        Upload Files
      </Button>
      {selectedFiles.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
