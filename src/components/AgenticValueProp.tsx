import { Brain, Cog, Zap, ArrowRight, CheckCircle, FileText, Database, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgenticValueProp = () => {
  const valueProps = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Document Processing",
      description: "We handle complex parsing of engineering drawings, financial tables, and unstructured documents",
      detail: "No more struggling with PDFs, images, or complex formats"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "RAG Infrastructure", 
      description: "Complete retrieval pipeline with chunking, indexing, and semantic search built-in",
      detail: "Focus on your agents, not on RAG complexity"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Trusted Knowledge Base",
      description: "Expert-validated outputs with complete source traceability and confidence scores",
      detail: "Your agents get reliable, auditable information"
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Agent-Ready APIs",
      description: "Simple REST/GraphQL APIs that integrate seamlessly with your agent frameworks",
      detail: "LangChain, AutoGPT, or custom - we work with everything"
    }
  ];

  return (
    <section className="py-20 bg-card/50 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            For Agentic AI Companies
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Focus on Your {""}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Agents
            </span>
            {""}, Not RAG Complexity
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Knowledge Stack handles the entire document-to-knowledge pipeline, so your team can focus on building intelligent agents that deliver business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              See Integration Examples
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              API Documentation
            </Button>
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div key={index} className="p-6 bg-background border border-border rounded-lg hover:shadow-medium transition-smooth group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                {prop.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{prop.title}</h3>
              <p className="text-muted-foreground mb-3 text-sm">{prop.description}</p>
              <p className="text-primary text-sm font-medium">{prop.detail}</p>
            </div>
          ))}
        </div>

        {/* End-to-End Flow */}
        <div className="bg-background border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Complete End-to-End Solution
          </h3>
          
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            {/* Step 1: Your Documents */}
            <div className="text-center">
              <div className="p-4 bg-muted rounded-lg mb-4 mx-auto w-fit">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Your Documents</h4>
              <p className="text-sm text-muted-foreground">PDFs, images, tables, drawings</p>
            </div>

            <ArrowRight className="w-6 h-6 text-primary mx-auto hidden lg:block" />

            {/* Step 2: Our Processing */}
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-lg mb-4 mx-auto w-fit relative">
                <Cog className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-lg animate-pulse"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Knowledge Stack</h4>
              <p className="text-sm text-muted-foreground">Parse, chunk, validate, index</p>
            </div>

            <ArrowRight className="w-6 h-6 text-primary mx-auto hidden lg:block" />

            {/* Step 3: APIs */}
            <div className="text-center">
              <div className="p-4 bg-accent/10 rounded-lg mb-4 mx-auto w-fit">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Agent-Ready APIs</h4>
              <p className="text-sm text-muted-foreground">REST, GraphQL, webhooks</p>
            </div>

            <ArrowRight className="w-6 h-6 text-primary mx-auto hidden lg:block" />

            {/* Step 4: Your Agents */}
            <div className="text-center">
              <div className="p-4 bg-gradient-primary rounded-lg mb-4 mx-auto w-fit">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Your AI Agents</h4>
              <p className="text-sm text-muted-foreground">Focus on intelligence, not infrastructure</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  "Knowledge Stack took over our entire RAG pipeline"
                </h4>
                <p className="text-muted-foreground">
                  "We went from spending 60% of our engineering time on document processing to focusing entirely on our agent logic. Our accuracy improved and development velocity increased 3x."
                </p>
                <p className="text-sm text-primary font-medium mt-3">
                  — CTO, Leading AI Automation Startup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticValueProp;