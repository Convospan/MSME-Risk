"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input type="text" id="cardNumber" placeholder="Enter card number" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="expiryDate">Expiry Date</Label>
        <Input type="text" id="expiryDate" placeholder="MM/YY" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="cvv">CVV</Label>
        <Input type="text" id="cvv" placeholder="CVV" className="mt-1" />
      </div>
      <Button>Submit Payment</Button>
    </div>
  );
};

export default PaymentForm;
