import { ArrowRight, FileText, BarChart3, Brain, Shield, Search, Zap, CheckCircle, Users, RefreshCw, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <FileText className="w-6 h-6 text-destructive" />,
      title: "Scattered PDFs",
      description: "Engineering drawings, tables, and critical documents spread across systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-destructive" />,
      title: "Manual Reporting",
      description: "Hours manually extracting data from complex document formats"
    },
    {
      icon: <Brain className="w-6 h-6 text-destructive" />,
      title: "AI Hallucinations",
      description: "Unreliable AI outputs without source verification or expert validation"
    }
  ];

  const solutions = [
    {
      icon: <Search className="w-6 h-6 text-accent" />,
      title: "Intelligent Ingestion",
      description: "Parse engineering drawings, tables, and complex documents into structured chunks"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Expert Validation",
      description: "Domain experts validate outputs, creating synthetic training data"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Trusted Insights",
      description: "Get verifiable answers with complete document-to-chunk traceability"
    }
  ];

  const expertCycle = [
    { icon: FileText, title: "Input", description: "Documents processed" },
    { icon: CheckCircle, title: "Expert Review", description: "Domain experts validate" },
    { icon: RefreshCw, title: "Synthetic Data", description: "Corrections become training" },
    { icon: TrendingUp, title: "Stronger Output", description: "Continuously improving" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Animation - Document stacking */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-40 bg-gradient-primary rounded-lg animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-24 left-14 w-32 h-40 bg-gradient-primary rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-28 left-18 w-32 h-40 bg-gradient-primary rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 right-10 w-32 h-40 bg-accent/20 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-24 right-14 w-32 h-40 bg-accent/30 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Crowdsourced{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Trust</span>{" "}
            for Your Organization
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Transform scattered documents into a trusted knowledge base through expert validation and continuous learning
          </p>
        </div>

        {/* Problem → Solution Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-24">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Current Challenges
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="p-6 bg-card border border-destructive/20 rounded-lg animate-fade-in hover:border-destructive/40 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
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

          {/* Animated Arrow with flowing line */}
          <div className="flex justify-center relative">
            <div className="p-4 bg-primary/10 rounded-full relative">
              <ArrowRight className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping"></div>
            </div>
            {/* Flowing line animation */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-destructive/0 via-primary to-accent/0 animate-pulse"></div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Knowledge Stack Solution
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 bg-card border border-accent/20 rounded-lg animate-fade-in shadow-subtle hover:shadow-medium hover:border-accent/40 transition-all duration-300" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
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

        {/* Expert Validation Cycle */}
        <div className="bg-card/50 border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Validated by your organization's experts → synthetic data → powering future accuracy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {expertCycle.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {/* Connecting animated line */}
                  {index < expertCycle.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30">
                      <div className="w-4 h-0.5 bg-primary animate-pulse"></div>
                    </div>
                  )}
                  
                  {/* Loop back arrow for last item */}
                  {index === expertCycle.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2">
                      <div className="w-px h-8 bg-primary/30"></div>
                      <div className="w-full h-px bg-primary/30 transform rotate-180"></div>
                      <ArrowRight className="w-4 h-4 text-primary/30 mx-auto transform rotate-180" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;