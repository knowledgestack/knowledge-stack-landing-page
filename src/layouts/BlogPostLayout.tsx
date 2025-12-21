import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";

interface BlogPostLayoutProps {
  children: ReactNode;
}

/**
 * Layout for individual blog post pages.
 * Uses white background for better readability and narrower content width.
 */
const BlogPostLayout = ({ children }: BlogPostLayoutProps) => {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-12 sm:py-24">
          <div className="max-w-[680px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default BlogPostLayout;

