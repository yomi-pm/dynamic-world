import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import Image from "next/image";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Research Desk | Research Resources. Expert Support.",
    template: "%s | Research Desk",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  description:
    "Research Desk provides research resources, methodology guidance, data analysis support, bioinformatics services, academic writing assistance and publication support for students and researchers.",

  keywords: [
    "research support",
    "research topics",
    "research methodology",
    "data analysis",
    "bioinformatics",
    "academic writing",
    "publication support",
    "research resources",
    "public health research topics",
    "nigeria research support",
  ],

  metadataBase: new URL("https://researchdesk.ng"),

  openGraph: {
    title: "Research Desk",
    description: "Research Resources. Expert Support.",

    url: "https://researchdesk.ng",

    siteName: "Research Desk",

    locale: "en_US",

    type: "website",
  },
};
