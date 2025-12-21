import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck, AlertCircle, CheckCircle2 } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SOC 2 Type II Certified",
      description: "We maintain SOC 2 Type II certification, ensuring the highest standards of security and compliance."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Access Control",
      description: "Role-based access control (RBAC) ensures users only access data they're authorized to view."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Audit Logging",
      description: "Comprehensive audit logs track all access and modifications for complete traceability."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Threat Detection",
      description: "Advanced threat detection and monitoring systems protect against security incidents."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Regular Security Audits",
      description: "We conduct regular third-party security audits and penetration testing."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Security Overview</h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade security built into every layer of our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          <Card className="max-w-4xl mx-auto border-border">
            <CardHeader>
              <CardTitle>Security Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Compliance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• SOC 2 Type II</li>
                    <li>• GDPR Compliant</li>
                    <li>• HIPAA Ready</li>
                    <li>• ISO 27001</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Protection</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AES-256 Encryption</li>
                    <li>• TLS 1.3 in Transit</li>
                    <li>• Regular Backups</li>
                    <li>• Data Residency Options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Security;

