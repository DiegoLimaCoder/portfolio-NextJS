"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function TechSection() {
  const techs = [
    { img: "/icon/html5.svg", color: "#E34F26" },
    { img: "/icon/css3.svg", color: "#1572B6" },
    { img: "/icon/tailwindcss.svg", color: "#38BDF8" },
    { img: "/icon/javascript.svg", color: "#F7DF1E" },
    { img: "/icon/typescript.svg", color: "#3178C6" },
    { img: "/icon/react.svg", color: "#61DAFB" },
    { img: "/icon/nextjs.svg", color: "#FFFFFF" },
    { img: "/icon/prisma.svg", color: "#2D3748" },
    { img: "/icon/nestjs.svg", color: "#E0234E" },
    { img: "/icon/postgresql.svg", color: "#336791" },
    { img: "/icon/docker.svg", color: "#2496ED" },
    { img: "/icon/git.svg", color: "#F05032" },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#191919]">
      <div className="flex flex-col items-center justify-center mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] mb-5 tracking-tight">
            Tecnologias que Domino
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400/90 font-medium max-w-2xl leading-relaxed">
            Tecnologias com as quais tenho trabalhado recentemente
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index * 0.05,
              }}
              className="group relative p-4 sm:p-6 bg-zinc-800 rounded-2xl hover:bg-zinc-700/30 transition-all duration-300"
            >
              <div className="flex justify-center items-center h-full">
                {/* Container do ícone com efeito de brilho */}
                <div className="relative p-4 rounded-xl overflow-hidden">
                  {/* Efeito de gradiente dinâmico */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(100px circle at var(--x) var(--y), ${tech.color}30, transparent)`,
                    }}
                  />

                  {/* Ícone com filtro de cor dinâmico */}
                  <Image
                    src={tech.img}
                    alt="Tech icon"
                    width={48}
                    height={48}
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{
                      filter: `grayscale(100%) brightness(150%)`,
                      transition: "filter 0.3s ease",
                    }}
                  />

                  {/* Tooltip hover */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-zinc-700 text-zinc-100 text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      {tech.img
                        .split("/")
                        .pop()
                        ?.replace(".svg", "")
                        .replace("dot", ".")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Borda animada */}
              <div className="absolute inset-0 rounded-2xl border border-zinc-700/50 group-hover:border-[#E70FAA]/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
