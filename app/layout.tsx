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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<title>Nazril Acil | Web Developer Portfolio</title>
<meta name="description" content="Lihat proyek dan keahlian Nazril Acil di bidang pengembangan web frontend dan backend."/>
<meta property="og:url" content="https://nazril-acil.vercel.app/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Nazril Acil | Web Developer Portfolio"/>
<meta property="og:description" content="Lihat proyek dan keahlian Nazril Acil di bidang pengembangan web frontend dan backend."/>
<meta property="og:image" content="https://nazril-acil.vercel.app/og-image.png"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="nazril-acil.vercel.app"/>
<meta property="twitter:url" content="https://nazril-acil.vercel.app/"/>
<meta name="twitter:title" content="Nazril Acil | Web Developer Portfolio"/>
<meta name="twitter:description" content="Lihat proyek dan keahlian Nazril Acil di bidang pengembangan web frontend dan backend."/>
<meta name="twitter:image" content="https://nazril-acil.vercel.app/og-image.png"/>
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
