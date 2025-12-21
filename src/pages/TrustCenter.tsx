import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle2 } from "lucide-react";

const TrustCenter = () => {
  const trustPillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security measures protect your data at every layer."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy",
      description: "Your data is yours. We never use your content to train models."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description: "Clear policies and practices you can trust and verify."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Compliance",
      description: "Meeting the highest standards of regulatory compliance."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Incident Response",
      description: "Rapid response and clear communication in the event of security incidents."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime SLA with comprehensive monitoring and alerting."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Trust Center</h1>
            <p className="text-xl text-muted-foreground">
              Your trust is our foundation. Learn how we protect your data and maintain the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustPillars.map((pillar, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{pillar.icon}</div>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Security Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Regular security audits and penetration testing</li>
                  <li>• 24/7 security monitoring and threat detection</li>
                  <li>• Employee security training and background checks</li>
                  <li>• Bug bounty program for responsible disclosure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data encryption at rest and in transit</li>
                  <li>• Regular automated backups</li>
                  <li>• Data retention and deletion policies</li>
                  <li>• Data residency options for compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrustCenter;

