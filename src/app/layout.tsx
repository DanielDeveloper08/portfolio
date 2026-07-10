import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Asanza — Full Stack Software Engineer",
  description:
    "Ingeniero de Software Full Stack especializado en React, .NET y AI. Experiencia en banca digital y plataformas enterprise.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    ".NET Developer",
    "AI Engineer",
    "Software Engineer Ecuador",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Daniel Asanza" }],
  creator: "Daniel Asanza",
  openGraph: {
    type: "website",
    locale: "es_EC",
    title: "Daniel Asanza — Full Stack Software Engineer",
    description: "Ingeniero de Software Full Stack especializado en React, .NET y AI.",
    siteName: "Daniel Asanza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Asanza — Full Stack Software Engineer",
    description: "Ingeniero de Software Full Stack especializado en React, .NET y AI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
