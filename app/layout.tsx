import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ArrowUpIcon from "@/components/ArrowUpIcon";
import Footer from "@/components/Footer";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f0e8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-tawny-omega-37.vercel.app"),

  title: {
    default: "Roqeeb Shafiriyu — Frontend Engineer",
    template: "%s | Roqeeb Shafiriyu",
  },
  description:
    "Frontend engineer based in Lagos, Nigeria. I build fast, accessible web products with Next.js, TypeScript, and Tailwind CSS. Graduating First Class from LASU, August 2026.",

  keywords: [
    "Frontend Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Lagos",
    "Nigeria",
    "Web Developer",
    "Roqeeb Shafiriyu",
  ],

  authors: [{ name: "Roqeeb Shafiriyu", url: "https://github.com/Roqeeb-dev" }],
  creator: "Roqeeb Shafiriyu",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-tawny-omega-37.vercel.app",
    siteName: "Roqeeb Shafiriyu",
    title: "Roqeeb Shafiriyu — Frontend Engineer",
    description:
      "Frontend engineer based in Lagos, Nigeria. Building fast, accessible web products with Next.js, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roqeeb Shafiriyu — Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roqeeb Shafiriyu — Frontend Engineer",
    description:
      "Frontend engineer based in Lagos, Nigeria. Building fast, accessible web products with Next.js, TypeScript, and Tailwind CSS.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <ArrowUpIcon />
        <Footer />
      </body>
    </html>
  );
}
