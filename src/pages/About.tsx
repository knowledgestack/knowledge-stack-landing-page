import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "To empower organizations with trusted, accurate knowledge that drives better decisions and outcomes."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "We believe security and privacy are fundamental rights, not optional features."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of what's possible with AI and knowledge management."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Your success is our success. We build products that solve real problems."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About Knowledge Stack</h1>
            <p className="text-xl text-muted-foreground">
              Building the future of enterprise knowledge management
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Knowledge Stack was founded with a simple mission: to make enterprise knowledge
                accessible, accurate, and trustworthy. In an era where information overload is
                the norm, we provide organizations with the tools they need to harness their
                collective knowledge effectively.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform combines cutting-edge AI technology with enterprise-grade security
                and compliance standards. We understand that when organizations rely on AI for
                critical decisions, accuracy and traceability aren't optional—they're essential.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, Knowledge Stack powers knowledge management for organizations across
                industries, from healthcare to finance, helping teams make better decisions
                faster while maintaining the highest standards of security and compliance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
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

export default About;

