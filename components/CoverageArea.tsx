"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { COVERAGE_AREAS, WHATSAPP_NUMBER } from "@/lib/config";

export default function CoverageArea() {
  const waText = encodeURIComponent(
    "Halo, saya ingin menanyakan apakah area saya termasuk dalam jangkauan layanan IT panggilan Anda?"
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <section id="area" className="py-24 bg-[#0D1526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold mb-4 tracking-wider uppercase">
              Area Jangkauan
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Kami Melayani{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">
                Jabodetabek
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Layanan panggilan on-site kami tersedia di seluruh area
              Jabodetabek. Teknisi kami siap hadir di lokasi Anda dalam waktu
              singkat.
            </p>

            {/* Area tidak terdaftar */}
            <div className="p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/15 mb-8">
              <p className="text-sm text-slate-300">
                🗺️ <strong className="text-white">Area Anda tidak ada di daftar?</strong>{" "}
                Hubungi kami via WhatsApp, kami mungkin tetap bisa membantu atau
                merekomendasikan solusi terbaik.
              </p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="coverage-wa-cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#25D366]/25 hover:-translate-y-0.5"
            >
              <MapPin size={16} />
              Tanyakan Area Anda
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
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[#25D366]/5 rounded-3xl blur-3xl" />

            <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
              {COVERAGE_AREAS.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group flex items-center gap-2.5 p-3.5 rounded-xl bg-[#111827] border border-white/5 hover:border-[#25D366]/30 transition-all duration-200 hover:bg-[#25D366]/5"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#25D366] flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}

              {/* "& more" card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: COVERAGE_AREAS.length * 0.07 }}
                className="flex items-center justify-center p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 col-span-2 sm:col-span-1"
              >
                <span className="text-sm font-semibold text-[#25D366]">
                  + Area sekitarnya
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
