"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/shared/SectionHeader";
import { experiences } from "@/lib/data";

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline line */}
      <div
        className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-zinc-800"
        aria-hidden="true"
      />

      {/* Timeline dot */}
      <motion.div
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="absolute left-1 md:left-3 top-6 w-5 h-5 rounded-full border-2 border-zinc-800 bg-zinc-950 flex items-center justify-center"
      >
        {experience.current && (
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
        )}
        {!experience.current && (
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
        )}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mb-10"
      >
        <div className="glass-card rounded-2xl border border-zinc-800/60 p-6 md:p-8 hover:border-zinc-700/60 transition-all duration-300 group">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-zinc-100">
                  {experience.company}
                </h3>
                {experience.current && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                    Actual
                  </span>
                )}
              </div>
              <p className="text-indigo-400 font-medium">{experience.role}</p>
            </div>

            <div className="flex flex-col gap-1.5 text-sm text-zinc-500 shrink-0">
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            {experience.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {experience.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 + i * 0.04 + 0.3 }}
                className="flex items-start gap-2.5 text-sm text-zinc-400"
              >
                <CheckCircle2 size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      {/* Subtle divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Experiencia"
          title="Trayectoria profesional"
          description="Mi recorrido en la industria tech, de soporte técnico a ingeniero Full Stack en banca digital."
        />

        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
