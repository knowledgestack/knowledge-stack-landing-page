import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  // const footerLinks = {
  //   product: [
  //     { name: "Features", href: "#" },
  //     { name: "Integrations", href: "#" },
  //     { name: "API Documentation", href: "#" },
  //     { name: "Pricing", href: "#" }
  //   ],
  //   company: [
  //     { name: "About Us", href: "#" },
  //     { name: "Careers", href: "#" },
  //     { name: "Blog", href: "#" },
  //     { name: "Contact", href: "#" }
  //   ],
  //   security: [
  //     { name: "Security Overview", href: "#" },
  //     { name: "Compliance", href: "#" },
  //     { name: "Trust Center", href: "#" },
  //     { name: "Status Page", href: "#" }
  //   ],
  //   legal: [
  //     { name: "Privacy Policy", href: "#" },
  //     { name: "Terms of Service", href: "#" },
  //     { name: "Cookie Policy", href: "#" },
  //     { name: "GDPR", href: "#" }
  //   ]
  // };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Hero-style background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1200px 600px at 75% 10%, rgba(56,189,248,.16), transparent 60%),
            radial-gradient(900px 500px at 15% 85%, rgba(59,130,246,.10), transparent 65%),
            linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 27% 6%) 100%)
          `,
        }}
      />

      {/* Isometric grid (subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[.14] mix-blend-screen"
        style={{
          backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255,255,255,.06) 0 1px, transparent 1px 28px),
            repeating-linear-gradient(-60deg, rgba(255,255,255,.06) 0 1px, transparent 1px 28px)
          `,
          WebkitMaskImage:
            'radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)',
          maskImage:
            'radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)',
        }}
      />

      {/* Sparse particles (very light) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[.08]"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.28) 50%, transparent 51%),
            radial-gradient(2px 2px at 70% 60%, rgba(255,255,255,.20) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 35% 75%, rgba(255,255,255,.18) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 85% 25%, rgba(255,255,255,.16) 50%, transparent 51%)
          `,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content - Centered */}
        <div className="text-center mb-12">
          {/* Brand */}
          <div className="mb-8">
            <div className="text-2xl font-bold mb-4 text-accent">
              Knowledge Stack
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              The foundational data layer for enterprise AI - secure, accurate, and scalable.
            </p>
          </div>

          {/* Social Links */}
          {/* <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-muted/20 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div> */}
        </div>

        <Separator className="bg-border my-8" />

        {/* Bottom Footer - Centered */}
        <div className="text-center">
          <div className="text-muted-foreground text-sm">
            © 2025 Knowledge Stack. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;