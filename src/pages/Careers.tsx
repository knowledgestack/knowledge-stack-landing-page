import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t } = useTranslation();
  
  const openPositions = [
    {
      title: t("careers.position1"),
      location: t("careers.remote"),
      type: t("careers.fullTime"),
      department: t("careers.engineering"),
      description: t("careers.position1Description")
    },
    {
      title: t("careers.position2"),
      location: t("careers.remote"),
      type: t("careers.fullTime"),
      department: t("careers.engineering"),
      description: t("careers.position2Description")
    },
    {
      title: t("careers.position3"),
      location: t("careers.remote"),
      type: t("careers.fullTime"),
      department: t("careers.engineering"),
      description: t("careers.position3Description")
    },
    {
      title: t("careers.position4"),
      location: t("careers.remote"),
      type: t("careers.fullTime"),
      department: t("careers.sales"),
      description: t("careers.position4Description")
    }
  ];

  const benefits = [
    t("careers.benefit1"),
    t("careers.benefit2"),
    t("careers.benefit3"),
    t("careers.benefit4"),
    t("careers.benefit5"),
    t("careers.benefit6")
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("careers.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("careers.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose max-w-none mb-12">
              <p className="text-lg text-muted-foreground">
                {t("careers.intro")}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t("careers.openPositions")}</h2>
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription className="flex flex-wrap gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {position.type}
                            </span>
                          </CardDescription>
                        </div>
                        <Button variant="outline">{t("careers.apply")}</Button>
                      </div>
                    </CardHeader>
                    {position.description && (
                      <CardContent>
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                          <p>{position.description}</p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t("careers.benefitsTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              {t("careers.noRole")}
            </p>
            <a href="/contact" className="text-primary hover:underline">
              {t("careers.getInTouch")}
            </a>
          </div>
    </ContentLayout>
  );
};

export default Careers;

