"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CampaignForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="campaignName">Campaign Name</Label>
        <Input type="text" id="campaignName" placeholder="Enter campaign name" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input type="date" id="startDate" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="endDate">End Date</Label>
        <Input type="date" id="endDate" className="mt-1" />
      </div>
      <Button>Create Campaign</Button>
    </div>
  );
};

export default CampaignForm;
