import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValueSection } from "@/components/ValueSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <AboutSection />
      <FeaturesSection />
      <GallerySection />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
