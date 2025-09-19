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
      {/* Difficult Documents Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {/* Engineering Drawing */}
        <div className="absolute top-10 left-10 w-24 h-16 border-2 border-primary rounded grid grid-cols-3 gap-1 p-1" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0s' }}>
          <div className="bg-primary/30 rounded"></div>
          <div className="bg-primary/20 rounded"></div>
          <div className="bg-primary/40 rounded"></div>
        </div>
        {/* Table */}
        <div className="absolute top-20 right-20 w-20 h-16 border border-accent" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}>
          <div className="grid grid-cols-2 grid-rows-3 h-full">
            <div className="border border-accent/30 bg-accent/10"></div>
            <div className="border border-accent/30 bg-accent/20"></div>
            <div className="border border-accent/30 bg-accent/30"></div>
            <div className="border border-accent/30 bg-accent/15"></div>
            <div className="border border-accent/30 bg-accent/25"></div>
            <div className="border border-accent/30 bg-accent/35"></div>
          </div>
        </div>
        {/* Complex PDF */}
        <div className="absolute bottom-20 left-20 w-16 h-24 bg-gradient-primary rounded-lg" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '2s' }}>
          <div className="p-2">
            <div className="h-1 bg-primary-foreground/50 rounded mb-1"></div>
            <div className="h-1 bg-primary-foreground/30 rounded mb-1"></div>
            <div className="h-1 bg-primary-foreground/40 rounded mb-2"></div>
            <div className="h-4 bg-primary-foreground/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Animated flowing line across pipeline */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30">
          <div className="w-20 h-full bg-primary" style={{
            animation: 'flow-right 4s ease-in-out infinite'
          }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              From Complex Documents to
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trusted Insights
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Engineering drawings, complex tables, and difficult formats → parsed, chunked, and indexed → 
              delivering verifiable answers with complete source traceability.
            </p>
          </div>

          {/* Pipeline Visualization - Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = true; // All columns light up
              
              return (
                <div key={index} className="relative group">
                  {/* Column */}
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-primary border-primary/50 shadow-glow animate-scale-in' 
                      : 'bg-background/50 border-border'
                  }`} style={{ animationDelay: `${index * 0.3}s` }}>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-background/20 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-lg font-bold text-center mb-3 ${
                      isActive ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-sm text-center leading-relaxed ${
                      isActive ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Document State Visualization Under Each Column */}
                  <div className="mt-4 p-4 bg-background/80 rounded-lg border border-border">
                    {index === 0 && (
                      // Raw Document
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground text-center">Raw Document</div>
                        <div className="w-full h-16 bg-gradient-to-r from-destructive/20 to-destructive/10 rounded border-2 border-dashed border-destructive/30 flex items-center justify-center">
                          <span className="text-xs text-destructive">Complex Format</span>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      // Parsed
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground text-center">Parsed</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-accent/40 rounded"></div>
                          <div className="h-2 bg-accent/30 rounded"></div>
                          <div className="h-2 bg-accent/50 rounded"></div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      // Chunked
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground text-center">Chunked</div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-6 bg-primary/40 rounded"></div>
                          <div className="h-6 bg-primary/30 rounded"></div>
                          <div className="h-6 bg-primary/50 rounded"></div>
                          <div className="h-6 bg-primary/35 rounded"></div>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      // Indexed
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground text-center">Indexed</div>
                        <div className="relative">
                          <div className="w-full h-8 bg-gradient-primary rounded flex items-center justify-center">
                            <Database className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="absolute inset-0 bg-primary/20 rounded animate-pulse"></div>
                        </div>
                      </div>
                    )}
                    
                    {index === 4 && (
                      // Retrieved
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground text-center">Retrieved</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <div className="flex-1 h-1 bg-accent/60 rounded"></div>
                            <span className="text-xs text-accent">95%</span>
                          </div>
                          <div className="text-xs text-muted-foreground">Verified Answer</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Connecting Arrow */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-3 z-10">
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
              EXPLORE OUR ADVANCED PIPELINE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPipeline;