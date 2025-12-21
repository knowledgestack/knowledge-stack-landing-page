import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Lock, Globe } from "lucide-react";

const Compliance = () => {
  const standards = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SOC 2 Type II",
      description: "We maintain SOC 2 Type II certification, demonstrating our commitment to security, availability, and confidentiality."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "GDPR",
      description: "Fully compliant with GDPR requirements, ensuring the privacy and protection of EU citizens' data."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "HIPAA Ready",
      description: "Our platform meets HIPAA requirements for healthcare organizations handling protected health information."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "ISO 27001",
      description: "ISO 27001 certified information security management system ensures comprehensive security controls."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Compliance</h1>
            <p className="text-xl text-muted-foreground">
              Meeting the highest standards of regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {standards.map((standard, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{standard.icon}</div>
                  <CardTitle>{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {standard.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-border">
            <CardHeader>
              <CardTitle>Compliance Documentation</CardTitle>
              <CardDescription>
                Request compliance documentation and reports for your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We provide comprehensive compliance documentation including:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• SOC 2 Type II reports</li>
                <li>• Security questionnaires</li>
                <li>• Data processing agreements</li>
                <li>• Compliance certifications</li>
              </ul>
              <a href="/contact" className="text-primary hover:underline">
                Contact us to request documentation →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Compliance;

