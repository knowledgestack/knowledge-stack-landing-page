import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, ExternalLink, CheckCircle, X, ChevronRight, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const InteractiveDemo = () => {
  const { t } = useTranslation();
  const [selectedCitation, setSelectedCitation] = useState(1);
  
  const chatMessages = [
    {
      type: "user",
      content: t("interactiveDemo.chatMessage1")
    },
    {
      type: "assistant",
      content: t("interactiveDemo.chatMessage2")
    },
    {
      type: "user", 
      content: t("interactiveDemo.chatMessage3")
    },
    {
      type: "assistant",
      content: t("interactiveDemo.chatMessage4")
    }
  ];

  const citations = {
    1: {
      filename: t("interactiveDemo.citation1Filename"),
      status: "Verified",
      trust: 95,
      path: t("interactiveDemo.citation1Path"),
      sourceUrl: t("interactiveDemo.citation1SourceUrl"),
      text: t("interactiveDemo.citation1Text"),
      metadata: {
        updated: t("interactiveDemo.citation1Updated"),
        trustLevel: t("interactiveDemo.citation1TrustLevel"),
        pageRange: t("interactiveDemo.citation1PageRange")
      },
      relatedDocs: [
        { name: t("interactiveDemo.citation1RelatedDoc1Name"), status: "Pending", trust: 98 },
        { name: t("interactiveDemo.citation1RelatedDoc2Name"), status: "Verified", trust: 87 }
      ]
    },
    2: {
      filename: t("interactiveDemo.citation2Filename"), 
      status: "Verified",
      trust: 92,
      path: t("interactiveDemo.citation2Path"),
      sourceUrl: t("interactiveDemo.citation2SourceUrl"),
      text: t("interactiveDemo.citation2Text"),
      metadata: {
        updated: t("interactiveDemo.citation2Updated"),
        trustLevel: t("interactiveDemo.citation2TrustLevel"), 
        pageRange: t("interactiveDemo.citation2PageRange")
      },
      relatedDocs: [
        { name: t("interactiveDemo.citation2RelatedDoc1Name"), status: "Verified", trust: 94 },
        { name: t("interactiveDemo.citation2RelatedDoc2Name"), status: "Pending", trust: 89 }
      ]
    },
    3: {
      filename: t("interactiveDemo.citation3Filename"),
      status: "Source",
      trust: 88,
      path: t("interactiveDemo.citation3Path"), 
      sourceUrl: t("interactiveDemo.citation3SourceUrl"),
      text: t("interactiveDemo.citation3Text"),
      metadata: {
        updated: t("interactiveDemo.citation3Updated"),
        trustLevel: t("interactiveDemo.citation3TrustLevel"),
        pageRange: t("interactiveDemo.citation3PageRange")
      },
      relatedDocs: [
        { name: t("interactiveDemo.citation3RelatedDoc1Name"), status: "Verified", trust: 91 },
        { name: t("interactiveDemo.citation3RelatedDoc2Name"), status: "Verified", trust: 85 }
      ]
    }
  };

  const renderMessage = (message: { type: string; content: string }, index: number) => {
    if (message.type === "user") {
      return (
        <div key={index} className="flex justify-end mb-4">
          <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-md">
            <p className="text-sm">{message.content}</p>
          </div>
        </div>
      );
    }

    return (
      <div key={index} className="flex justify-start mb-4">
        <div className="bg-card border border-border rounded-lg px-4 py-2 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-xs font-medium text-muted-foreground">{t("interactiveDemo.aiAssistant")}</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            {message.content.split(/(\[cite:\d+\])/).map((part: string, i: number) => {
              if (part.match(/\[cite:\d+\]/)) {
                const citeNum = part.match(/\[cite:(\d+)\]/)?.[1];
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedCitation(parseInt(citeNum!))}
                    className={`inline-block px-1 py-0.5 mx-0.5 rounded text-xs font-medium transition-colors ${
                      selectedCitation === parseInt(citeNum!) 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-accent/20 text-accent hover:bg-accent/30'
                    }`}
                  >
                    {part}
                  </button>
                );
              }
              return part;
            })}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {t("interactiveDemo.title")}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t("interactiveDemo.traceability")}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("interactiveDemo.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* RAG Document Preview - left panel */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MessageSquare className="w-5 h-5 text-primary" />
                {t("interactiveDemo.ragPreview")}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{t("interactiveDemo.ragPreviewDesc")}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {chatMessages.map((message, index) => renderMessage(message, index))}
              </div>
            </CardContent>
          </Card>

          {/* Citation Explorer - right panel */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <FileText className="w-5 h-5 text-accent" />
                    {t("interactiveDemo.citationExplorer")} • {t("interactiveDemo.cite")} {selectedCitation}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{t("interactiveDemo.level")} 1</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs">
                    {t("interactiveDemo.fullHierarchy")}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {(() => {
                const citation = citations[selectedCitation as keyof typeof citations];
                return (
                  <div className="space-y-6">
                    {/* Document Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-foreground">
                          {citation.filename}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            citation.status === 'Verified' 
                              ? 'bg-accent/20 text-accent' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {citation.status === 'Verified' ? t("interactiveDemo.verified") : citation.status === 'Pending' ? t("interactiveDemo.pending") : t("interactiveDemo.source")}
                          </span>
                          <span className="text-sm font-medium text-accent">
                            {t("interactiveDemo.trust")}: {citation.trust}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        <div>{t("interactiveDemo.documentPath")}: {citation.path}</div>
                        <div>{t("interactiveDemo.sourceDocument")}: 
                          <a href={citation.sourceUrl} className="text-primary hover:underline ml-1">
                            {citation.sourceUrl}
                          </a>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-sm text-foreground italic">
                          "{citation.text}"
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                        <div>
                          <span className="font-medium">{t("interactiveDemo.updated")}:</span> {citation.metadata.updated}
                        </div>
                        <div>
                          <span className="font-medium">{t("interactiveDemo.trust")} Level:</span> {citation.metadata.trustLevel}
                        </div>
                        <div>
                          <span className="font-medium">{t("interactiveDemo.pageRange")}:</span> {citation.metadata.pageRange}
                        </div>
                      </div>

                      {/* Image Preview Placeholder */}
                      <div className="w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center">
                          <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">{t("interactiveDemo.documentPreview")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Related Documents */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">{t("interactiveDemo.relatedDocs")}</h4>
                      <div className="space-y-2">
                        {citation.relatedDocs.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-muted/20 rounded">
                            <div className="flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-foreground">{doc.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                doc.status === 'Verified' 
                                  ? 'bg-accent/20 text-accent' 
                                  : 'bg-orange-100 text-orange-800'
                              }`}>
                                {doc.status === 'Verified' ? t("interactiveDemo.verified") : doc.status === 'Pending' ? t("interactiveDemo.pending") : t("interactiveDemo.source")}
                              </span>
                              <span className="text-xs text-accent font-medium">
                                {doc.trust}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        {t("interactiveDemo.reportError")}
                      </Button>
                      <Button size="sm" className="flex-1">
                        {t("interactiveDemo.viewDocument")}
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        </div>

        {/* <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Try Interactive Demo
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default InteractiveDemo;