import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg-subtle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div
  aria-hidden
  className="absolute inset-0"
  style={{
    backgroundImage: `
      radial-gradient(1200px 600px at 75% 10%, rgba(56,189,248,.16), transparent 60%),
      radial-gradient(900px 500px at 15% 85%, rgba(59,130,246,.10), transparent 65%),
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 27% 6%) 100%)
    `,
  }}
/>

{/* Isometric grid (subtle) */}
<div
  aria-hidden
  className="absolute inset-0 opacity-[.14] mix-blend-screen"
  style={{
    backgroundImage: `
      repeating-linear-gradient(60deg, rgba(255,255,255,.06) 0 1px, transparent 1px 28px),
      repeating-linear-gradient(-60deg, rgba(255,255,255,.06) 0 1px, transparent 1px 28px)
    `,
    // fade out toward edges to keep the headline super legible
    WebkitMaskImage:
      'radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)',
    maskImage:
      'radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)',
  }}
/>

{/* Sparse particles (very light) */}
<div
  aria-hidden
  className="absolute inset-0 opacity-[.08]"
  style={{
    backgroundImage: `
      radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.28) 50%, transparent 51%),
      radial-gradient(2px 2px at 70% 60%, rgba(255,255,255,.20) 50%, transparent 51%),
      radial-gradient(1.5px 1.5px at 35% 75%, rgba(255,255,255,.18) 50%, transparent 51%),
      radial-gradient(1.5px 1.5px at 85% 25%, rgba(255,255,255,.16) 50%, transparent 51%)
    `,
  }}
/>
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
          
          {/* Main Headline */}
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Knowledge You Can{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trust
            </span>
          </h1>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            {[
              "Multi-Level Source Traceability",
              "Mission-Critical Accuracy",
              "Enterprise Security",
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
    </section>
  );
};

export default Hero;
