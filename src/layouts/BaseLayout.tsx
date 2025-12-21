import { ReactNode } from "react";
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
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;

