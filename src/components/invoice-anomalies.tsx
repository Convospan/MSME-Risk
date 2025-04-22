"use client";

interface InvoiceAnomaliesProps {
  anomalies?: string[];
}

export const InvoiceAnomalies = ({ anomalies }: InvoiceAnomaliesProps) => {
  return (
    <ul>
      {anomalies && anomalies.map((anomaly, index) => (
        <li key={index} className="text-sm text-muted-foreground">
          {anomaly}
        </li>
      ))}
    </ul>
  );
};
