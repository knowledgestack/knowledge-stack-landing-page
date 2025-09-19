import { Database, Shield, Target, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Ingest Anything",
      description: "PDFs, spreadsheets, images, videos, and 50+ connectors. Our intelligent parsing understands structure and context.",
      benefits: ["Multi-format support", "Smart parsing", "Real-time sync", "API integrations"]
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with end-to-end encryption, granular access controls, and comprehensive audit logs.",
      benefits: ["Audit trails", "Tenant Level Isolation", "Deploy on own architecture"]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Accurate Answers",
      description: "Every response is grounded in your data with AI validation and confidence scoring.",
      benefits: ["Source verification", "Confidence scoring", "Fast Fact checking", "Answer validation"]
    },
    {
      icon: <Layers className="w-8 h-8 text-accent" />,
      title: "Scalable Architecture",
      description: "Handle millions of documents with enterprise-grade infrastructure, global CDN, and 99.9% uptime SLA.",
      benefits: ["Auto-scaling", "Global CDN", "99.9% uptime", "Load balancing"]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for <span className="text-primary">Enterprise</span> Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature designed with accuracy,security and scalability as core principles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth animate-scale-in border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;