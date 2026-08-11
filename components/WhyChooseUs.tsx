"use client";

import { motion } from "framer-motion";
import { DollarSign, ShieldCheck, MapPin, Zap } from "lucide-react";
import { BRAND } from "@/lib/config";

const reasons = [
  {
    icon: DollarSign,
    title: "Biaya Transparan",
    description:
      "Estimasi biaya diberikan di awal sebelum pekerjaan dimulai. Tidak ada biaya tersembunyi atau kejutan di akhir — harga yang disepakati adalah harga final.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Servis",
    description:
      "Setiap pekerjaan dilengkapi dengan garansi. Jika masalah yang sama muncul kembali dalam periode garansi, kami kembali tanpa biaya tambahan.",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/20",
  },
  {
    icon: MapPin,
    title: "Panggilan On-Site",
    description:
      "Teknisi kami yang datang ke lokasi Anda — rumah, kantor, atau kos. Tidak perlu repot membawa perangkat berat ke tempat servis.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Zap,
    title: "Respon & Eksekusi Cepat",
    description:
      "Kami merespons pesan WhatsApp dengan cepat dan menjadwalkan kunjungan sesuai waktu yang Anda inginkan. Target penyelesaian dalam satu kunjungan.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold mb-4 tracking-wider uppercase">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Kenapa Pilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">
              {BRAND.name}?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Kepercayaan Anda adalah prioritas kami. Ini yang membedakan kami dari layanan IT lainnya.
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
                className={`group relative p-6 rounded-2xl bg-[#111827] border ${item.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.bg}`}
                >
                  <Icon size={24} className={item.color} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${
                    item.color === "text-yellow-400"
                      ? "from-yellow-400/50"
                      : item.color === "text-[#25D366]"
                      ? "from-[#25D366]/50"
                      : item.color === "text-blue-400"
                      ? "from-blue-400/50"
                      : "from-purple-400/50"
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
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
            { value: "500+", label: "Pelanggan Puas" },
            { value: "98%", label: "Tingkat Keberhasilan" },
            { value: "< 2 Jam", label: "Waktu Respons" },
            { value: "3 Tahun", label: "Pengalaman" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-[#111827] border border-white/5"
            >
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#25D366] to-[#128C7E] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
