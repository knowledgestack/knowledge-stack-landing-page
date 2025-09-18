import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "Pricing", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" }
    ],
    security: [
      { name: "Security Overview", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Trust Center", href: "#" },
      { name: "Status Page", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 text-accent">
              Knowledge Stack
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              The foundational data layer for enterprise AI - secure, accurate, and scalable.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth text-background/80 hover:text-background"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-4 grid sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-background mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-background mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-background mb-4">Security</h3>
              <ul className="space-y-3">
                {footerLinks.security.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-background mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm">
            © 2024 Knowledge Stack. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              All systems operational
            </div>
            <div>
              SOC2 Type II • ISO 27001 Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;