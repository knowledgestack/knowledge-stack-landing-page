import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import NotFound from "./NotFound";
import { getTagColor } from "@/lib/tag-colors";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const allPosts = getAllPosts();
  const currentIndex = post ? allPosts.findIndex((p) => p.slug === post.slug) : -1;
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post?.slug && p.tags.some((tag) => post?.tags.includes(tag)))
    .slice(0, 3);

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24">
          <div className="max-w-[680px] mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <article className="bg-white">
              {/* Header */}
              <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => {
                    const tagColor = getTagColor(tag);
                    return (
                      <Badge 
                        key={tag} 
                        variant={tagColor.variant}
                        className={tagColor.className || ""}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readingTime} min read
                  </div>
                </div>
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-16 blog-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-20 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Posts</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors bg-white">
                          <h3 className="font-semibold mb-2 line-clamp-2 text-gray-900">{relatedPost.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

