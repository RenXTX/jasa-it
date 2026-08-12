"use client";

import { Cpu, Globe, MessageCircle, ArrowUpRight } from "lucide-react";
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
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-zinc-200 to-zinc-500 flex items-center justify-center shadow-md shadow-white/10">
                <Cpu size={20} className="text-black stroke-[2.5]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-base">{BRAND.name}</span>
                <span className="text-[10px] text-zinc-400 font-semibold tracking-widest uppercase mt-0.5">
                  {BRAND.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Solusi IT profesional on-site untuk rumah dan kantor Anda. Teknisi berpengalaman, bergaransi, dan harga transparan.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-wa-link"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-zinc-400 hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all duration-200"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-transparent transition-all duration-200"
              >
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-5">
              Jam Operasional
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white mt-1.5 flex-shrink-0 shadow-sm shadow-white/50" />
                <div>
                  <p className="text-sm text-white font-semibold">Senin – Sabtu</p>
                  <p className="text-xs text-zinc-500 mt-0.5">08.00 – 20.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-500 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-semibold">Minggu</p>
                  <p className="text-xs text-zinc-500 mt-0.5">09.00 – 17.00 WIB</p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-neutral-950 border border-neutral-900">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  💬 Kirim pesan WA di luar jam operasional — kami akan merespons sesegera mungkin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600 text-center sm:text-left">
              © {year} {BRAND.fullName}. Hak cipta dilindungi undang-undang.
            </p>
            <p className="text-xs text-yellow-400 text-center sm:text-right max-w-sm">
              Estimasi biaya final diberikan setelah teknisi melakukan diagnosa on-site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
