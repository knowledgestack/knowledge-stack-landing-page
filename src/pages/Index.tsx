import Hero from "@/components/Hero";
import AgenticValueProp from "@/components/AgenticValueProp";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechnicalPipeline from "@/components/TechnicalPipeline";
import InteractiveDemo from "@/components/InteractiveDemo";
import ExpertValidation from "@/components/ExpertValidation";
import DeploymentSection from "@/components/DeploymentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      {/* Global gradient overlay for smooth transitions */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(1200px 600px at 75% 10%, rgba(56,189,248,.08), transparent 60%),
            radial-gradient(900px 500px at 15% 85%, rgba(59,130,246,.05), transparent 65%),
            linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.02) 50%, transparent 100%)
          `,
        }}
      />
      
      <Hero />
      <AgenticValueProp />
      <ProblemSolution />
      <InteractiveDemo />
      <ExpertValidation />
      <TechnicalPipeline />
      <DeploymentSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
