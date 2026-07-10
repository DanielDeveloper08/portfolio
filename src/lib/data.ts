import type { PersonalInfo, Experience, SkillCategory, Project, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Daniel Asanza",
  firstName: "Daniel",
  lastName: "Asanza",
  title: "Full Stack Software Engineer",
  subtitle: "React · .NET · AI Enthusiast",
  description:
    "Ingeniero de Software con experiencia en el sector bancario construyendo soluciones web y móviles de alta disponibilidad. Especializado en arquitecturas Full Stack, APIs REST y experiencias digitales de nivel enterprise. Apasionado por la Inteligencia Artificial generativa y su aplicación en productos reales.",
  email: "dasanza79@gmail.com",
  github: "https://github.com/DanielDeveloper08",
  linkedin: "https://www.linkedin.com/in/daniel-asanza-developer/",
  whatsapp: "https://wa.me/593995006332?text=Hola%20Daniel%2C%20te%20contacto%20desde%20tu%20portafolio.%20Me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad.%20%F0%9F%91%8B",
  location: "Guayaquil, Ecuador",
  availability: "Disponible para oportunidades remotas",
};

export const stats = [
  { value: "3+", label: "Años de experiencia", suffix: "" },
  { value: "10+", label: "Proyectos entregados", suffix: "" },
  { value: "20+", label: "Tecnologías dominadas", suffix: "" },
  { value: "1", label: "Industria bancaria", suffix: "🏦" },
];

export const experiences: Experience[] = [
  {
    id: "banco-guayaquil",
    company: "Banco Guayaquil",
    role: "Oficial de Tecnología / Full Stack Developer",
    period: "2023 — Actualidad",
    current: true,
    location: "Guayaquil, Ecuador",
    description:
      "Desarrollo de plataformas bancarias digitales de alta disponibilidad. Responsable del ciclo completo de desarrollo desde el diseño de componentes hasta el despliegue en producción.",
    highlights: [
      "Desarrollo de componentes web reutilizables con StencilJS y documentación en Storybook para el Design System bancario",
      "Creación y mantenimiento de APIs REST robustas con .NET Core para los servicios financieros core",
      "Gestión de pipelines CI/CD y automatización de deployments usando Azure DevOps",
      "Implementación de feature flags con LaunchDarkly para rollouts progresivos y A/B testing",
      "Análisis de comportamiento de usuarios con Heap Analytics para optimización de UX",
      "Desarrollo responsive de interfaces para plataformas de banca digital con miles de usuarios activos",
      "Participación en ceremonias ágiles: sprint planning, daily standups, retrospectivas",
    ],
    technologies: ["React", "StencilJS", "Storybook", ".NET Core", "TypeScript", "Azure DevOps", "LaunchDarkly", "Heap Analytics", "SQL Server"],
    companyColor: "#0066CC",
  },
  {
    id: "viamatica",
    company: "Viamática",
    role: "Frontend Developer",
    period: "2022 — 2023",
    current: false,
    location: "Guayaquil, Ecuador",
    description:
      "Desarrollo de aplicaciones web empresariales para clientes de distintos sectores. Enfocado en Angular y la integración con sistemas ERP y CRM.",
    highlights: [
      "Desarrollo de módulos frontend complejos con Angular 14+ para aplicaciones empresariales",
      "Integración con Zoho CRM para gestión de clientes y automatización de procesos comerciales",
      "Implementación de ERP ARCSA para control regulatorio del sector farmacéutico",
      "Diseño y desarrollo de formularios multi-paso con validaciones complejas y UX optimizada",
      "Mejora de experiencia de usuario en flujos críticos, reduciendo el tiempo de completación en un 30%",
    ],
    technologies: ["Angular", "TypeScript", "Zoho CRM", "ERP ARCSA", "RxJS", "Bootstrap", "REST APIs"],
    companyColor: "#6366f1",
  },
  {
    id: "telenews",
    company: "Telenews",
    role: "Soporte Técnico",
    period: "2021 — 2022",
    current: false,
    location: "Guayaquil, Ecuador",
    description:
      "Soporte técnico y mantenimiento de infraestructura de red para proveedor de servicios de internet.",
    highlights: [
      "Configuración y mantenimiento de routers, switches y equipos de red para ISP",
      "Gestión de tickets de soporte técnico usando CRM interno",
      "Resolución de incidencias de conectividad y configuración de VLANs",
      "Documentación de procesos y mejores prácticas de soporte",
    ],
    technologies: ["Redes TCP/IP", "Routers", "CRM", "VLANs", "Soporte ISP"],
    companyColor: "#10b981",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Web",
    icon: "Monitor",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Angular", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "StencilJS", level: "advanced" },
      { name: "Chakra UI", level: "advanced" },
      { name: "Bootstrap", level: "advanced" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Nativo",
    icon: "Smartphone",
    skills: [
      { name: "SwiftUI", level: "advanced" },
      { name: "Jetpack Compose", level: "advanced" },
      { name: "Ionic", level: "intermediate" },
      { name: "Flutter", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    skills: [
      { name: ".NET Core", level: "expert" },
      { name: "Node.js", level: "advanced" },
      { name: "APIs REST", level: "expert" },
      { name: "C#", level: "advanced" },
      { name: "Python", level: "intermediate" },
    ],
  },
  {
    id: "database",
    name: "Bases de Datos",
    icon: "Database",
    skills: [
      { name: "SQL Server", level: "advanced" },
      { name: "MySQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      { name: "Azure DevOps", level: "advanced" },
      { name: "Git / GitHub", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "advanced" },
    ],
  },
  {
    id: "ai",
    name: "IA & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "OpenAI API", level: "advanced" },
      { name: "Prompt Engineering", level: "advanced" },
      { name: "NLP", level: "intermediate" },
      { name: "OCR", level: "intermediate" },
      { name: "LangChain", level: "intermediate" },
    ],
  },
  {
    id: "automation",
    name: "Automatización & No-Code",
    icon: "Workflow",
    skills: [
      { name: "n8n", level: "advanced" },
      { name: "Antigravity", level: "advanced" },
      { name: "LaunchDarkly", level: "advanced" },
      { name: "Webhooks", level: "advanced" },
    ],
  },
  {
    id: "tools",
    name: "Herramientas",
    icon: "Wrench",
    skills: [
      { name: "Cursor", level: "expert" },
      { name: "GitHub Copilot", level: "expert" },
      { name: "Storybook", level: "advanced" },
      { name: "Heap Analytics", level: "intermediate" },
      { name: "Figma", level: "intermediate" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "banca-digital",
    title: "Plataforma de Banca Digital",
    description: "Plataforma enterprise de banca digital para gestión de cuentas, transferencias y servicios financieros.",
    longDescription:
      "Solución Full Stack para digitalización de servicios bancarios core. Arquitectura de microservicios con APIs RESTful en .NET Core, frontend React con Design System propio, desplegada en Azure con alta disponibilidad y +99.9% uptime.",
    technologies: ["React", "TypeScript", ".NET Core", "SQL Server", "Azure", "Docker", "StencilJS"],
    category: "Fintech",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    icon: "Building2",
  },
  {
    id: "smart-reports",
    title: "SmartReports AI",
    description: "Sistema inteligente de análisis documental con OCR y GPT-4 para generación automática de reportes financieros.",
    longDescription:
      "Motor de procesamiento de documentos que combina OCR de alta precisión con GPT-4 para extraer, estructurar y analizar información de estados financieros, contratos y documentos regulatorios. Reduce 80% el tiempo de análisis manual.",
    technologies: ["OpenAI GPT-4", "OCR", ".NET Core", "Python", "Azure Cognitive Services", "React"],
    category: "AI / FinTech",
    featured: true,
    gradient: "from-violet-600 via-purple-600 to-pink-600",
    icon: "BrainCircuit",
  },
  {
    id: "design-system",
    title: "BankDS — Design System",
    description: "Sistema de diseño empresarial para plataformas bancarias con más de 80 componentes documentados.",
    longDescription:
      "Design System construido con StencilJS para garantizar interoperabilidad entre frameworks. Incluye tokens de diseño, componentes accesibles WCAG 2.1 AA, documentación interactiva en Storybook y integración con Figma.",
    technologies: ["StencilJS", "Storybook", "TypeScript", "CSS Custom Properties", "Figma Tokens", "Jest"],
    category: "Design Systems",
    featured: true,
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    icon: "Layers",
  },
  {
    id: "erp-suite",
    title: "VentasSuite ERP",
    description: "Plataforma de gestión empresarial con módulos de ventas, inventario y CRM integrado.",
    longDescription:
      "Aplicación Angular enterprise con módulos completos de gestión: ventas, inventario, reportes y CRM. Integración con APIs REST para sincronización en tiempo real con ERPs externos. Soporte para más de 500 usuarios concurrentes.",
    technologies: ["Angular", "TypeScript", "RxJS", "Node.js", "PostgreSQL", "REST APIs", "Zoho CRM"],
    category: "Enterprise",
    featured: false,
    gradient: "from-amber-600 via-orange-600 to-red-600",
    icon: "BarChart3",
  },
];

export const education: Education[] = [
  {
    id: "unir-master",
    institution: "Universidad Internacional de La Rioja",
    degree: "Máster en Inteligencia Artificial",
    field: "Inteligencia Artificial",
    period: "2025 — Presente",
    current: true,
    description:
      "Programa especializado en IA aplicada: Machine Learning, Deep Learning, NLP, Computer Vision y ética en IA. Enfoque en aplicaciones empresariales y generative AI.",
    highlights: [
      "Machine Learning y Deep Learning con Python",
      "Procesamiento de Lenguaje Natural (NLP)",
      "Computer Vision y modelos generativos",
      "IA aplicada a procesos empresariales",
    ],
  },
  {
    id: "ug-ingenieria",
    institution: "Universidad de Guayaquil",
    degree: "Ingeniería de Software",
    field: "Ingeniería de Software",
    period: "2018 — 2024",
    current: false,
    description:
      "Formación integral en ingeniería de software: algoritmos, estructuras de datos, bases de datos, arquitectura de sistemas, desarrollo web y móvil.",
    highlights: [
      "Algoritmos y estructuras de datos avanzados",
      "Arquitectura de software y patrones de diseño",
      "Bases de datos relacionales y NoSQL",
      "Metodologías ágiles y gestión de proyectos",
    ],
  },
];
