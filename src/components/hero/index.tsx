"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#191919] dark:bg-zinc-900">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        <div className="grid lg:grid-cols-2  gap-20 items-center ">
          {/* Text Context */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 mb-6">
              Olá, eu sou <span className="text-blue-500">Diego Lima</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              Desenvolvedor Full Stack especializado em criar soluções modernas
              e performáticas para a web.
            </p>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="border border-zinc-600 hover:border-zinc-400  font-bold  text-zinc-300 px-8 py-3 rounded-lg transition-colors"
              >
                Contato
              </Link>
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-bold rounded-lg transition-colors"
              >
                Projetos
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-96 bg-zinc-800 rounded-2xl overflow-hidden group">
              <Image
                src="/profile.jpg"
                alt="Diego Lima - Desenvolvedor Full Stack"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 98%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 98%)",
                  transformOrigin: "center bottom",
                }}
              />

              {/* Ajuste no gradiente de sobreposição */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 to-zinc-900/40" />

              {/* Efeito de brilho sutil */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
