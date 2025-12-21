import ContentLayout from "@/layouts/ContentLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Database } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();
  
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
    <ContentLayout>
      <div className="flex items-center min-h-[calc(100vh-200px)]">
          <div className="max-w-md mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">{t("signIn.title")}</CardTitle>
                <CardDescription>
                  {t("signIn.redirecting")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold">{t("signIn.enterpriseSecurity")}</div>
                      <div className="text-muted-foreground">{t("signIn.soc2Compliant")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold">{t("signIn.fastReliable")}</div>
                      <div className="text-muted-foreground">{t("signIn.uptimeSLA")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <div className="font-semibold">{t("signIn.yourData")}</div>
                      <div className="text-muted-foreground">{t("signIn.dataSovereignty")}</div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSignIn}
                  className="w-full"
                  size="lg"
                >
                  {t("signIn.continueToApp")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  {t("signIn.autoRedirect")}
                </p>
              </CardContent>
            </Card>
          </div>
      </div>
    </ContentLayout>
  );
};

export default SignIn;

