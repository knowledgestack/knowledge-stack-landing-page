import { Users, CheckCircle, RefreshCw, TrendingUp, ChevronDown, ChevronRight, FileText } from "lucide-react";
import { useState } from "react";

const ExpertValidation = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['AI Standards Survey', 'Philosophy of AI']));

  const steps = [
    {
      icon: Users,
      title: "Input",
      description: "Documents processed through our pipeline",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Employee Review",
      description: "Validation by your team members",
      color: "text-accent"
    },
    {
      icon: RefreshCw,
      title: "Synthetic Data",
      description: "Corrections and generated insights become new content",
      color: "text-primary-light"
    },
    {
      icon: TrendingUp,
      title: "Stronger Output",
      description: "Continuously improving accuracy",
      color: "text-accent"
    }
  ];

  const citationHierarchy = {
    'AI Standards Survey': {
      status: 'Pending',
      score: 98,
      children: [
        {
          name: 'original-ieee-proposal.pptx',
          badge: 'Source',
          status: 'Verified',
          score: 96
        },
        {
          name: 'expert-committee-report.docx',
          badge: 'Source',
          status: 'Pending',
          score: 93
        }
      ]
    },
    'Philosophy of AI': {
      status: 'Verified',
      score: 87,
      children: [
        {
          name: 'kant-moral-philosophy.pdf',
          badge: 'Source',
          status: 'Verified',
          score: 91
        }
      ]
    }
  };

  const toggleNode = (nodeName: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeName)) {
      newExpanded.delete(nodeName);
    } else {
      newExpanded.add(nodeName);
    }
    setExpandedNodes(newExpanded);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-accent/20 text-accent';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Source':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-accent';
    if (score >= 90) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-muted-foreground';
  };

  const positions: Array<React.CSSProperties> = [
    { top: "-2%", left: "50%", transform: "translate(-50%, 0)" }, // top
    { top: "50%", left: "102%", transform: "translate(-100%, -50%)" }, // right
    { top: "102%", left: "50%", transform: "translate(-50%, -100%)" }, // bottom
    { top: "50%", left: "-2%", transform: "translate(0, -50%)" } // left
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 1px 1px, rgba(74, 144, 226, 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crowdsourced{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Trust</span>{" "}
              from Your Organization
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Auto-learning Loop for Continuous Improvement
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Citation Hierarchy Background */}
            <div className="relative">
              <div className="bg-card/30 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-foreground mb-4">Citation Hierarchy • Cite: 1</h3>
                <p className="text-sm text-muted-foreground mb-6">Visual map showing how this citation was constructed from source materials.</p>
                
                <div className="space-y-3">
                  {Object.entries(citationHierarchy).map(([fileName, data]) => (
                    <div key={fileName}>
                      {/* Parent Node */}
                      <div className="flex items-center gap-3 py-2">
                        <button
                          onClick={() => toggleNode(fileName)}
                          className="p-1 hover:bg-muted/50 rounded transition-colors"
                        >
                          {expandedNodes.has(fileName) ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground flex-1">{fileName}</span>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(data.status)}`}>
                            {data.status}
                          </span>
                          <span className={`text-sm font-medium ${getScoreColor(data.score)}`}>
                            {data.score}%
                          </span>
                        </div>
                      </div>

                      {/* Children Nodes */}
                      {expandedNodes.has(fileName) && data.children.length > 0 && (
                        <div className="ml-8 space-y-2">
                          {data.children.map((child, index) => (
                            <div key={index} className="flex items-center gap-3 py-1 pl-4 border-l-2 border-border/30">
                              <div className="w-2 h-2 bg-border rounded-full"></div>
                              <FileText className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-foreground flex-1">{child.name}</span>
                              <div className="flex items-center gap-2">
                                {child.badge && (
                                  <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(child.badge)}`}>
                                    {child.badge}
                                  </span>
                                )}
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(child.status)}`}>
                                  {child.status}
                                </span>
                                <span className={`text-sm font-medium ${getScoreColor(child.score)}`}>
                                  {child.score}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Explanation Text */}
                <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <h4 className="text-sm font-semibold text-foreground mb-2">How Citation Hierarchies Work</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    When your team members validate AI outputs during daily workflows, they add to your enterprise knowledge. 
                    The validated content can then be used for future AI generations, thereby creating a growing 
                    web of trusted knowledge over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Circular Feedback Loop */}
            <div className="relative mx-auto" style={{ width: "28rem", height: "28rem" }}>
              {/* Outer subtle glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-accent/5 to-primary-light/10 blur-xl" />

              {/* Static ring */}
              <div className="absolute inset-6 rounded-full border border-border/80" />

              {/* Center label */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 text-center">
                <div className="relative inline-flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/40 animate-spin" style={{ animationDuration: "6s" }} />
                  <div className="absolute inset-1 rounded-full bg-card/70 backdrop-blur-sm border border-border" />
                </div>
              </div>

              {/* Steps around the circle */}
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="absolute w-44 text-center z-20"
                    style={{ ...positions[index] }}
                  >
                    <div className="group">
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Flow arrows around the loop */}
              <svg className="absolute inset-0 z-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <defs>
                  <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="hsl(var(--primary))" />
                  </marker>
                </defs>
                <path
                  d="M50 10 A40 40 0 0 1 90 50"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.6"
                  markerEnd="url(#arrow)"
                  className="opacity-70"
                />
                <path
                  d="M90 50 A40 40 0 0 1 50 90"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.6"
                  markerEnd="url(#arrow)"
                  className="opacity-70"
                />
                <path
                  d="M50 90 A40 40 0 0 1 10 50"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.6"
                  markerEnd="url(#arrow)"
                  className="opacity-70"
                />
                <path
                  d="M10 50 A40 40 0 0 1 50 10"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.6"
                  markerEnd="url(#arrow)"
                  className="opacity-70"
                />
              </svg>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Source Citations</h3>
              <p className="text-muted-foreground">
                Every response, including generated content, is traceable back to source.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Employee Validation</h3>
              <p className="text-muted-foreground">
                Your team members review and correct AI outputs, ensuring accuracy and building trust in the system.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Growing Knowledge</h3>
              <p className="text-muted-foreground">
                Each validation creates new synthetic data, expanding the knowledge base and improving future accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ExpertValidation;