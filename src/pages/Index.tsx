import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <BusinessSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
