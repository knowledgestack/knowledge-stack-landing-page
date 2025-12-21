import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Security = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("security.feature1Title"),
      description: t("security.feature1Desc")
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("security.feature2Title"),
      description: t("security.feature2Desc")
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: t("security.feature3Title"),
      description: t("security.feature3Desc")
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: t("security.feature4Title"),
      description: t("security.feature4Desc")
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: t("security.feature5Title"),
      description: t("security.feature5Desc")
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: t("security.feature6Title"),
      description: t("security.feature6Desc")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("security.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("security.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
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
              <CardTitle>{t("security.certificationsTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">{t("security.compliance")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("security.compliance1")}</li>
                    <li>• {t("security.compliance2")}</li>
                    <li>• {t("security.compliance3")}</li>
                    <li>• {t("security.compliance4")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t("security.dataProtection")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("security.dataProtection1")}</li>
                    <li>• {t("security.dataProtection2")}</li>
                    <li>• {t("security.dataProtection3")}</li>
                    <li>• {t("security.dataProtection4")}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
    </ContentLayout>
  );
};

export default Security;

