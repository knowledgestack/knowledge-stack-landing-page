import { ArrowRight, FileText, BarChart3, Brain, Shield, Search, Zap, CheckCircle, Users, RefreshCw, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProblemSolution = () => {
  const { t } = useTranslation();
  
  const problems = [
    {
      icon: <FileText className="w-6 h-6 text-destructive" />,
      title: t("problemSolution.challenge1Title"),
      description: t("problemSolution.challenge1Desc")
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-destructive" />,
      title: t("problemSolution.challenge2Title"),
      description: t("problemSolution.challenge2Desc")
    },
    {
      icon: <Brain className="w-6 h-6 text-destructive" />,
      title: t("problemSolution.challenge3Title"),
      description: t("problemSolution.challenge3Desc")
    }
  ];

  const solutions = [
    {
      icon: <Search className="w-6 h-6 text-accent" />,
      title: t("problemSolution.solution1Title"),
      description: t("problemSolution.solution1Desc")
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: t("problemSolution.solution2Title"),
      description: t("problemSolution.solution2Desc")
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: t("problemSolution.solution3Title"),
      description: t("problemSolution.solution3Desc")
    }
  ];

  const expertCycle = [
    { icon: FileText, title: t("problemSolution.cycle1Title"), description: t("problemSolution.cycle1Desc") },
    { icon: CheckCircle, title: t("problemSolution.cycle2Title"), description: t("problemSolution.cycle2Desc") },
    { icon: RefreshCw, title: t("problemSolution.cycle3Title"), description: t("problemSolution.cycle3Desc") },
    { icon: TrendingUp, title: t("problemSolution.cycle4Title"), description: t("problemSolution.cycle4Desc") }
  ];

  return (
    <section className="py-16 bg-background/50 relative overflow-hidden">
      {/* Background Animation - Document stacking */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-40 bg-gradient-primary rounded-lg animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-24 left-14 w-32 h-40 bg-gradient-primary rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-28 left-18 w-32 h-40 bg-gradient-primary rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 right-10 w-32 h-40 bg-accent/20 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-24 right-14 w-32 h-40 bg-accent/30 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {t("problemSolution.title")} {""}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t("problemSolution.missionCritical")}
              </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
            {t("problemSolution.subtitle")}
          </p>
        </div>

        {/* Problem → Solution Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-24">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {t("problemSolution.challenges")}
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
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {t("problemSolution.solution")}
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 bg-card border border-accent/40 rounded-lg animate-slide-up shadow-subtle hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
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