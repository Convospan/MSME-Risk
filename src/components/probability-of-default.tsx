"use client";

interface ProbabilityOfDefaultProps {
  probability: number;
}

export const ProbabilityOfDefault = ({ probability }: ProbabilityOfDefaultProps) => {
  return (
    <div className="text-3xl font-bold text-primary">
      {(probability * 100).toFixed(2)}%
    </div>
  );
};
