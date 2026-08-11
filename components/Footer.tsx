"use client";

import { Cpu, Globe, MessageCircle } from "lucide-react";
import { BRAND, WHATSAPP_NUMBER } from "@/lib/config";

const footerLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Area Jangkauan", href: "#area" },
  { label: "Pesan Sekarang", href: "#pesan" },
];

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070C18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                <Cpu size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base">{BRAND.name}</span>
                <span className="text-[10px] text-[#25D366] font-medium tracking-widest uppercase">
                  {BRAND.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Solusi IT profesional dengan teknisi berpengalaman yang langsung
              datang ke lokasi Anda. Cepat, terpercaya, dan bergaransi.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-wa-link"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-400/20 transition-all duration-200"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#25D366] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Jam Operasional
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#25D366] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">Senin – Sabtu</p>
                  <p className="text-xs text-slate-400">08.00 – 20.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">Minggu</p>
                  <p className="text-xs text-slate-400">09.00 – 17.00 WIB</p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-[#25D366]/5 border border-[#25D366]/15">
                <p className="text-xs text-slate-300">
                  💬 Di luar jam operasional? Kirim pesan WA dan kami akan
                  merespons sesegera mungkin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {year} {BRAND.fullName}. Hak cipta dilindungi.
            </p>
            <p className="text-xs text-yellow-300 text-center sm:text-right max-w-sm">
              Disclaimer: Harga dapat berubah tergantung kondisi perangkat.
              Estimasi biaya final diberikan setelah teknisi melakukan diagnosa
              on-site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
