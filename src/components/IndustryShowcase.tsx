import { useState } from "react";
import { DollarSign, Activity, Shield, Scale, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndustryShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState("finance");

  const industries = [
    {
      id: "finance",
      icon: <DollarSign className="w-5 h-5" />,
      name: "Finance",
      color: "text-purple-600 bg-purple-100 border-purple-200"
    },
    {
      id: "healthcare", 
      icon: <Activity className="w-5 h-5" />,
      name: "Healthcare",
      color: "text-blue-600 bg-blue-100 border-blue-200"
    },
    {
      id: "insurance",
      icon: <Shield className="w-5 h-5" />,
      name: "Insurance", 
      color: "text-green-600 bg-green-100 border-green-200"
    },
    {
      id: "legal",
      icon: <Scale className="w-5 h-5" />,
      name: "Legal",
      color: "text-orange-600 bg-orange-100 border-orange-200"
    }
  ];

  const useCases = {
    finance: {
      title: "Finance",
      description: "Extract key insights from investor decks, huge spreadsheets, dense pitch materials, and SEC filings. Reduce handles complex tables, charts, and financial statements with precision.",
      documents: ["10-K Reports", "Earnings Calls", "Investment Decks", "Financial Statements"],
      metrics: [
        { label: "Table Extraction Accuracy", value: "99.2%" },
        { label: "Processing Speed", value: "10x Faster" },
        { label: "Manual Review Time", value: "85% Reduction" }
      ],
      testimonial: {
        quote: "Knowledge Stack helped us parse tabular documents we could not. We needed hours validating the generated reports. Now we can easily validate the results with a click",
        author: "Engineering Leader, Top 5 Global Hedge Fund"
      }
    },
    healthcare: {
      title: "Healthcare", 
      description: "Process medical records, clinical trials, research papers, and regulatory documents. Extract structured data from complex medical charts and diagnostic reports.",
      documents: ["Clinical Trial Data", "Medical Records", "Research Papers", "FDA Filings"],
      metrics: [
        { label: "Medical Chart Accuracy", value: "97.8%" },
        { label: "Regulatory Compliance", value: "100%" },
        { label: "Research Speed", value: "8x Faster" }
      ],
      testimonial: {
        quote: "Knowledge Stack transformed how we process clinical data. What used to take weeks of manual review now happens in hours with higher accuracy.",
        author: "Chief Medical Officer, Fortune 500 Healthcare"
      }
    },
    insurance: {
      title: "Insurance",
      description: "Analyze policy documents, claims data, risk assessments, and actuarial reports. Process complex insurance forms and regulatory filings with complete accuracy.",
      documents: ["Policy Documents", "Claims Reports", "Risk Assessments", "Actuarial Data"],
      metrics: [
        { label: "Claims Processing", value: "75% Faster" },
        { label: "Document Accuracy", value: "98.5%" },
        { label: "Fraud Detection", value: "40% Improvement" }
      ],
      testimonial: {
        quote: "The accuracy in processing our complex policy documents exceeded our expectations. Knowledge Stack handles edge cases our previous solutions missed.",
        author: "VP of Technology, Major Insurance Carrier"
      }
    },
    legal: {
      title: "Legal",
      description: "Process contracts, legal briefs, court filings, and regulatory documents. Extract key clauses, dates, and obligations from complex legal documents.",
      documents: ["Contracts", "Legal Briefs", "Court Filings", "Compliance Reports"],
      metrics: [
        { label: "Contract Analysis", value: "90% Faster" },
        { label: "Clause Extraction", value: "99.1%" },
        { label: "Due Diligence", value: "70% Reduction" }
      ],
      testimonial: {
        quote: "Knowledge Stack revolutionized our document review process. We can now handle complex M&A due diligence in days instead of weeks.",
        author: "Partner, Top-Tier Law Firm"
      }
    }
  };

  const currentUseCase = useCases[activeIndustry];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Industries with {""}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trusted AI Knowledge
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Knowledge Stack delivers mission-critical accuracy across different industries, handling their most complex documents with precision.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeIndustry === industry.id 
                  ? industry.color + " shadow-lg"
                  : "bg-card border-border text-muted-foreground hover:bg-card/80"
              }`}
            >
              {industry.icon}
              {industry.name}
            </button>
          ))}
          {/* <Button 
            variant="outline" 
            className="flex items-center gap-2 bg-card border-border hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Try your own
            <ChevronRight className="w-4 h-4" />
          </Button> */}
        </div>

        {/* Use Case Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Use Case Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">{currentUseCase.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {currentUseCase.description}
              </p>
              
              <Button size="lg" className="bg-card hover:bg-card/80 text-foreground border border-border">
                Get started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Document Types */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Document Types We Handle:</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentUseCase.documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground italic mb-4">"{currentUseCase.testimonial.quote}"</p>
              <p className="text-sm text-primary font-medium">{currentUseCase.testimonial.author}</p>
            </div>
          </div>

          {/* Right: Metrics and Visual */}
          <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid gap-4">
              {currentUseCase.metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{metric.label}:</span>
                    <span className="text-2xl font-bold text-primary">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Data Visualization */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium">
                    revenue
                  </span>
                </div>
              </div>
              
              {/* Sample Table */}
              <div className="bg-white rounded border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-medium bg-purple-100 border-r border-purple-200">Revenue:</td>
                      <td className="p-2">$ 1,090.4</td>
                      <td className="p-2">$ 1,421.9</td>
                      <td className="p-2">$ 1,807.8</td>
                      <td className="p-2">$ 2,284.0</td>
                    </tr>
                    {[...Array(4)].map((_, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="p-2 text-gray-400">×××××××</td>
                        <td className="p-2 text-gray-400">××××××××××</td>
                        <td className="p-2 text-gray-400">××××××</td>
                        <td className="p-2 text-gray-400">×××××××</td>
                        <td className="p-2 text-gray-400">×××××××</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;