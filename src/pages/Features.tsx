import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Database, Search, Lock, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Complete Source Traceability",
      description: "Every answer includes full source citations, allowing you to verify information and trace back to original documents."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption, role-based access control, and comprehensive audit logs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Mission-Critical Accuracy",
      description: "Advanced AI models trained specifically for knowledge work, ensuring reliable and accurate responses."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Built to handle enterprise-scale workloads with automatic scaling and high availability."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Privacy",
      description: "Your data stays yours. We never use your content to train models, ensuring complete data sovereignty."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard to track usage, performance, and knowledge gaps."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Features</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to build a trusted knowledge hub for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;

