import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const GDPR = () => {
  const rights = [
    "Right to access your personal data",
    "Right to rectification of inaccurate data",
    "Right to erasure ('right to be forgotten')",
    "Right to restrict processing",
    "Right to data portability",
    "Right to object to processing",
    "Rights related to automated decision-making"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">GDPR Compliance</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 15, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8 mb-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  Knowledge Stack is fully compliant with the General Data Protection Regulation
                  (GDPR). We are committed to protecting the privacy and rights of all individuals,
                  particularly those in the European Union.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
                <p className="text-muted-foreground mb-4">
                  As a data subject, you have the following rights:
                </p>
              </section>
            </div>

            <Card className="mb-8 border-border">
              <CardHeader>
                <CardTitle>Your GDPR Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {rights.map((right, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{right}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
                <p className="text-muted-foreground">
                  We process personal data only for specified, explicit, and legitimate purposes.
                  We ensure that data processing is lawful, fair, and transparent. We implement
                  appropriate technical and organizational measures to ensure data security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Protection Officer</h2>
                <p className="text-muted-foreground">
                  We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance.
                  You can contact our DPO at{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    dpo@knowledgestack.ai
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Exercising Your Rights</h2>
                <p className="text-muted-foreground">
                  To exercise any of your GDPR rights, please contact us at{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    privacy@knowledgestack.ai
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GDPR;

