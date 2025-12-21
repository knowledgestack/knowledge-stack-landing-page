import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Lock, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Compliance = () => {
  const { t } = useTranslation();
  
  const standards = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("compliance.standard1Title"),
      description: t("compliance.standard1Desc")
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("compliance.standard2Title"),
      description: t("compliance.standard2Desc")
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: t("compliance.standard3Title"),
      description: t("compliance.standard3Desc")
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("compliance.standard4Title"),
      description: t("compliance.standard4Desc")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("compliance.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("compliance.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {standards.map((standard, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{standard.icon}</div>
                  <CardTitle>{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {standard.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-border">
            <CardHeader>
              <CardTitle>{t("compliance.documentationTitle")}</CardTitle>
              <CardDescription>
                {t("compliance.documentationDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t("compliance.documentationText")}
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• {t("compliance.doc1")}</li>
                <li>• {t("compliance.doc2")}</li>
                <li>• {t("compliance.doc3")}</li>
                <li>• {t("compliance.doc4")}</li>
              </ul>
              <a href="/contact" className="text-primary hover:underline">
                {t("compliance.requestDoc")}
              </a>
            </CardContent>
          </Card>
    </ContentLayout>
  );
};

export default Compliance;

