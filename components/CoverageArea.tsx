"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { COVERAGE_AREAS, WHATSAPP_NUMBER } from "@/lib/config";

export default function CoverageArea() {
  const waText = encodeURIComponent(
    "Halo, saya ingin menanyakan apakah area saya termasuk dalam jangkauan layanan IT panggilan Anda?"
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <section id="area" className="py-24 bg-black border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Jangkauan Layanan
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Kami Melayani{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Jakarta, Bogor, Depok & Bekasi
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed">
              Layanan panggilan on-site kami tersedia untuk area Jakarta, Bogor, Depok, dan Bekasi.
              Teknisi kami siap hadir di lokasi Anda dengan cepat.
            </p>

            {/* Note box */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-8">
              <p className="text-xs text-zinc-300 leading-relaxed">
                🗺️ <strong className="text-white">Lokasi Anda belum tercantum?</strong>{" "}
                Hubungi kami melalui WhatsApp untuk konfirmasi ketersediaan teknisi di area sekitar Anda.
              </p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="coverage-wa-cta"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5"
            >
              <MapPin size={15} />
              Tanyakan Lokasi Anda
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right: Area badges grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-4">
              {COVERAGE_AREAS.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex items-center gap-3 p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-white/30 transition-all duration-200 hover:bg-neutral-900/60"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}

              {/* Extra card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: COVERAGE_AREAS.length * 0.08 }}
                className="flex items-center justify-center p-5 rounded-2xl bg-neutral-900 border border-neutral-800 col-span-2"
              >
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">
                  + Area Sekitarnya (Konfirmasi via WA)
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
