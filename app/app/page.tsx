import BankCardGenerator from "@/components/BankCardGenerator";
import CountryGenerator from "@/components/CountryGenerator";
import DataSetGenerator from "@/components/DataSetGenerator";
import Disclaimer from "@/components/Disclaimer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LayoutGrid, LibraryBig } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 bg-background text-foreground">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter">
            <span className="text-white">Veri</span><span className="text-primary animate-shine">simulator</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">A Fake Data Toolbox</p>
        </header>
        <Disclaimer />
        <Tabs defaultValue="bank-card" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="bank-card" className="py-2"><LibraryBig className="mr-2" />Bank Card</TabsTrigger>
            <TabsTrigger value="country" className="py-2"><Globe className="mr-2" />Country</TabsTrigger>
            <TabsTrigger value="data-set" className="py-2"><LayoutGrid className="mr-2" />Data Set</TabsTrigger>
          </TabsList>
          <TabsContent value="bank-card" className="mt-6">
            <BankCardGenerator />
          </TabsContent>
          <TabsContent value="country" className="mt-6">
            <CountryGenerator />
          </TabsContent>
          <TabsContent value="data-set" className="mt-6">
            <DataSetGenerator />
          </TabsContent>
        </Tabs>
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Verisimulator. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}