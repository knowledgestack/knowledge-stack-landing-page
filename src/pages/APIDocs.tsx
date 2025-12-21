import ContentLayout from "@/layouts/ContentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Book, Key, Webhook } from "lucide-react";
import { useTranslation } from "react-i18next";

const APIDocs = () => {
  const { t } = useTranslation();
  
  const apiFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: t("apiDocs.feature1Title"),
      description: t("apiDocs.feature1Desc")
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: t("apiDocs.feature2Title"),
      description: t("apiDocs.feature2Desc")
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: t("apiDocs.feature3Title"),
      description: t("apiDocs.feature3Desc")
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: t("apiDocs.feature4Title"),
      description: t("apiDocs.feature4Desc")
    }
  ];

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t("apiDocs.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("apiDocs.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-border">
            <CardHeader>
              <CardTitle>{t("apiDocs.quickStart")}</CardTitle>
              <CardDescription>{t("apiDocs.quickStartDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-foreground">
{`// Example: Query your knowledge base
const response = await fetch('https://api.knowledgestack.ai/v1/query', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'What is our refund policy?',
    sources: true
  })
});

const data = await response.json();
console.log(data.answer);
console.log(data.sources);`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {t("apiDocs.fullDocs")}
            </p>
            <a href="https://app.knowledgestack.ai" className="text-primary hover:underline">
              {t("apiDocs.accessDocs")}
            </a>
          </div>
    </ContentLayout>
  );
};

export default APIDocs;

