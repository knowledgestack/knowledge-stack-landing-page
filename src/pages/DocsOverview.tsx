import Layout from "@/components/Layout";
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

const DocsOverview = () => {
  const quickStartItems = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "API Quickstart",
      description: "Make your first API call in minutes. Step-by-step instructions with sample requests and responses.",
      link: "/api-docs"
    },
    {
      icon: <Play className="w-5 h-5" />,
      title: "Studio Playground",
      description: "Try Knowledge Stack in your browser. Upload documents, query knowledge bases, and see results instantly.",
      link: "https://app.knowledgestack.ai",
      external: true
    }
  ];

  const coreAPIs = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Upload",
      description: "Upload documents to your knowledge base. Supports PDFs, Word docs, spreadsheets, and more."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Parse",
      description: "Convert documents into structured text, tables, and figures—the foundation for RAG."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Chunk",
      description: "Intelligently break large documents into semantic chunks while preserving context."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Query",
      description: "Search and retrieve information from your knowledge base with source citations."
    }
  ];

  const useCases = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Financial",
      description: "Bank statements, company reports, transaction logs"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Insurance",
      description: "Claims, policy declarations, premium invoices"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Healthcare",
      description: "Patient records, lab reports, HIPAA release forms"
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Legal",
      description: "Patents, deposition transcripts, contracts"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "HR",
      description: "Payroll slips, resumes, onboarding forms"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education",
      description: "Course materials, research papers, academic documentation"
    }
  ];

  const resources = [
    {
      title: "API Reference",
      description: "Full details on every endpoint, parameters, and response format. Generated from OpenAPI specifications.",
      link: "/api-docs"
    },
    {
      title: "Blog",
      description: "Tutorials, feature announcements, and customer stories.",
      link: "/blog"
    },
    {
      title: "GitHub",
      description: "Open source integrations and community contributions.",
      link: "https://github.com/knowledgestack",
      external: true
    },
    {
      title: "Support",
      description: "Get help from our team or join the community.",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Welcome to Knowledge Stack Documentation</h1>
            <p className="text-xl text-muted-foreground">
              This site will help you start building enterprise RAG systems—upload documents, create knowledge bases, 
              and query your data with AI-powered search and retrieval.
            </p>
          </div>

          {/* Get Started Quickly */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Get started quickly</h2>
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
                          Try it now <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" asChild className="w-full">
                        <a href={item.link}>Get started</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core APIs */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Core APIs</h2>
            <p className="text-muted-foreground mb-6">
              Knowledge Stack's endpoints are the building blocks of enterprise RAG systems. 
              Use them individually or combine them into powerful pipelines.
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
            <h2 className="text-2xl font-semibold mb-6">What you can build</h2>
            <p className="text-muted-foreground mb-6">
              Teams use Knowledge Stack to build enterprise RAG systems across industries:
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
              For supported formats, see <a href="/features" className="text-primary hover:underline">Supported File Types</a>. 
              For real-world case studies, visit our <a href="/blog" className="text-primary hover:underline">blog</a>.
            </p>
          </div>

          {/* More Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">More resources</h2>
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
                          Learn more <ExternalLink className="w-4 h-4 ml-2 inline" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="link" asChild className="p-0 h-auto">
                        <a href={resource.link}>Learn more</a>
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
              If you can't find what you need, reach us at{" "}
              <a href="mailto:support@knowledgestack.ai" className="text-primary hover:underline">
                support@knowledgestack.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocsOverview;

