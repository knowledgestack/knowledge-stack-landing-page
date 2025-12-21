// =====================
// Types
// =====================

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO string
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime: number;
  image: string;

  // Future extensibility
  source?: 'local' | 'medium' | 'external';
  sourceUrl?: string;
}

export interface BlogPostRaw {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime: number;
  image: string;
  source?: 'local' | 'medium' | 'external';
  sourceUrl?: string;
}

// =====================
// Imports
// =====================

// Auto-generated from markdown files
import { markdownPosts } from './blog-imports.generated';
import i18n from './i18n';

// =====================
// Markdown helpers
// =====================

const FRONTMATTER_REGEX = /^---\s*\n([\s\S]*?)\n---\s*\n?/;
const FIRST_H1_REGEX = /^#\s+(.+)$/m;

function stripFrontmatter(markdown: string): string {
  return markdown.replace(FRONTMATTER_REGEX, '').trim();
}

function stripMatchingTitleH1(markdown: string, title: string): string {
  const match = markdown.match(FIRST_H1_REGEX);
  if (match && match[1].trim() === title.trim()) {
    return markdown.replace(FIRST_H1_REGEX, '').trim();
  }
  return markdown;
}

// =====================
// Translation helpers
// =====================

function getTranslatedPost(rawPost: BlogPostRaw, language: string): BlogPost {
  const t = i18n.getFixedT(language, 'translation');
  const blogKey = `blog.posts.${rawPost.slug}`;
  
  // Try to get translated metadata, fallback to original
  const title = t(`${blogKey}.title`, { defaultValue: rawPost.title });
  const excerpt = t(`${blogKey}.excerpt`, { defaultValue: rawPost.excerpt });
  const tags = rawPost.tags.map(tag => {
    const translatedTag = t(`${blogKey}.tags.${tag}`, { defaultValue: tag });
    return translatedTag;
  });
  
  // Content stays in markdown files (not in translation files to avoid bloat)
  // For now, we use the original content. If language-specific markdown files
  // are needed in the future, they can be added (e.g., post-slug.zh.md)
  let content = rawPost.content;
  
  // Process content if it's markdown
  if (content && typeof content === 'string') {
    content = stripFrontmatter(content);
    content = stripMatchingTitleH1(content, title);
  }

  return {
    slug: rawPost.slug,
    title,
    date: rawPost.date,
    author: rawPost.author,
    excerpt,
    tags,
    content: content || rawPost.content,
    readingTime: rawPost.readingTime,
    image: rawPost.image || `/blog-images/${rawPost.slug}.jpg`,
    source: rawPost.source ?? 'local',
    sourceUrl: rawPost.sourceUrl,
  };
}

// =====================
// Normalization
// =====================

function normalizePost(post: BlogPostRaw): BlogPostRaw {
  const rawContent =
    typeof post.content === 'string' ? post.content : String(post.content);

  let content = stripFrontmatter(rawContent);
  content = stripMatchingTitleH1(content, post.title);

  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    author: post.author,
    excerpt: post.excerpt,
    tags: post.tags ?? [],
    content,
    readingTime: post.readingTime,
    image: post.image || `/blog-images/${post.slug}.jpg`,
    source: post.source ?? 'local',
    sourceUrl: post.sourceUrl,
  };
}

// =====================
// Data source
// =====================

const rawBlogPosts: BlogPostRaw[] = markdownPosts.map(normalizePost);

// Function to get posts with current language translations
function getTranslatedPosts(language: string = i18n.language): BlogPost[] {
  return rawBlogPosts.map(post => getTranslatedPost(post, language));
}

// =====================
// Queries
// =====================

export function getAllPosts(language?: string): BlogPost[] {
  const posts = getTranslatedPosts(language);
  return [...posts].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );
}

export function getPostBySlug(slug: string, language?: string): BlogPost | undefined {
  const rawPost = rawBlogPosts.find((post) => post.slug === slug);
  if (!rawPost) return undefined;
  return getTranslatedPost(rawPost, language || i18n.language);
}

export function getPostsByTag(tag: string, language?: string): BlogPost[] {
  const posts = getTranslatedPosts(language);
  return posts.filter((post) => post.tags.includes(tag));
}

export function getAllTags(language?: string): string[] {
  const posts = getTranslatedPosts(language);
  return Array.from(
    new Set(posts.flatMap((post) => post.tags)),
  ).sort();
}

// =====================
// Utilities
// =====================

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
