import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { getTagColor } from "@/lib/tag-colors";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const allPosts = getAllPosts();

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
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, updates, and best practices from the Knowledge Stack team
              </p>
            </div>

            {/* Search */}
            <div className="mb-8">
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>

            {/* Blog Posts */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`}>
                    <Card className="h-full border-border hover:border-primary transition-colors cursor-pointer bg-card group">
                      {/* Text-based card design - no images, focused on content */}
                      <CardHeader className="pb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag) => {
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
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="line-clamp-2 text-foreground group-hover:text-primary transition-colors text-lg mb-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
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
                            {post.readingTime} min
                          </div>
                          {post.source === "medium" && (
                            <Badge variant="outline" className="text-xs">
                              Medium
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

