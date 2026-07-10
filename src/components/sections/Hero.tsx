"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/lib/data";

const techBadges = [
  { label: "Banco Guayaquil", color: "from-blue-600 to-blue-500", dot: "#3b82f6" },
  { label: "React", color: "from-cyan-600 to-cyan-500", dot: "#06b6d4" },
  { label: ".NET", color: "from-violet-600 to-violet-500", dot: "#8b5cf6" },
  { label: "AI", color: "from-pink-600 to-rose-500", dot: "#ec4899" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      {/* Background radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-0 w-[400px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para nuevas oportunidades
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="text-zinc-100">Daniel</span>
              <br />
              <span className="gradient-text">Asanza</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl font-medium text-zinc-300">
              Full Stack Software Engineer
            </p>
            <p className="text-zinc-500 mt-1 flex items-center gap-2">
              <MapPin size={14} />
              Guayaquil, Ecuador · React · .NET · AI
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg"
          >
            {personalInfo.description}
          </motion.p>

          {/* Tech badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-zinc-600 transition-colors"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: badge.dot }}
                />
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href="/daniel-asanza-cv.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm border border-indigo-500/40 shadow-lg shadow-indigo-500/20 transition-colors"
            >
              <Download size={16} />
              Descargar CV
            </motion.a>

            <motion.a
              href="mailto:dasanza79@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm border border-zinc-700 transition-colors"
            >
              <Mail size={16} />
              Contactarme
            </motion.a>

            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-zinc-800/60 text-zinc-300 font-medium text-sm border border-zinc-700 hover:border-zinc-600 transition-colors cursor-pointer"
            >
              <Sparkles size={16} className="text-indigo-400" />
              Ver proyectos
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
            <span className="text-zinc-600 text-xs">Encuéntrame en</span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon width={18} height={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={18} height={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Avatar & decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          {/* Outer ring */}
          <div
            className="absolute w-80 h-80 rounded-full border border-indigo-500/10"
            style={{ animation: "spin 30s linear infinite" }}
          />
          <div
            className="absolute w-72 h-72 rounded-full border border-violet-500/10"
            style={{ animation: "spin 20s linear infinite reverse" }}
          />

          {/* Avatar container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-56 h-56 md:w-64 md:h-64"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-2xl" />

            {/* Profile photo */}
            <div className="relative w-full h-full rounded-full border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 overflow-hidden">
              <Image
                src="/daniel-profile.png"
                alt="Daniel Asanza"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 224px, 256px"
              />
            </div>

            {/* Floating tech badges */}
            {/* React 19 */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-cyan-400 hover:border-cyan-400/50 transition-colors duration-300"
            >
              React 19
            </motion.div>

            {/* .NET Core */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-violet-400 hover:border-violet-400/50 transition-colors duration-300"
            >
              .NET Core
            </motion.div>

            {/* AI/ML */}
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -translate-y-1/2 -right-16 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-pink-400 hover:border-pink-400/50 transition-colors duration-300"
            >
              AI/ML
            </motion.div>

            {/* Swift */}
            <motion.div
              animate={{ x: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-8 -left-14 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-orange-400 hover:border-orange-400/50 transition-colors duration-300"
            >
              Swift
            </motion.div>

            {/* Kotlin */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-10 -right-14 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-purple-400 hover:border-purple-400/50 transition-colors duration-300"
            >
              Kotlin
            </motion.div>

            {/* n8n */}
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-8 right-12 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-rose-400 hover:border-rose-400/50 transition-colors duration-300"
            >
              n8n
            </motion.div>

            {/* Angular */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-1/2 -translate-y-1/2 -left-20 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl text-xs font-semibold text-red-500 hover:border-red-500/50 transition-colors duration-300"
            >
              Angular
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  );
}
