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
      <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nazril Acil",
  "url": "https://nazril-acil.vercel.app",
  "image": "https://nazril-acil.vercel.app/me.webp",
  "sameAs": [
    "https://github.com/nazrilacil",
    "https://instagram.com/nazrilacil"
  ],
  "jobTitle": "Web Developer",
  "description": "Nazril Acil adalah seorang pengembang web, aplikasi dan teknologi."
}
  </script>
<title>Nazril Acil | Web Developer Portfolio</title>
      <meta name="robots" content="index, follow" />
      <meta name="description"
    content="Nazril Acil adalah seorang pengembang web, aplikasi dan teknologi." />
  <meta name="keywords"
    content="Nazril Acil,Nazril Acil portfolio,Nazril Acil Portfolio,nazrilacil,nazril acil site,Nazril Acil Site,nazril acil me,nazril acil web,nazril acil github,nazrilacil site,nazrilacil uiverse,uiverse,nazril acil uiverse,nazril acil fullstack developer,frontend developer,backend developer,nazril muhammad mirza,muhammad nazril,nazril acil 一 fullstack developer" />
  <meta name="author" content="Nazril Acil 一 Fullstack Developer" />
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
