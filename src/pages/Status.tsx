import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, XCircle, Clock } from "lucide-react";

const Status = () => {
  const services = [
    {
      name: "API",
      status: "operational",
      description: "All systems operational"
    },
    {
      name: "Web Application",
      status: "operational",
      description: "All systems operational"
    },
    {
      name: "Database",
      status: "operational",
      description: "All systems operational"
    },
    {
      name: "Authentication",
      status: "operational",
      description: "All systems operational"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "outage":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "degraded":
        return "Degraded Performance";
      case "outage":
        return "Outage";
      default:
        return "Unknown";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">Status Page</h1>
              <p className="text-xl text-muted-foreground">
                Real-time status of Knowledge Stack services
              </p>
            </div>

            <Card className="mb-6 border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <div>
                    <CardTitle>All Systems Operational</CardTitle>
                    <CardDescription>All services are running normally</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription>{getStatusText(service.status)}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-border">
              <CardHeader>
                <CardTitle>Subscribe to Updates</CardTitle>
                <CardDescription>
                  Get notified when there are incidents or scheduled maintenance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to receive email notifications about service status updates.
                </p>
                <a href="/contact" className="text-primary hover:underline">
                  Contact us to subscribe →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Status;

