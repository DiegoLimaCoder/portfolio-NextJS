import { Hero } from "@/components/hero";
import { TechSection } from "@/components/techSection";

export default function Home() {
  return (
    <>
      <div>
        {/* Hero */}
        <Hero />

        {/* Tecnologias que eu sei */}
        <TechSection />
      </div>
    </>
  );
}
