import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
// Product pages
const Features = lazy(() => import("./pages/Features"));
const Integrations = lazy(() => import("./pages/Integrations"));
const APIDocsIndex = lazy(() => import("./pages/APIDocsIndex"));
const APIDocumentation = lazy(() => import("./components/APIDocumentation"));
const DocsOverview = lazy(() => import("./pages/DocsOverview"));
const Pricing = lazy(() => import("./pages/Pricing"));
// Company pages
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
// Security pages
const Security = lazy(() => import("./pages/Security"));
const Compliance = lazy(() => import("./pages/Compliance"));
const TrustCenter = lazy(() => import("./pages/TrustCenter"));
const Status = lazy(() => import("./pages/Status"));
// Legal pages
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const GDPR = lazy(() => import("./pages/GDPR"));
// Auth
const SignIn = lazy(() => import("./pages/SignIn"));

const queryClient = new QueryClient();

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
