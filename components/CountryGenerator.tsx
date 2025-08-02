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
import { generateRandomCountry, generateRandomState, generateRandomCity, generateRandomZip } from "@/lib/generators";
import { useToast } from "@/hooks/use-toast";
import { Clipboard } from "lucide-react";

export default function CountryGenerator() {
  const [generatedCountry, setGeneratedCountry] = useState("");
  const [generatedState, setGeneratedState] = useState("");
  const [generatedCity, setGeneratedCity] = useState("");
  const [generatedZip, setGeneratedZip] = useState("");
  const { toast } = useToast();

  const handleGenerate = () => {
    setGeneratedCountry(generateRandomCountry());
    setGeneratedState(generateRandomState());
    setGeneratedCity(generateRandomCity());
    setGeneratedZip(generateRandomZip());
  };

  const handleCopy = () => {
    const textToCopy = `Country: ${generatedCountry}\nState: ${generatedState}\nCity: ${generatedCity}\nZip: ${generatedZip}`;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard!",
      description: "The generated country details have been copied.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Country Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" readOnly value={generatedCountry} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" readOnly value={generatedState} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" readOnly value={generatedCity} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">Zip</Label>
            <Input id="zip" readOnly value={generatedZip} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGenerate}>Generate</Button>
        <Button onClick={handleCopy} disabled={!generatedCountry} variant="outline">
          <Clipboard className="mr-2" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
}