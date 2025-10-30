import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import CoreServices from "@/components/CoreServices";
import Process from "@/components/Process";
import OnboardingProcess from "@/components/OnboardingProcess";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ClientMarquee />
      <CoreServices />
      <Process />
      <OnboardingProcess />
      <TestimonialMarquee />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
