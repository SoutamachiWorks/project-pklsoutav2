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
  title: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat",
  description: "Website resmi Dinas Pemuda dan Olahraga Provinsi Sumatera Barat - Melayani masyarakat dengan layanan terbaik dalam bidang kepemudaan dan keolahragaan",
  keywords: "dispora sumbar, pemuda olahraga sumatera barat, atlet sumbar, prestasi olahraga, PPLP, UPTD Kebakatan Olahraga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
