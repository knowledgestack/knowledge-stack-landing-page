import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Database, Search, Lock, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: t("features.feature1Title"),
      description: t("features.feature1Desc")
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("features.feature2Title"),
      description: t("features.feature2Desc")
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("features.feature3Title"),
      description: t("features.feature3Desc")
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t("features.feature4Title"),
      description: t("features.feature4Desc")
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("features.feature5Title"),
      description: t("features.feature5Desc")
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("features.feature6Title"),
      description: t("features.feature6Desc")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("features.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </ContentLayout>
  );
};

export default Features;

