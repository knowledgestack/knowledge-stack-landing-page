import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            See Knowledge Stack in Action
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Experience complete source traceability and expert-validated insights. 
            Transform your documents into a trustworthy knowledge base.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              30-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Expert validation included
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Complete source traceability
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary-dark transition-smooth group">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-2 hover:bg-secondary transition-smooth"
            >
              Start Free Trial
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-70">
            Trusted accuracy • Built for compliance • Future-ready security
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;