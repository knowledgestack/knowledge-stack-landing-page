import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Database, Users, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const MetricsSection = () => {
  const { t } = useTranslation();
  
  const metrics = [
    {
      icon: TrendingUp,
      value: t("metrics.metric1Value"),
      label: t("metrics.metric1Label"),
      description: t("metrics.metric1Desc")
    },
    {
      icon: Clock,
      value: t("metrics.metric2Value"),
      label: t("metrics.metric2Label"), 
      description: t("metrics.metric2Desc")
    },
    {
      icon: Database,
      value: t("metrics.metric3Value"),
      label: t("metrics.metric3Label"),
      description: t("metrics.metric3Desc")
    },
    {
      icon: Users,
      value: t("metrics.metric4Value"),
      label: t("metrics.metric4Label"),
      description: t("metrics.metric4Desc")
    },
    {
      icon: Shield,
      value: t("metrics.metric5Value"),
      label: t("metrics.metric5Label"),
      description: t("metrics.metric5Desc")
    },
    {
      icon: Zap,
      value: t("metrics.metric6Value"),
      label: t("metrics.metric6Label"),
      description: t("metrics.metric6Desc")
    }
  ];

  const readinessIndicators = [
    { name: "SOC 2 Prep", status: "In Progress" },
    { name: "Enterprise Security", status: "Built-In" },
    { name: "Audit Trails", status: "Available" },
    { name: "Access Controls", status: "Configurable" }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {t("metrics.title")}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t("metrics.missionCritical")}
            </span>
            {" "}{t("metrics.accuracy")}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("metrics.subtitle")}
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300 hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;