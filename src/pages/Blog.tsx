import BlogLayout from "@/layouts/BlogLayout";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { getTagColor } from "@/lib/tag-colors";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const allPosts = getAllPosts(i18n.language);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery, allPosts]);

  return (
    <BlogLayout>
      <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">{t("blog.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("blog.subtitle")}
              </p>
            </div>

            {/* Search */}
            <div className="mb-8">
              <Input
                placeholder={t("blog.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>

            {/* Blog Posts - Medium-style layout */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{t("blog.noPosts")}</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`}>
                    <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-2 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer">
                      {/* Image on the left */}
                      <div className="flex-shrink-0 w-full sm:w-48 h-48 sm:h-32 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(post.title)}`;
                          }}
                        />
                      </div>
                      
                      {/* Content on the right */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {post.tags.slice(0, 2).map((tag) => {
                              const tagColor = getTagColor(tag);
                              return (
                                <Badge 
                                  key={tag} 
                                  variant={tagColor.variant} 
                                  className={`text-xs font-medium ${tagColor.className || ""}`}
                                >
                                  {tag}
                                </Badge>
                              );
                            })}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {format(new Date(post.date), "MMM d, yyyy")}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime} {t("blog.minRead")}
                          </div>
                          {post.source === "medium" && (
                            <Badge variant="outline" className="text-xs">
                              {t("blog.medium")}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
    </BlogLayout>
  );
};

export default Blog;

