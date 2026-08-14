"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Monitor, HardDrive, Wifi, Cpu, ArrowRight, CheckCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const services = [
  {
    id: "maintenance-pc",
    category: "hardware",
    icon: Monitor,
    title: "Maintenance & Troubleshooting PC/Laptop",
    description:
      "Diagnosa & perbaikan menyeluruh PC & Laptop — mati total, overheat, virus, blue screen, hingga pergantian sparepart.",
    tag: "Paling Banyak Dipesan",
    tagColor: "bg-white/10 text-white border-white/20",
    iconBg: "bg-white/10 text-white border border-white/10",
    features: ["Pengecekan Komponen", "Cleaning & Thermal Paste", "Garansi Part & Jasa"],
  },
  {
    id: "install-os",
    category: "software",
    icon: HardDrive,
    title: "Install OS & Software / Aplikasi",
    description:
      "Instalasi Windows 10/11, Ubuntu/Linux, aktivasi resmi, update driver terbaru, dan software kerja (Office, Adobe, CAD).",
    tag: "Proses Cepat",
    tagColor: "bg-zinc-800 text-zinc-300 border-zinc-700",
    iconBg: "bg-zinc-900 text-white border border-zinc-800",
    features: ["Windows 10/11 Lisensi", "Aplikasi Siap Pakai", "Backup Data Aman"],
  },
  {
    id: "setup-network",
    category: "network",
    icon: Wifi,
    title: "Setup Network / Wi-Fi / Router / LAN",
    description:
      "Konfigurasi router, pemasangan kabel LAN, setting Wi-Fi repeater, troubleshooting sinyal lemah & jaringan kantor.",
    tag: null,
    tagColor: "",
    iconBg: "bg-zinc-900 text-white border border-zinc-800",
    features: ["Cakupan Wi-Fi Luas", "Kabel LAN Rapi", "Setting IP & Security"],
  },
  {
    id: "rakit-pc",
    category: "hardware",
    icon: Cpu,
    title: "Rakit PC Custom & Upgrade Hardware",
    description:
      "Konsultasi & perakitan PC Gaming, Office, atau Workstation. Upgrade RAM, SSD NVMe, VGA, & manajemen kabel rapi.",
    tag: "Bisa Konsultasi Budget",
    tagColor: "bg-zinc-800 text-zinc-300 border-zinc-700",
    iconBg: "bg-zinc-900 text-white border border-zinc-800",
    features: ["Komponen 100% Original", "Kabel Management Rapi", "Stress Test Stability"],
  },
];

const categories = [
  { id: "all", label: "Semua Layanan" },
  { id: "hardware", label: "Hardware & PC" },
  { id: "software", label: "OS & Software" },
  { id: "network", label: "Jaringan & Wi-Fi" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="layanan" className="py-24 bg-black relative border-t border-neutral-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Layanan Utama
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Solusi IT Profesional,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Tanpa Repot
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Pilih layanan yang Anda butuhkan. Teknisi siap hadir dengan peralatan lengkap.
          </p>
        </motion.div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black shadow-lg shadow-white/10 scale-105"
                  : "bg-neutral-900/80 text-zinc-400 border border-neutral-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const waText = encodeURIComponent(
              `Halo, saya ingin memesan layanan: *${service.title}*. Mohon informasinya.`
            );
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative flex flex-col bg-neutral-950/80 border border-neutral-800/90 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
              >
                {/* Highlight Tag */}
                {service.tag ? (
                  <span
                    className={`relative z-10 self-start mb-4 text-[11px] font-semibold px-3 py-1 rounded-full border ${service.tagColor}`}
                  >
                    {service.tag}
                  </span>
                ) : (
                  <div className="h-7 mb-4" />
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.iconBg} group-hover:bg-white group-hover:text-black transition-all duration-300`}
                >
                  <Icon size={22} />
                </div>

                {/* Title & Description */}
                <h3 className="relative z-10 text-base font-bold text-white mb-3 leading-snug group-hover:text-zinc-200 transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-zinc-400 text-xs leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <ul className="relative z-10 space-y-2 pt-4 border-t border-neutral-900 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <CheckCircle size={13} className="text-white flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`service-cta-${service.id}`}
                  className="relative z-10 flex items-center justify-between w-full pt-3 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:bg-white group-hover:text-black text-white text-xs font-bold transition-all duration-300"
                >
                  <span>Pesan Layanan</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
