import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  
  const state = true; 

  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
        Hello Discord clone
      </p>
      <Button className={cn(
        "bg-indigo-500",    // Default class
        state && "bg-red-500" // Conditional class, applied if state is true
      )}>
        Click me
      </Button>
    </div>
  );
}
