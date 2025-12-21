import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const footerLinks = {
    product: [
      { name: t("footer.features"), href: "/features" },
      { name: t("footer.integrations"), href: "/integrations" },
      { name: t("footer.apiDocumentation"), href: "/api-docs" },
      { name: t("footer.pricing"), href: "/pricing" }
    ],
    company: [
      { name: t("footer.aboutUs"), href: "/about" },
      { name: t("footer.careers"), href: "/careers" },
      { name: t("footer.blog"), href: "/blog" },
      { name: t("footer.contact"), href: "/contact" }
    ],
    security: [
      { name: t("footer.securityOverview"), href: "/security" },
      { name: t("footer.compliance"), href: "/compliance" },
      { name: t("footer.trustCenter"), href: "/trust-center" },
      { name: t("footer.statusPage"), href: "/status" }
    ],
    legal: [
      { name: t("footer.privacyPolicy"), href: "/privacy" },
      { name: t("footer.termsOfService"), href: "/terms" },
      { name: t("footer.cookiePolicy"), href: "/cookie-policy" },
      { name: t("footer.gdpr"), href: "/gdpr" }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/109022011", label: "LinkedIn" },
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

      <div className="relative z-10 container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4 text-accent">
              Knowledge Stack
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
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
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.product")}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.security")}</h3>
            <ul className="space-y-3">
              {footerLinks.security.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border my-8" />

        {/* Bottom Footer */}
        <div className="text-center">
          <div className="text-muted-foreground text-sm">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;