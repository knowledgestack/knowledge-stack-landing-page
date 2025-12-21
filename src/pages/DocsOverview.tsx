import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  Play, 
  Upload, 
  Search, 
  FileText, 
  Database,
  Building2,
  Heart,
  Scale,
  Briefcase,
  GraduationCap,
  FileCheck,
  ExternalLink,
  Github,
  MessageSquare
} from "lucide-react";
import { useTranslation } from "react-i18next";

const DocsOverview = () => {
  const { t } = useTranslation();
  
  const quickStartItems = [
    {
      icon: <Code className="w-5 h-5" />,
      title: t("docsOverview.quickStart1Title"),
      description: t("docsOverview.quickStart1Desc"),
      link: "/api-docs"
    },
    {
      icon: <Play className="w-5 h-5" />,
      title: t("docsOverview.quickStart2Title"),
      description: t("docsOverview.quickStart2Desc"),
      link: "https://app.knowledgestack.ai",
      external: true
    }
  ];

  const coreAPIs = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: t("docsOverview.uploadTitle"),
      description: t("docsOverview.uploadDesc")
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("docsOverview.parseTitle"),
      description: t("docsOverview.parseDesc")
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t("docsOverview.chunkTitle"),
      description: t("docsOverview.chunkDesc")
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t("docsOverview.queryTitle"),
      description: t("docsOverview.queryDesc")
    }
  ];

  const useCases = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: t("docsOverview.useCase1Title"),
      description: t("docsOverview.useCase1Desc")
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: t("docsOverview.useCase2Title"),
      description: t("docsOverview.useCase2Desc")
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: t("docsOverview.useCase3Title"),
      description: t("docsOverview.useCase3Desc")
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: t("docsOverview.useCase4Title"),
      description: t("docsOverview.useCase4Desc")
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: t("docsOverview.useCase5Title"),
      description: t("docsOverview.useCase5Desc")
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: t("docsOverview.useCase6Title"),
      description: t("docsOverview.useCase6Desc")
    }
  ];

  const resources = [
    {
      title: t("docsOverview.resource1Title"),
      description: t("docsOverview.resource1Desc"),
      link: "/api-docs"
    },
    {
      title: t("docsOverview.resource2Title"),
      description: t("docsOverview.resource2Desc"),
      link: "/blog"
    },
    {
      title: t("docsOverview.resource3Title"),
      description: t("docsOverview.resource3Desc"),
      link: "https://github.com/knowledgestack",
      external: true
    },
    {
      title: t("docsOverview.resource4Title"),
      description: t("docsOverview.resource4Desc"),
      link: "/contact"
    }
  ];

  return (
    <ContentLayout>
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("docsOverview.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("docsOverview.subtitle")}
            </p>
          </div>

          {/* Get Started Quickly */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">{t("docsOverview.getStarted")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickStartItems.map((item, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="text-primary mb-2">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {item.external ? (
                      <Button 
                        variant="outline" 
                        asChild
                        className="w-full"
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {t("docsOverview.tryNow")} <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" asChild className="w-full">
                        <a href={item.link}>{t("common.getStarted")}</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core APIs */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">{t("docsOverview.coreAPIs")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("docsOverview.coreAPIsDesc")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreAPIs.map((api, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="text-primary mb-2">{api.icon}</div>
                    <CardTitle className="text-lg">{api.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {api.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What You Can Build */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">{t("docsOverview.whatYouCanBuild")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("docsOverview.whatYouCanBuildDesc")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{useCase.icon}</div>
                      <CardTitle className="text-base">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {useCase.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              {t("docsOverview.supportedFormats")} <a href="/features" className="text-primary hover:underline">{t("docsOverview.supportedFormatsLink")}</a>. 
              {t("docsOverview.caseStudies")} <a href="/blog" className="text-primary hover:underline">{t("docsOverview.caseStudiesLink")}</a>.
            </p>
          </div>

          {/* More Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t("docsOverview.moreResources")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {resource.description}
                    </CardDescription>
                    {resource.external ? (
                      <Button variant="link" asChild className="p-0 h-auto">
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          {t("common.learnMore")} <ExternalLink className="w-4 h-4 ml-2 inline" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="link" asChild className="p-0 h-auto">
                        <a href={resource.link}>{t("common.learnMore")}</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center pt-8 border-t">
            <p className="text-muted-foreground">
              {t("docsOverview.contactSupport")}{" "}
              <a href="mailto:support@knowledgestack.ai" className="text-primary hover:underline">
                support@knowledgestack.ai
              </a>
            </p>
          </div>
    </ContentLayout>
  );
};

export default DocsOverview;

