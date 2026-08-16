import type { Metadata } from "next";
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
  title: "Score — Stop letting the shift decide your score",
  description:
    "JEE Main, JEE Advanced, NEET and MHT-CET papers from 2020–2026 as real timed mocks. Build custom papers from any shifts with the Custom Mock Builder.",
  openGraph: {
    title: "Score — Exam preparation that puts you in control",
    description:
      "Every JEE, NEET and MHT-CET paper as a timed mock. Build your own from any shifts.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-zinc-100">{children}</body>
    </html>
  );
}
