import { Shield, Server, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DeploymentSection = () => {
  const deploymentFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built with security-first architecture and enterprise-grade data protection",
      highlight: "SOC 2 Ready"
    },
    {
      icon: Server,
      title: "No Model Training",
      description: "Your data never leaves your environment or gets used for training AI models",
      highlight: "Data Privacy Guaranteed"
    },
    {
      icon: Lock,
      title: "On-Premise Deployment",
      description: "Deploy Knowledge Stack entirely within your infrastructure for maximum control",
      highlight: "Air-Gapped Option Available"
    }
  ];

  const securityChecks = [
    "Zero data retention policy",
    "End-to-end encryption",
    "Role-based access controls", 
    "Audit trail logging",
    "Compliance framework ready",
    "Private cloud deployment"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Deploy With{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Complete Control
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Choose how and where you deploy Knowledge Stack. Your data, your infrastructure, your rules.
            </p>
          </div>

          {/* Deployment Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {deploymentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:border-accent/30 animate-fade-in border-border" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-light border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
                      <CheckCircle className="w-3 h-3" />
                      {feature.highlight}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Security Checklist */}
          <div className="bg-card/50 border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Security & Compliance Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityChecks.map((check, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{check}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Options */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              From cloud-native SaaS to fully air-gapped on-premise installations, 
              Knowledge Stack adapts to your security and compliance requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-medium transition-smooth">
                Discuss Deployment Options
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full font-medium transition-smooth">
                Security Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;