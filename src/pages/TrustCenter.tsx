import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustCenter = () => {
  const { t } = useTranslation();
  
  const trustPillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("trustCenter.pillar1Title"),
      description: t("trustCenter.pillar1Desc")
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("trustCenter.pillar2Title"),
      description: t("trustCenter.pillar2Desc")
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: t("trustCenter.pillar3Title"),
      description: t("trustCenter.pillar3Desc")
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("trustCenter.pillar4Title"),
      description: t("trustCenter.pillar4Desc")
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: t("trustCenter.pillar5Title"),
      description: t("trustCenter.pillar5Desc")
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: t("trustCenter.pillar6Title"),
      description: t("trustCenter.pillar6Desc")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("trustCenter.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("trustCenter.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustPillars.map((pillar, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{pillar.icon}</div>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t("trustCenter.practicesTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t("trustCenter.practice1")}</li>
                  <li>• {t("trustCenter.practice2")}</li>
                  <li>• {t("trustCenter.practice3")}</li>
                  <li>• {t("trustCenter.practice4")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t("trustCenter.dataProtectionTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t("trustCenter.dataProtection1")}</li>
                  <li>• {t("trustCenter.dataProtection2")}</li>
                  <li>• {t("trustCenter.dataProtection3")}</li>
                  <li>• {t("trustCenter.dataProtection4")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
    </ContentLayout>
  );
};

export default TrustCenter;

