"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Brain, Rocket, Building2, Globe } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { stats } from "@/lib/data";

const highlights = [
  {
    icon: Building2,
    title: "Banca Digital",
    description:
      "3+ años construyendo plataformas financieras de alta disponibilidad para Banco Guayaquil.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Code2,
    title: "Full Stack",
    description:
      "Dominio del ciclo completo de desarrollo: frontend React, APIs .NET, bases de datos y DevOps.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Brain,
    title: "IA Generativa",
    description:
      "Cursando Máster en IA. Experiencia con OpenAI, NLP, OCR y prompt engineering aplicado.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    description:
      "Diseño y mantenimiento de APIs REST robustas con .NET Core, autenticación, testing y documentación.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Globe,
    title: "Design Systems",
    description:
      "Construcción de componentes web reutilizables con StencilJS y documentación en Storybook.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Rocket,
    title: "DevOps & Agile",
    description:
      "CI/CD con Azure DevOps, feature flags con LaunchDarkly y ceremonias ágiles de delivery.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

function StatCounter({
  value,
  label,
  suffix,
  delay,
}: {
  value: string;
  label: string;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {value}
        {suffix}
      </div>
      <div className="text-zinc-500 text-sm">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Sobre mí"
          title="Ingeniero Full Stack con mente de producto"
          description="Combino profundidad técnica con visión de producto para construir soluciones digitales que generan impacto real."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Main content: bio + highlights */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-semibold text-zinc-100">
              Hola, soy Daniel 👋
            </h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Soy Ingeniero de Software Full Stack con base sólida en el sector bancario.
                Actualmente como <strong className="text-zinc-200">Oficial de Tecnología en Banco Guayaquil</strong>,
                contribuyo al desarrollo de plataformas digitales que sirven a miles de usuarios diariamente.
              </p>
              <p>
                Mi stack principal es <strong className="text-zinc-200">React + TypeScript</strong> en frontend
                y <strong className="text-zinc-200">.NET Core</strong> en backend, pero lo que más me define
                es mi capacidad de participar en el ciclo completo: desde el diseño de la solución hasta el
                despliegue en producción.
              </p>
              <p>
                Actualmente curso una{" "}
                <strong className="text-zinc-200">Maestría en Inteligencia Artificial</strong> en la
                Universidad Internacional de La Rioja, profundizando en NLP, LLMs y aplicaciones de IA
                generativa para el sector financiero.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300">Open a roles remotos y presenciales</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-zinc-300">Experiencia en startups y grandes empresas</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-zinc-300">Apasionado por IA aplicada a productos reales</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-5 rounded-xl border ${item.bg} glass-card cursor-default`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.bg}`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <h4 className="font-semibold text-zinc-100 mb-1.5">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
