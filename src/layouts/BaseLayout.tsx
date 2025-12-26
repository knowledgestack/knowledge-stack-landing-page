import { ReactNode, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BaseLayoutProps {
  children: ReactNode;
}

/**
 * Base layout component that provides the fundamental structure
 * with Header and Footer. Other layouts should extend this.
 */
const BaseLayout = ({ children }: BaseLayoutProps) => {
  // Determine home-page only on the client to avoid using Router hooks during build/SSR
  const [isHomePage, setIsHomePage] = useState(false);
  useEffect(() => {
    setIsHomePage(typeof window !== "undefined" && window.location.pathname === "/");
  }, []);
  
  return (
    <div className={`min-h-screen flex flex-col ${isHomePage ? "bg-transparent" : "bg-background"}`}>
      <Header />
      <main className={`flex-1 ${isHomePage ? "pt-0" : ""}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;


