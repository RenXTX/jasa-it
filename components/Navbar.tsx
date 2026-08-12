"use client";

import { useState, useEffect } from "react";
import { Menu, X, Cpu, ArrowUpRight } from "lucide-react";
import { BRAND, WHATSAPP_NUMBER } from "@/lib/config";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Area Jangkauan", href: "#area" },
  { label: "Panggil Sekarang", href: "#pesan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20layanan%20IT%20panggilan.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-neutral-800/80 shadow-2xl shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-zinc-200 to-zinc-400 flex items-center justify-center shadow-lg shadow-white/10 group-hover:shadow-white/20 transition-all duration-300 group-hover:scale-105">
              <Cpu size={20} className="text-black stroke-[2.5]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-white text-base tracking-tight group-hover:text-zinc-200 transition-colors">
                {BRAND.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase mt-0.5">
                {BRAND.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-wa-cta"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Hubungi Kami
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="navbar-mobile-menu-toggle"
            className="md:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-2xl border-b border-neutral-800 px-4`}
      >
        <div className="py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-mobile-wa-cta"
              className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              Hubungi Kami via WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
