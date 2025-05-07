import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-20 bg-primary">
      <Button>haha</Button>
      <div className="w-20 h-39 bg-primary border border-border text-accent-foreground">bsd</div>
      <input className="w-200 border border-input"></input>
    </div>
  );
}
