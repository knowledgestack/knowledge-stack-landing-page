import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, ExternalLink, CheckCircle } from "lucide-react";

const InteractiveDemo = () => {
  const sourceCitations = [
    {
      filename: "Q3_Financial_Report.pdf",
      page: "Page 12",
      text: "Revenue increased 32% year-over-year to $4.2M in Q3 2024, driven primarily by enterprise customer acquisition...",
      confidence: 95
    },
    {
      filename: "Sales_Performance.xlsx",
      sheet: "Summary",
      text: "Enterprise deals >$100K: 15 closed, 8 in pipeline. Average deal size: $145K, up 22% from Q2...",
      confidence: 92
    },
    {
      filename: "Board_Meeting_Notes.docx",
      section: "Growth Metrics",
      text: "Customer acquisition cost decreased 18% while lifetime value increased 25%, indicating improved efficiency...",
      confidence: 88
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Complete Source
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Traceability
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hover over any answer to see which document chunks support it. 
            Every insight is grounded in your original documents with confidence scores.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Question */}
          <Card className="lg:col-span-3 bg-primary-light border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageSquare className="w-5 h-5" />
                Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">
                "What were our key performance metrics in Q3 2024 and how do they compare to previous quarters?"
              </p>
            </CardContent>
          </Card>

          {/* Answer */}
          <Card className="lg:col-span-5 shadow-medium group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                Verified Answer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed group-hover:bg-accent/10 p-4 rounded-lg transition-all duration-300 cursor-pointer relative">
                  Q3 2024 showed strong performance across key metrics:
                  {/* Hover tooltip */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-xs text-accent-foreground font-bold animate-pulse">
                    ?
                  </div>
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2 hover:bg-accent/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Revenue:</strong> $4.2M (+32% YoY)</span>
                  </li>
                  <li className="flex gap-2 hover:bg-accent/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Enterprise deals:</strong> 15 closed, avg $145K (+22%)</span>
                  </li>
                  <li className="flex gap-2 hover:bg-accent/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Efficiency:</strong> CAC down 18%, LTV up 25%</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    Confidence: 96%
                  </div>
                  <div className="flex-1 bg-border rounded-full h-2">
                    <div className="bg-accent h-full rounded-full w-[96%] animate-scale-in"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">3 sources</div>
                </div>
                
                {/* Add to Knowledge Base Dropdown */}
                <div className="mt-4 p-3 bg-accent-light/30 border border-accent/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Add to Knowledge Base</span>
                    <button className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full hover:bg-accent-dark transition-colors">
                      + Add Chunks
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Mark validated answers as training data for improved accuracy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sources */}
          <Card className="lg:col-span-4 bg-accent-light/50 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <FileText className="w-5 h-5" />
                Source Citations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sourceCitations.map((source, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg border hover:shadow-subtle transition-smooth">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-medium text-foreground">
                        {source.filename}
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      {source.page || source.sheet || source.section}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      "{source.text}"
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-muted rounded-full h-1">
                        <div 
                          className="bg-accent h-1 rounded-full" 
                          style={{ width: `${source.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {source.confidence}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Try Interactive Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;