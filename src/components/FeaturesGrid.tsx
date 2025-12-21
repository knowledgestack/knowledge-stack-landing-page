import { Database, Shield, Target, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const FeaturesGrid = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: t("featuresGrid.ingestTitle"),
      description: t("featuresGrid.ingestDesc"),
      benefits: [
        t("featuresGrid.ingestBenefit1"),
        t("featuresGrid.ingestBenefit2"),
        t("featuresGrid.ingestBenefit3"),
        t("featuresGrid.ingestBenefit4")
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: t("featuresGrid.secureTitle"),
      description: t("featuresGrid.secureDesc"),
      benefits: [
        t("featuresGrid.secureBenefit1"),
        t("featuresGrid.secureBenefit2"),
        t("featuresGrid.secureBenefit3")
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-accent"  />,
      title: t("featuresGrid.scalableTitle"),
      description: t("featuresGrid.scalableDesc"),
      benefits: [
        t("featuresGrid.scalableBenefit1"),
        t("featuresGrid.scalableBenefit2"),
        t("featuresGrid.scalableBenefit3"),
        t("featuresGrid.scalableBenefit4")
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: t("featuresGrid.accurateTitle"),
      description: t("featuresGrid.accurateDesc"),
      benefits: [
        t("featuresGrid.accurateBenefit1"),
        t("featuresGrid.accurateBenefit2"),
        t("featuresGrid.accurateBenefit3"),
        t("featuresGrid.accurateBenefit4")
      ]
    },
    
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("featuresGrid.title")} <span className="text-primary">{t("featuresGrid.enterprise")}</span> {t("featuresGrid.scale")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("featuresGrid.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth animate-scale-in border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;