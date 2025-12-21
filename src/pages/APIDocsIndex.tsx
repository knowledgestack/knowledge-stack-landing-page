import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Book, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { API_VERSIONS, getCurrentVersion, getVersionInfo } from "@/lib/api-specs";

const APIDocsIndex = () => {
  const currentVersion = getCurrentVersion();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">API Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Choose an API version to view detailed documentation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 mb-12">
              {API_VERSIONS.map((version) => {
                const isCurrent = version.version === currentVersion;
                const statusBadge = version.status === 'current' ? (
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Current
                  </Badge>
                ) : version.status === 'deprecated' ? (
                  <Badge variant="destructive">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Deprecated
                  </Badge>
                ) : version.status === 'preview' ? (
                  <Badge variant="secondary">
                    Preview
                  </Badge>
                ) : null;

                return (
                  <Card key={version.version} className="border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Code className="w-6 h-6 text-primary" />
                          <div>
                            <CardTitle className="text-2xl">{version.name}</CardTitle>
                            {version.description && (
                              <CardDescription className="text-base mt-1">
                                {version.description}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                        {statusBadge}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {version.releaseDate && (
                            <p>Released: {new Date(version.releaseDate).toLocaleDateString()}</p>
                          )}
                        </div>
                        <Button asChild>
                          <Link to={`/api-docs/${version.version}`}>
                            View Documentation
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  New to our API? Start with the {getCurrentVersion()} documentation to get up and running quickly.
                </p>
                <Button asChild variant="outline">
                  <Link to={`/api-docs/${getCurrentVersion()}`}>
                    Get Started with {getCurrentVersion()}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default APIDocsIndex;

