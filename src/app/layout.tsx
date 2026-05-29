import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Chamakuri Mohith | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Chamakuri Mohith, B.Tech CSE (Data Science) student at Anurag University. Specializing in software engineering, machine learning predictions, and data-driven solutions.",
  keywords: [
    "Chamakuri Mohith",
    "Mohith Chamakuri",
    "Developer Portfolio",
    "Full Stack Developer",
    "Data Science Student",
    "Spring Boot",
    "React 19",
    "Machine Learning Portfolio",
    "Eativo food discovery",
    "Java Python SQL"
  ],
  authors: [{ name: "Chamakuri Mohith" }],
  creator: "Chamakuri Mohith",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohith.dev",
    title: "Chamakuri Mohith | Full Stack Developer & AI Enthusiast",
    description: "B.Tech CSE (Data Science) student specializing in software engineering, machine learning, and data-driven solutions.",
    siteName: "Chamakuri Mohith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamakuri Mohith | Full Stack Developer & AI Enthusiast",
    description: "B.Tech CSE (Data Science) student specializing in software engineering, machine learning, and data-driven solutions.",
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
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
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
      <body className="min-h-full flex flex-col bg-bg-light text-foreground">
        {children}
      </body>
    </html>
  );
}
