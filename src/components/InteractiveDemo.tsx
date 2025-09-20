import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, ExternalLink, CheckCircle, X, ChevronRight, Shield, Clock } from "lucide-react";
import { useState } from "react";

const InteractiveDemo = () => {
  const [selectedCitation, setSelectedCitation] = useState(1);
  
  const chatMessages = [
    {
      type: "user",
      content: "What are the key ethical considerations when developing AI systems?"
    },
    {
      type: "assistant",
      content: "First, ensuring fairness and preventing bias is paramount [cite:1]. AI systems can inadvertently perpetuate or amplify existing societal biases [cite:2], so developers must implement robust testing and validation processes. Second, transparency and explainability are essential for building trust and enabling accountability [cite:1]. Users should understand how AI systems make decisions that affect them. Finally, establishing proper governance frameworks with multi-stakeholder involvement helps ensure responsible development and deployment [cite:3]."
    },
    {
      type: "user", 
      content: "Can you elaborate on the transparency aspect?"
    },
    {
      type: "assistant",
      content: "Transparency in AI systems involves multiple layers of openness and explainability [cite:1]. At the technical level, this means making algorithms interpretable and providing clear explanations for decisions. At the organizational level, it involves being open about data sources, model limitations, and potential risks. This transparency is crucial for enabling meaningful human oversight and maintaining public trust in AI systems."
    }
  ];

  const citations = {
    1: {
      filename: "research-paper-ai-ethics.pdf",
      status: "Verified",
      trust: 95,
      path: "/research/ai-ethics/papers/2024",
      sourceUrl: "https://example.com/research-paper-ai-ethics.pdf",
      text: "Artificial intelligence systems must be designed with ethical considerations at their core. This includes ensuring fairness, transparency, and accountability in AI decision-making processes.",
      metadata: {
        updated: "2024-01-15 14:30:00",
        trustLevel: "95%",
        pageRange: "15-17"
      },
      relatedDocs: [
        { name: "ieee-ai-standards.pdf", status: "Pending", trust: 98 },
        { name: "philosophy-of-ai.pdf", status: "Verified", trust: 87 }
      ]
    },
    2: {
      filename: "ai-bias-study-2024.pdf", 
      status: "Verified",
      trust: 92,
      path: "/research/bias-studies/2024",
      sourceUrl: "https://example.com/ai-bias-study-2024.pdf",
      text: "Bias in AI systems often stems from training data that reflects historical inequalities. Comprehensive bias testing across demographic groups is essential for fair AI deployment.",
      metadata: {
        updated: "2024-01-10 09:15:00",
        trustLevel: "92%", 
        pageRange: "8-12"
      },
      relatedDocs: [
        { name: "fairness-metrics.pdf", status: "Verified", trust: 94 },
        { name: "demographic-analysis.pdf", status: "Pending", trust: 89 }
      ]
    },
    3: {
      filename: "ai-governance-framework.pdf",
      status: "Source",
      trust: 88,
      path: "/governance/frameworks/2024", 
      sourceUrl: "https://example.com/ai-governance-framework.pdf",
      text: "Effective AI governance requires clear policies, stakeholder involvement, and regular audits. Multi-stakeholder frameworks ensure diverse perspectives in AI development.",
      metadata: {
        updated: "2024-01-05 16:45:00",
        trustLevel: "88%",
        pageRange: "22-25"
      },
      relatedDocs: [
        { name: "policy-guidelines.pdf", status: "Verified", trust: 91 },
        { name: "audit-procedures.pdf", status: "Verified", trust: 85 }
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
            <span className="text-xs font-medium text-muted-foreground">AI Assistant</span>
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Complete Source
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Traceability
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Click on any citation to explore its source. Every insight is grounded in your original documents with complete traceability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* RAG Document Preview - left panel */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MessageSquare className="w-5 h-5 text-primary" />
                RAG Document Preview
              </CardTitle>
              <p className="text-sm text-muted-foreground">Explore source citations and content generation.</p>
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
                    Citation Explorer • Cite {selectedCitation}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Level 1</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs">
                    ∑ Full Hierarchy
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
                            {citation.status}
                          </span>
                          <span className="text-sm font-medium text-accent">
                            Trust: {citation.trust}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        <div>Document Path: {citation.path}</div>
                        <div>Source Document: 
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
                          <span className="font-medium">Updated:</span> {citation.metadata.updated}
                        </div>
                        <div>
                          <span className="font-medium">Trust Level:</span> {citation.metadata.trustLevel}
                        </div>
                        <div>
                          <span className="font-medium">Page Range:</span> {citation.metadata.pageRange}
                        </div>
                      </div>

                      {/* Image Preview Placeholder */}
                      <div className="w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center">
                          <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Document Preview</p>
                        </div>
                      </div>
                    </div>

                    {/* Related Documents */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Created From</h4>
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
                                {doc.status}
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
                        Report Error
                      </Button>
                      <Button size="sm" className="flex-1">
                        View Document
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