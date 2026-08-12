"use client";

import { motion } from "framer-motion";
import { DollarSign, ShieldCheck, MapPin, Zap } from "lucide-react";
import { BRAND } from "@/lib/config";

const reasons = [
  {
    icon: DollarSign,
    title: "Biaya Transparan",
    description:
      "Estimasi biaya diberikan transparan di awal sebelum pekerjaan dimulai. Tanpa biaya tersembunyi — harga disepakati adalah harga final.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Maintenance",
    description:
      "Setiap pekerjaan dilindungi garansi resmi. Jika timbul keluhan serupa dalam masa garansi, teknisi kembali tanpa biaya tambahan.",
  },
  {
    icon: MapPin,
    title: "Panggilan On-Site",
    description:
      "Teknisi ahli hadir langsung ke rumah, kantor, atau lokasi Anda. Hemat waktu tanpa perlu membawa perangkat ke mana-mana.",
  },
  {
    icon: Zap,
    title: "Respon & Eksekusi Cepat",
    description:
      "Respon pesan WhatsApp dalam hitungan menit dan penjadwalan tepat waktu. Target penyelesaian masalah cepat dalam satu kunjungan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-24 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Keunggulan Utama
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Mengapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              {BRAND.name}?
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Standar pelayanan IT profesional dengan fokus pada transparansi, kecepatan, dan kepuasan pelanggan.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-black border border-neutral-800/80 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle bottom line highlight */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: "Pelanggan Puas" },
            { value: "98%", label: "Tingkat Keberhasilan" },
            { value: "< 2 Jam", label: "Waktu Respons" },
            { value: "3+ Tahun", label: "Pengalaman Kerja" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-black border border-neutral-800/80 hover:border-neutral-700 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
