import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YourTechMate — Jasa IT Panggilan | Maintenance PC, Laptop & Jaringan",
  description:
    "Layanan IT profesional on-site di area Jakarta, Bogor, Depok, dan Bekasi. Maintenance PC & Laptop, Install OS & Software, Setup Jaringan/Wi-Fi, Rakit PC Custom. Teknisi berpengalaman, bergaransi, dan harga transparan.",
  keywords: [
    "jasa IT panggilan",
    "maintenance laptop panggilan",
    "maintenance PC rumahan",
    "install windows",
    "setup wifi",
    "rakit PC gaming",
    "teknisi IT Jakarta",
    "Jakarta Bogor Depok Bekasi",
  ],
  openGraph: {
    title: "YourTechMate — Jasa IT Panggilan",
    description:
      "Teknisi IT profesional datang langsung ke lokasi Anda. Cepat, bergaransi, harga transparan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
