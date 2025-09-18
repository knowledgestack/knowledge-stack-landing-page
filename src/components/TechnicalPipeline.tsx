import { ArrowRight, FileText, Search, Layers, Database, Zap } from "lucide-react";

const TechnicalPipeline = () => {
  const pipelineSteps = [
    {
      icon: FileText,
      title: "Parsing",
      description: "Normalizes inputs across formats like PDFs, DOCs, HTML, and media — creating consistent, structured data ready for processing.",
      color: "text-accent"
    },
    {
      icon: Search,
      title: "Extraction", 
      description: "Identifies key signals like entities, metadata, and boundaries — laying the groundwork for high-quality, context-aware retrieval.",
      color: "text-primary"
    },
    {
      icon: Layers,
      title: "Chunking",
      description: "Segments content into logically grouped chunks using type-specific strategies — preserving context and improving recall.",
      color: "text-accent-light"
    },
    {
      icon: Database,
      title: "Indexing", 
      description: "Builds vector, keyword, and summary indexes — enabling semantic search, keyword retrieval, and hierarchical high-level recall.",
      color: "text-primary-light"
    },
    {
      icon: Zap,
      title: "Retrieval",
      description: "Combines multi-index recall with precision re-ranking — delivering grounded, context-rich results for any LLM.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74, 144, 226, 0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best-in-class indexing
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                and retrieval
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Powered by the most advanced RAG pipeline, Knowledge Stack uses context engineering to deliver fast, 
              accurate, context-rich retrieval—through structured chunking, multi-layered indexing, and 
              LLM-aware optimizations—built for production-grade generative AI.
            </p>
          </div>

          {/* Pipeline Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-6 p-8 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-background/80">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connecting Arrow - only show between steps on large screens */}
                  {index < pipelineSteps.length - 1 && index % 2 === 0 && (
                    <div className="hidden lg:flex justify-center items-center py-4">
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium transition-all duration-300 group">
              EXPLORE KNOWLEDGE STACK'S ADVANCED RAG ENGINE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPipeline;