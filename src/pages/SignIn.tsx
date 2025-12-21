import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Database } from "lucide-react";
import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    // Auto-redirect after a brief moment
    const timer = setTimeout(() => {
      window.location.href = "https://app.knowledgestack.ai";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignIn = () => {
    window.location.href = "https://app.knowledgestack.ai";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-md mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Sign In</CardTitle>
                <CardDescription>
                  Redirecting you to the Knowledge Stack application...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold">Enterprise Security</div>
                      <div className="text-muted-foreground">SOC 2 compliant</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold">Fast & Reliable</div>
                      <div className="text-muted-foreground">99.9% uptime SLA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold">Your Data, Your Control</div>
                      <div className="text-muted-foreground">Complete data sovereignty</div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSignIn}
                  className="w-full"
                  size="lg"
                >
                  Continue to App
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  You will be redirected automatically in a few seconds
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;

