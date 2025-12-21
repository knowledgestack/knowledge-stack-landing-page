import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10,000 queries/month",
        "5GB document storage",
        "Basic integrations",
        "Email support",
        "Source traceability"
      ]
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "For growing teams and departments",
      features: [
        "Up to 100,000 queries/month",
        "100GB document storage",
        "All integrations",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited queries",
        "Unlimited storage",
        "Dedicated infrastructure",
        "24/7 support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment",
        "Dedicated account manager"
      ]
    }
  ];

  const handleGetStarted = () => {
    window.location.href = "https://app.knowledgestack.ai";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-border ${plan.popular ? "border-primary border-2" : ""}`}
              >
                <CardHeader>
                  {plan.popular && (
                    <div className="text-xs font-semibold text-primary mb-2">POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need help choosing? We're here to help.
            </p>
            <a href="/contact" className="text-primary hover:underline">
              Contact Sales →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;

