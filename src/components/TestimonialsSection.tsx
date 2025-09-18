import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonial = {
    quote: "Knowledge Stack helped us reduce manual reporting time by 70% while ensuring compliance. The source tracking gives us complete confidence in our data-driven decisions.",
    author: "Sarah Chen",
    title: "Head of Data Analytics",
    company: "TechCorp Industries",
    metrics: [
      { value: "70%", label: "Reduction in manual work" },
      { value: "99.8%", label: "Answer accuracy rate" },
      { value: "45min", label: "Average time saved per report" }
    ]
  };

  const partnerLogos = [
    "Microsoft", "Salesforce", "AWS", "Google Cloud", "Snowflake", "Databricks"
  ];

  return (
    <section className="py-24 bg-gradient-security">
      <div className="container mx-auto px-6">
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>
          
          <Card className="shadow-large border-0">
            <CardContent className="p-12">
              <Quote className="w-8 h-8 text-accent mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonial.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="text-muted-foreground font-semibold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;