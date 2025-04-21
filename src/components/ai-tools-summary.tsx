"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const AIToolsSummary = () => {
  return (
    <Card className="rounded-lg shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">
          AI Tools Summary
        </CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              A summary of the AI tools used in this dashboard.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Credit Score Generation</span>
            <span>XGBoost</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Default Probability Calculation</span>
            <span>XGBoost</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Invoice Anomaly Detection</span>
            <span>XGBoost</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Financial Health Dashboard</span>
            <span>XGBoost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
