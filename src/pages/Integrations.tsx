import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, Cloud, Code, Mail, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Integrations = () => {
  const { t } = useTranslation();
  
  const integrations = [
    {
      icon: <Database className="w-6 h-6" />,
      title: t("integrations.integration1Title"),
      description: t("integrations.integration1Desc")
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("integrations.integration2Title"),
      description: t("integrations.integration2Desc")
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: t("integrations.integration3Title"),
      description: t("integrations.integration3Desc")
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t("integrations.integration4Title"),
      description: t("integrations.integration4Desc")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("integrations.integration5Title"),
      description: t("integrations.integration5Desc")
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t("integrations.integration6Title"),
      description: t("integrations.integration6Desc")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("integrations.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("integrations.subtitle")}
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
              {t("integrations.customIntegration")}
            </p>
            <a href="/contact" className="text-primary hover:underline">
              {t("integrations.contactTeam")}
            </a>
          </div>
    </ContentLayout>
  );
};

export default Integrations;

