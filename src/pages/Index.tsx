import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechnicalPipeline from "@/components/TechnicalPipeline";
import InteractiveDemo from "@/components/InteractiveDemo";
import TestimonialsSection from "@/components/TestimonialsSection";
import MetricsSection from "@/components/MetricsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <FeaturesGrid />
      <TechnicalPipeline />
      <InteractiveDemo />
      <TestimonialsSection />
      <MetricsSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
