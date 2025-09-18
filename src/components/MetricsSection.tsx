import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Database, Globe } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      value: "99.9%",
      label: "Uptime SLA",
      description: "Enterprise-grade reliability"
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      value: "1M+",
      label: "Documents/sec",
      description: "Processing capability"
    },
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      value: "50+",
      label: "Integrations",
      description: "Data source connectors"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      value: "SOC2",
      label: "Type II",
      description: "Security compliance"
    }
  ];

  const complianceBadges = [
    { name: "SOC2 Type II", status: "Certified" },
    { name: "ISO 27001", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "HIPAA", status: "Ready" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Performance & <span className="text-primary">Security</span> Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure with the security and compliance you need
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center group hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-bounce">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="bg-secondary/50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Security & Compliance Certifications
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {complianceBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div className="font-semibold text-foreground">
                  {badge.name}
                </div>
                <div className="text-sm text-accent font-medium">
                  {badge.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Status */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/20 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            All systems operational • Last updated: 2 minutes ago
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;