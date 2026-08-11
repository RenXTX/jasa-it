"use client";

import { motion, type Variants } from "framer-motion";
import { Monitor, HardDrive, Wifi, Cpu, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const services = [
  {
    id: "maintenance-pc",
    icon: Monitor,
    title: "Maintenance & Troubleshooting PC/Laptop",
    description:
      "Diagnosa dan perbaikan menyeluruh untuk PC & laptop Anda — mulai dari layar mati, overheat, virus, blue screen, hingga kerusakan hardware. Teknisi berpengalaman siap datang ke lokasi.",
    tag: "Paling Populer",
    tagColor: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20",
    gradient: "from-[#25D366]/10 to-transparent",
    iconBg: "bg-[#25D366]/10 text-[#25D366]",
  },
  {
    id: "install-os",
    icon: HardDrive,
    title: "Install OS & Software / Aplikasi",
    description:
      "Instalasi Windows 10/11, Ubuntu, atau distro Linux pilihan Anda. Termasuk aktivasi, driver, dan software produktivitas seperti Office, Adobe, dan aplikasi lainnya.",
    tag: null,
    tagColor: "",
    gradient: "from-blue-500/10 to-transparent",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    id: "setup-network",
    icon: Wifi,
    title: "Setup Network / Wi-Fi / Router / LAN",
    description:
      "Konfigurasi router, pemasangan kabel LAN, setting Wi-Fi repeater, troubleshooting koneksi lambat, dan setup jaringan kantor atau rumah dari nol.",
    tag: null,
    tagColor: "",
    gradient: "from-purple-500/10 to-transparent",
    iconBg: "bg-purple-500/10 text-purple-400",
  },
  {
    id: "rakit-pc",
    icon: Cpu,
    title: "Rakit PC Custom & Upgrade Hardware",
    description:
      "Konsultasi dan perakitan PC Gaming, Office, atau Workstation sesuai budget & kebutuhan. Termasuk upgrade RAM, SSD, VGA, dan konsultasi komponen terbaik.",
    tag: null,
    tagColor: "",
    gradient: "from-orange-500/10 to-transparent",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-24 bg-[#0D1526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold mb-4 tracking-wider uppercase">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Semua Masalah IT,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">
              Satu Solusi
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Teknisi profesional kami siap menangani berbagai kebutuhan IT Anda,
            langsung di lokasi Anda.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const waText = encodeURIComponent(
              `Halo, saya ingin memesan layanan: *${service.title}*. Mohon informasinya.`
            );
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants} 
                className="group relative flex flex-col bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 overflow-hidden"
              >
                {/* Card background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Tag */}
                {service.tag && (
                  <span
                    className={`relative z-10 self-start mb-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${service.tagColor}`}
                  >
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.iconBg} ${!service.tag ? "mt-7" : ""}`}
                >
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#25D366] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`service-cta-${service.id}`}
                  className="relative z-10 mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:gap-2.5 transition-all duration-200"
                >
                  Pesan Sekarang
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
