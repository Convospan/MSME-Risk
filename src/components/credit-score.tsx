"use client";

interface CreditScoreProps {
  score: number;
}

export const CreditScore = ({ score }: CreditScoreProps) => {
  return (
    <div className="text-3xl font-bold text-primary">
      {score}
    </div>
  );
};
