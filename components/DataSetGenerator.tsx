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
import {
  generateRandomNumber,
  generateRandomName,
  generateRandomEmail,
  generateRandomPhoneNumber,
} from "@/lib/generators";
import { useToast } from "@/hooks/use-toast";
import { Clipboard } from "lucide-react";

export default function DataSetGenerator() {
  const [dataSetCount, setDataSetCount] = useState(5);
  const [generatedDataSet, setGeneratedDataSet] = useState("");
  const { toast } = useToast();

  const handleGenerate = () => {
    let dataSet = "";
    for (let i = 0; i < dataSetCount; i++) {
      const id = generateRandomNumber(1000, 9999);
      const name = generateRandomName();
      const email = generateRandomEmail();
      const phone = generateRandomPhoneNumber();
      dataSet += `ID: ${id}, Name: ${name}, Email: ${email}, Phone: ${phone}\n`;
    }
    setGeneratedDataSet(dataSet);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDataSet);
    toast({
      title: "Copied to clipboard!",
      description: "The generated data set has been copied.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Set Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="dataSetCount">Number of items</Label>
          <Input
            id="dataSetCount"
            type="number"
            min="1"
            value={dataSetCount}
            onChange={(e) => setDataSetCount(parseInt(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dataSet">Generated Data Set</Label>
          <Textarea
            id="dataSet"
            readOnly
            value={generatedDataSet}
            rows={10}
            className="font-mono"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGenerate}>Generate</Button>
        <Button onClick={handleCopy} disabled={!generatedDataSet} variant="outline">
          <Clipboard className="mr-2" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
}