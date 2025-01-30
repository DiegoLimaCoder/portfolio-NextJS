import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <div>
        {/* Hero */}
        <Hero />

        {/* Tecnologias que eu sei */}
        <section className="relative py-16 sm:py-24 bg-[#191919] ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-100 mb-12">
            Tecnologias que Domino
          </h2>
          {/* Grid de ícones/tecnologias aqui */}
        </section>
      </div>
    </>
  );
}
