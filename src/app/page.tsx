import { Separator } from "@/components/ui/separator";
import { Italianno } from "next/font/google"; 

const titleFont = Italianno({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center  items-center justify-between py-32 px-16 bg-background">
        <div className="flex flex-col items-center justify-center cursor-pointer group hover:bg-accent p-1">
          <Separator className="border group-hover:border-accent-foreground" />
            <h1 className={`${titleFont.className} text-8xl pr-3 pb-1 group-hover:text-accent-foreground`}>ink-and-parchment</h1>
          <Separator className="border group-hover:border-accent-foreground" />
        </div>
    </main>
  );
}
