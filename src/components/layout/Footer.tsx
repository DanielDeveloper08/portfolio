import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="text-zinc-400 text-sm">
              Diseñado y construido por{" "}
              <span className="text-zinc-200 font-medium">Daniel Asanza</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DanielDeveloper08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-asanza-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href="mailto:dasanza79@gmail.com"
              className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-zinc-600 text-xs">
            © {year} · Next.js 15 · React 19 · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
