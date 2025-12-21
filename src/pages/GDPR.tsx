import LegalLayout from "@/layouts/LegalLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const GDPR = () => {
  const { t } = useTranslation();
  
  const rights = [
    t("gdpr.right1"),
    t("gdpr.right2"),
    t("gdpr.right3"),
    t("gdpr.right4"),
    t("gdpr.right5"),
    t("gdpr.right6"),
    t("gdpr.right7")
  ];

  return (
    <LegalLayout>
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("gdpr.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("gdpr.lastUpdated")}</p>

            <div className="prose max-w-none space-y-8 mb-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("gdpr.commitmentTitle")}</h2>
                <p className="text-muted-foreground">
                  {t("gdpr.commitmentText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("gdpr.rightsTitle")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("gdpr.rightsText")}
                </p>
              </section>
            </div>

            <Card className="mb-8 border-border">
              <CardHeader>
                <CardTitle>{t("gdpr.rightsCardTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {rights.map((right, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{right}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="prose max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("gdpr.processingTitle")}</h2>
                <p className="text-muted-foreground">
                  {t("gdpr.processingText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("gdpr.exercisingTitle")}</h2>
                <p className="text-muted-foreground">
                  {t("gdpr.exercisingText")}{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    privacy@knowledgestack.ai
                  </a>
                  . {t("gdpr.responseTime")}
                </p>
              </section>
            </div>
    </LegalLayout>
  );
};

export default GDPR;

