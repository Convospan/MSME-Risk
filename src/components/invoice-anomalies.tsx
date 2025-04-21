"use client";

interface InvoiceAnomaliesProps {
  anomalies: string[];
}

export const InvoiceAnomalies = ({ anomalies }: InvoiceAnomaliesProps) => {
  return (
    <ul>
      {anomalies.map((anomaly, index) => (
        <li key={index} className="text-sm">
          {anomaly}
        </li>
      ))}
    </ul>
  );
};
