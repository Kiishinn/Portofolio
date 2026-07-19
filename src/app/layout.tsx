import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Full Stack Developer",
    template: "%s | Portfolio",
  },
  description:
    "Personal portfolio of a Full Stack Developer specializing in React, Next.js, Laravel, and modern web technologies. Fresh graduate in Information Systems with a passion for building beautiful, performant web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Laravel",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI Designer",
  ],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.dev",
    siteName: "Developer Portfolio",
    title: "Portfolio — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Laravel, and modern web technologies.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Laravel, and modern web technologies.",
    images: ["/images/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
