import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 15, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Knowledge Stack, you agree to be bound by these Terms of
                  Service and all applicable laws and regulations. If you do not agree with any of
                  these terms, you are prohibited from using this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily use Knowledge Stack for personal or
                  commercial purposes. This license does not include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose without written consent</li>
                  <li>Attempting to reverse engineer any software</li>
                  <li>Removing any copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account and
                  password. You agree to accept responsibility for all activities that occur
                  under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">You may not use our service:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>In any way that violates any applicable law or regulation</li>
                  <li>To transmit any malicious code or harmful content</li>
                  <li>To impersonate or attempt to impersonate another user</li>
                  <li>To interfere with or disrupt the service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The service and its original content, features, and functionality are owned by
                  Knowledge Stack and are protected by international copyright, trademark, patent,
                  trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall Knowledge Stack be liable for any damages arising out of the
                  use or inability to use the service, including but not limited to direct,
                  indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    legal@knowledgestack.ai
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

