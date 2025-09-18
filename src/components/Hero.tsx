import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg-subtle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/20 rounded-full text-sm font-medium text-foreground mb-8 animate-scale-in">
            <Shield className="w-4 h-4 text-accent" />
            Enterprise Ready
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Bring{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trust
            </span>
            {" "}Back to AI Answers
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Knowledge Stack transforms raw documents into verifiable insights with complete source traceability and continuous learning from your experts.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            {[
              "Complete Source Traceability",
              "Expert Validated Outputs",
              "Document → Chunk → Insight Flow",
              "Mission-Critical Accuracy"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent" />
                {benefit}
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary-dark transition-smooth group">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-2 hover:bg-secondary transition-smooth"
            >
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;