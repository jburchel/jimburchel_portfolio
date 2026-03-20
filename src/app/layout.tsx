import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jim Burchel | Full-Stack Developer",
  description:
    "Full-stack developer specializing in enterprise web applications with Next.js, React, and cloud-native architectures. Available for freelance projects.",
  metadataBase: new URL("https://jimburchel.dev"),
  openGraph: {
    title: "Jim Burchel | Full-Stack Developer",
    description:
      "Full-stack developer specializing in enterprise web applications with Next.js, React, and cloud-native architectures.",
    url: "https://jimburchel.dev",
    siteName: "Jim Burchel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jim Burchel | Full-Stack Developer",
    description:
      "Full-stack developer specializing in enterprise web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jim Burchel",
  url: "https://jimburchel.dev",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer specializing in enterprise web applications with Next.js, React, and cloud-native architectures.",
  sameAs: [
    "https://github.com/jimburchel",
    "https://linkedin.com/in/jimburchel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
