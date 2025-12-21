import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSignIn = () => {
    window.location.href = "https://app.knowledgestack.ai";
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Knowledge Stack Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-accent">Knowledge Stack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/docs"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("header.docs")}
            </Link>
            <Link
              to="/features"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("header.features")}
            </Link>
            <Link
              to="/pricing"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("header.pricing")}
            </Link>
            <Link
              to="/blog"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("header.blog")}
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("header.contact")}
            </Link>
          </nav>

          {/* Sign In Button & Language Switcher */}
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:inline-flex"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("zh")}>
                  中文
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              onClick={handleSignIn}
              className="hidden sm:inline-flex"
            >
              {t("header.signIn")}
            </Button>
            <Button
              onClick={handleSignIn}
              className="hidden sm:inline-flex"
            >
              {t("header.getStarted")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-2 space-y-2">
            <Link
              to="/docs"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("header.docs")}
            </Link>
            <Link
              to="/features"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("header.features")}
            </Link>
            <Link
              to="/pricing"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("header.pricing")}
            </Link>
            <Link
              to="/blog"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("header.blog")}
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("header.contact")}
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changeLanguage("en")}
                  className="flex-1"
                >
                  EN
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changeLanguage("zh")}
                  className="flex-1"
                >
                  中文
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={handleSignIn}
                className="w-full"
              >
                {t("header.signIn")}
              </Button>
              <Button
                onClick={handleSignIn}
                className="w-full"
              >
                {t("header.getStarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

