import HomeLayout from "@/layouts/HomeLayout";
import Hero from "@/components/Hero";
import IndustryShowcase from "@/components/IndustryShowcase";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechnicalPipeline from "@/components/TechnicalPipeline";
import InteractiveDemo from "@/components/InteractiveDemo";
import ExpertValidation from "@/components/ExpertValidation";
import DeploymentSection from "@/components/DeploymentSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <HomeLayout>
      <Hero />
      <IndustryShowcase />
      <ProblemSolution />
      <InteractiveDemo />
      <ExpertValidation />
      <TechnicalPipeline />
      <DeploymentSection />
      <FeaturesGrid />
      <TestimonialsSection />
    </HomeLayout>
  );
};

export default Index;
