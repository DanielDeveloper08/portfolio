"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Brain,
  Wrench,
  Smartphone,
  Workflow,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Server,
  Database,
  Cloud,
  Brain,
  Wrench,
  Smartphone,
  Workflow,
};

const levelColors: Record<string, string> = {
  expert: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  advanced: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  intermediate: "bg-zinc-700/50 text-zinc-400 border-zinc-600/30",
};

const levelLabels: Record<string, string> = {
  expert: "●●●",
  advanced: "●●○",
  intermediate: "●○○",
};

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = iconMap[category.icon] || Monitor;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl border border-zinc-800/60 p-6 hover:border-zinc-700/60 transition-all duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
          <Icon size={18} className="text-indigo-400" />
        </div>
        <h3 className="font-semibold text-zinc-100">{category.name}</h3>
      </div>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.08 + i * 0.03 + 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-default transition-all ${
              skill.level
                ? levelColors[skill.level]
                : "bg-zinc-800/60 text-zinc-400 border-zinc-700/40"
            }`}
          >
            {skill.level && (
              <span className="text-[10px] opacity-60 tracking-tighter">
                {levelLabels[skill.level]}
              </span>
            )}
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-zinc-950/50">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Habilidades"
          title="Stack tecnológico"
          description="Tecnologías que uso en el día a día para construir productos de alta calidad."
        />

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-12 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-indigo-400">●●●</span>
            <span>Experto</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-violet-400">●●○</span>
            <span>Avanzado</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">●○○</span>
            <span>Intermedio</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
