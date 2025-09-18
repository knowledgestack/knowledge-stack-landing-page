import { ArrowRight, FileText, BarChart3, Brain, Shield, Search, Zap } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <FileText className="w-6 h-6 text-destructive" />,
      title: "Scattered Documents",
      description: "Critical information buried across PDFs, spreadsheets, and systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-destructive" />,
      title: "Manual Reporting",
      description: "Hours spent manually compiling reports from various sources"
    },
    {
      icon: <Brain className="w-6 h-6 text-destructive" />,
      title: "AI Hallucinations",
      description: "Unreliable AI answers without proper source verification"
    }
  ];

  const solutions = [
    {
      icon: <Search className="w-6 h-6 text-accent" />,
      title: "Intelligent Ingestion",
      description: "Automatically ingest and process any document type with smart parsing"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Secure Enrichment",
      description: "Add metadata, tags, and context while maintaining enterprise security"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Trusted Search",
      description: "Get accurate answers with complete source traceability"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Chaos to <span className="text-accent">Clarity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your enterprise data from scattered information into reliable, actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Current Challenges
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="p-6 bg-card border border-destructive/20 rounded-lg animate-slide-up">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Knowledge Stack Solution
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 bg-card border border-accent/20 rounded-lg animate-slide-up shadow-subtle hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent-light rounded-lg">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;