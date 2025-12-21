import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "AI/ML Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Enterprise Sales Manager",
      location: "Remote",
      type: "Full-time",
      department: "Sales"
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      type: "Full-time",
      department: "Customer Success"
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health, dental, and vision insurance",
    "Flexible PTO and remote work options",
    "Learning and development budget",
    "Top-tier equipment and home office setup",
    "401(k) with company matching"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-muted-foreground">
              Join us in building the future of enterprise knowledge management
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground">
                We're looking for talented individuals who are passionate about AI, security,
                and building products that make a real difference. If you're excited about
                solving complex problems and working with cutting-edge technology, we'd love
                to hear from you.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription className="flex flex-wrap gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {position.type}
                            </span>
                          </CardDescription>
                        </div>
                        <Button variant="outline">Apply</Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for great talent.
            </p>
            <a href="/contact" className="text-primary hover:underline">
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;

