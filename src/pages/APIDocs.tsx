import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Book, Key, Webhook } from "lucide-react";

const APIDocs = () => {
  const apiFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "RESTful API",
      description: "Comprehensive REST API with clear endpoints for all operations. Full OpenAPI specification available."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Authentication",
      description: "Secure API key authentication with scoped permissions and rate limiting."
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: "Webhooks",
      description: "Real-time event notifications via webhooks for seamless integrations."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Documentation",
      description: "Interactive API documentation with code examples in multiple languages."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">API Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Build powerful integrations with our comprehensive API
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {apiFeatures.map((feature, index) => (
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
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get started with our API in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-foreground">
{`// Example: Query your knowledge base
const response = await fetch('https://api.knowledgestack.ai/v1/query', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'What is our refund policy?',
    sources: true
  })
});

const data = await response.json();
console.log(data.answer);
console.log(data.sources);`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Full API documentation available in your dashboard
            </p>
            <a href="https://app.knowledgestack.ai" className="text-primary hover:underline">
              Access API Docs →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default APIDocs;

