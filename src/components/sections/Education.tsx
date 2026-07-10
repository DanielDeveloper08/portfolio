"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { education } from "@/lib/data";

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative"
    >
      <div className="glass-card rounded-2xl border border-zinc-800/60 p-7 hover:border-zinc-700/60 transition-all duration-300 group">
        {/* Gradient top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{
            background: item.current
              ? "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)"
              : "linear-gradient(90deg, transparent, rgba(113,113,122,0.3), transparent)",
          }}
        />

        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
              item.current
                ? "bg-indigo-500/15 border border-indigo-500/25"
                : "bg-zinc-800/60 border border-zinc-700/40"
            }`}
          >
            <GraduationCap
              size={26}
              className={item.current ? "text-indigo-400" : "text-zinc-500"}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-0.5">
                  {item.degree}
                </h3>
                <p className={`font-medium text-sm ${item.current ? "text-indigo-400" : "text-zinc-400"}`}>
                  {item.institution}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm text-zinc-500">{item.period}</span>
                {item.current && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                    En curso
                  </span>
                )}
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                  <CheckCircle2
                    size={13}
                    className={`mt-0.5 shrink-0 ${item.current ? "text-indigo-500/70" : "text-zinc-600"}`}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Formación"
          title="Educación & Aprendizaje"
          description="Base académica sólida combinada con aprendizaje continuo en las tecnologías más relevantes del mercado."
        />

        <div className="space-y-5">
          {education.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Certifications hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-5 rounded-xl border border-zinc-800/40 bg-zinc-900/30 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Además, me mantengo actualizado con cursos en{" "}
            <span className="text-zinc-300">Platzi, Udemy, Coursera</span> y la
            documentación oficial de las tecnologías que uso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
