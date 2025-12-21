import Layout from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 15, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your computer or mobile device
                  when you visit a website. They are widely used to make websites work more
                  efficiently and provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your preferences and settings
                  </li>
                  <li>
                    <strong>Authentication Cookies:</strong> Keep you logged in securely
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  We may use third-party services that set cookies on your device. These services
                  help us analyze website usage and improve our services. We do not have control
                  over these third-party cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
                <p className="text-muted-foreground">
                  You can control and manage cookies in various ways. Please keep in mind that
                  removing or blocking cookies can impact your user experience and parts of our
                  website may no longer be fully accessible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us at{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    privacy@knowledgestack.ai
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

export default CookiePolicy;

