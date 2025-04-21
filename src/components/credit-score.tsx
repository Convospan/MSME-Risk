"use client";

interface CreditScoreProps {
  score: number;
}

export const CreditScore = ({ score }: CreditScoreProps) => {
  return (
    <div className="text-2xl font-bold">
      {score}
    </div>
  );
};
