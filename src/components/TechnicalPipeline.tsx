import { ArrowRight, FileText, Search, Layers, Database, Zap } from "lucide-react";

const TechnicalPipeline = () => {
  const pipelineSteps = [
    {
      icon: FileText,
      title: "Parsing",
      description: "Normalizes inputs across formats like PDFs, DOCs, HTML, and media",
      color: "text-accent"
    },
    {
      icon: Search,
      title: "Extraction", 
      description: "Identifies key signals like entities, metadata, and boundaries",
      color: "text-primary"
    },
    {
      icon: Layers,
      title: "Chunking",
      description: "Segments content into logically grouped chunks using type-specific strategies",
      color: "text-accent-light"
    },
    {
      icon: Database,
      title: "Indexing", 
      description: "Builds vector, keyword, and summary indexes for semantic search and keyword retrieval",
      color: "text-primary-light"
    },
    {
      icon: Zap,
      title: "Retrieval",
      description: "Handles multi-index retrieval for context-rich results for any LLM.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-card/80 relative overflow-hidden">
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

      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              From <span className="text-accent">Complex Documents</span> to
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trusted Insights
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Delivers <span className="font-semibold text-accent">accurate and verifiable answers</span> using 
              <span className="font-semibold text-primary"> custom state-of-the-art pipeline</span>
            </p>
          </div>

          {/* Pipeline Visualization - Horizontal Flow */}
          <div className="relative mb-16 px-4">
            {/* Main Pipeline Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2 max-w-7xl mx-auto">
              {pipelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = true; // All columns light up
                
                return (
                  <div key={index} className="flex items-center">
                    {/* Pipeline Step Card */}
                    <div className={`relative p-4 rounded-2xl border-2 transition-all duration-500 w-full max-w-[200px] h-[280px] flex flex-col ${
                      isActive 
                        ? 'bg-gradient-primary border-primary/50 shadow-lg animate-scale-in' 
                        : 'bg-background/50 border-border'
                    }`} style={{ animationDelay: `${index * 0.2}s` }}>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-background/20 flex items-center justify-center shadow-sm flex-shrink-0">
                        <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-xl font-bold text-center mb-4 ${
                        isActive ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Description with emphasized keywords */}
                      <p className={`text-sm text-center leading-relaxed ${
                        isActive ? 'text-primary-foreground/90' : 'text-muted-foreground'
                      }`}>
                        {step.description.split('—').map((part, partIndex) => {
                          if (partIndex === 0) {
                            // First part: emphasize key technical terms
                            return part.split(' ').map((word, wordIndex) => {
                              const keyTerms = ['PDFs', 'DOCs', 'HTML', 'media', 'entities', 'metadata', 'boundaries', 'chunks', 'vector', 'keyword', 'semantic', 'LLM'];
                              const isKeyTerm = keyTerms.some(term => word.includes(term));
                              return (
                                <span key={wordIndex}>
                                  {isKeyTerm ? (
                                    <span className="font-bold text-black">{word}</span>
                                  ) : (
                                    word
                                  )}
                                  {wordIndex < part.split(' ').length - 1 ? ' ' : ''}
                                </span>
                              );
                            });
                          } else {
                            // Second part: emphasize action words
                            return (
                              <span key={partIndex}>
                                <span className="text-muted-foreground">—</span>
                                {part.split(' ').map((word, wordIndex) => {
                                  const actionWords = ['creating', 'identifies', 'laying', 'segments', 'preserving', 'recall', 'builds', 'combines', 'context-rich'];
                                  const isActionWord = actionWords.some(action => word.toLowerCase().includes(action));
                                  return (
                                    <span key={wordIndex}>
                                      {isActionWord ? (
                                        <span className="font-bold text-black">{word}</span>
                                      ) : (
                                        word
                                      )}
                                      {wordIndex < part.split(' ').length - 1 ? ' ' : ''}
                                    </span>
                                  );
                                })}
                              </span>
                            );
                          }
                        })}
                      </p>
                    </div>

                    {/* Connecting Arrow - Centered Between Blocks */}
                    {index < pipelineSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center mx-3">
                        <div className="relative flex items-center justify-center">
                          {/* Arrow Background */}
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                          </div>
                          {/* Flowing line effect */}
                          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Arrows - Vertical */}
            <div className="lg:hidden flex flex-col items-center space-y-4 mt-6">
              {pipelineSteps.slice(0, -1).map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary rotate-90 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium transition-all duration-300 group">
              <span>EXPLORE OUR</span>
              <span className="font-bold text-accent">ADVANCED</span>
              <span>PIPELINE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TechnicalPipeline;