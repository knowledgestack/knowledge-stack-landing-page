import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Database, Users, Shield, Zap } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Answer Accuracy",
      description: "Verified by domain experts with source traceability"
    },
    {
      icon: Clock,
      value: "<2s",
      label: "Processing Time", 
      description: "From document upload to searchable chunks"
    },
    {
      icon: Database,
      value: "10k+",
      label: "Documents Processed",
      description: "Across audits, compliance, and engineering teams"
    },
    {
      icon: Users,
      value: "150+",
      label: "Expert Validations",
      description: "Domain experts improving our accuracy daily"
    },
    {
      icon: Shield,
      value: "Enterprise",
      label: "Security Ready",
      description: "Built with compliance frameworks in mind"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Processing",
      description: "Continuous document ingestion and enrichment"
    }
  ];

  const readinessIndicators = [
    { name: "SOC 2 Prep", status: "In Progress" },
    { name: "Enterprise Security", status: "Built-In" },
    { name: "Audit Trails", status: "Available" },
    { name: "Access Controls", status: "Configurable" }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Built for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mission-Critical
            </span>
            {" "}Accuracy
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Processing thousands of documents with expert-validated accuracy. 
            Ready for industries where precision matters most.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300 hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Readiness Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Enterprise Security Readiness
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {readinessIndicators.map((indicator, index) => (
              <div key={index} className="bg-background/50 border border-border rounded-lg p-4 text-center hover:border-accent/30 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-sm font-medium text-foreground">{indicator.name}</div>
                <div className="text-xs text-accent mt-1">{indicator.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Status */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/20 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            Processing documents • Expert validation active
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;