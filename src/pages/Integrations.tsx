import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, Cloud, Code, Mail, Calendar } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Connectors",
      description: "Connect to PostgreSQL, MySQL, MongoDB, and more. Sync your data automatically."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Storage",
      description: "Integrate with Google Drive, Dropbox, SharePoint, and other document management systems."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Platforms",
      description: "Native integrations with AWS, Azure, and GCP for seamless cloud deployments."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API & Webhooks",
      description: "RESTful API and webhook support for custom integrations and automation."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Communication Tools",
      description: "Slack, Microsoft Teams, and email integrations for seamless collaboration."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "CRM & Productivity",
      description: "Connect with Salesforce, HubSpot, Notion, and other productivity tools."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Integrations</h1>
            <p className="text-xl text-muted-foreground">
              Connect Knowledge Stack with your existing tools and workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{integration.icon}</div>
                  <CardTitle>{integration.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {integration.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom integration? We're here to help.
            </p>
            <a href="/contact" className="text-primary hover:underline">
              Contact our team →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Integrations;

