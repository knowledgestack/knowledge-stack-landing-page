import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      name: t("pricing.starter"),
      price: t("pricing.starterPrice"),
      period: t("pricing.starterPeriod"),
      description: t("pricing.starterDesc"),
      features: [
        t("pricing.starterFeature1"),
        t("pricing.starterFeature2"),
        t("pricing.starterFeature3"),
        t("pricing.starterFeature4"),
        t("pricing.starterFeature5")
      ]
    },
    {
      name: t("pricing.professional"),
      price: t("pricing.professionalPrice"),
      period: t("pricing.professionalPeriod"),
      description: t("pricing.professionalDesc"),
      features: [
        t("pricing.professionalFeature1"),
        t("pricing.professionalFeature2"),
        t("pricing.professionalFeature3"),
        t("pricing.professionalFeature4"),
        t("pricing.professionalFeature5"),
        t("pricing.professionalFeature6"),
        t("pricing.professionalFeature7")
      ],
      popular: true
    },
    {
      name: t("pricing.enterprise"),
      price: t("pricing.enterprisePrice"),
      period: "",
      description: t("pricing.enterpriseDesc"),
      features: [
        t("pricing.enterpriseFeature1"),
        t("pricing.enterpriseFeature2"),
        t("pricing.enterpriseFeature3"),
        t("pricing.enterpriseFeature4"),
        t("pricing.enterpriseFeature5"),
        t("pricing.enterpriseFeature6"),
        t("pricing.enterpriseFeature7"),
        t("pricing.enterpriseFeature8")
      ]
    }
  ];

  const handleGetStarted = () => {
    window.location.href = "https://app.knowledgestack.ai";
  };

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("pricing.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-border ${plan.popular ? "border-primary border-2" : ""}`}
              >
                <CardHeader>
                  {plan.popular && (
                    <div className="text-xs font-semibold text-primary mb-2">{t("pricing.popular")}</div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={handleGetStarted}
                  >
                    {t("common.getStarted")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              {t("pricing.helpText")}
            </p>
            <a href="/contact" className="text-primary hover:underline">
              {t("pricing.contactSales")}
            </a>
          </div>
    </ContentLayout>
  );
};

export default Pricing;

