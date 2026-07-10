"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Building2, BrainCircuit, Layers, BarChart3 } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  BrainCircuit,
  Layers,
  BarChart3,
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[project.icon] || Building2;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass-card rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-zinc-700/60 transition-all duration-300 cursor-default"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0px)",
        boxShadow: hovered
          ? "0 20px 60px -15px rgba(99, 102, 241, 0.15)"
          : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Gradient header */}
      <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 md:p-7">
        {/* Icon + Category */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 shadow-lg`}
          >
            <div className="w-full h-full bg-zinc-900 rounded-[10px] flex items-center justify-center">
              <Icon size={22} className="text-zinc-200" />
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
            {project.category}
          </span>
        </div>

        {/* Title + Description */}
        <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Long description (visible on hover) */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={hovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="text-zinc-400 text-sm leading-relaxed mb-3 overflow-hidden"
        >
          {project.longDescription}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <GithubIcon width={14} height={14} />
              Código
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-zinc-600">
              <GithubIcon width={14} height={14} />
              Privado
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-zinc-600">
              <ExternalLink size={14} />
              Enterprise
            </span>
          )}

          {project.featured && (
            <span className="ml-auto px-2 py-0.5 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Featured
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Proyectos"
          title="Trabajo destacado"
          description="Proyectos que demuestran mi capacidad de construir soluciones completas, desde el diseño hasta producción."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featuredProjects.length + index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
