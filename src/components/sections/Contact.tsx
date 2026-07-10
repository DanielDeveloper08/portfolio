"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageCircle, Copy, CheckCheck, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/social-icons";
import SectionHeader from "@/components/shared/SectionHeader";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "finanzas.ia@grupoferretti.com",
    href: "mailto:finanzas.ia@grupoferretti.com",
    icon: Mail,
    description: "Respondo en menos de 24h",
    color: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/20 hover:border-indigo-500/40",
    iconColor: "text-indigo-400",
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/DanielDeveloper08",
    href: "https://github.com/DanielDeveloper08",
    icon: GithubIcon,
    description: "Proyectos y contribuciones",
    color: "from-zinc-700/20 to-zinc-800/10 border-zinc-700/30 hover:border-zinc-600/60",
    iconColor: "text-zinc-300",
    copyable: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/daniel-asanza-developer",
    href: "https://www.linkedin.com/in/daniel-asanza-developer/",
    icon: LinkedinIcon,
    description: "Red profesional",
    color: "from-blue-600/20 to-blue-700/10 border-blue-500/20 hover:border-blue-500/40",
    iconColor: "text-blue-400",
    copyable: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+593 995 006 332",
    href: "https://wa.me/593995006332?text=Hola%20Daniel%2C%20te%20contacto%20desde%20tu%20portafolio.%20Me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad.%20%F0%9F%91%8B",
    icon: WhatsAppIcon,
    description: "Para consultas rápidas",
    color: "from-emerald-600/20 to-emerald-700/10 border-emerald-500/20 hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    copyable: false,
  },
];

function ContactCard({
  link,
  index,
}: {
  link: (typeof contactLinks)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    if (!link.copyable) return;
    e.preventDefault();
    await navigator.clipboard.writeText(link.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <a
        href={link.href}
        target={link.id !== "email" ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`group relative flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-br transition-all duration-300 ${link.color} hover:-translate-y-1 hover:shadow-lg`}
      >
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}
        >
          <link.icon width={22} height={22} className={`w-[22px] h-[22px] ${link.iconColor}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="font-semibold text-zinc-100 text-sm">{link.label}</span>
          </div>
          <p className="text-zinc-300 text-sm truncate">{link.value}</p>
          <p className="text-zinc-500 text-xs mt-0.5">{link.description}</p>
        </div>

        {/* Action icon */}
        {link.copyable ? (
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Copiar email"
          >
            {copied ? (
              <CheckCheck size={16} className="text-emerald-400" />
            ) : (
              <Copy size={16} className="text-zinc-500" />
            )}
          </button>
        ) : (
          <ArrowUpRight
            size={18}
            className="text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0"
          />
        )}
      </a>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader
          label="Contacto"
          title="Hablemos"
          description="¿Tienes un proyecto interesante, una oportunidad laboral o solo quieres conectar? Estoy disponible."
        />

        <div className="space-y-3">
          {contactLinks.map((link, index) => (
            <ContactCard key={link.id} link={link} index={index} />
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 text-sm mb-4">
            O envíame un email directamente
          </p>
          <motion.a
            href="mailto:finanzas.ia@grupoferretti.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold shadow-2xl shadow-indigo-500/25 transition-all"
          >
            <Mail size={18} />
            finanzas.ia@grupoferretti.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
