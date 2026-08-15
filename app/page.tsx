import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoverageArea from "@/components/CoverageArea";
import OrderForm from "@/components/OrderForm";
import FloatingWAButton from "@/components/FloatingWAButton";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col" itemScope itemType="https://schema.org/WebPage">
      {/* Hidden SEO anchor text for crawlers — keyword-rich region labels */}
      <span className="sr-only" itemProp="name">
        GO IT CILEUNGSI — Jasa IT Panggilan Cileungsi, Bekasi, Bogor, Depok, Jakarta
      </span>

      <Navbar />

      {/* Hero: Jasa IT Panggilan Cileungsi */}
      <HeroSection />

      {/* Layanan: Servis PC, Laptop, Jaringan, Rakit PC */}
      <ServicesSection />

      {/* Keunggulan Jasa IT Kami */}
      <WhyChooseUs />

      {/* Area Jangkauan: Cileungsi, Bekasi, Bogor, Depok, Jakarta */}
      <CoverageArea />

      {/* Formulir Pemesanan — Pesan Teknisi IT Sekarang */}
      <OrderForm />

      <Footer />
      <FloatingWAButton />
    </main>
  );
}
