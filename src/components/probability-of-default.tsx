"use client";

interface ProbabilityOfDefaultProps {
  probability: number;
}

export const ProbabilityOfDefault = ({ probability }: ProbabilityOfDefaultProps) => {
  return (
    <div className="text-2xl font-bold">
      {probability.toFixed(2)}%
    </div>
  );
};
