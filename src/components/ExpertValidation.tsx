import { Users, CheckCircle, RefreshCw, TrendingUp } from "lucide-react";

const ExpertValidation = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74, 144, 226, 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Crowdsourced{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trust
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your domain experts validate outputs, feeding corrections back into synthetic training data—
              continuously improving accuracy for mission-critical decisions.
            </p>
          </div>

          {/* Feedback Loop Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Input",
                description: "Documents processed through our pipeline",
                color: "text-primary"
              },
              {
                icon: CheckCircle,
                title: "Expert Review",
                description: "Domain experts validate and correct outputs",
                color: "text-accent"
              },
              {
                icon: RefreshCw,
                title: "Synthetic Data",
                description: "Corrections become training data",
                color: "text-primary-light"
              },
              {
                icon: TrendingUp,
                title: "Stronger Output",
                description: "Continuously improving accuracy",
                color: "text-accent"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-8 transform -translate-x-4">
                      <div className="w-full h-0.5 bg-primary/30 absolute top-1/2 animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Trust Metrics */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Answer Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">70%</div>
                <div className="text-muted-foreground">Reduction in Manual Review</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-light mb-2">10k+</div>
                <div className="text-muted-foreground">Expert Validations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertValidation;