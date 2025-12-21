import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";

interface LegalLayoutProps {
  children: ReactNode;
}

/**
 * Layout optimized for legal and policy pages.
 * Provides focused reading experience with appropriate max-width.
 */
const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default LegalLayout;

