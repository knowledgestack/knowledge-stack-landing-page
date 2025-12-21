import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";

interface ContentLayoutProps {
  children: ReactNode;
}

/**
 * Standard content layout for most pages.
 * Provides the common gradient background and container structure.
 */
const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto py-24">
          {children}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ContentLayout;

