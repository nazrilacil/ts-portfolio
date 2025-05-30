import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { ThemeProvider } from 'next-themes'
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazril Acil | Portfolio",
  description: "Portofolio resmi Nazril Acil, seorang web developer fullstack yang berpengalaman dengan React, Next.js, dan Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="keywords" content="web developer, frontend, backend, fullstack, portfolio, Acil Nazril, Nazrilacil, Nazril Muhammad Mirza, Nazril Acil" />
      <meta name="robots" content="all" />
      <meta name="author" content="Nazril Acil" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Nazril Acil | Web Developer Portfolio" />
      <meta property="og:description" content="Lihat proyek dan keahlian Nazril Acil di bidang pengembangan web frontend dan backend." />
      <meta property="og:url" content="https://nazril-acil.vercel.app" />
      <meta property="og:type" content="website" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
