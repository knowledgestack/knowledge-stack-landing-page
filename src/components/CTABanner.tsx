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
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Bring Trust Back to AI Answers
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
            Join leading enterprises who rely on Knowledge Stack for accurate, secure, and compliant AI insights.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              30-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              White-glove onboarding
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 h-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Start Free Trial
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-70">
            Trusted by 500+ enterprises • SOC2 Type II certified • 99.9% uptime SLA
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;