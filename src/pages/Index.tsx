import Hero from "@/components/Hero";
import TrustBrands from "@/components/TrustBrands";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustBrands />
      <About />
      <Reviews />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
