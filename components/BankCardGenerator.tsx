"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { generateCardNumber, generateCvv, generateExpDate, generateRandomName, generateCardType, generateRandomNumber } from "@/lib/generators";
import { useToast } from "@/hooks/use-toast";
import { Clipboard } from "lucide-react";

export default function BankCardGenerator() {
  const [generatedNumber, setGeneratedNumber] = useState("");
  const [generatedName, setGeneratedName] = useState("");
  const [generatedCvv, setGeneratedCvv] = useState("");
  const [generatedExpDate, setGeneratedExpDate] = useState("");
  const [generatedCardType, setGeneratedCardType] = useState("");
  const { toast } = useToast();

  const handleGenerate = () => {
    setGeneratedNumber(generateCardNumber());
    setGeneratedName(generateRandomName());
    setGeneratedCvv(generateCvv());
    setGeneratedExpDate(generateExpDate());
    setGeneratedCardType(generateCardType());
  };

  const handleCopy = () => {
    const textToCopy = `Card Number: ${generatedNumber}\nCard Holder: ${generatedName}\nCVV: ${generatedCvv}\nExp. Date: ${generatedExpDate}\nCard Type: ${generatedCardType}`;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard!",
      description: "The generated card details have been copied.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bank Card Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <div className="flex items-center space-x-2">
            <Input id="cardNumber" readOnly value={generatedNumber} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cardHolder">Card Holder</Label>
          <Input id="cardHolder" readOnly value={generatedName} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" readOnly value={generatedCvv} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expDate">Exp. Date</Label>
            <Input id="expDate" readOnly value={generatedExpDate} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cardType">Card Type</Label>
          <Input id="cardType" readOnly value={generatedCardType} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGenerate}>Generate</Button>
        <Button onClick={handleCopy} disabled={!generatedNumber} variant="outline">
          <Clipboard className="mr-2" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
}