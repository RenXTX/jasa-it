"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, MapPin, Wrench, MessageSquare } from "lucide-react";
import { SERVICES, WHATSAPP_NUMBER } from "@/lib/config";

interface FormData {
  name: string;
  address: string;
  service: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  address: "",
  service: "",
  notes: "",
};

export default function OrderForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!form.address.trim()) newErrors.address = "Alamat / lokasi wajib diisi.";
    if (!form.service) newErrors.service = "Pilih jenis layanan.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedService =
      SERVICES.find((s) => s.id === form.service)?.label ?? form.service;

    const message = [
      `🔧 *PEMESANAN LAYANAN IT PANGGILAN*`,
      ``,
      `👤 *Nama:* ${form.name}`,
      `📍 *Alamat/Lokasi:* ${form.address}`,
      `🛠️ *Layanan:* ${selectedService}`,
      form.notes ? `📝 *Detail Keluhan:* ${form.notes}` : null,
      ``,
      `_Dikirim melalui website TechCare_`,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const inputBase =
    "w-full bg-[#0A0F1E] border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366]/50";

  const getInputClass = (field: keyof FormData) =>
    `${inputBase} ${
      errors[field]
        ? "border-red-500/50 focus:ring-red-500/30"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="pesan" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold mb-4 tracking-wider uppercase">
              Pesan Sekarang
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Ceritakan Masalah{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">
                Anda
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Isi formulir di samping dan pesan Anda akan langsung terformat rapi
              dan terkirim ke WhatsApp kami. Respons cepat dijamin!
            </p>

            {/* Step indicators */}
            <div className="space-y-4">
              {[
                { step: "01", title: "Isi Formulir", desc: "Lengkapi data diri dan detail masalah Anda." },
                { step: "02", title: "Kirim via WhatsApp", desc: "Klik tombol hijau — pesan otomatis terformat." },
                { step: "03", title: "Teknisi Hadir", desc: "Kami konfirmasi jadwal dan teknisi segera datang." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#25D366]">{item.step}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#111827] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl shadow-black/30"
            >
              {/* Nama */}
              <div>
                <label
                  htmlFor="form-name"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2"
                >
                  <User size={14} className="text-[#25D366]" />
                  Nama Lengkap <span className="text-red-400">*</span>
                </label>
                <input
                  id="form-name"
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className={getInputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              {/* Alamat */}
              <div>
                <label
                  htmlFor="form-address"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2"
                >
                  <MapPin size={14} className="text-[#25D366]" />
                  Alamat / Lokasi <span className="text-red-400">*</span>
                </label>
                <input
                  id="form-address"
                  type="text"
                  placeholder="Contoh: Jl. Sudirman No. 10, Jakarta Selatan"
                  value={form.address}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, address: e.target.value }))
                  }
                  className={getInputClass("address")}
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.address}</p>
                )}
              </div>

              {/* Jenis Layanan */}
              <div>
                <label
                  htmlFor="form-service"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2"
                >
                  <Wrench size={14} className="text-[#25D366]" />
                  Jenis Layanan <span className="text-red-400">*</span>
                </label>
                <select
                  id="form-service"
                  value={form.service}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, service: e.target.value }))
                  }
                  className={`${getInputClass("service")} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "18px",
                    paddingRight: "40px",
                  }}
                >
                  <option value="" className="bg-[#111827] text-slate-400">
                    -- Pilih Layanan --
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#111827] text-white">
                      {s.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>
                )}
              </div>

              {/* Detail Keluhan */}
              <div>
                <label
                  htmlFor="form-notes"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2"
                >
                  <MessageSquare size={14} className="text-[#25D366]" />
                  Detail Keluhan / Catatan{" "}
                  <span className="text-slate-500 font-normal text-xs">(opsional)</span>
                </label>
                <textarea
                  id="form-notes"
                  rows={4}
                  placeholder="Contoh: Laptop saya tidak bisa menyala sejak kemarin. Sudah coba charge tapi tetap tidak ada reaksi..."
                  value={form.notes}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  className={`${inputBase} border-white/10 hover:border-white/20 resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="form-submit-wa"
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Kirim via WhatsApp
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                Dengan mengklik tombol di atas, Anda akan diarahkan ke WhatsApp
                dengan pesan yang sudah terformat otomatis.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
