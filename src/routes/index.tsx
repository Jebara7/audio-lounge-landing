import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Audio Lounge — Professionele Podcast Studio" },
      { name: "description", content: "High-end podcast studio met professionele audio, video en volledige begeleiding. Boek vandaag nog jouw sessie." },
      { property: "og:title", content: "The Audio Lounge — Professionele Podcast Studio" },
      { property: "og:description", content: "Neem je podcast op als een professional in onze high-end studio." },
    ],
  }),
});

function Index() {
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
