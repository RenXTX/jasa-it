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
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CoverageArea />
      <OrderForm />
      <Footer />
      <FloatingWAButton />
    </main>
  );
}
