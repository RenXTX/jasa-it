import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://go-it-cls.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "GO IT CILEUNGSI — Jasa IT Panggilan Cileungsi & Bekasi | Servis PC, Laptop, Jaringan",
    template: "%s | GO IT CILEUNGSI",
  },

  description:
    "Jasa IT panggilan profesional di Cileungsi, Bekasi, Bogor, Depok & Jakarta. Servis PC & Laptop, install Windows, setup WiFi/router, rakit PC custom. Teknisi berpengalaman, bergaransi, on-site ke lokasi Anda. Hubungi sekarang!",

  keywords: [
    // Primary — lokasi spesifik (paling penting)
    "IT Cileungsi",
    "jasa IT Cileungsi",
    "servis IT Cileungsi",
    "teknisi IT Cileungsi",
    "jasa panggilan IT Cileungsi",
    // Secondary — layanan + lokasi
    "servis laptop Cileungsi",
    "servis PC Cileungsi",
    "install windows Cileungsi",
    "setup wifi Cileungsi",
    "rakit PC Cileungsi",
    "teknisi komputer Cileungsi",
    // Bekasi
    "servis laptop Bekasi",
    "jasa IT Bekasi",
    "teknisi komputer Bekasi",
    "servis PC Bekasi",
    // Bogor
    "servis laptop Bogor",
    "jasa IT Bogor",
    "teknisi komputer Bogor",
    // Generic high-traffic
    "jasa IT panggilan",
    "jasa panggilan IT",
    "servis IT panggilan",
    "teknisi IT panggilan",
    "jasa servis komputer panggilan",
    "servis laptop panggilan rumahan",
    "teknisi komputer panggilan",
    "jasa IT on-site",
    "servis laptop terdekat",
    "teknisi komputer terdekat",
    // Layanan spesifik
    "install windows 11",
    "install windows 10",
    "servis laptop mati total",
    "servis laptop overheat",
    "servis laptop layar mati",
    "setup jaringan kantor",
    "setting router wifi",
    "rakit PC gaming murah",
    "upgrade RAM SSD laptop",
    "servis laptop bluescreen",
    "bersih virus laptop",
    // Brand
    "GO IT CILEUNGSI",
  ],

  authors: [{ name: "GO IT CILEUNGSI", url: SITE_URL }],
  creator: "GO IT CILEUNGSI",
  publisher: "GO IT CILEUNGSI",

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

  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
    },
  },

  openGraph: {
    title: "GO IT CILEUNGSI — Jasa IT Panggilan Cileungsi, Bekasi & Sekitarnya",
    description:
      "Teknisi IT profesional langsung datang ke lokasi Anda. Servis PC/Laptop, Install OS, Setup Jaringan, Rakit PC — cepat, bergaransi, harga transparan. Area: Cileungsi, Bekasi, Bogor, Depok, Jakarta.",
    url: SITE_URL,
    siteName: "GO IT CILEUNGSI",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GO IT CILEUNGSI — Jasa IT Panggilan Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GO IT CILEUNGSI — Jasa IT Panggilan Cileungsi & Bekasi",
    description:
      "Teknisi IT profesional datang ke lokasi Anda. Servis PC, Laptop, Jaringan & Rakit PC. Area Cileungsi, Bekasi, Bogor, Depok, Jakarta.",
    images: [`${SITE_URL}/og-image.png`],
  },

  category: "Technology Services",
};

// JSON-LD Structured Data untuk Google Local Business & Service
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "GO IT CILEUNGSI",
      description:
        "Jasa IT panggilan profesional on-site di Cileungsi, Bekasi, Bogor, Depok dan Jakarta. Melayani servis PC & laptop, instalasi OS, setup jaringan/WiFi, dan perakitan PC custom.",
      url: SITE_URL,
      telephone: "+6281295844201",
      email: "yourtechmate@email.com",
      image: `${SITE_URL}/logo.png`,
      logo: `${SITE_URL}/logo.png`,
      priceRange: "Rp 50.000 – Rp 500.000",
      currenciesAccepted: "IDR",
      paymentAccepted: "Cash, Transfer Bank, QRIS",
      areaServed: [
        { "@type": "City", name: "Cileungsi" },
        { "@type": "City", name: "Bekasi" },
        { "@type": "City", name: "Bogor" },
        { "@type": "City", name: "Depok" },
        { "@type": "City", name: "Jakarta" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cileungsi",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.5344,
        longitude: 107.0075,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6281295844201",
        contactType: "customer service",
        availableLanguage: "Indonesian",
        contactOption: "TollFree",
      },
      sameAs: [
        "https://wa.me/6281295844201",
        "https://instagram.com/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GO IT CILEUNGSI",
      description: "Jasa IT panggilan profesional on-site di Cileungsi dan sekitarnya",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "id-ID",
    },
    {
      "@type": "Service",
      name: "Servis & Maintenance PC/Laptop Panggilan",
      description: "Layanan servis dan perbaikan PC & laptop on-site. Diagnosa, perbaikan hardware/software, cleaning, dan garansi.",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: ["Cileungsi", "Bekasi", "Bogor", "Depok", "Jakarta"],
      serviceType: "Computer Repair",
    },
    {
      "@type": "Service",
      name: "Install OS & Software Panggilan",
      description: "Instalasi Windows 10/11, Linux, aktivasi lisensi, update driver, dan software produktivitas.",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: ["Cileungsi", "Bekasi", "Bogor", "Depok", "Jakarta"],
      serviceType: "Software Installation",
    },
    {
      "@type": "Service",
      name: "Setup Jaringan & WiFi Panggilan",
      description: "Konfigurasi router, setup WiFi, pemasangan kabel LAN, troubleshooting koneksi internet lambat.",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: ["Cileungsi", "Bekasi", "Bogor", "Depok", "Jakarta"],
      serviceType: "Network Setup",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa biaya jasa IT panggilan ke Cileungsi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya jasa IT panggilan di Cileungsi mulai dari Rp 50.000 tergantung jenis layanan. Estimasi biaya diberikan transparan sebelum pekerjaan dimulai. Hubungi kami via WhatsApp untuk konsultasi gratis.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah tersedia teknisi IT panggilan di Cileungsi Bekasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya! GO IT CILEUNGSI menyediakan teknisi IT yang siap datang langsung ke lokasi Anda di Cileungsi, Bekasi, Bogor, Depok, dan Jakarta. Respons cepat dalam hitungan menit.",
          },
        },
        {
          "@type": "Question",
          name: "Apa saja layanan yang tersedia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami melayani: servis & maintenance PC/laptop, instalasi Windows/Linux, setup WiFi & jaringan, rakit PC custom & upgrade hardware. Semua layanan on-site ke lokasi Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah ada garansi setelah servis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, setiap pekerjaan dilengkapi garansi. Jika masalah yang sama muncul kembali dalam periode garansi, teknisi kami akan kembali tanpa biaya tambahan.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo meta tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Cileungsi, Bekasi, Jawa Barat" />
        <meta name="geo.position" content="-6.5344;107.0075" />
        <meta name="ICBM" content="-6.5344, 107.0075" />
        {/* Mobile */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
