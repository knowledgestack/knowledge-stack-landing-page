import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";

interface HomeLayoutProps {
  children: ReactNode;
}

/**
 * Layout for the home/index page.
 * Includes special gradient overlays for visual effects.
 */
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        {/* Global gradient overlay for smooth transitions */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(1200px 600px at 75% 10%, rgba(56,189,248,.08), transparent 60%),
              radial-gradient(900px 500px at 15% 85%, rgba(59,130,246,.05), transparent 65%),
              linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.02) 50%, transparent 100%)
            `,
          }}
        />
        {children}
      </div>
    </BaseLayout>
  );
};

export default HomeLayout;


