import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Product pages
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import APIDocs from "./pages/APIDocs";
import APIDocsIndex from "./pages/APIDocsIndex";
import APIDocumentation from "./components/APIDocumentation";
import DocsOverview from "./pages/DocsOverview";
import Pricing from "./pages/Pricing";
// Company pages
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
// Security pages
import Security from "./pages/Security";
import Compliance from "./pages/Compliance";
import TrustCenter from "./pages/TrustCenter";
import Status from "./pages/Status";
// Legal pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import GDPR from "./pages/GDPR";
// Auth
import SignIn from "./pages/SignIn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Product routes */}
            <Route path="/features" element={<Features />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/api-docs" element={<APIDocsIndex />} />
            <Route path="/api-docs/:version" element={<APIDocumentation />} />
            <Route path="/docs" element={<DocsOverview />} />
            <Route path="/docs/overview" element={<DocsOverview />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* Company routes */}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            {/* Security routes */}
            <Route path="/security" element={<Security />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/trust-center" element={<TrustCenter />} />
            <Route path="/status" element={<Status />} />
            {/* Legal routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPR />} />
            {/* Auth routes */}
            <Route path="/sign-in" element={<SignIn />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
