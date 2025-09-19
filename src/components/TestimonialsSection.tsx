import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, CheckCircle } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Knowledge Stack's table parsing is incredibly accurate. Complex financial tables that used to take our team hours to process are now extracted and verified in seconds.",
      author: "Michael Rodriguez",
      title: "CFO",
      company: "Precision Analytics",
      type: "Table Parsing",
    },
    {
      quote: "Engineering drawings and technical specifications are notoriously difficult to parse. Knowledge Stack handles our most complex blueprints with remarkable precision.",
      author: "Lisa Wang", 
      title: "Engineering Director",
      company: "Apex Construction (Top 5 US)",
      type: "Engineering Drawings",
    },
    {
      quote: "Knowledge Stack took over our entire RAG pipeline, letting us focus purely on agent logic. The document processing and retrieval quality is enterprise-grade.",
      author: "David Kim",
      title: "CTO", 
      company: "AgentFlow AI",
      type: "Agentic Platform",
    }
  ];

  const currentTestimonial = testimonials[0]; // Rotate or show all

  const partnerLogos = [
    "Microsoft", "Salesforce", "AWS", "Google Cloud", "Snowflake", "Databricks"
  ];

  return (
    <section className="py-16 bg-gradient-security">
      <div className="container mx-auto px-6">
        {/* Featured Testimonial */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                <CheckCircle className="w-3 h-3" />
                {currentTestimonial.type}
              </div>
              <Quote className="w-8 h-8 text-accent mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">
                  {currentTestimonial.author}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.title}, {currentTestimonial.company}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Testimonial Highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border">
              <CardContent className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                  <CheckCircle className="w-3 h-3" />
                  {testimonial.type}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logos */}
        {/* <div className="text-center">
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
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;