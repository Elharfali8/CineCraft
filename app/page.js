import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-[400vh]">
      <div className="min-h-screen w-full pt-20  grid place-items-center">
          <Hero />
      </div>
    </main>
  );
}
