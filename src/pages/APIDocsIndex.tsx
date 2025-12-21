import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Book, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { API_VERSIONS, getCurrentVersion, getVersionInfo } from "@/lib/api-specs";
import { useTranslation } from "react-i18next";

const APIDocsIndex = () => {
  const { t } = useTranslation();
  const currentVersion = getCurrentVersion();

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("apiDocsIndex.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("apiDocsIndex.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 mb-12">
              {API_VERSIONS.map((version) => {
                const isCurrent = version.version === currentVersion;
                const statusBadge = version.status === 'current' ? (
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {t("apiDocsIndex.current")}
                  </Badge>
                ) : version.status === 'deprecated' ? (
                  <Badge variant="destructive">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {t("apiDocsIndex.deprecated")}
                  </Badge>
                ) : version.status === 'preview' ? (
                  <Badge variant="secondary">
                    {t("apiDocsIndex.preview")}
                  </Badge>
                ) : null;

                return (
                  <Card key={version.version} className="border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Code className="w-6 h-6 text-primary" />
                          <div>
                            <CardTitle className="text-2xl">{version.name}</CardTitle>
                            {version.description && (
                              <CardDescription className="text-base mt-1">
                                {version.description}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                        {statusBadge}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {version.releaseDate && (
                            <p>{t("apiDocsIndex.released")} {new Date(version.releaseDate).toLocaleDateString()}</p>
                          )}
                        </div>
                        <Button asChild>
                          <Link to={`/api-docs/${version.version}`}>
                            {t("apiDocsIndex.viewDocumentation")}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  {t("apiDocsIndex.quickStart")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("apiDocsIndex.quickStartDesc")}
                </p>
                <Button asChild variant="outline">
                  <Link to={`/api-docs/${getCurrentVersion()}`}>
                    {t("apiDocsIndex.getStartedWith")}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
    </ContentLayout>
  );
};

export default APIDocsIndex;

