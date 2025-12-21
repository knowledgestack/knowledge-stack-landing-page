import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, XCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Status = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      name: t("status.api"),
      status: "operational",
      description: t("status.allNormal")
    },
    {
      name: t("status.webApp"),
      status: "operational",
      description: t("status.allNormal")
    },
    {
      name: t("status.database"),
      status: "operational",
      description: t("status.allNormal")
    },
    {
      name: t("status.authentication"),
      status: "operational",
      description: t("status.allNormal")
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "outage":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return t("status.operational");
      case "degraded":
        return t("status.degraded");
      case "outage":
        return t("status.outage");
      default:
        return t("status.unknown");
    }
  };

  return (
    <ContentLayout>
      <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">{t("status.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("status.subtitle")}
              </p>
            </div>

            <Card className="mb-6 border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <div>
                    <CardTitle>{t("status.allOperational")}</CardTitle>
                    <CardDescription>{t("status.allNormal")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription>{getStatusText(service.status)}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-border">
              <CardHeader>
                <CardTitle>{t("status.subscribeTitle")}</CardTitle>
                <CardDescription>
                  {t("status.subscribeDesc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("status.subscribeText")}
                </p>
                <a href="/contact" className="text-primary hover:underline">
                  {t("status.contactSubscribe")}
                </a>
              </CardContent>
            </Card>
      </div>
    </ContentLayout>
  );
};

export default Status;

