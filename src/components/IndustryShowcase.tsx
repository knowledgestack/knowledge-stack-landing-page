import { useState } from "react";
import { DollarSign, Activity, Shield, Scale, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const IndustryShowcase = () => {
  const { t } = useTranslation();
  const [activeIndustry, setActiveIndustry] = useState("finance");

  const industries = [
    {
      id: "finance",
      icon: <DollarSign className="w-5 h-5" />,
      name: t("industryShowcase.finance"),
      color: "text-purple-600 bg-purple-100 border-purple-200"
    },
    {
      id: "healthcare", 
      icon: <Activity className="w-5 h-5" />,
      name: t("industryShowcase.healthcare"),
      color: "text-blue-600 bg-blue-100 border-blue-200"
    },
    {
      id: "insurance",
      icon: <Shield className="w-5 h-5" />,
      name: t("industryShowcase.insurance"), 
      color: "text-green-600 bg-green-100 border-green-200"
    },
    {
      id: "legal",
      icon: <Scale className="w-5 h-5" />,
      name: t("industryShowcase.legal"),
      color: "text-orange-600 bg-orange-100 border-orange-200"
    }
  ];

  const useCases = {
    finance: {
      title: t("industryShowcase.finance"),
      description: t("industryShowcase.financeDesc"),
      documents: [
        t("industryShowcase.financeDoc1"),
        t("industryShowcase.financeDoc2"),
        t("industryShowcase.financeDoc3"),
        t("industryShowcase.financeDoc4")
      ],
      metrics: [
        { label: t("industryShowcase.financeMetric1"), value: t("industryShowcase.financeMetric1Value") },
        { label: t("industryShowcase.financeMetric2"), value: t("industryShowcase.financeMetric2Value") },
        { label: t("industryShowcase.financeMetric3"), value: t("industryShowcase.financeMetric3Value") }
      ],
      testimonial: {
        quote: t("industryShowcase.financeTestimonial"),
        author: t("industryShowcase.financeAuthor")
      }
    },
    healthcare: {
      title: t("industryShowcase.healthcare"), 
      description: t("industryShowcase.healthcareDesc"),
      documents: [
        t("industryShowcase.healthcareDoc1"),
        t("industryShowcase.healthcareDoc2"),
        t("industryShowcase.healthcareDoc3"),
        t("industryShowcase.healthcareDoc4")
      ],
      metrics: [
        { label: t("industryShowcase.healthcareMetric1"), value: t("industryShowcase.healthcareMetric1Value") },
        { label: t("industryShowcase.healthcareMetric2"), value: t("industryShowcase.healthcareMetric2Value") },
        { label: t("industryShowcase.healthcareMetric3"), value: t("industryShowcase.healthcareMetric3Value") }
      ],
      testimonial: {
        quote: t("industryShowcase.healthcareTestimonial"),
        author: t("industryShowcase.healthcareAuthor")
      }
    },
    insurance: {
      title: t("industryShowcase.insurance"),
      description: t("industryShowcase.insuranceDesc"),
      documents: [
        t("industryShowcase.insuranceDoc1"),
        t("industryShowcase.insuranceDoc2"),
        t("industryShowcase.insuranceDoc3"),
        t("industryShowcase.insuranceDoc4")
      ],
      metrics: [
        { label: t("industryShowcase.insuranceMetric1"), value: t("industryShowcase.insuranceMetric1Value") },
        { label: t("industryShowcase.insuranceMetric2"), value: t("industryShowcase.insuranceMetric2Value") },
        { label: t("industryShowcase.insuranceMetric3"), value: t("industryShowcase.insuranceMetric3Value") }
      ],
      testimonial: {
        quote: t("industryShowcase.insuranceTestimonial"),
        author: t("industryShowcase.insuranceAuthor")
      }
    },
    legal: {
      title: t("industryShowcase.legal"),
      description: t("industryShowcase.legalDesc"),
      documents: [
        t("industryShowcase.legalDoc1"),
        t("industryShowcase.legalDoc2"),
        t("industryShowcase.legalDoc3"),
        t("industryShowcase.legalDoc4")
      ],
      metrics: [
        { label: t("industryShowcase.legalMetric1"), value: t("industryShowcase.legalMetric1Value") },
        { label: t("industryShowcase.legalMetric2"), value: t("industryShowcase.legalMetric2Value") },
      ],
      testimonial: {
        quote: t("industryShowcase.legalTestimonial"),
        author: t("industryShowcase.legalAuthor")
      }
    }
  };

  const currentUseCase = useCases[activeIndustry];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("industryShowcase.title")} {""}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t("industryShowcase.trustedAI")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("industryShowcase.subtitle")}
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
              
              {/* <Button size="lg" className="bg-card hover:bg-card/80 text-foreground border border-border">
                Get started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button> */}
            </div>

            {/* Document Types */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{t("industryShowcase.documentTypes")}</h4>
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
          <div className="flex flex-col justify-center h-full">
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
            {/* <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium">
                    revenue
                  </span>
                </div>
              </div>
              
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;