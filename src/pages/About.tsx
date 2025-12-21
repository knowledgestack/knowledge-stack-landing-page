import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("about.mission"),
      description: t("about.missionDescription")
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("about.securityFirst"),
      description: t("about.securityDescription")
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("about.innovation"),
      description: t("about.innovationDescription")
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("about.customerFocus"),
      description: t("about.customerDescription")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("about.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                {t("about.paragraph1")}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {t("about.paragraph2")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("about.paragraph3")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
    </ContentLayout>
  );
};

export default About;

